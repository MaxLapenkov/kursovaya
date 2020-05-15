import React, { Component } from 'react';
import './app.css';
import ServerService from '../../services/server-service'

const serverService = new ServerService()

export default class App extends Component {

  state = {
    clients: [],
    client: {
      name: 'Иван Иванов',  
      phone: 22222,
      status: 'Физическое лицо'
    }
  }

  componentDidMount() {
    this.getClients()
  }
  getClients = () => {
    serverService.getClients().then(({data}) => {
      this.setState({
        clients: data
      })  
    }).catch(err => console.error(err))
  }

  removeClient = (id) => {
    serverService.removeClient(id)
      .then(this.getClients)
      .catch(err => console.error(err))
  }

  addClient = () => {
    const {client} = this.state;
    serverService.addClient(client)
      .then(this.getClients)
      .catch(err => console.error(err))
  }

  renderClient = ({client_id, name}) => {
    return (
      <li key={client_id}>
        <p>{name}</p>
        <button onClick = {() => this.removeClient(client_id)}>Удалить</button>
      </li>
      
    )
  
}

  render() {
    const { clients, client} = this.state 
    return (
      <div>
        <ul>
          {clients.map(this.renderClient)}
        </ul>
        

        <div>
          <input value={client.name} onChange={ e => this.setState({client :{...client, name: e.target.value}})}/>
          <input value={client.phone} onChange={ e => this.setState({client :{...client, phone: e.target.value}})}/>
          <select value={client.status}
          onChange={ e => this.setState({client :{...client, status: e.target.value}})}>
            <option value="Физическое лицо">Физическое лицо</option>
            <option value="Юридическое лицо">Юридическое лицо</option>
          </select>
          <button onClick={this.addClient}>Add client</button>
        </div>
      </div>
      
    );
  }
    
}


