import React, { useEffect, useState } from 'react'
import authContext from '../context Api/authContextApi'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import auth from '../firebase/firebase.confige';

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  
  const createAccount = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginAccount = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOutAccount = ()=>{
    return signOut (auth)
  }

  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth, email)
  }


  useEffect(()=>{

    const clearFun = onAuthStateChanged(auth,(currentUser)=>{
      console.log(currentUser)
      if(currentUser){
        setUser(currentUser)
      }
    })
    return ()=>{
      clearFun()
    }
  }, [])

  const userInfo = {
    createAccount,
    loginAccount,
    logOutAccount,
    user,
    resetPassword,
  }

  return (
    <authContext.Provider value={userInfo}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider;
