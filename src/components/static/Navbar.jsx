import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
    const logOut = () =>{
        alert("CIERRA SESION");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                        <Link className="navbar-brand mt-2 mt-lg-0" href="#">
                            {props.data.team_long_name.toUpperCase()}
                        </Link>
                
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/datos-equipo">Datos de Equipo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/datos-jugadores">Data de jugadores</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <a className="text-reset me-3 " onClick={logOut}>
                            <i class="fa-solid fa-power-off text-danger"></i>
                        </a>
                    </div>
                
                </div>

            </nav>

        </>
    );

}

export default Navbar;