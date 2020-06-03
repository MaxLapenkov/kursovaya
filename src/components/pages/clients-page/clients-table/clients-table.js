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

import './clients-table.css'
 export default class ClientsTable extends Component {
    
    removeClient = (id) => {
        const {removeItem} = this.props
        removeItem(id)
    }
    getPhoto = (foto) => {
      if(foto != null) {
        const arrayBufferView = new  Uint8Array(foto.data)
        const blob = new Blob([arrayBufferView], { type: "image/png" })
        const urlCreator = window.URL || window.webkitURL;
        return urlCreator.createObjectURL(blob)
        
      }
    }

    renderClient = ({id_minor, Surname, Name, First_name, Paul, Data_of_birth,
       Class_school, Registration, FCS_mother, Mother_workplace, Phone_number_mom, FCS_father, Father__workplace,
        Phone_number_dad, Needy_family, Large_family, Dysfunctional_family, Custody, Guardian,
         Information_pupil_orphanage, Information_inschool_accounting, Information_law_enforcement_agencies, Note,
          Information_about_the_language_of_instruction, Information_about_the_achievements,
           Information_about_social_assistance, Disability_information, Information_about_homeschooling, Availability_of_a_medical_card, foto}) => {

            Data_of_birth = Data_of_birth.substr(0, 10);
            const result = this.getPhoto(foto)
            

             
             
        return (
          <TableRow key={id_minor}>
            <TableCell align="left" size="small"><Button variant="contained" color="secondary" size="small" onClick = {() => this.removeClient(id_minor)}><DeleteForeverIcon fontSize="small"/></Button></TableCell>
            <TableCell component="th" scope="row">{id_minor}</TableCell>
            <TableCell align="center">{Surname}</TableCell>
            <TableCell align="center">{Name}</TableCell>
            <TableCell align="center">{First_name}</TableCell>
            <TableCell align="center">{Paul}</TableCell>
            <TableCell align="center">{Data_of_birth}</TableCell>
            <TableCell align="center">{Class_school}</TableCell>
            <TableCell align="center">{Registration}</TableCell>
            <TableCell align="center">{FCS_mother}</TableCell>
            <TableCell align="center">{Mother_workplace}</TableCell>
            <TableCell align="center">{Phone_number_mom}</TableCell>
            <TableCell align="center">{FCS_father}</TableCell>
            <TableCell align="center">{Father__workplace}</TableCell>
            <TableCell align="center">{Phone_number_dad}</TableCell>
            <TableCell align="center">{Needy_family}</TableCell>
            <TableCell align="center">{Large_family}</TableCell>
            <TableCell align="center">{Dysfunctional_family}</TableCell>
            <TableCell align="center">{Custody}</TableCell>
            <TableCell align="center">{Guardian}</TableCell>
            <TableCell align="center">{Information_pupil_orphanage}</TableCell>
            <TableCell align="center">{Information_inschool_accounting}</TableCell>
            <TableCell align="center">{Information_law_enforcement_agencies}</TableCell>
            <TableCell align="center">{Note}</TableCell>
            <TableCell align="center">{Information_about_the_language_of_instruction}</TableCell>
            <TableCell align="center">{Information_about_the_achievements}</TableCell>
            <TableCell align="center">{Information_about_social_assistance}</TableCell>
            <TableCell align="center">{Disability_information}</TableCell>
            <TableCell align="center">{Information_about_homeschooling}</TableCell>
            <TableCell align="center">{Availability_of_a_medical_card}</TableCell>
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
                      <TableCell align="center">Класс обучения</TableCell>
                      <TableCell align="center">Место жительства</TableCell>
                      <TableCell align="center">ФИО матери</TableCell>
                      <TableCell align="center">Место работы матери</TableCell>
                      <TableCell align="center">Рабочий телефон матери</TableCell>
                      <TableCell align="center">ФИО отца</TableCell>
                      <TableCell align="center">Место работы отца</TableCell>
                      <TableCell align="center">Рабочий телефон отца</TableCell>
                      <TableCell align="center">Малообеспеченная семья</TableCell>
                      <TableCell align="center">Многодетная семья</TableCell>
                      <TableCell align="center">Неблагополучная семья</TableCell>
                      <TableCell align="center">Опека</TableCell>
                      <TableCell align="center">Опекун</TableCell>
                      <TableCell align="center">Информация, если воспитанник детского дома</TableCell>
                      <TableCell align="center">Информация о внутришкольном учете</TableCell>
                      <TableCell align="center">Информация о учете несовершеннолетнего в правоохранительных органах</TableCell>
                      <TableCell align="center">Примечание</TableCell>
                      <TableCell align="center">Информация о языке обучения</TableCell>
                      <TableCell align="center">Информация о достижениях</TableCell>
                      <TableCell align="center">Информация о социальной помощи</TableCell>
                      <TableCell align="center">Информация об инвалидности</TableCell>
                      <TableCell align="center">Информация об обучении на дому</TableCell>
                      <TableCell align="center">Наличие медицинской карточки</TableCell>
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