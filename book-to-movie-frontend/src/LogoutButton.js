import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export default function LogoutButton() {
  const {
    isAuthenticated,
    logout
  } = useAuth0();
  return isAuthenticated && (
    <div onClick={() => { logout({ returnTo: window.location.origin }) }}>Log Out</div>
  )
}

