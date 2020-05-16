import React from 'react';
import './app.css';
import ClientsPage from '../pages/'
import PageHeader from '../header'
import { Container } from '@material-ui/core';


const App = () => {
  return (
    <div>
    <PageHeader/>
    <Container maxWidth="lg" disableGutters>
      <ClientsPage/>
    </Container>
    </div>
    
  )
}

export default App

