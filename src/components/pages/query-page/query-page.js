import React, {  Fragment, useState } from 'react';


import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/Textfield'
import Spinner from '../../spinner'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './query-page.css'
import withServerService from '../../hoc/with-server-service'


 const QueryPage = ({serverService}) => {

  const [query, setQuery] = useState('');
  const [items, setItems] = useState(undefined);
  const [loading, setLoading] = useState(false);

const getItems = (query) => {
    setLoading(true);
    serverService.getResults(query)
    .then(({data}) => {
      setItems(data);
      setLoading(false) 
    })
    .catch(err => console.error(err))
  }
const renderHeader = (items) => {
   let header = Object.keys(items[0])
   header.forEach((item, index) => {
     if(item === 'foto') {
      header.splice(index, 1)
     }
   })
   return header.map((key, index) => {
    return <TableCell key={index}>{key.toUpperCase()}</TableCell>
 })
}

const renderBody = (item) => {
  let header = Object.keys(item)
  let body = Object.values(item)
  body.forEach((it, index) => {
    if(it === null && header[index] === 'foto') {
     body.splice(index, 1)
    }
    if(header[index] === 'Data_of_birth' || header[index] === 'Date_of_arrival' || header[index] === 'Data_work' || header[index] === 'data_reception') {
      body[index] = it.substr(0, 10)
    }
  })
  return body.map((key, index) => {
    return <TableCell key={index}>{key}</TableCell>
})
  }


  
    
    if(loading) {
      return (
        <div component={Paper}>
          <Spinner/>
       </div>
      )
    }
      
    if(items !== undefined) {
      return (
        <Fragment>
          <div className="control__container">
          <TextField margin="normal"  label="Запрос" value={query}  onChange={ (e) => setQuery(e.target.value)}/>
          <Button variant="contained" color="primary" onClick={() => getItems(query)}>
            Отправить запрос
          </Button>
          </div>
          
          <TableContainer component={Paper}>
                  <Table aria-label="simple table table-bordered">
                  <TableHead>
                  <TableRow>
                        {renderHeader(items)}
                  </TableRow>
                  </TableHead>
                    <TableBody>
                      {items.map((item) => {
                        return (
                          <TableRow key={Math.random() * 1000}>
                              {renderBody(item)}
                          </TableRow>
                        )
                      })}
                    </TableBody>
                    
                  </Table>
                  
                  </TableContainer>
          {/* <ErrorBoundary>
            <Paper className="result__container">
              {JSON.stringify(items)}
            </Paper>
          </ErrorBoundary> */}
        </Fragment>
      );
    } else {
      return (
        <div className="control__container">
          <TextField margin="normal"  label="Запрос" value={query}  onChange={ (e) => setQuery(e.target.value)}/>
          <Button variant="contained" color="primary" onClick={() => getItems(query)}>
            Отправить запрос
          </Button>
          </div>
      )
    } 
  }
    


export default withServerService()(QueryPage)
