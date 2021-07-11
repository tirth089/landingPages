// import React, { useState } from 'react';
import './cardsComp.scss';
import chromeLogo from '../../../assets/logo-chrome.svg';
import ButtonComp from '../buttonComp/buttonComp';
const CardsComp = ({ logo, cardTitle }: any) => {
    const moreInfo = () => {}
    return (
        <div className="cards">
            <div className="card-wrap">
                <div className="card">
                    <div className="card-content z-index">
                        <img src={chromeLogo} className="icon" />
                        <h3 className="title-sm">Add to Chrome</h3>
                        <p className="text textColor">
                            Minimum Version v62
                        </p>
                        <hr className="dashedLine"></hr>
                        <ButtonComp
                            classes="primaryBtn fontSize-13"
                            buttonString='Add & Install Extension'
                            buttonClickedFunc={moreInfo}>
                        </ButtonComp>
                    </div>
                </div>
            </div>
            <div className="card-wrap second-card">
                <div className="card">
                    <div className="card-content z-index">
                        <img src={chromeLogo} className="icon" />
                        <h3 className="title-sm">Add to Firefox</h3>
                        <p className="text textColor">
                            Minimum Version v62
                        </p>
                        <hr className="dashedLine"></hr>
                        <ButtonComp
                            classes="primaryBtn fontSize-13"
                            buttonString='Add & Install Extension'
                            buttonClickedFunc={moreInfo}>
                        </ButtonComp>
                    </div>
                </div>
            </div>
            <div className="card-wrap third-card">
                <div className="card">
                    <div className="card-content z-index">
                        <img src={chromeLogo} className="icon" />
                        <h3 className="title-sm">Add to Opera</h3>
                        <p className="text textColor">
                            Minimum Version v62
                        </p>
                        <hr className="dashedLine"></hr>
                        <ButtonComp
                            classes="primaryBtn fontSize-13"
                            buttonString='Add & Install Extension'
                            buttonClickedFunc={moreInfo}>
                        </ButtonComp>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardsComp;