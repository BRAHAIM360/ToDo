import React from 'react'

interface contextProps {
  userName: string | null | undefined
  setUserName: (arg0: string) => void
}
export const UserContext = React.createContext<contextProps>({
  userName: '',
  setUserName: () => {}
})
