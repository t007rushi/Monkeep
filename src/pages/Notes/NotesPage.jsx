import React from 'react'
import { useAuth } from '../../context/auth-context'
import { signOutHandler } from '../../services'

export const NotesPage = () => {
  const {setUser} = useAuth()
  return (
    <div>NotesPage
<button onClick={() =>signOutHandler(setUser)}>LogOut</button>
    </div>
  )
}