import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOutMenu from './SignedOutMenu'
import SignedInMenu from './SignedInMenu'

export default function NavBar({ setFormOpen }) {
  const history = useHistory()
  const [authenticated, setAuthenticated] = useState(false)

  function handleSignOut() {
    setAuthenticated(false)
    history.push('/')
  }
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' exact header>
          <img src='/assets/logo.png' alt='logo' />
          MYEvents
        </Menu.Item>
        <Menu.Item name='Events' as={NavLink} to='/events' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  )
}
