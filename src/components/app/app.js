import React from 'react';
import './app.css';
import ClientsPage from '../pages/clients-page'
import PageHeader from '../header'
import { Container } from '@material-ui/core';
import ErrorBoundary from '../error-boundary'
import {ServerServiceProvider} from '../server-service-context';
import ServerService from '../../services/server-service'
const serverService = new ServerService()
const App = () => {
  return (
    <div>
    <PageHeader/>
    <Container maxWidth="lg" disableGutters>
      <ErrorBoundary>
        <ServerServiceProvider value={serverService}>
          <ClientsPage/>
        </ServerServiceProvider>
      </ErrorBoundary>
    </Container>
    </div>
    
  )
}

export default App

