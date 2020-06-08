import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, FormControl, InputLabel, FormLabel  } from '@material-ui/core';
import Spinner from '../../../spinner'
import './employee-schedule-form.css'
const EmployeeScheduleForm = ({addEmployeeSchedule, workers}) => {
    const [worker, setWorker] = useState('');
    const [date, setDate] = useState(formatDate(new Date()));
    const [photo, setPhoto] = useState(null);
   
    const employeeSchedule = {
        id_worker: worker,
        Data_work: date,
        foto: photo
    }
   const SendInfo = () => {
      addEmployeeSchedule(employeeSchedule)
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
    
   
    
    if(workers !== undefined) {
      return (
        <form className="form" noValidate autoComplete="off">
            <FormLabel className="form__label">график работы сотрудников</FormLabel>
            <FormControl required margin="normal">
              <InputLabel id="demo-simple-select-label">Работник</InputLabel>
              <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
              value={worker}
              onChange={ e => setWorker(e.target.value)}>
                {workers.map((worker) => {
                  return (
                  <MenuItem key={worker.id_worker} value={worker.id_worker}>{worker.Surname}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            
            
            <TextField   margin="normal" type="date" label="Дата"  value={date}  onChange={ (e) => setDate(e.target.value)}/>
            
            
          {/* <input  margin="normal"  type="file"  onChange={ (e) => readFile(e.target.files[0])} accept=".png" encType="multipart/formdata"/> Загрузка файла */}
          <Button className = "form__button" variant="contained" color="primary" size="small" 
          onClick={() => SendInfo()}>Добавить график работы</Button>
        </form>
      )
    } else{
      return (
        <Spinner/>
      )
    }
    
}

export default EmployeeScheduleForm