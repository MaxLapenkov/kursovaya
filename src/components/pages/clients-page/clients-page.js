import React, { Component } from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Spinner from '../../spinner'
import ClientsForm from './clients-form'

import './clients-page.css'
import ClientsTable from './clients-table';
import ErrorBoundary from '../../error-boundary'
import withServerService from '../../hoc/with-server-service'


 class ClientsPage extends Component {
  
  state = {
    clients: [],
    loading: true
  }

  componentDidMount() {
    this.getClients()
  }
  getClients = () => {
    const {serverService} = this.props
    serverService.getClients().then(({data}) => {
      this.setState({
        clients: data,
        loading: false
      })  
    }).catch(err => console.error(err))
  }

  removeClient = (id) => {
    const {serverService} = this.props
    this.setState({
      loading: true
    })
    serverService.removeClient(id)
    .then(this.getClients)
      .catch(err => console.error(err))
  }

  addClient = (client) => {
    const {serverService} = this.props
    this.setState({
      loading: true
    })
    serverService.addClient(client)
      .then(this.getClients)
      .catch(err => console.error(err))
  }


  render() {
    const { clients, loading} = this.state

    if(loading)
      return (
        <div>
          <TableContainer component={Paper}>
            <Spinner/>
          </TableContainer>
          <ClientsForm addClient={this.addClient}/>
      </div>
      )
    return (
    <div>
      <ErrorBoundary>
        <ClientsTable clients = {clients} removeClient={this.removeClient}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ClientsForm addClient={this.addClient}/>
      </ErrorBoundary>
    </div>
      
    );
  }
    
}

export default withServerService()(ClientsPage)

