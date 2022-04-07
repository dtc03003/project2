import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
    const user=localStorage.getItem('accessToken')
    if(user){
        return true
    } else {
        return false
    }
}

const PrivateRoute=(props) =>{
    const auth=useAuth()

    return auth?<Outlet/>: <Navigate to="/login"/>
}

export default PrivateRoute;