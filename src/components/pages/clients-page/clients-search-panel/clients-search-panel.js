import React, {Component} from 'react';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import './clients-search-panel.css';

export default class ClientsSearchPanel extends Component  {
  state = {
    searchType: 'term',
    term: '',
    numb: '',
    checkedTerm: true,
    checkedNumb: false
}
onTermChange = (e) => {
  const {onChangeTerm} = this.props
  this.setState({
      term: e.target.value,
      numb: ''
  })
  onChangeTerm(e.target.value)   
}
onNumbChange = (e) => {
    const {onChangeNumb} = this.props
    this.setState({
        term: '',
        numb: e.target.value
    })
    onChangeNumb(e.target.value)   
  }
clearState = (searchType) => {
    const {onChangeTerm, onChangeNumb} = this.props
    if(searchType === 'term') {
        this.setState({
            term: '',
            numb: '',
            searchType: searchType,
            checkedTerm: true,
            checkedNumb: false
        })
    } else {
        this.setState({
            term: '',
            numb: '',
            searchType: searchType,
            checkedTerm: false,
            checkedNumb: true
        })
    }
    
    onChangeNumb('')
    onChangeTerm('')
}


  render() {
    if(this.state.searchType === 'term') {
        return (
            <div className="search-panel">
            <TextField type="text"
                      className="form-control search-input"
                      placeholder="Введите фамилию"
                      value = {this.state.term} 
                      onChange={this.onTermChange}
                      variant="outlined"
                      label = "Поиск по фамилии"/>
                <div className="search-panel__checkboxes">
                    <FormControlLabel
                        control= {
                            <Checkbox checked={this.state.checkedTerm} color="primary" onChange={() => this.clearState('term')}/>
                        }
                        label="По фамилии"
                    />
                    <FormControlLabel
                        control= {
                            <Checkbox checked={this.state.checkedNumb} onChange={() => this.clearState('numb')} />
                        }
                        label="По номеру"
                    />
                </div>
            </div>
          );
    }
    if(this.state.searchType === 'numb') {
        return (
            <div className="search-panel">
                <TextField type="number"
                      className="form-control search-input"
                      placeholder="Введите номер"
                      value = {this.state.numb} 
                      onChange={this.onNumbChange}
                      variant="outlined"
                      label = "Поиск по номеру"/>
                <div className="search-panel__checkboxes">
                    <FormControlLabel
                        control= {
                            <Checkbox checked={this.state.checkedTerm} color="primary" onChange={() => this.clearState('term')}/>
                        }
                        label="По фамилии"
                    />
                    <FormControlLabel
                        control= {
                            <Checkbox checked={this.state.checkedNumb} onChange={() => this.clearState('numb')} />
                        }
                        label="По номеру"
                    />
                </div>
            </div>
          );
    }
    
  }
  
};