import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, FormControl, InputLabel, FormLabel  } from '@material-ui/core';
import './workers-form.css'
const WorkersForm = ({addWorker}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [paternity, setPaternity] = useState('');
    const [birthDate, setBirthDate] = useState('2017-04-01');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState('');
    const [type, setType] = useState('');
    const [phone, setPhone] = useState('');
    const [photo, setPhoto] = useState(null);
    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    
    const worker = {
        Surname: surname,
        Name: name,
        First_name: paternity,
        Paul: gender,
        Data_of_birth: birthDate,
        Phone_number: phone,
        Education: education,
        type: type,
        foto: photo
  
    }
   
    
   const SendInfo = () => {
     addWorker(worker)
   }
   
    
   
    
    
    return (
        <form className="form" noValidate autoComplete="off">
            <FormLabel className="form__label">Информация о работнике</FormLabel>
            <TextField  required margin="normal"  label="Фамилия" value={surname} onChange={ (e) => setSurname(e.target.value)}/>
            <TextField required error={nameError} margin="normal"  label="Имя" value={name} onChange={ (e) => setName(e.target.value)}/>
            <TextField  required margin="normal"  label="Отчество" value={paternity} onChange={ (e) => setPaternity(e.target.value)}/>
            <FormControl required margin="normal">
              <InputLabel id="demo-simple-select-label">Пол</InputLabel>
              <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
              value={gender}
              onChange={ e => setGender(e.target.value)}>
                <MenuItem value="М">Мужской</MenuItem>
                <MenuItem value="Ж">Женский</MenuItem>
              </Select>
            </FormControl>
            
            <TextField  required margin="normal"  label="Дата рождения" value={birthDate} type="date" onChange={ (e) => setBirthDate(e.target.value)}/>
            <TextField  required margin="normal"  label="Образование" value={education} onChange={ (e) => setEducation(e.target.value)}/>
            <FormControl required margin="normal">
              <InputLabel id="demo-simple-select-label">Тип</InputLabel>
              <Select className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
              value={type}
              onChange={ e => setType(e.target.value)}>
                <MenuItem value="Социальный работник">Социальный работник</MenuItem>
                <MenuItem value="Медицинский работник">Медицинский работник</MenuItem>
              </Select>
            </FormControl>
            <TextField error={phoneError} margin="normal" className = "form__input"  label="Телефон" type="number" helperText="Формат ввода: 88005553535" value={phone} onChange={ e => setPhone(e.target.value)}/>
            
          {/* <input  margin="normal"  type="file"  onChange={ (e) => readFile(e.target.files[0])} accept=".png" encType="multipart/formdata"/> Загрузка файла */}
          <Button className = "form__button" variant="contained" color="primary" size="small" 
          onClick={() => SendInfo()}>Добавить работника</Button>
        </form>
    )
}

export default WorkersForm