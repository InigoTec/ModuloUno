import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        //los className tendran los nombres CSS de bootstrap
        <div className="navigation">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                Website con múltiples páginas en React
              </NavLink>
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                      <span className="sr-only">(actual)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      Acerca de 
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contacto
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page">
                      Otra página
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );

}

export default Navigation;