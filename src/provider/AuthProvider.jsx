import React from 'react'
import authContext from '../context Api/authContextApi'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import auth from '../firebase/firebase.confige';

const AuthProvider = ({children}) => {
  
  const createAccount = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginAccount = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    createAccount,
    loginAccount,
  }

  return (
    <authContext.Provider value={userInfo}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider;
