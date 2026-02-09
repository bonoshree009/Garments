import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Components/Spinner'

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location =useLocation()
    if(loading){
        return <Spinner></Spinner>
    }
    if(user && user?.email){
        return children
    }
    else{
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
};

export default PrivateRoute;