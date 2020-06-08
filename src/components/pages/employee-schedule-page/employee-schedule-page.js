import React, { Component } from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Spinner from '../../spinner'



import './employee-schedule-page.css'
import EmployeeScheduleTable from './employee-schedule-table';
import EmployeeScheduleForm from './employee-schedule-form';
import EmployeeSearchPanel from './employee-search-panel'
import ErrorBoundary from '../../error-boundary'
import withServerService from '../../hoc/with-server-service'


 class EmployeeSchedulePage extends Component {
  
  state = {
    items: [],
    workers: [],
    loading: true,
    term: '',
    numb: '',
    visibleItems: []
  }

  componentDidMount() {
    this.getItems()
    this.getWorkers()
  }
  getItems = () => {
    const {serverService} = this.props
    serverService.getEmployeeSchedules()
    .then(({data}) => {
      this.setState({
        items: data,
        visibleItems: data,
        loading: false
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
    serverService.removeEmployeeSchedule(id)
    .then(this.getItems)
    .catch(err => console.error(err))
  }

  addItem = (item) => {
    const {serverService} = this.props
    this.setState({
      loading: true
    })
    serverService.addEmployeeSchedule(item)
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
    const { loading, visibleItems, workers } = this.state

    if(loading)
      return (
        <div>
          <TableContainer component={Paper}>
            <Spinner/>
          </TableContainer>
          <EmployeeScheduleForm addClient={this.addItem}/>
      </div>
      )
    return (
    <div>
      <ErrorBoundary>
        <EmployeeSearchPanel onChangeTerm={this.onChangeTerm} onChangeNumb={this.onChangeNumb}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <EmployeeScheduleTable items = {visibleItems} removeItem={this.removeItem}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <EmployeeScheduleForm addEmployeeSchedule={this.addItem} workers={workers}/>
      </ErrorBoundary>
    </div>
      
    );
  }
    
}

export default withServerService()(EmployeeSchedulePage)

