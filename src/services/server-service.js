export default class ServerService { 
    async getClients() {
        const res = await fetch('https://arcane-everglades-15227.herokuapp.com/clients')
          
        if(!res.ok) {
            throw new Error(`Could not fetch, received ${res.status}`)
          }
          return await res.json()
        // const data = 
        //   [{client_id: 39, name: "Иван Иванов", phone: 22222, status: "Физическое лицо"},
        // {client_id: 45, name: "Максим", phone: 22222, status: "Физическое лицо"},
        // {client_id: 47, name: "dfgdfhfd", phone: 22222554, status: "Физическое лицо"}]
        
        // return {data}
}
     async addClient(client){
        await fetch(`https://arcane-everglades-15227.herokuapp.com/clients/add?name=${client.name}&phone=${client.phone}&status=${client.status}`)
      }
      async removeClient(id) {
       await fetch(`https://arcane-everglades-15227.herokuapp.com/clients/remove?id=${id}`)
      }
}