import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Drop from './DropDown.module.css';

const DropDown = () => {
    const [visibleSubmenu, setVisibleSubmenu] = useState(null);
    const [prevSubmenu, setPrevSubmenu] = useState(null);
    const [rotatedArrow, setRotatedArrow] = useState(null);

    const handleMenuClick = (submenu) => {
        if (visibleSubmenu === submenu) {
            setVisibleSubmenu(null);
            setRotatedArrow('close');
        } else {
            setPrevSubmenu(visibleSubmenu);
            setVisibleSubmenu(submenu);
            setRotatedArrow('open');
        }
    };

    useEffect(() => {
        if (prevSubmenu && visibleSubmenu !== prevSubmenu) {
            const timer = setTimeout(() => {
                setPrevSubmenu(null);
                setRotatedArrow('open');
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [visibleSubmenu, prevSubmenu]);

    return (
        <>
            <nav className={Drop.DropDownList}>
                <div className={Drop.Menu}>
                    <Link to="">Home</Link>
                    <div
                        className={Drop.MenuItem}
                        onClick={() => handleMenuClick('services')}
                    >
                        Our Services
                        <FontAwesomeIcon icon={faCaretRight} style={{ color: "#1e3050" }}
                            className={`${Drop.RotateArrow} ${visibleSubmenu === 'services' ? Drop.RotateArrowOpen : Drop.RotateArrowClose}`}
                        />
                    </div>
                    <div
                        className={Drop.MenuItem}
                        onClick={() => handleMenuClick('products')}
                    >
                        IT Products
                        <FontAwesomeIcon icon={faCaretRight} style={{ color: "#1e3050" }}
                            className={`${Drop.RotateArrow} ${visibleSubmenu === 'products' ? Drop.RotateArrowOpen : Drop.RotateArrowClose}`}
                        />
                    </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScnTDCJMshmG8kkpr-O2h2ar5Dr0kWyNyZZTiX4pkJuSX-hig/viewform" target="_blank" rel="noopener noreferrer">Career</a>
                    <Link to="about">About Us</Link>
                    <Link to="contact">Contact Us</Link>
                </div>

                <div
                    className={`${Drop.Submenu} ${visibleSubmenu ? Drop.SubmenuVisible : ''}`}
                >
                    {visibleSubmenu === 'services' && (
                        <div className={Drop.SubmenuServicesList}>
                            <Link to="service1">Real Estate Investment Consultancy</Link>
                            <Link to="service2">Event Management Consultancy</Link>
                            <Link to="service3">Xaper</Link>
                            <Link to="service4">Digital Marketing</Link>
                        </div>
                    )}
                    {visibleSubmenu === 'products' && (
                        <div className={Drop.SubmenuProductsList}>
                            <Link to="product1">Website Development</Link>
                            <Link to="product2">App Development</Link>
                            <Link to="product3">Hotel Management Software</Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default DropDown;
