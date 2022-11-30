import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


 export const AuthContext =createContext()
 const auth =getAuth(app)

 const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null)
    const [loading ,setloading ] =useState(true)
    const [courseDetails,setcourseDetails]= useState()

    useEffect( () => {
        fetch('https://assignment-tenserver.vercel.app/')
        .then(res => res.json())
        .then(data => setcourseDetails(data))
        
    },[])

    const providerLogin =(provider) =>{
        setloading(true)
        return signInWithPopup(auth, provider)

    }
    // const githubLogin =( githubProvider) =>{
    //       setloading(true)
    //       return signInWithPopup (auth , githubProvider)
    // }
    const logout = () =>{
        setloading(true)
        return signOut(auth)
    }
    const createUser=(email ,password )=> {
        setloading(true)
        return createUserWithEmailAndPassword(auth ,email, password)
    }
    const signin =(email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword( auth, email,password)
    }
    const updateUserProfile= (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    useEffect(  () =>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
        setloading(false)
       })
       return () =>{
           unsubscribe()    
    } 
    },[])
     
    
    const authinfo={
        user,
         loading,
         updateUserProfile,
          signin,
          courseDetails,
            //   githubLogin,
            providerLogin,
            logout ,
            createUser   }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;