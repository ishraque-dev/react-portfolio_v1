import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap } from '../../Wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const testimonialQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialQuery).then((data) => {
      setTestimonial(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const test = testimonial[currentIndex];
  return (
    <div className="app__testimonial">
      <h1 className="head-text">Testimonials</h1>
      {testimonial?.length && (
        <>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__testimonial-item app__flex"
          >
            <img
              src={urlFor(testimonial[currentIndex].imgurl)}
              alt="testimonial"
            />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-test">{test.company}</h5>
              </div>
              <div className="app__testimonial-btn app__flex">
                <div
                  className="app__flex"
                  onClick={() =>
                    handleClick(
                      currentIndex === 0
                        ? testimonial.length - 1
                        : currentIndex - 1
                    )
                  }
                >
                  <HiChevronLeft />
                </div>
                <div
                  className="app__flex"
                  onClick={() =>
                    handleClick(
                      currentIndex === testimonial.length - 1
                        ? 0
                        : currentIndex + 1
                    )
                  }
                >
                  <HiChevronRight />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand.name}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Testimonial, 'testimonial');
