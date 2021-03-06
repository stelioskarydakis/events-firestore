import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

export default function SignedInMenu({ signOut }) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
      <Dropdown pointing='top left' text='stelios'>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item
            as={Link}
            // to={`/profile/${currentUserProfile?.id}`}
            text='My profile'
            icon='user'
          />
          <Dropdown.Item
            as={Link}
            // to='/account'
            text='My account'
            icon='settings'
          />
          <Dropdown.Item text='Sign out' icon='power' onClick={signOut} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}
