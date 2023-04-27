import React, {useState } from "react";
import LogoNav from '../../assets/spearwhite.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import './nav.scss'



const Navbar = () => {



  const [collapsed, setCollapsed] = useState(false);

  const handleClickLink = () => {
    setCollapsed(!collapsed);
  };

  return (

      
    <nav className="navbar navbar-expand-lg navbar-dark  sticky-top">
          <div>
            <a className="navbar-brand  ms-2 p-2" href="#">
              <img src={LogoNav} width={50} height={50} />
             
            </a>
          </div>
          <button
            className={
              !collapsed ? "navbar-toggler collapsed" : "navbar-toggler"
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={collapsed}
            aria-label="Toggle navigation"
            onClick={handleClickLink}
          >
            <span className="navbar-toggler-icon mt-1">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div
            className={`${!collapsed ? 'collapse' : ''} navbar-collapse justify-content-center ms-3`}
            id="navbarSupportedContent"
            role="button"
           
          >
         
              <ul className="navbar-nav m-0">
                    <li className="nav-item">
                        <a className="nav-link"  href = '#programmes' onClick={handleClickLink}>
                            Programas
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href = '#box' onClick={handleClickLink}>
                            The Box
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href = '#why' onClick={handleClickLink}>
                            ¿Por Qué Nosotros?
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href = '#tarifas' onClick={handleClickLink}>
                            Tarifas
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href = '#team' onClick={handleClickLink}>
                            El Equipo
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href = '#contact' onClick={handleClickLink}>
                            Contacto
                        </a>
                    </li>
              </ul>
          </div>

        </nav>

  );
};

export default Navbar;

