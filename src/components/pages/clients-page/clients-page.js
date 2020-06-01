import React, { Component } from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Spinner from '../../spinner'
import ClientsForm from './clients-form'
import ClientsSearchPanel from './clients-search-panel'

import './clients-page.css'
import ClientsTable from './clients-table';
import ErrorBoundary from '../../error-boundary'
import withServerService from '../../hoc/with-server-service'


 class ClientsPage extends Component {
  
  state = {
    clients: [],
    loading: true,
    term: '',
    numb: 0,
    visibleClients: []
  }

  componentDidMount() {
    this.getClients()
  }
  getClients = () => {
    const {serverService} = this.props
    serverService.getClients()
    .then(({data}) => {
      this.setState({
        clients: data,
        visibleClients: data,
        loading: false
      })  
    })
    .catch(err => console.error(err))
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
  searchItemByTerm = (items, term) => {
      const {clients} = this.state
      if(term.length === 0) {
        this.setState({
          visibleClients: clients
        })
      }
      const result = items.filter((item) => {
        return item.name.toLowerCase()
        .indexOf(term.toLowerCase()) > -1
      });
      this.setState({
        visibleClients: result
      })  
    }
    searchItemByNumb = (items, numb) => {
      const {clients} = this.state
      if(numb === 0) {
        this.setState({
          visibleClients: clients
        })   
      } else {
        const result = items.filter((item) => {
          return item.client_id === numb
        });
        
        this.setState({
          visibleClients: result
        }) 
      }
       
    }
  onChangeTerm = (term) => {
    const { clients } = this.state
    this.setState({term})
    this.searchItemByTerm(clients, term)
  }
  onChangeNumb = (numb) => {
    const { clients } = this.state
    this.setState({numb: Number(numb)})
    this.searchItemByNumb(clients, Number(numb))
  }

  render() {
    const { loading, visibleClients } = this.state

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
        <ClientsSearchPanel onChangeTerm={this.onChangeTerm} onChangeNumb={this.onChangeNumb}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ClientsTable clients = {visibleClients} removeClient={this.removeClient}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ClientsForm addClient={this.addClient}/>
      </ErrorBoundary>
    </div>
      
    );
  }
    
}

export default withServerService()(ClientsPage)

