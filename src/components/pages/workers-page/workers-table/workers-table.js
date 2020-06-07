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

import './workers-table.css'
 export default class WorkersTable extends Component {
    
    removeMinor= (id) => {
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

    renderClient = ({id_worker, Surname, Name, First_name, Paul, Data_of_birth, Phone_number,
    Education, type, foto}) => {

            Data_of_birth = Data_of_birth.substr(0, 10);
            const result = this.getPhoto(foto)
            

             
             
        return (
          <TableRow key={id_worker}>
            <TableCell align="left" size="small"><Button variant="contained" color="secondary" size="small" onClick = {() => this.removeMinor(id_worker)}><DeleteForeverIcon fontSize="small"/></Button></TableCell>
            <TableCell component="th" scope="row">{id_worker}</TableCell>
            <TableCell align="center">{Surname}</TableCell>
            <TableCell align="center">{Name}</TableCell>
            <TableCell align="center">{First_name}</TableCell>
            <TableCell align="center">{Paul}</TableCell>
            <TableCell align="center">{Data_of_birth}</TableCell>
            <TableCell align="center">{Education}</TableCell>
            <TableCell align="center">{type}</TableCell>
            <TableCell align="center">{Phone_number}</TableCell>
            <TableCell align="center">{<a href={result} download>Скачать</a>}</TableCell>
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
                      <TableCell align="center">Фамилия</TableCell>
                      <TableCell align="center">Имя</TableCell>
                      <TableCell align="center">Отчество</TableCell>
                      <TableCell align="center">Пол</TableCell>
                      <TableCell align="center">Дата рождения</TableCell>
                      <TableCell align="center">Образование</TableCell>
                      <TableCell align="center">Тип</TableCell>
                      <TableCell align="center">Телефон</TableCell>
                      <TableCell align="center">Фото</TableCell>
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