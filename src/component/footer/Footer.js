import React from 'react';
import "./footer.css"
import LogoFooterImg from "../../img/LogoFooter.png";

import TwitterImg from "../../img/Twitter.svg";
import FacebookImg from "../../img/Facebook.svg";
import InstagramImg from "../../img/Instagram.svg";
import InImg from "../../img/LinkedIN.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__about_block">
                <p className="footer__title">About us</p>
                <img className="footer__logo" src={LogoFooterImg} alt=""/>
                <p className="w">Spatium Innovation Hub is a thinking company on a mission to connect people and businesses with meaningful innovation.</p>
                <div className="footer__social_media">
                    <img src={TwitterImg} alt=""/>
                    <img src={FacebookImg} alt=""/>
                    <img src={InstagramImg} alt=""/>
                    <img src={InImg} alt=""/>
                </div>
            </div>
            <div className="footer__resources_block">
                <p className="footer__title">Resources</p>
                <div className="footer__links">
                    <a href="">Help Center</a>
                    <a href="">Partners</a>
                    <a href="">Gas-Free Marketplace</a>
                    <a href="">Docs</a>
                    <a href="">Utility</a>
                </div>
            </div>
            <div className="footer__services_block">
                <p className="footer__title">Services</p>
                <div className="footer__links">
                    <a href="">Software Development</a>
                    <a href="">Identity Management & Verification</a>
                    <a href="">IT Consulting & Advisory Services</a>
                    <a href="">UI/UX Design</a>
                </div>
            </div>
            <div className="footer__links_block">
                <p className="footer__title">Quick links</p>
                <div className="footer__links">
                    <a href="">Careers</a>
                    <a href="">Resources</a>
                    <a href="">Products</a>
                    <a href="">Blog</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;