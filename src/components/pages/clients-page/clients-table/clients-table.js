import React, {Component} from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

 export default class ClientsTable extends Component {
    
    removeClient = (id) => {
        const {removeClient} = this.props
        removeClient(id)
    }

    renderClient = ({client_id, name, phone, status}) => {
        return (
          <TableRow key={client_id}>
            <TableCell component="th" scope="row">{name}</TableCell>
            <TableCell align="right">{phone}</TableCell>
            <TableCell align="right">{status}</TableCell>
            <TableCell align="right" size="small"><Button variant="contained" color="secondary" size="small" onClick = {() => this.removeClient(client_id)}><DeleteForeverIcon fontSize="small"/></Button></TableCell>
          </TableRow>    
        )
      
    }

    render() {
        const {clients} = this.props
        return (
            <div>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                      <TableCell>Имя</TableCell>
                      <TableCell align="right">Телефон</TableCell>
                      <TableCell align="right">Статус</TableCell>
                      <TableCell align="right"></TableCell>
                </TableRow>
                </TableHead>
                  <TableBody>
                    {clients.map(this.renderClient)}
                  </TableBody>
                  
                </Table>
                
                </TableContainer>
            </div>
    )
    }
    
 }