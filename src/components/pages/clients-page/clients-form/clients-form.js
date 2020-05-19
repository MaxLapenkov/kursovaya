import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem  } from '@material-ui/core';
const ClientsForm = ({addClient}) => {
    const [name, setName] = useState('Иван Иванов');
    const [phone, setPhone] = useState();
    const [status, setStatus] = useState('Физическое лицо');
    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    
    const client = {
        name: name,
        phone: phone,
        status: status
    }
    return (
        <form className="form" noValidate autoComplete="off">
          <TextField error={nameError} margin="normal" id="standard-basic" label="Имя" value={name} onChange={ (e) => setName(e.target.value)}/>
          <TextField error={phoneError} margin="normal" className = "form__input" id="standard-basic" label="Телефон" type="number" helperText="Формат ввода: 88005553535" value={phone} onChange={ e => setPhone(e.target.value)}/>
          <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
           value={status}
          onChange={ e => setStatus(e.target.value)}>
            <MenuItem value="Физическое лицо">Физическое лицо</MenuItem>
            <MenuItem value="Юридическое лицо">Юридическое лицо</MenuItem>
          </Select>
          <Button className = "form__button" variant="contained" color="primary" size="small" 
          onClick={() =>{
            if(client.name.length > 40) {
              setNameError(true)
            } else if (client.phone.length !== 11) {
              setPhoneError(true)
            } else {
              setNameError(false)
              addClient(client)
            }
            
          }
           }>Add client</Button>
        </form>
    )
}

export default ClientsForm