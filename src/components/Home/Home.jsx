import React from "react";

import "./home.css";
import Me from "../../img/as1.jpg";

import Nav from "../Nav/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <div className="home-left">
          <div className="home-left-wrapper">
            <h2 className="home-intro">Sveiki, mano vardas</h2>
            <h1 className="home-name">Linas</h1>

            <p className="home-desc">
              Esu internetinių tinklapių kūrėjas, pasiruošęs sukurti
              šiuolaikišką ir funkcionalų tinklapį, pritaikytą Jūsų asmeniniams
              ar verslo poreikiams. Visi mano darbai pagrįsti paprastumu ir
              praktiškumu, bei moderniu dizainu, kad vartotojo patirtis būtų
              pati geriausia. Tinklapius kuriu naudodamas patikimas programavimo
              kalbas bei jų karkasus ir bibliotekas. Taip pat galiu redaguoti ar
              atnaujinti esamą internetinį tinklapį pagal Jūsų pageidavimus.
            </p>
            <div className="slides-wrapper">
              <div className="slides">
                <div className="slide">
                  <h2 className="home-title-item">Internetiniai Tinklapiai</h2>
                </div>
                <div className="slide">
                  <h2 className="home-title-item">Hostingas</h2>
                </div>
                <div className="slide">
                  <h2 className="home-title-item">Priežiūra</h2>
                </div>
                <div className="slide">
                  <h2 className="home-title-item">Internetiniai Tinklapiai</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-right">
          <img src={Me} alt="" className="home-image" />
        </div>
      </div>
    </>
  );
};

export default Home;
