import React, { useState, useEffect } from 'react';
import { images } from '../../constants';
import './About.scss';
import { motion } from 'framer-motion';

const About = () => {
  const about = [
    {
      title: 'Web and Cloud Development',
      description: 'Im Good at Web and Cloud Development',
      imageUrl: images.about01,
    },
    {
      title: 'Frontend Development',
      description: 'Im Good at Web and Cloud Development',
      imageUrl: images.about02,
    },
    {
      title: 'Backend  Development',
      description: 'Im Good at Web and Cloud Development',
      imageUrl: images.about03,
    },
    {
      title: 'MERN Stack Development',
      description: 'Im Good at Web and Cloud Development',
      imageUrl: images.about04,
    },
  ];
  return (
    <div className="app__about" id="about">
      <h1 className="head-text">I know That Good App means Good Business</h1>
      <div className="app__profiles">
        {about.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transform={{ duration: 0.5, type: 'tween' }}
              className="app__profiles-items"
              key={about.title + index}
            >
              <img src={about.imageUrl} alt={about.title} />
              <h2 style={{ marginTop: '20px' }} className="bold-text">
                {about.title}
              </h2>
              <h2 style={{ marginTop: '10px' }} className="p-text">
                {about.description}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
