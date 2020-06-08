import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, FormControl, InputLabel, FormLabel  } from '@material-ui/core';
import Spinner from '../../../spinner'
import './achievments-form.css'
const AchievmentsForm = ({addAchievment, minors}) => {
    const [minor, setMinor] = useState('');
    const [achiev, setAchiev] = useState('');
    const [photo, setPhoto] = useState(null);
   
    
    const achievment = {
        id_minor: minor,
        Name_of_the_achievement: achiev,
        foto: photo
    }

   
    
   const SendInfo = () => {
      addAchievment(achievment)
   }
 
    
   
    
    if(minors !== undefined) {
      return (
        <form className="form" noValidate autoComplete="off">
            <FormLabel className="form__label">Достижения</FormLabel>
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
            <TextField  margin="normal"  label="Название достижения"  value={achiev}  onChange={ (e) => setAchiev(e.target.value)}/>
          {/* <input  margin="normal"  type="file"  onChange={ (e) => readFile(e.target.files[0])} accept=".png" encType="multipart/formdata"/> Загрузка файла */}
          <Button className = "form__button" variant="contained" color="primary" size="small" 
          onClick={() => SendInfo()}>Добавить достижение</Button>
        </form>
      )
    } else{
      return (
        <Spinner/>
      )
    }
    
}

export default AchievmentsForm