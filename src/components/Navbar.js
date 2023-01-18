import React, { useEffect, useState } from 'react';
import OracleLogo from '../assets/img/oracle.png';
import $ from 'jquery';
import Dropdown from 'react-bootstrap/Dropdown';
import '../index.css';
import { Link, NavLink, useLocation, } from 'react-router-dom';

function Navbar() {
    const pathName = useLocation().pathname;
    const token = document.cookie;
    const [username, setUsername] = useState();

    const activeLink = () => {
        const path = [
            '/profile-customer',
            '/update-profile-customer',
            '/change-password-customer',
            '/profile-hotel',
            '/update-profile-hotel',
            '/change-password-hotel'
        ]
        if (path.includes(pathName)) {return "nav-link active px-3"}
        return "nav-link px-3"
    }

    useEffect(() => {
        if (token) {
            let splitToken = token.split(".");
            let user = JSON.parse(atob(splitToken[1]));
            let username = user["user"];
            setUsername(username);
        }
    }, [token])

    const logout = () => {
        document.cookie = "username=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        localStorage.removeItem("role")
        window.location.href = "/"
    }

    $(function(){
        $(document).scroll(function(){
            var $nav = $(".navbar");
            if ($(this).scrollTop() > $nav.height()) {
                $nav.addClass("scrolled");
                $nav.removeClass("navbar-dark");
                $nav.addClass("navbar-light");
            } else {
                $nav.removeClass("scrolled");
                $nav.addClass("navbar-dark");
                $nav.removeClass("navbar-light");
            }
            });
        })
    
    return (
        <header className="navbar sticky-top navbar-dark navbar-expand-lg main-nav">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={OracleLogo} alt="Oracle" width="160" height="20" />
                </Link>
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto py-3">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({isActive}) => isActive? "nav-link active px-3" : "nav-link px-3"}
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li
                            style={{display: localStorage.getItem('role') ? "none" : "block"}}
                            className="nav-item">
                            <NavLink
                                className={({isActive}) => isActive? "nav-link active px-3" : "nav-link px-3"}
                                to="/register-hotel"
                            >
                                Join Us
                            </NavLink>
                        </li>

                        <li
                            style={{display: localStorage.getItem('role') ? "none" : "block"}}
                            className="nav-item">
                            <NavLink
                                to="/login"
                                className={({isActive}) => isActive? "nav-link active px-3" : "nav-link px-3"}
                            >
                                Register|Login
                            </NavLink>
                        </li>

                        <li
                            style={{display: localStorage.getItem('role') === 'customer' ? "block" : "none"}}
                        >
                            <NavLink
                                className={({isActive}) => isActive? "nav-link active px-3" : "nav-link px-3"}
                                to="/mybooking"
                            >
                                My Booking
                            </NavLink>
                        </li>

                        <li
                            style={{display: localStorage.getItem('role') ? "block" : "none"}}
                        >
                            <NavLink
                                to={localStorage.getItem('role') === 'hotel' ? "/profile-hotel" : "/profile-customer"}
                                className={activeLink}
                            >
                                {localStorage.getItem('role') ? 'Profile' : 'gagal'}
                            </NavLink>
                        </li>

                        <li style={{display: (document.cookie) ? "block" : "none"}} className='nav-item'>
                            <Dropdown className="btn-group px-3">
                                <Dropdown.Toggle data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-md dropdown-toggle" style={{backgroundColor: "#ffd60a", borderRadius: "25px", color:"black"}} id="dropdown-basic">
                                    {username}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={logout}><span><i class="fa-solid fa-right-from-bracket"></i>Logout</span></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar;