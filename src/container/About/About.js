import React, { useState, useEffect } from 'react';
import { AppWrap } from '../../Wrapper';
import './About.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
const About = () => {
  const [about, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data, error) => {
      console.log(error);
      setAbouts(data);
    });
  }, []);

  return (
    <div className="app__about" id="about">
      <h1 className="head-text">I know That Good App means Good Business</h1>
      <div className="app__profiles">
        {about.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              // whileHover={{ scale: 1.05 }}
              transform={{ duration: 0.5, type: 'tween' }}
              className="app__profiles-items"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
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

export default AppWrap(About, 'about');
