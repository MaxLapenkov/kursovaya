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
    items: [],
    loading: true,
    term: '',
    numb: '',
    visibleItems: []
  }

  componentDidMount() {
    this.getItems()
  }
  getItems = () => {
    const {serverService} = this.props
    serverService.getMinors()
    .then(({data}) => {
      this.setState({
        items: data,
        visibleItems: data,
        loading: false
      })  
    })
    .catch(err => console.error(err))
  }

  removeItem = (id) => {
    const {serverService} = this.props
    this.setState({
      loading: true
    })
    serverService.removeMinor(id)
    .then(this.getItems)
    .catch(err => console.error(err))
  }

  addItem = (item) => {
    const {serverService} = this.props
    this.setState({
      loading: true
    })
    serverService.addMinor(item)
      .then(this.getItems)
      .catch(err => console.error(err))
  }
  searchItemByTerm = (SearchItems, term) => {
      if(term.length === 0) {
        this.setState({
          visibleItems: SearchItems
        })
      }
      const result = SearchItems.filter((item) => {
        return item.Surname.toLowerCase()
        .indexOf(term.toLowerCase()) > -1
      });
      this.setState({
        visibleItems: result
      })  
    }
    searchItemByNumb = (SearchItems, numb) => {
      if(numb === 0 || numb === '') {
        this.setState({
          visibleItems: SearchItems
        })   
      } else {
        const result = SearchItems.filter((item) => {
          return item.id_minor === numb
        });
        
        this.setState({
          visibleItems: result
        }) 
      }
       
    }
  onChangeTerm = (term) => {
    const { items } = this.state
    this.setState({term})
    this.searchItemByTerm(items, term)
  }
  onChangeNumb = (numb) => {
    const { items } = this.state
    this.setState({numb: Number(numb)})
    this.searchItemByNumb(items, Number(numb))
  }

  render() {
    const { loading, visibleItems } = this.state

    if(loading)
      return (
        <div>
          <TableContainer component={Paper}>
            <Spinner/>
          </TableContainer>
          <ClientsForm addClient={this.addItem}/>
      </div>
      )
    return (
    <div>
      <ErrorBoundary>
        <ClientsSearchPanel onChangeTerm={this.onChangeTerm} onChangeNumb={this.onChangeNumb}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ClientsTable items = {visibleItems} removeItem={this.removeItem}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ClientsForm addMinor={this.addItem}/>
      </ErrorBoundary>
    </div>
      
    );
  }
    
}

export default withServerService()(ClientsPage)

