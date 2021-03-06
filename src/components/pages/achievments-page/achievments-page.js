import React, { Component } from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Spinner from '../../spinner'



import './achievments-page.css'
import AchievmentsTable from './achievments-table';
import AchievmentsForm from './achievments-form';
import AchievmentsSearchPanel from './achievments-search-panel'
import ErrorBoundary from '../../error-boundary'
import withServerService from '../../hoc/with-server-service'


 class AchievmentsPage extends Component {
  
  state = {
    items: [],
    minors: [],
    loading: true,
    term: '',
    numb: '',
    visibleItems: []
  }

  componentDidMount() {
    this.getItems()
    this.getMinors()
  }
  getItems = () => {
    const {serverService} = this.props
    serverService.getAchievments()
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

  removeItem = (id) => {
    const {serverService} = this.props
    this.setState({
      loading: true
    })
    serverService.removeAchievment(id)
    .then(this.getItems)
    .catch(err => console.error(err))
  }

  addItem = (item) => {
    const {serverService} = this.props
    this.setState({
      loading: true
    })
    serverService.addAchievment(item)
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
    const { loading, visibleItems, minors } = this.state

    if(loading)
      return (
        <div>
          <TableContainer component={Paper}>
            <Spinner/>
          </TableContainer>
          <AchievmentsForm addClient={this.addItem}/>
      </div>
      )
    return (
    <div>
      <ErrorBoundary>
        <AchievmentsSearchPanel onChangeTerm={this.onChangeTerm} onChangeNumb={this.onChangeNumb}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <AchievmentsTable items = {visibleItems} removeItem={this.removeItem}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <AchievmentsForm addAchievment={this.addItem} minors={minors}/>
      </ErrorBoundary>
    </div>
      
    );
  }
    
}

export default withServerService()(AchievmentsPage)

