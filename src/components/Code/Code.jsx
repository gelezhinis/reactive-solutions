import React, { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../context";

import { useInView } from "react-intersection-observer";

// something

import Nav from "../Nav/Nav";

import "./code.css";
import HtmlImg from "../../img/badges/html.png";
import JSImg from "../../img/badges/js.png";
import ReactImg from "../../img/badges/react.png";
import NativeImg from "../../img/badges/react-native.png";
import ReduxImg from "../../img/badges/redux.png";
import GitImg from "../../img/badges/git.png";
import VueImg from "../../img/badges/vue.png";
import ExpressImg from "../../img/badges/express.png";
import ApolloImg from "../../img/badges/apollo.png";
import FirebaseImg from "../../img/badges/firebase.png";
import GraphImg from "../../img/badges/graphql.png";
import MysqlImg from "../../img/badges/mysql.png";
import MongoImg from "../../img/badges/mongodb.png";
import PostgresImg from "../../img/badges/postgres.png";
import NextImg from "../../img/badges/next.png";
import NodeImg from "../../img/badges/node.png";
import NginxImg from "../../img/badges/nginx.png";

import CodeImg from "../../img/code.jpg";

const Code = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { ref: ref1, inView: firstTitle } = useInView();
  const { ref: ref2, inView: firstText } = useInView();

  const appRef = useRef(null);

  useEffect(() => {
    const setBodyBackgroundSize = () => {
      document.body.style.backgroundSize = `100% ${appRef.current.scrollHeight}px`;
    };

    setBodyBackgroundSize(); // Set background size on initial load

    const handleResize = () => {
      setBodyBackgroundSize(); // Update background size on window resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  return (
    <div
      ref={appRef}
      // style={{
      //   height: `${containerHeight}px`,
      // }}
      className="background"
    >
      <Nav />
      <div className="container">
        <div className="code">
          <div className="code-left">
            <div
              className="code-card bg"
              style={{
                backgroundColor: !darkMode
                  ? "rgb(13, 96, 99)"
                  : "rgb(46, 148, 151)",
              }}
            >
              <div className="code-card">
                <img src={CodeImg} alt="" className="code-image" />
              </div>
            </div>
          </div>
          <div className="code-right">
            <h1
              className={"code-title " + (firstTitle ? "animate-title" : "")}
              ref={ref1}
            >
              Programavimo Kalba
            </h1>
            <div className={firstText ? "animate-first-text" : ""} ref={ref2}>
              <p className="code-sub">
                Pagrindinė mano projektuose naudojama programavimo kalba -
                JavaScript.
              </p>
              <p className="code-desc">
                Javascript yra standartinė internetinių tinklapių programavimo
                kalba, skirta jų sąveikai ir automatizavimui. Ji skirta tiek
                "kliento pusės" (client-side, front-end) tiek "serverio-pusės"
                (server-side, back-end) programavimui. Kartu su JavaScript
                naudoju įvairias papildomas bibliotekas, kad būtų suteikta pati
                geriausia patirtis galutiniam tinklapio vartotojui. Kliento
                pusėje dažnai naudoju React biblioteką, kuri yra galinga ir
                lanksti, kad būtų lengviau kurti daugialypius tinklapius. Kartu
                su React naudoju Redux, tai padeda valdyti duomenų srautą bei
                tvarkyti sudėtingas aplikacijų būsenas ir palaiko jų valdymą
                skaidriu ir efektyviu būdu. Serverio pusėje naudoju Node.js
                kartu su Express.js, kad būtų galima kurti dinamiškus tinklapius
                su serverio pusės logika ir užtikrinti saugų duomenų srautą tarp
                vartotojo ir duomenų bazės.
                {/*Jei reikia mobiliųjų aplikacijų,
                naudoju React Native, kad tinklapio funkcionalumas būtų lengviau
                pritaikomas mobiliajai platformai.*/}
              </p>
            </div>
          </div>
        </div>
        <div className="badges-container">
          <div className="badges">
            <div className="badge">
              <img src={HtmlImg} alt="html" />
            </div>
            <div className="badge sm-h">
              <img src={JSImg} alt="javascript" />
            </div>
            <div className="badge">
              <img src={ReactImg} alt="react" />
            </div>
            <div className="badge sm-h">
              <img src={ReduxImg} alt="redux" />
            </div>
            <div className="badge md-w">
              <img src={NextImg} alt="nextjs" />
            </div>
            <div className="badge">
              <img src={VueImg} alt="vue" />
            </div>
            <div className="badge">
              <img src={NativeImg} alt="react-native" />
            </div>
            <div className="badge sm-w">
              <img src={GitImg} alt="git" width={80} />
            </div>
            <div className="badge md-w">
              <img src={NodeImg} alt="nodejs" />
            </div>
            <div className="badge sm-h">
              <img src={ExpressImg} alt="express" />
            </div>
            <div className="badge sm-h">
              <img src={GraphImg} alt="graphql" />
            </div>
            <div className="badge sm-h">
              <img src={ApolloImg} alt="apollo" />
            </div>
            <div className="badge lg-w">
              <img src={MongoImg} alt="mongodb" />
            </div>
            <div className="badge lg-w">
              <img src={FirebaseImg} alt="firebase" />
            </div>
            <div className="badge sm-w">
              <img src={MysqlImg} alt="mysql" />
            </div>
            <div className="badge sm-h">
              <img src={PostgresImg} alt="postgres" />
            </div>
            <div className="badge">
              <img src={NginxImg} alt="nginx" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
