import React from 'react';
import OracleLogo from '../assets/img/oracle.png';
import $ from 'jquery';

function Navbar() {
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
                <a className="navbar-brand" href="/">
                    <img src={OracleLogo} alt="Oracle" width="160" height="20" />
                </a>
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto py-3">
                        <li className="nav-item">
                            <a className="nav-link active px-3" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="/register-hotel">Join Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="/login">Register|Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar;