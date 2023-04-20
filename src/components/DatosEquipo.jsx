import React from "react";
import Navbar from "./static/Navbar";
const DatosEquipo = (props) => {
    console.log(props)
    return (
        <>
            <Navbar data = {props.data}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6"><h1>{props.data.team_long_name}</h1></div>
                </div>
            
            </div>
        </>
    )
}

export default DatosEquipo;