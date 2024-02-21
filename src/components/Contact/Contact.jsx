import React, { useRef, useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

import Nav from '../Nav/Nav';

import './contact.css';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [containerHeight, setContainerHeight] = useState(0);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const appRef = useRef(null);

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  useEffect(() => {
    if (appRef.current) {
      setContainerHeight(appRef.current.scrollHeight);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        USER_ID
      )
      .then((result) => {
        console.log(result.text);
        setDone(true);
        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div
      ref={appRef}
      style={{
        height: `${containerHeight}px`,
      }}
      className="background"
    >
      <Nav />
      <div className="contact">
        <div
          className="contact-bg"
          style={{
            backgroundColor: !darkMode
              ? 'rgb(13, 96, 99)'
              : 'rgb(46, 148, 151)',
            height: `${containerHeight}px`,
          }}
        ></div>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1 className="contact-title">Aptarkime Jūsų užsakymą.</h1>
            <div className="contact-info">
              <div className="contact-info-item">
                <FontAwesomeIcon icon={faAddressBook} />
                <h5>Linas Geležauskas</h5>
              </div>
              <div className="contact-info-item">
                <FontAwesomeIcon icon={faPhone} />
                <h5>+370 610 00900</h5>
              </div>
              <div className="contact-info-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <h5>linas.developer@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <p className="contact-desc">
              <b>Koks būtų Jūsų pageidavimas?</b> Mielai prašome susisiekti su
              manimi bet kuriuo metu ir mes aptarsime viską kas Jus domina.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{
                  borderBottomColor: darkMode && '#999',
                  color: darkMode && '#fff',
                }}
                type="text"
                name="user_name"
                placeholder="Vardas"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                style={{
                  borderBottomColor: darkMode && '#999',
                  color: darkMode && '#fff',
                }}
                type="text"
                name="user_subject"
                placeholder="Tema"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <input
                style={{
                  borderBottomColor: darkMode && '#999',
                  color: darkMode && '#fff',
                }}
                type="text"
                name="user_email"
                placeholder="El. Paštas"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                style={{
                  borderColor: darkMode && '#999',
                  color: darkMode && '#fff',
                }}
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                style={{
                  backgroundColor: !darkMode
                    ? 'rgb(13, 96, 99)'
                    : 'rgb(46, 148, 151)',
                }}
              >
                Siųsti
              </button>
              {done && (
                <p className="thank">
                  Ačiū kad kreipiatės, atsakysiu Jums kaip įmanoma greičiau.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
