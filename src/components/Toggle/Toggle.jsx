import {useContext} from 'react';

import './toggle.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { ThemeContext } from '../../context';

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({type: "TOGGLE"});
  }

  return (
    <div className="toggle" style={{backgroundColor: darkMode && "#222"}}>
      <img src={Sun} alt="sun" className="toggle-icon" />
      <img src={Moon} alt="moon" className="toggle-icon" />
      <div  className="toggle-button" onClick={handleClick} style={{left: darkMode ? 0 : 25, backgroundColor: darkMode && "rgb(46, 148, 151)"}} ></div>
    </div>
  );
}

export default Toggle;