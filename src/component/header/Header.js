import React from 'react';
import {Switch,Route,Router,Link} from "react-router-dom";
import LogoImg from "./logo.png"
import "./header.css";

const Header = () => {
    return (
        <>
            <div className="header__container">
                <img src={LogoImg} alt="" className="header__logo"/>
                <nav className="header__nav">
                    <Link to="/" className="header__link">
                        <a>
                            Home
                        </a>
                    </Link>
                    <Link to="/" className="header__link">
                        <a>
                            About us
                        </a>
                    </Link>
                    <Link to="/" className="header__link">
                        <a>
                            Portfolio
                        </a>
                    </Link>
                    <Link to="/" className="header__link">
                        <a>
                            Management Profile
                        </a>
                    </Link>
                    <Link to="/" className="header__link">
                        <a>
                            Blog
                        </a>
                    </Link>
                </nav>
                <button className="header__btn">
                    Contact Us
                </button>
            </div>
        </>
    );
};

export default Header;