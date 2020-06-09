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

import './pupils-schedule-table.css'
 export default class PupilsScheduleTable extends Component { 
    
    removePupilsSchedule= (id) => {
        const {removeItem} = this.props
        removeItem(id)
    }
    getPhoto = (foto) => {

      
      if(foto != null) {
        const arrayBufferView = new Uint8Array(foto.data)
        const blob = new Blob([arrayBufferView], { type: "image/png" })
        const urlCreator = window.URL || window.webkitURL;
        return urlCreator.createObjectURL(blob)
        
      }
    }

    renderClient = ({id, year_min, year_max, daily_schedule, foto}) => {

            // const result = this.getPhoto(foto)

    
        return (
          <TableRow key={id}>
            <TableCell align="left" size="small"><Button variant="contained" color="secondary" size="small" onClick = {() => this.removePupilsSchedule(id)}><DeleteForeverIcon fontSize="small"/></Button></TableCell>
            <TableCell component="th" scope="row">{id}</TableCell>
            <TableCell align="center">{year_min}</TableCell>
            <TableCell align="center">{year_max}</TableCell>
            <TableCell align="center" className="schedule--cell">{daily_schedule}</TableCell>
            {/* <TableCell align="center">{<a href={result} download>Скачать</a>}</TableCell> */}
          </TableRow>    
        )
      
    }

    render() {
        const {items} = this.props
        return (
            <div>
              <TableContainer component={Paper}>
                <Table aria-label="simple table table-bordered">
                <TableHead>
                  <TableRow>
                      <TableCell></TableCell>
                      <TableCell>#</TableCell>
                      <TableCell align="center">Возраст минимальный</TableCell>
                      <TableCell align="center">Возраст максимальный</TableCell>
                      <TableCell align="center">Распорядок дня</TableCell>
                      {/* <TableCell align="center">Фото</TableCell> */}
                </TableRow>
                </TableHead>
                  <TableBody>
                    {items.map(this.renderClient)}
                  </TableBody>
                  
                </Table>
                
                </TableContainer>
            </div>
    )
    }
    
 }