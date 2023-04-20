import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({data}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/team">{data.team_long_name.toUpperCase()}</Link>
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/datos-equipo">Datos de Equipo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/datos-jugadores">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );

}

export default Navbar;