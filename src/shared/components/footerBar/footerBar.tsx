// import React, { useState } from 'react';
import './footerBar.scss';
import bookmarkLogo from '../../../assets/logo-bookmark_blue_logo.svg';
import facebookLogo from '../../../assets/icon-facebook.svg';
import twitterLogo from '../../../assets/icon-twitter.svg';
const FooterBar = () => {
    return (
        <footer>
            <div className="navFooter">
                <div className="topContainer">
                    <div className="logo pointer">
                        <img src={bookmarkLogo} alt="" />
                        <div className="links">
                            <ul>
                                <li>
                                    <a href="#features">Features</a>
                                </li>
                                <li>
                                    <a href="#prices">Pricing</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="links social-links">
                            <ul>
                                <li>
                                    <a href="#features"><img className="social-icon" src={facebookLogo} alt="" /></a>
                                    <a href="#prices"><img  className="social-icon"src={twitterLogo} alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default FooterBar