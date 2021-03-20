import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export default function SignedOutMenu({ setAuthenticated }) {
  return (
    <Menu.Item position='right'>
      <Button
        basic
        inverted
        content='Login'
        onClick={() => setAuthenticated(true)}
      />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: '0.5rem' }}
      />
    </Menu.Item>
  )
}
