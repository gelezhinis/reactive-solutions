import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../../context';
import './nav.css';

const LinksNav = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <NavLink to="/contact" className={(navigationData) => navigationData.isActive ? 'unselected' : ''}>
        <div
          className="pie pie1"
          onClick={() => document.body.classList.remove('active')}
        >
          <div className="pie-color pie-color1">
            <div className="pie-contact">
                Kontaktai
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink to="/code" className={(navigationData) => navigationData.isActive ? 'unselected' : ''}>
        <div
          className="pie pie2"
          onClick={() => document.body.classList.remove('active')}
        >
          <div className="pie-color pie-color2">
            <div className="pie-code">
                Įrankiai
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink to="/" className={(navigationData) => navigationData.isActive ? 'unselected' : ''}>
        <div
          className="pie pie3"
          onClick={() => document.body.classList.remove('active')}
        >
          <div className="pie-color pie-color3">
            <div className="pie-home">
              Apie<span>Mane</span>
            </div>
          </div>
        </div>
      </NavLink>
      <div
        className="menu"
        onClick={() => document.body.classList.toggle('active')}
        style={{backgroundColor: darkMode && "#5e5e5e"}}
      >
        <svg
          className="hamburger"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <g
            fill="none"
            stroke="#000"
            strokeWidth="7.999"
            strokeLinecap="round"
          >
            <path d="M 55,26.000284 L 24.056276,25.999716" />
            <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
            <path d="M 45,73.999716 L 75.943724,74.000284" />
            <path d="M 75.943724,26.000284 L 45,25.999716" />
            <path d="M 24.056276,73.999716 L 55,74.000284" />
          </g>
        </svg>
      </div>
    </>
  );
};

export default LinksNav;
