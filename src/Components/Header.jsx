import { useState, useEffect } from 'react';
import './Header.css'






function Header({ openModal }) {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function checkScroll() {
            setScrolled(window.scrollY > 60)
        }
        window.addEventListener("scroll", checkScroll)
    }, [])
    return (
        <nav className={`navbar navbar-expand-lg navbar-light hospital-navbar header ${scrolled ? "scrolled" : ""}`}>
            <div className="hero-decor">
                <div className="hero-circle-1"></div>
                <div className="hero-circle-2"></div>
                <div className="hero-circle-3"></div>
                <div className="hero-cross"><div className="hero-cross-v"></div><div className="hero-cross-h"></div></div>
            </div>
            <div className="container-fluid">
                <a href="#main-content" className="nav-brand">
                    <div className="nav-logo">🏥</div>
                    <div>
                        <div className="nav-brand-name">Quantum MediCare</div>
                        <div className="nav-brand-sub">Hospital &amp; Research Centre</div>
                    </div>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>

                    {/* Nav Links */}
                    <ul className="navbar-nav mx-auto nav-links">

                        <li className="nav-item dropdown">

                            <a
                                className="nav-link dropdown-toggle nav-animated"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Departments
                            </a>

                            <ul className="dropdown-menu hospital-dropdown">

                                <li><a className="dropdown-item" href="#">Radiology</a></li>
                                <li><a className="dropdown-item" href="#">Surgery</a></li>
                                <li><a className="dropdown-item" href="#">Pediatrics</a></li>
                                <li><a className="dropdown-item" href="#">Pharmacy</a></li>

                            </ul>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link nav-animated  " href="#">
                                Doctors
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link nav-animated" href="#services">
                                Services

                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link nav-animated" href="#departments">
                                Departments
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="nav-actions">
                    <a href="#modal-appt" className="btn btn-outline btn-info rounded-4 background border " onClick={openModal} >📅 Appointments</a>
                    <a href="#modal-card" className="btn btn-primary rounded-4  ">💳 Get Hospital Card</a>
                </div>

            </div>

        </nav>

    )
}

export default Header;