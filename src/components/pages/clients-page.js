import React, { Component } from 'react';
import ServerService from '../../services/server-service'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem  } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import './clients-page.css'


const serverService = new ServerService()

export default class ClientsPage extends Component {

  state = {
    clients: [],
    client: {
      name: 'Иван Иванов',  
      phone: 22222,
      status: 'Физическое лицо'
    }
  }

  componentDidMount() {
    this.getClients()
  }
  getClients = () => {
    serverService.getClients().then(({data}) => {
      this.setState({
        clients: data
      })  
    }).catch(err => console.error(err))
  }

  removeClient = (id) => {
    serverService.removeClient(id)
      .then(this.getClients)
      .catch(err => console.error(err))
  }

  addClient = () => {
    const {client} = this.state;
    serverService.addClient(client)
      .then(this.getClients)
      .catch(err => console.error(err))
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
 clientsTable = (clients, client) => {
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
                <form className="form" noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Имя" value={client.name} onChange={ e => this.setState({client :{...client, name: e.target.value}})}/>
                  <TextField id="standard-basic" label="Телефон" value={client.phone} onChange={ e => this.setState({client :{...client, phone: e.target.value}})}/>
                  <Select  labelId="demo-simple-select-label" id="demo-simple-select"
                   value={client.status}
                  onChange={ e => this.setState({client :{...client, status: e.target.value}})}>
                    <MenuItem value="Физическое лицо">Физическое лицо</MenuItem>
                    <MenuItem value="Юридическое лицо">Юридическое лицо</MenuItem>
                  </Select>
                  <Button variant="contained" color="primary" size="small" onClick={this.addClient}>Add client</Button>
                </form>
            </div>
    )
 }

  render() {
    const { clients, client} = this.state
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
        <form className="form" noValidate autoComplete="off">
          <TextField margin="normal" id="standard-basic" label="Имя" value={client.name} onChange={ e => this.setState({client :{...client, name: e.target.value}})}/>
          <TextField margin="normal" className = "form__input" id="standard-basic" label="Телефон" value={client.phone} onChange={ e => this.setState({client :{...client, phone: e.target.value}})}/>
          <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
           value={client.status}
          onChange={ e => this.setState({client :{...client, status: e.target.value}})}>
            <MenuItem value="Физическое лицо">Физическое лицо</MenuItem>
            <MenuItem value="Юридическое лицо">Юридическое лицо</MenuItem>
          </Select>
          <Button className = "form__button" variant="contained" color="primary" size="small" onClick={this.addClient}>Add client</Button>
        </form>
    </div>
      
    );
  }
    
}


