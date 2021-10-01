import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDJQgX_i2T5s3AnwRlxnOgSQk49pTj4FSM",
    authDomain: "single-event-dc93c.firebaseapp.com",
    projectId: "single-event-dc93c",
    storageBucket: "single-event-dc93c.appspot.com",
    messagingSenderId: "247349180324",
    appId: "1:247349180324:web:23759e3077538b79717331",
    measurementId: "G-VSH3MCSBGE"
})

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}
