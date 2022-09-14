import React, { useState, useRef } from 'react';
import './Footer.scss';
import { images } from '../../constants';
import { AppWrap } from '../../Wrapper';

import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(false);
  const form = useRef();
  const button = useRef();
  // Button animation
  useEffect(() => {
    console.log(animate);
    button.current.classList.remove('animate');

    button.current.classList.add('animate');
    setTimeout(function () {
      button.current.classList.remove('animate');
    }, 700);
    return () => {
      clearTimeout(setTimeout);
    };
  }, [animate]);

  // Email sending
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        'service_htvyktf',
        'template_ol1h3x9',
        form.current,
        'j-1O-d3WhX6YWEQdM'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="app__footer">
      <h2 className="head-text">Take a Coffee and Chat With Me!</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a
            href="mailto:ahamedesrak3@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            ahamedesrak3@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a
            href="tel:+88 01798311623"
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            +88 01798311623
          </a>
        </div>

        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <form
              ref={form}
              className="app__footer-form app__flex"
              onSubmit={sendEmail}
            >
              <div className="app__flex">
                <input
                  required={true}
                  type="text"
                  className="p-text"
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className="app__flex">
                <input
                  required={true}
                  type="email"
                  className="p-text"
                  placeholder="Your Email"
                  name="email"
                />
              </div>
              <div>
                <textarea
                  required={true}
                  className="p-text"
                  name="message"
                  placeholder="Your Message"
                />
              </div>
              <button
                ref={button}
                className="p-text bubbly-button"
                type="submit"
                onClick={() => {
                  setAnimate((pre) => {
                    return !pre;
                  });
                }}
              >
                {loading ? 'Sending' : 'Send Message'}
              </button>
            </form>
          </div>
        ) : (
          <div className=" footer-text">
            <h3 className="head-text">Thank You For Getting in Touch</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppWrap(Footer, 'contact');
