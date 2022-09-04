import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{
          x: [-100, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello I am</p>
              <h1 className="head-text">Ishraque</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Full Stack Software Developer</p>

            {/* <p className="p-text">Hello I am</p> */}
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{ duration: 5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.Ishraque} alt="" />

        <motion.img
          whileInView={{
            scale: [0, 1],
          }}
          transition={{ duration: 5, ease: 'easeInOut' }}
          className="overlay_circle"
          src={images.circle}
          alt="circle"
        ></motion.img>
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.node, images.react].map((circle, index) => {
          return (
            <div className="circle-cmp app__flex" key={index}>
              <img src={circle} alt="circle" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Header;
