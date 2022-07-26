import React from 'react';
/* Importo NavLinkPorque es el componente que nos permite
dar clic y llevarno a las rutras */
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
        <nav className=" mx-auto navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
           {/*  <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt width={30} height={24} /> */}
              EL SABOR DE VERACRUZ
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#menuResponsive"  aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="menuResponsive">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                      to="/"
                      aria-current="page"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                    INICIO
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="/menu"
                      aria-current="page"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                    MENÚ
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                      to="/reservation"
                      aria-current="page"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                    RESERVACIONES
                </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav  mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Iniciar sesión</a>
                  </li> 
              </ul>
            </div>
          </div>
        </nav>

  );
}

export default NavBar;