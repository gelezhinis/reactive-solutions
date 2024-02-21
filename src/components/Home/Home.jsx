import './home.css';
import Me from '../../img/as1.jpg';

import Nav from '../Nav/Nav';

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
              Esu čia tam, kad sukurčiau internetinį tinklapį Jums ar Jūsų verslui. Visi mano darbai pagrįsti paprastumu ir praktiškumu, bei moderniu dizainu, kad vartotojo patirtis būtų pati geriausia. Tinklapius kuriu naudodamas patikimas programavimo kalbas bei jų karkasus ir bibliotekas. Galiu redaguoti, patobulinti ar atnaujinti ir esamus internetinius tinklapius. 
            </p>
            <div className="slides-wrapper">
              <div className="slides">
                <div className="slide">
                  <h2 className="home-title-item">Internetiniai Tinklapiai</h2>
                </div>
                <div className="slide">
                  <h2 className="home-title-item">Grafinis Dizainas</h2>
                </div>
                <div className="slide">
                  <h2 className="home-title-item">Mobiliosios Aplikacijos</h2>
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
}

export default Home;