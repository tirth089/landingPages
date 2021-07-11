import React, { useState } from 'react';
import ButtonComp from '../buttonComp/buttonComp';
import './topBar.scss';
import bookmarkLogo from '../../../assets/logo-bookmark.svg';
import closeLogo from '../../../assets/icon-close.svg';
import bookmarkWhiteLogo from '../../../assets/logo-bookmark_white.svg';
import closeWhiteLogo from '../../../assets/icon-close-white.svg';
import hamburgerLogo from '../../../assets/icon-hamburger.svg';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    fullList: {
        width: 'auto',
    }
});

const TopBar = () => {
    const classes = useStyles();
    const [showHamburgerIcon, setShowHamburgerIcon] = useState(true);
    const loginFunc = () => { }
    const openHamburger = () => {
        setShowHamburgerIcon(!showHamburgerIcon);
    }
    const toggleDrawer = () => () => {
        setShowHamburgerIcon(!showHamburgerIcon);
    };

    const list = () => (
        <div
            className={classes.fullList}
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
        >
            <List className="pad-10">
                <li className="logo displayFlex">
                    <img className="imgheight" src={bookmarkWhiteLogo} alt="" />
                    <img className="imgwidth" src={showHamburgerIcon ? hamburgerLogo : closeWhiteLogo} alt="" /></li>
                {['Features', 'Pricing', 'Contact'].map((text, index) => (
                    <>
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                        <hr className="hrline"></hr>
                    </>
                ))}
                <div className="loginBtn">
                <ButtonComp
                    classes="hamburgerBtn"
                    buttonString='LOGIN'
                    buttonClickedFunc={loginFunc}>
                </ButtonComp>
                </div>
            </List>
        </div>
    );

    return (
        <header>
            <nav>
                <ul className={showHamburgerIcon ? "menu" : "menu"}>
                    <li className="logo"><img className={showHamburgerIcon ? '' : 'display-hide'} src={bookmarkLogo} alt="" /></li>
                    <li className="item"> <a href="#features">Features</a></li>
                    <li className="item"><a href="#prices">Prices</a></li>
                    <li className="item"><a href="#contact">Contact</a></li>
                    <li className="item">
                        <ButtonComp
                            classes="dangerBtn"
                            buttonString='LOGIN'
                            buttonClickedFunc={loginFunc}>
                        </ButtonComp>
                    </li>
                    <li className="toggle">
                        <a onClick={openHamburger}>
                            <img className={showHamburgerIcon ? '' : 'display-hide'} src={showHamburgerIcon ? hamburgerLogo : closeLogo} alt="" />
                            <SwipeableDrawer
                                anchor='top'
                                open={!showHamburgerIcon}
                                onClose={toggleDrawer()}
                                onOpen={toggleDrawer()}
                            >
                                {list()}
                            </SwipeableDrawer>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default TopBar