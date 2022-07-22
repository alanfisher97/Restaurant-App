import React from 'react';
/* Importo NavLinkPorque es el componente que nos permite
dar clic y llevarno a las rutras */

const NavBar = () => {
  return (
        <nav className=" mx-auto navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#menuResponsive"  aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="menuResponsive">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                {/*<li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li> */}
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

  );
}

export default NavBar;