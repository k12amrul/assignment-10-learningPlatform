import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { useContext } from 'react';
// import React { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import app from '../../firebase/firebase.config';

const RightSaideNav = () => {
    const auth=getAuth(app)
    const {providerLogin ,githubLogin}=useContext(AuthContext)
    const googleprovider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignin =() =>{
        providerLogin(googleprovider)
        .then(result => {
            const user =result.user
            console.log(user);
        })
        .catch(err => {
            console.error(err)
        })
    }
   
    const handleGithubLogin =()  => {
        signInWithPopup(auth,githubProvider  )
       // githubLogin( githubProvider)
        .then(res => {
            const user =res.user
            console.log(user)
        })
        .catch( err => {
            console.error(err);
        })

    }
        const [ category,setcCategory ]=useState([])
        useEffect( () => {
            fetch('https://assignment-tenserver.vercel.app/')
            .then(res => res.json())
            .then(data => setcCategory(data))
            
        },[])
        return (
            <div>
                <button onClick={handleGoogleSignin} type="button" class="btn btn-primary">google</button>
                <button onClick={handleGithubLogin} type="button" class="btn btn-primary">github</button>
                
                {
                   category.map( cat => <p><Link to={`/category/${cat.id}`}> {cat.name}</Link> </p> 
                   
                   ) 
                }
            </div>
        );
};

export default RightSaideNav;