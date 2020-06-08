import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, FormControl, InputLabel, FormLabel  } from '@material-ui/core';
import './pupils-schedule-form.css'
const PupilsScheduleForm = ({addPupilsSchedule}) => {
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');
    const [schedule, setSchedule] = useState('');
    const [photo, setPhoto] = useState(null);
   
    
    const pupilsSchedule = {
        year_min: minAge,
        year_max: maxAge,
        daily_schedule: schedule,
        foto: photo
  
    }
   
    
   const SendInfo = () => {
     addPupilsSchedule(pupilsSchedule)
   }
   
    
   
    
    
    return (
        <form className="form" noValidate autoComplete="off">
            <FormLabel className="form__label">Режим дня воспитанников</FormLabel>
            <FormControl required margin="normal">
              <InputLabel id="demo-simple-select-label">минимальный возраст</InputLabel>
              <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
              value={minAge}
              onChange={ e => setMinAge(e.target.value)}>
                <MenuItem value="0">0</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="11">11</MenuItem>
                <MenuItem value="12">12</MenuItem>
                <MenuItem value="13">13</MenuItem>
                <MenuItem value="14">14</MenuItem>
                <MenuItem value="15">15</MenuItem>
                <MenuItem value="16">16</MenuItem>
                <MenuItem value="17">17</MenuItem>
                <MenuItem value="18">18</MenuItem>
              </Select>
            </FormControl>
            <FormControl required margin="normal">
              <InputLabel id="demo-simple-select-label">Максимальный возраст</InputLabel>
              <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
              value={maxAge}
              onChange={ e => setMaxAge(e.target.value)}>
                <MenuItem value="0">0</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="11">11</MenuItem>
                <MenuItem value="12">12</MenuItem>
                <MenuItem value="13">13</MenuItem>
                <MenuItem value="14">14</MenuItem>
                <MenuItem value="15">15</MenuItem>
                <MenuItem value="16">16</MenuItem>
                <MenuItem value="17">17</MenuItem>
                <MenuItem value="18">18</MenuItem>
              </Select>
            </FormControl>
            
            <TextField  id="standard-multiline-static"  margin="normal"  label="Расписание" multiline rows={10} value={schedule}  onChange={ (e) => setSchedule(e.target.value)}/>
            
            
          {/* <input  margin="normal"  type="file"  onChange={ (e) => readFile(e.target.files[0])} accept=".png" encType="multipart/formdata"/> Загрузка файла */}
          <Button className = "form__button" variant="contained" color="primary" size="small" 
          onClick={() => SendInfo()}>Добавить расписание</Button>
        </form>
    )
}

export default PupilsScheduleForm