import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const useAuth = () => {
    const LOG = localStorage.getItem('token');
    if(LOG){
        return true;
    }else {
        return false;
    }
    
}

const PrivateRoute = () => {
    const auth = useAuth();
    const location = useLocation();
    return (
        auth?
            <Outlet/>
            :
            <Navigate to="/login" state={{from: location}}/>
    );
}

export default PrivateRoute;