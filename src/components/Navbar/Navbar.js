import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`} onClick={() => setToggle(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-work">
        <Marquee
          gradient={false}
          pauseOnHover={true}
          style={{ width: '200px' }}
          speed={49}
          delay={0.3}
        >
          <p className="p-marquee">
            PASSIONATE ABOUT CREATING UNFORGETTABLE AND BEAUTIFUL DIGITAL
            EXPERIENCES. Open for any collaborations and offers.
          </p>
        </Marquee>
        <p style={{ textAlign: 'right', fontSize: '10px', marginTop: '3px' }}>
          LET'S WORK TOGETHER!
        </p>
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{
              x: [40, 0],
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul>
              {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                <li key={item}>
                  {/* <div /> */}
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
