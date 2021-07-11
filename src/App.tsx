import React from 'react';
import './App.scss';
import ButtonComp from './shared/components/buttonComp/buttonComp';
import FooterBar from './shared/components/footerBar/footerBar';
import MiddleSimpleComp from './shared/components/middleSimpleComp/middleSimpleComp';
import AccordionComp from './shared/components/accordionComp/accordionComp';
import CardsComp from './shared/components/cardsComp/cardsComp';
import TabsBarComp from './shared/components/tabsBarComp/tabsBarComp';
import illustrationLogo from './assets/illustration-hero.svg';
import TopBar from './shared/components/topBar/topBar';
import Contactus from './shared/components/contactus/contactus';
function App() {
  const moreInfo = () => { }
  return (
    <>
      <TopBar></TopBar>

      {/* Main section */}
      <div className="tabsContainer textImgSection">
        <div className="testi-content grid-2 grid-dense">
          <div className="column-1 bookmarkText">
            <MiddleSimpleComp
              sectionTitle='A Simple Bookmark Manager'
              sectionId='mainBookmark'
              isContainerCentered={false}>
            </MiddleSimpleComp>
            <div className="container mar-top-15 pad-1">
              <ButtonComp
                classes="primaryBtn"
                buttonString='Get it on Chrome'
                buttonClickedFunc={moreInfo}>
              </ButtonComp>
              <ButtonComp
                classes="blackBtn mar-left-10"
                buttonString='Get it on Firefox'
                buttonClickedFunc={moreInfo}>
              </ButtonComp>
            </div>
          </div>
          <div className="column-2 image grid-col-2">
            <img src={illustrationLogo} alt="" className="img-element" />
            <div className="bigrect"></div>
          </div>
        </div>
      </div>
      <div className="marginComp">
        <MiddleSimpleComp
          sectionTitle="Features"
          sectionId="features">
        </MiddleSimpleComp>
      </div>
      <div className="tabsContainer textImgSection">
        <TabsBarComp></TabsBarComp>
      </div>
      <div className="marginComp">
        <MiddleSimpleComp
          sectionTitle="Download the extension"
          sectionId="extebsions">
        </MiddleSimpleComp>
      </div>
      <div className="cardsContainer">
        <CardsComp></CardsComp>
      </div>
      <div className="marginComp">
        <MiddleSimpleComp
          sectionTitle="Frequently Asked Questions"
          sectionId="faqs">
        </MiddleSimpleComp>
      </div>
      <AccordionComp></AccordionComp>
      <Contactus></Contactus>
      <FooterBar></FooterBar>
    </>
  );
}

export default App;
