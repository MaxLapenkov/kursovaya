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

import './cards-table.css'
 export default class CardsTable extends Component { 
    
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

    renderClient = ({id, id_minor, id_worker, data_reception, minorName, workerName, record, foto}) => {

            // const result = this.getPhoto(foto);
            const date = data_reception.substr(0, 10);

             
             
        return (
          <TableRow key={id}>
            <TableCell align="center" size="small"><Button variant="contained" color="secondary" size="small" onClick = {() => this.removePupilsSchedule(id)}><DeleteForeverIcon fontSize="small"/></Button></TableCell>
            <TableCell component="th" scope="row" align="center">{id}</TableCell>
            <TableCell align="center">{id_minor}</TableCell>
            <TableCell align="center">{minorName}</TableCell>
            <TableCell align="center">{id_worker}</TableCell>
            <TableCell align="center">{workerName}</TableCell>
            <TableCell align="center">{date}</TableCell>
            <TableCell align="center" className="schedule--cell">{record}</TableCell>
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
                      <TableCell align="center"></TableCell>
                      <TableCell align="center">#</TableCell>
                      <TableCell align="center">Идентификатор несовершеннолетнего</TableCell>
                      <TableCell align="center">Фамилия несовершеннолетнего</TableCell>
                      <TableCell align="center">Идентификатор работника</TableCell>
                      <TableCell align="center">Фамилия работника</TableCell>
                      <TableCell align="center">Дата заполнения</TableCell>
                      <TableCell align="center">Запись приема</TableCell>
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