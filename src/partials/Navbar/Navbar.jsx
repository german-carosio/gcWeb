import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isSubMenuOpen) {
            setIsSubMenuOpen(false);
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        if (isSubMenuOpen) {
            setIsSubMenuOpen(false);
        }
    };

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const closeSubMenu = () => {
        setIsSubMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/"><h1 className={styles.logo}>GC<span className='naranja'>.</span>WEB</h1></Link>

                <div className={styles.btnMenu}>
                    {!isOpen ? (
                        <button aria-label="Open menu" className={styles.openMenu} onClick={toggleMenu}>
                            <i className="fas fa-bars"></i>
                        </button>
                    ) : (
                        <button aria-label="Close menu" className={`${styles.closeMenu} ${styles.show}`} onClick={closeMenu}>
                            <i className="fas fa-times"></i>
                        </button>
                    )}
                </div>

                <ul className={`${styles.menu} ${isOpen ? styles.menuVisible : ''}`}>
                    <li className={styles.menuItem}>
                        <Link
                            to="/"
                            className={`${styles.menuLink} ${location.pathname === '/' ? 'naranja' : ''}`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link
                            to="/about"
                            className={`${styles.menuLink} ${location.pathname === '/about' ? 'naranja' : ''}`}
                            onClick={closeMenu}
                        >
                            About us
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <span className={styles.menuLink} onClick={toggleSubMenu}>
                            Service <i className={`fa-solid ${isSubMenuOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </span>
                        <ul className={`${styles.subMenu} ${isSubMenuOpen ? styles.subMenuVisible : ''}`}>
                            <li className={styles.subMenuItem}>
                                <Link
                                    to="/service1"
                                    className={`${styles.subMenuLink} ${location.pathname === '/service1' ? 'naranja' : ''}`}
                                    onClick={() => { closeMenu(); closeSubMenu(); }}
                                >
                                    Subitem 1
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link
                                    to="/service2"
                                    className={`${styles.subMenuLink} ${location.pathname === '/service2' ? 'naranja' : ''}`}
                                    onClick={() => { closeMenu(); closeSubMenu(); }}
                                >
                                    Subitem 2
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link
                                    to="/service3"
                                    className={`${styles.subMenuLink} ${location.pathname === '/service3' ? 'naranja' : ''}`}
                                    onClick={() => { closeMenu(); closeSubMenu(); }}
                                >
                                    Subitem 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.menuItem}>
                        <Link
                            to="/contact"
                            className={`${styles.menuLink} ${location.pathname === '/contact' ? 'naranja' : ''}`}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;







