import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

const AuthContext = createContext({});

export const AuthProvider = ({ children } : any) => {
  return (
    <AuthContext.Provider value={{
        user: "Mishael"
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
    return useContext(AuthContext);
}
