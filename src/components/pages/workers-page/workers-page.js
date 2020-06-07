import React, { Component } from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Spinner from '../../spinner'



import './workers-page.css'
import WorkersTable from './workers-table';
import WorkersForm from './workers-form';
import WorkersSearchPanel from './workers-search-panel'
import ErrorBoundary from '../../error-boundary'
import withServerService from '../../hoc/with-server-service'


 class WorkersPage extends Component {
  
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
    serverService.getWorkers()
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
    serverService.removeWorker(id)
    .then(this.getItems)
    .catch(err => console.error(err))
  }

  addItem = (item) => {
    const {serverService} = this.props
    this.setState({
      loading: true
    })
    serverService.addWorker(item)
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
          return item.id_worker === numb
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
          <WorkersForm addClient={this.addItem}/>
      </div>
      )
    return (
    <div>
      <ErrorBoundary>
        <WorkersSearchPanel onChangeTerm={this.onChangeTerm} onChangeNumb={this.onChangeNumb}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <WorkersTable items = {visibleItems} removeItem={this.removeItem}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <WorkersForm addWorker={this.addItem}/>
      </ErrorBoundary>
    </div>
      
    );
  }
    
}

export default withServerService()(WorkersPage)

