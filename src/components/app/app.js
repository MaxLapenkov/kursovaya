import React, { Fragment } from 'react';
import './app.css';
import MinorsPage from '../pages/minors-page'
import WorkersPage from '../pages/workers-page'
import PupilsSchedulePage from '../pages/pupils-schedule-page'
import EmployeeSchedulePage from '../pages/employee-schedule-page'
import AchievmentsPage from '../pages/achievments-page'
import CardsPage from '../pages/cards-page'
import ArrivalPage from '../pages/arrival-page'
import QueryPage from '../pages/query-page'
import PageHeader from '../header'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import { Container } from '@material-ui/core';
import ErrorBoundary from '../error-boundary'
import {ServerServiceProvider} from '../server-service-context';
import ServerService from '../../services/server-service'
const serverService = new ServerService()
const App = () => {
  return (
    <div>
    
    <Container maxWidth="lg" disableGutters>
      <ErrorBoundary>
        <ServerServiceProvider value={serverService}>
          <Router>
          <PageHeader/>
            <Switch>
              <Route path="/" exact render={() => (
                <Fragment>
                  <h1 align="center">Добро пожаловать</h1>
                  <h2 align="center">Для продолжения перейдите по ссылке сверху</h2>
                </Fragment>
              )}/>
              <Route path="/arrival">
                <ArrivalPage/>
              </Route>
              <Route path="/minors">
                <MinorsPage/>
              </Route>
              <Route path="/workers">
                <WorkersPage/>
              </Route>
              <Route path="/pupils-schedule">
                <PupilsSchedulePage/>
              </Route>
              <Route path="/employee-schedule">
                <EmployeeSchedulePage/>
              </Route>
              <Route path="/achievments">
                <AchievmentsPage/>
              </Route>
              <Route path="/cards">
                <CardsPage/>
              </Route>
              <Route path="/query">
                <QueryPage/>
              </Route>
            </Switch>
          </Router>
        </ServerServiceProvider>
      </ErrorBoundary>
    </Container>
    </div>
    
  )
}

export default App

