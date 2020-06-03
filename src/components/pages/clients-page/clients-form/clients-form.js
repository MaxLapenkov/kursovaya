import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, FormControl, InputLabel  } from '@material-ui/core';
const ClientsForm = ({addMinor}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [paternity, setPaternity] = useState('');
    const [birthDate, setBirthDate] = useState('2017-04-01');
    const [schoolClass, setSchoolClass] = useState('');
    const [gender, setGender] = useState('');
    const [registration, setRegistration] = useState('');
    const [motherName, setMotherName] = useState('');
    const [motherJob, setMotherJob] = useState('');
    const [motherPhone, setMotherPhone] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [fatherJob, setFatherJob] = useState('');
    const [fatherPhone, setFatherPhone] = useState('');
    const [needyStatus, setNeedyStatus] = useState('');
    const [largeStatus, setLargeStatus] = useState('');
    const [dysStatus, setDysStatus] = useState('');
    const [custody, setCustody] = useState('');
    const [guardian, setGuardian] = useState('');
    const [orphanage, setOrphanage] = useState('');
    const [inschool, setInschool] = useState('');
    const [law, setLaw] = useState('');
    const [note, setNote] = useState('');
    const [language, setLanguage] = useState('');
    const [achievements, setAchievements] = useState('');
    const [assistance, setAssistance] = useState('');
    const [disability, setDisability] = useState('');
    const [homeSchooling, setHomeSchooling] = useState('');
    const [medCard, setMedCard] = useState('');
    const [photo, setPhoto] = useState('');
    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    
    const minor = {
        Surname: surname,
        Name: name,
        First_name: paternity,
        Paul: gender,
        Data_of_birth: birthDate,
        Class_school: schoolClass,
        Registration: registration,
        FCS_mother: motherName,
        Mother_workplace: motherJob,
        Phone_number_mom: motherPhone,
        FCS_father: fatherName,
        Father_workplace: fatherJob,
        Phone_number_dad: fatherPhone,
        Needy_family: needyStatus,
        Large_family: largeStatus,
        Dysfunctional_family: dysStatus,
        Custody: custody,
        Guardian: guardian,
        Information_pupil_orphanage: orphanage,
        Information_inschool_accounting: inschool,
        Information_law_enforcement_agencies: law,
        Note: note,
        Information_about_the_language_of_instruction: language,
        Information_about_the_achievements: achievements,
        Information_about_social_assistance: assistance,
        Disability_information: disability,
        Information_about_homeschooling: homeSchooling,
        Availability_of_a_medical_card: medCard,
        foto: photo




        
    }
    return (
        <form className="form" noValidate autoComplete="off">
          <TextField  margin="normal"  label="Фамилия" value={surname} onChange={ (e) => setSurname(e.target.value)}/>
          <TextField error={nameError} margin="normal"  label="Имя" value={name} onChange={ (e) => setName(e.target.value)}/>
          <TextField  margin="normal"  label="Отчество" value={paternity} onChange={ (e) => setPaternity(e.target.value)}/>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Пол</InputLabel>
            <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
            value={gender}
            onChange={ e => setGender(e.target.value)}>
              <MenuItem value="М">Мужской</MenuItem>
              <MenuItem value="Ж">Женский</MenuItem>
            </Select>
          </FormControl>
          
          <TextField  margin="normal"  label="Дата рождения" value={birthDate} type="date" onChange={ (e) => setBirthDate(e.target.value)}/>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Школьный класс</InputLabel>
            <Select className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
            value={schoolClass}
            onChange={ e => setSchoolClass(e.target.value)}>
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
            </Select>
          </FormControl>
          
          <TextField  margin="normal"  label="Место жительства" value={registration} onChange={ (e) => setRegistration(e.target.value)}/>
          <TextField  margin="normal"  label="ФИО матери" value={motherName} onChange={ (e) => setMotherName(e.target.value)}/>
          <TextField  margin="normal"  label="место работы матери" value={motherJob} onChange={ (e) => setMotherJob(e.target.value)}/>
          <TextField error={phoneError} margin="normal" className = "form__input"  label="Телефон матери" type="number" helperText="Формат ввода: 88005553535" value={motherPhone} onChange={ e => setMotherPhone(e.target.value)}/>
          <TextField  margin="normal"  label="ФИО отца" value={fatherName} onChange={ (e) => setFatherName(e.target.value)}/>
          <TextField  margin="normal"  label="место работы отца" value={fatherJob} onChange={ (e) => setFatherJob(e.target.value)}/>
          <TextField margin="normal" className = "form__input"  label="Телефон отца" type="number" helperText="Формат ввода: 88005553535" value={fatherPhone} onChange={ e => setFatherPhone(e.target.value)}/>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Малообеспеченная семья</InputLabel>
            <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
            value={needyStatus}
            onChange={ e => setNeedyStatus(e.target.value)}>
              <MenuItem value="нет">Нет</MenuItem>
              <MenuItem value="да">Да</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Многодетная семья</InputLabel>
            <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
            value={largeStatus}
            onChange={ e => setLargeStatus(e.target.value)}>
              <MenuItem value="нет">Нет</MenuItem>
              <MenuItem value="да">Да</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Неблагополучная семья</InputLabel>
            <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
            value={dysStatus}
            onChange={ e => setDysStatus(e.target.value)}>
              <MenuItem value="нет">Нет</MenuItem>
              <MenuItem value="да">Да</MenuItem>
            </Select>
          </FormControl>
          <TextField  margin="normal"  label="Информация об опеке" value={custody} onChange={ (e) => setCustody(e.target.value)}/>
          <TextField  margin="normal"  label="Опекун" value={guardian} onChange={ (e) => setGuardian(e.target.value)}/>
          <TextField  margin="normal"  label="Информация, если воспитанник детского дома" value={orphanage} onChange={ (e) => setOrphanage(e.target.value)}/>
          <TextField  margin="normal"  label="Информация о внутришкольном учете" value={inschool} onChange={ (e) => setInschool(e.target.value)}/>
          <TextField  margin="normal"  label="Информация о учете несовершеннолетнего в правоохранительных органах" value={law} onChange={ (e) => setLaw(e.target.value)}/>
          <TextField  margin="normal"  label="Примечания" value={note} onChange={ (e) => setNote(e.target.value)}/>
          <TextField  margin="normal"  label="Информация о языке обучения" value={language} onChange={ (e) => setLanguage(e.target.value)}/>
          <TextField  margin="normal"  label="Информация о достижениях" value={achievements} onChange={ (e) => setAchievements(e.target.value)}/>
          <TextField  margin="normal"  label="Информация о социальной помощи" value={assistance} onChange={ (e) => setAssistance(e.target.value)}/>
          <TextField  margin="normal"  label="Информация об инвалидности" value={disability} onChange={ (e) => setDisability(e.target.value)}/>
          <TextField  margin="normal"  label="Информация об обучении на дому" value={homeSchooling} onChange={ (e) => setHomeSchooling(e.target.value)}/>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Наличие медицинской карточки</InputLabel>
            <Select  className = "form__select" labelId="demo-simple-select-label" id="demo-simple-select"
            value={medCard}
            onChange={ e => setMedCard(e.target.value)}>
              <MenuItem value="Нету">Нету</MenuItem>
              <MenuItem value="Есть">Есть</MenuItem>
            </Select>
          </FormControl>
          <TextField  margin="normal"  type="file" value={photo} onChange={ (e) => setPhoto(e.target.value)}/>
          <Button className = "form__button" variant="contained" color="primary" size="small" 
          onClick={() => addMinor(minor)}>Добавить несовершеннолетнего</Button>
        </form>
    )
}

export default ClientsForm