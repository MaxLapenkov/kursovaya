export default class ServerService { 
//     async getClients() {
//         const res = await fetch('https://arcane-everglades-15227.herokuapp.com/clients')
          
//         if(!res.ok) {
//             throw new Error(`Could not fetch, received ${res.status}`)
//           }
//           return await res.json()
// }
async getMinors() {
  const res = await fetch('https://arcane-everglades-15227.herokuapp.com/minors')
    
  if(!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
}
async getResults(query) {
  const res = await fetch(`https://arcane-everglades-15227.herokuapp.com/query?textQuery=${query}`)
    
  if(!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
}
async getWorkers() {
  const res = await fetch('https://arcane-everglades-15227.herokuapp.com/workers')
    
  if(!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
}
async getPupilSchedules() {
  const res = await fetch('https://arcane-everglades-15227.herokuapp.com/pupil-schedules')
    
  if(!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
}
async getEmployeeSchedules() {
  const res = await fetch('https://arcane-everglades-15227.herokuapp.com/employee-schedules')
    
  if(!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
}
async getAchievments() {
  const res = await fetch('https://arcane-everglades-15227.herokuapp.com/achievments')
    
  if(!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
}
async getCards() {
  const res = await fetch('https://arcane-everglades-15227.herokuapp.com/cards')
    
  if(!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
}
async getArrivals() {
  const res = await fetch('https://arcane-everglades-15227.herokuapp.com/arrivals')
    
  if(!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
}

async addMinor(item){
  await fetch(`https://arcane-everglades-15227.herokuapp.com/minors/add?Surname=${item.Surname}&Name=${item.Name}&First_name=${item.First_name}&Paul=${item.Paul}&Data_of_birth=${item.Data_of_birth}&Class_school=${item.Class_school}&Registration=${item.Registration}&FCS_mother=${item.FCS_mother}&Mother_workplace=${item.Mother_workplace}&Phone_number_mom=${item.Phone_number_mom}&FCS_father=${item.FCS_father}&Father__workplace=${item.Father__workplace}&Phone_number_dad=${item.Phone_number_dad}&Needy_family=${item.Needy_family}&Large_family=${item.Large_family}&Dysfunctional_family=${item.Dysfunctional_family}&Custody=${item.Custody}&Guardian=${item.Guardian}&Information_pupil_orphanage=${item.Information_pupil_orphanage}&Information_inschool_accounting=${item.Information_inschool_accounting}&Information_law_enforcement_agencies=${item.Information_law_enforcement_agencies}&Note=${item.Note}&Information_about_the_language_of_instruction=${item.Information_about_the_language_of_instruction}&Information_about_the_achievements=${item.Information_about_the_achievements}&Information_about_social_assistance=${item.Information_about_social_assistance}&Disability_information=${item.Disability_information}&Information_about_homeschooling=${item.Information_about_homeschooling}&Availability_of_a_medical_card=${item.Availability_of_a_medical_card}&foto=${item.foto}`)
}
async addWorker(item){
  await fetch(`https://arcane-everglades-15227.herokuapp.com/workers/add?Surname=${item.Surname}&Name=${item.Name}&First_name=${item.First_name}&Paul=${item.Paul}&Data_of_birth=${item.Data_of_birth}&Phone_number=${item.Phone_number}&Education=${item.Education}&type=${item.type}&foto=${item.foto}`)
}
async addPupilsSchedule(item){
  await fetch(`https://arcane-everglades-15227.herokuapp.com/pupils-schedule/add?year_min=${item.year_min}&year_max=${item.year_max}&daily_schedule=${item.daily_schedule}&foto=${item.foto}`)
}
async addEmployeeSchedule(item){
  await fetch(`https://arcane-everglades-15227.herokuapp.com/employee-schedule/add?id_worker=${item.id_worker}&Data_work=${item.Data_work}&foto=${item.foto}`)
}
async addAchievment(item){
  await fetch(`https://arcane-everglades-15227.herokuapp.com/achievments/add?id_minor=${item.id_minor}&Name_of_the_achievement=${item.Name_of_the_achievement}&foto=${item.foto}`)
}
async addCard(item){
  await fetch(`https://arcane-everglades-15227.herokuapp.com/cards/add?id_minor=${item.id_minor}&id_worker=${item.id_worker}&data_reception=${item.data_reception}&record=${item.record}&foto=${item.foto}`)
}
async addArrival(item){
  await fetch(`https://arcane-everglades-15227.herokuapp.com/arrivals/add?Date_of_arrival=${item.Date_of_arrival}&id_minor=${item.id_minor}&id_medical=${item.id_medical}&id_social=${item.id_social}&foto=${item.foto}`)
}
    //  async addClient(client){
    //     await fetch(`https://arcane-everglades-15227.herokuapp.com/clients/add?name=${client.name}&phone=${client.phone}&status=${client.status}`)
    //   }
async removeMinor(id) {
  await fetch(`https://arcane-everglades-15227.herokuapp.com/minors/remove?id=${id}`)
}
async removeWorker(id) {
  await fetch(`https://arcane-everglades-15227.herokuapp.com/workers/remove?id=${id}`)
}
async removePupilsSchedule(id) {
  await fetch(`https://arcane-everglades-15227.herokuapp.com/pupils-schedule/remove?id=${id}`)
}
async removeEmployeeSchedule(id) {
  await fetch(`https://arcane-everglades-15227.herokuapp.com/employee-schedule/remove?id=${id}`)
}
async removeAchievment(id) {
  await fetch(`https://arcane-everglades-15227.herokuapp.com/achievments/remove?id=${id}`)
}
async removeCard(id) {
  await fetch(`https://arcane-everglades-15227.herokuapp.com/cards/remove?id=${id}`)
}
async removeArrival(id) {
  await fetch(`https://arcane-everglades-15227.herokuapp.com/arrivals/remove?id=${id}`)
}
      // async removeClient(id) {
      //  await fetch(`https://arcane-everglades-15227.herokuapp.com/clients/remove?id=${id}`)
      // }
}