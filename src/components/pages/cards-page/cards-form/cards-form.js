import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, FormControl, InputLabel, FormLabel  } from '@material-ui/core';
import Spinner from '../../../spinner'
import './cards-form.css'
const CardsForm = ({addCard, minors, workers}) => {
    const [minor, setMinor] = useState('');
    const [worker, setWorker] = useState('');
    const [date, setDate] = useState(formatDate(new Date()));
    const [record, setRecord] = useState('');
    const [photo, setPhoto] = useState(null);
   
    
    const card = {
        id_minor: minor,
        id_worker: worker,
        data_reception: date,
        record: record,
        foto: photo
    }

   
   function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear()
    if (yy < 10) yy = '0' + yy;
  
    return yy+ '-' + mm + '-' + dd;
  }
    
   const SendInfo = () => {
      addCard(card)
   }

    if(minors !== undefined && workers !== undefined) {
      return (
        <form className="form" noValidate autoComplete="off">
            <FormLabel className="form__label">Амбулаторная карта</FormLabel>
            <FormControl required margin="normal">
              <InputLabel id="demo-simple-select-label">Воспитанник</InputLabel>
              <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
              value={minor}
              onChange={ e => setMinor(e.target.value)}>
                {minors.map((minor) => {
                  return (
                  <MenuItem key={minor.id_minor} value={minor.id_minor}>{minor.Surname} {minor.Name}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            <FormControl required margin="normal">
              <InputLabel id="demo-simple-select-label">Работник</InputLabel>
              <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
              value={worker}
              onChange={ e => setWorker(e.target.value)}>
                {workers.map((worker) => {
                  return (
                  <MenuItem key={worker.id_worker + 10000} value={worker.id_worker}>{worker.Surname} {worker.Name}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            
            <TextField   margin="normal" type="date" label="Дата"  value={date}  onChange={ (e) => setDate(e.target.value)}/>
            <TextField  margin="normal"  label="Запись"  multiline rows={10} value={record}  onChange={ (e) => setRecord(e.target.value)}/>
          {/* <input  margin="normal"  type="file"  onChange={ (e) => readFile(e.target.files[0])} accept=".png" encType="multipart/formdata"/> Загрузка файла */}
          <Button className = "form__button" variant="contained" color="primary" size="small" 
          onClick={() => SendInfo()}>Добавить карту</Button>
        </form>
      )
    } else{
      return (
        <Spinner/>
      )
    }
    
}

export default CardsForm