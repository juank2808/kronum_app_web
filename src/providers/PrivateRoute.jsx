import React from "react";
import Navbar from "../components/static/Navbar";
import Team from "../routes/Team";
import { Route, Routes } from "react-router-dom";
const PrivateRoute = ({token}) => {
    console.log(token)
    if(localStorage.getItem('token') == '' || localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
        return window.location.replace('/login');   
    }else{
        return (
        <>
            <Routes>
                <Route path="/team" element={<Team token={token}/>}/>
            </Routes>
            {/* <Team token = {token}/> */}
        </>);    
    }
    
}

export default PrivateRoute;