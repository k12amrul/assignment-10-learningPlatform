import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user ,loading}  =useContext(AuthContext)
     if( loading){
        return <div>
            <h1> <Spinner animation="border" variant="primary" />  Loading.........  </h1>
            
        </div>
            
     }

    if(!user){
        return <Navigate to='/login'  state={{from : location } }  replace></Navigate>
    }return children
    
};

export default PrivateRoute;