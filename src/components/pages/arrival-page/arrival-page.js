import React, { Component } from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Spinner from '../../spinner'



import './arrival-page.css'
import ArrivalTable from './arrival-table';
import ArrivalForm from './arrival-form';
import ArrivalSearchPanel from './arrival-search-panel'
import ErrorBoundary from '../../error-boundary'
import withServerService from '../../hoc/with-server-service'


 class ArrivalPage extends Component {
  
  state = {
    items: [],
    minors: [],
    workers: [],
    loading: true,
    term: '',
    numb: '',
    visibleItems: []
  }
  
  
  componentDidMount() {
    this.getItems()
    this.getMinors()
    this.getWorkers()
  }
  getItems = () => {
    const {serverService} = this.props
    serverService.getArrivals()
    .then(({data}) => {
      this.setState({
        items: data,
        visibleItems: data,
        loading: false
      })  
    })
    .catch(err => console.error(err))
  }
  getMinors = () => {
    const {serverService} = this.props
    serverService.getMinors()
    .then(({data}) => {
      this.setState({
        minors: data
      })  
    })
    .catch(err => console.error(err))
  }
  getWorkers = () => {
    const {serverService} = this.props
    serverService.getWorkers()
    .then(({data}) => {
      this.setState({
        workers: data
      })  
    })
    .catch(err => console.error(err))
  }

  removeItem = (id) => {
    const {serverService} = this.props
    this.setState({
      loading: true
    })
    serverService.removeArrival(id)
    .then(this.getItems)
    .catch(err => console.error(err))
  }

  addItem = (item) => {
    const {serverService} = this.props
    this.setState({
      loading: true
    })
    serverService.addArrival(item)
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
        return item.minorName.toLowerCase()
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
          return item.id === numb
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
    const { loading, visibleItems, minors, workers } = this.state
    if(loading)
      return (
        <div>
          <TableContainer component={Paper}>
            <Spinner/>
          </TableContainer>
          <ArrivalForm addClient={this.addItem}/>
      </div>
      )
    return (
    <div>
      <ErrorBoundary>
        <ArrivalSearchPanel onChangeTerm={this.onChangeTerm} onChangeNumb={this.onChangeNumb}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ArrivalTable items = {visibleItems} removeItem={this.removeItem}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ArrivalForm addArrival={this.addItem} minors={minors} workers={workers}/>
      </ErrorBoundary>
    </div>
      
    );
  }
    
}

export default withServerService()(ArrivalPage)

