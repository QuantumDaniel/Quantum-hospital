import { useState } from 'react';
import '../App.css';






function Header() {
    const [expanded, setExpanded] = useState(false);


    return (
        <nav className="navbar navbar-expand-lg navbar-light hospital-navbar">
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
                            <a className="nav-link nav-animated" href="#">
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link nav-animated" href="#">
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="nav-actions">
                    <a href="#modal-appt" className="btn btn-outline btn-info rounded-4 background border ">📅 Appointments</a>
                    <a href="#modal-card" className="btn btn-primary rounded-4  ">💳 Get Hospital Card</a>
                </div>









            </div>

        </nav>

    )
}

export default Header;