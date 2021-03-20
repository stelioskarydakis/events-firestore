import React from 'react'
import { Route, useLocation } from 'react-router'
import { Container } from 'semantic-ui-react'
import EventForm from '../../features/events/enentForm/EventForm'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import EventDetailedPage from '../../features/events/eventDetails/EventDetailedPage'
import HomePage from '../../features/home/HomePage'
import NavBar from '../../features/nav/NavBar'

function App() {
  const { key } = useLocation()
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  )
}

export default App
