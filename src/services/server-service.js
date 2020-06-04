export default class ServerService { 
//     async getClients() {
//         const res = await fetch('https://arcane-everglades-15227.herokuapp.com/clients')
          
//         if(!res.ok) {
//             throw new Error(`Could not fetch, received ${res.status}`)
//           }
//           return await res.json()
// }
async getMinors() {
  const res = await fetch('http://localhost:4000/minors')
    
  if(!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
}
async addMinor(item){
  // await fetch(`http://localhost:4000/minors/add?Surname=${item.Surname}&name=${item.name}&First_name=${item.First_name}`)
  await fetch(`http://localhost:4000/minors/add?Surname=${item.Surname}&Name=${item.Name}&First_name=${item.First_name}&Paul=${item.Paul}&Data_of_birth=${item.Data_of_birth}&Class_school=${item.Class_school}&Registration=${item.Registration}&FCS_mother=${item.FCS_mother}&Mother_workplace=${item.Mother_workplace}&Phone_number_mom=${item.Phone_number_mom}&FCS_father=${item.FCS_father}&Father__workplace=${item.Father__workplace}&Phone_number_dad=${item.Phone_number_dad}&Needy_family=${item.Needy_family}&Large_family=${item.Large_family}&Dysfunctional_family=${item.Dysfunctional_family}&Custody=${item.Custody}&Guardian=${item.Guardian}&Information_pupil_orphanage=${item.Information_pupil_orphanage}&Information_inschool_accounting=${item.Information_inschool_accounting}&Information_law_enforcement_agencies=${item.Information_law_enforcement_agencies}&Note=${item.Note}&Information_about_the_language_of_instruction=${item.Information_about_the_language_of_instruction}&Information_about_the_achievements=${item.Information_about_the_achievements}&Information_about_social_assistance=${item.Information_about_social_assistance}&Disability_information=${item.Disability_information}&Information_about_homeschooling=${item.Information_about_homeschooling}&Availability_of_a_medical_card=${item.Availability_of_a_medical_card}&foto=${item.foto}`)
}
    //  async addClient(client){
    //     await fetch(`https://arcane-everglades-15227.herokuapp.com/clients/add?name=${client.name}&phone=${client.phone}&status=${client.status}`)
    //   }
    async removeMinor(id) {
      await fetch(`http://localhost:4000/minors/remove?id=${id}`)
     }
      // async removeClient(id) {
      //  await fetch(`https://arcane-everglades-15227.herokuapp.com/clients/remove?id=${id}`)
      // }
}