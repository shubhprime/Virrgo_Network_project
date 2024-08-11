import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo_virrgo.jpg';
import header from './Header.module.css';
import DropDown from './DropDown';

const Header = () => {
  const [isDropDownVisible, setDropDownVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);

  const toggleDropDownMenu = () => {
    setDropDownVisible(!isDropDownVisible);
    setIsRotated(!isRotated);
    setVisibleSubmenu(null);
  };

  const toggleSubmenu = (submenu) => {
    if (visibleSubmenu === submenu) {
      setVisibleSubmenu(null);
    } else {
      setVisibleSubmenu(submenu);
      setDropDownVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    const menuElement = document.getElementById('menu');
    if (menuElement && !menuElement.contains(event.target)) {
      setDropDownVisible(false);
      setIsRotated(false);
      setVisibleSubmenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={header.MainSection} id='menu'>
        <div>
          <header>
            <div className={header.nav}>
              <div className={`${header.nav_left} ${header.sidebar_container}`}>
                <FontAwesomeIcon icon={faBars} style={{ color: "#1e3050" }}
                  className={`${header.sidebar} ${isRotated ? header.rotate : ''}`}
                  onClick={toggleDropDownMenu}
                />
                {isDropDownVisible && <DropDown />}
                <div className={header.logo_link}>
                  <Link to={""}>
                    <img src={logo} alt="Virrgo Network" className={header.logo} />
                  </Link>
                </div>
              </div>
              <div className={header.nav_right}>
                <nav>
                  <Link to={""} className={header.hover}>Home</Link>
                  <div
                    className={header.menuItem}
                    onClick={() => toggleSubmenu('services')}
                  >
                    Our Services <FontAwesomeIcon icon={faAngleDown} style={{ color: "#1e3050" }} className={header.faArrow} />
                  </div>
                  <div
                    className={header.menuItem}
                    onClick={() => toggleSubmenu('products')}
                  >
                    IT Products <FontAwesomeIcon icon={faAngleDown} style={{ color: "#1e3050" }} className={header.faArrow} />
                  </div>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScnTDCJMshmG8kkpr-O2h2ar5Dr0kWyNyZZTiX4pkJuSX-hig/viewform" target="_blank" rel="noopener noreferrer" className={header.hover}>Career</a>
                  <Link to={"about"} className={header.hover}>About Us</Link>
                  <Link to={"contact"} className={header.hover}>Contact Us</Link>
                </nav>
              </div>
            </div>
          </header>
          <hr className={header.horizontal} />
        </div>
        <div className={header.List}>
          {(visibleSubmenu === 'services' || visibleSubmenu === 'products') && (
            <div className={header.dropdown}>
              {visibleSubmenu === 'services' && (
                <div className={header.submenu}>
                  <Link to="service1">Real Estate Investment Consultancy</Link>
                  <Link to="service2">Event Management Consultancy</Link>
                  <Link to="service3">Xaper</Link>
                  <Link to="service4">Digital Marketing</Link>
                </div>
              )}
              {visibleSubmenu === 'products' && (
                <div className={header.submenu}>
                  <Link to="product1">Website Development</Link>
                  <Link to="product2">App Development</Link>
                  <Link to="product3">Hotel Management Software</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
