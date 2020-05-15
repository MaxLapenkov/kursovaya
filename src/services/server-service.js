export default class ServerService { 
    async getClients() {
        const res = await fetch('http://localhost:4000/clients')
          
        if(!res.ok) {
            throw new Error(`Could not fetch, received ${res.status}`)
          }
          return await res.json()
      }
     async addClient(client){
        fetch(`http://localhost:4000/clients/add?name=${client.name}&phone=${client.phone}&status=${client.status}`)
      }
      async removeClient(id) {
        fetch(`http://localhost:4000/clients/remove?id=${id}`)
      }
}