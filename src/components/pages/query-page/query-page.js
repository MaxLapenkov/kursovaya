import React, {  Fragment, useState } from 'react';


import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/Textfield'
import Spinner from '../../spinner'
import Button from '@material-ui/core/Button';


import './query-page.css'
import ErrorBoundary from '../../error-boundary'
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
  
    
    if(loading)
      return (
        <div component={Paper}>
          <Spinner/>
       </div>
      )
    return (
      <Fragment>
        <div className="control__container">
        <TextField margin="normal"  label="Запрос" value={query}  onChange={ (e) => setQuery(e.target.value)}/>
        <Button variant="contained" color="primary" onClick={() => getItems(query)}>
          Отправить запрос
        </Button>
        </div>
        
        <ErrorBoundary>
          <Paper className="result__container">
            {JSON.stringify(items)}
          </Paper>
        </ErrorBoundary>
      </Fragment>
      
      
    );
  }
    


export default withServerService()(QueryPage)
