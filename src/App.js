import './App.scss';
import React, { useRef } from 'react';
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Skills from './container/Skills/Skills';
import Testimonial from './container/Testimonial/Testimonial';
import Works from './container/Works/Works';
import Navbar from './components/Navbar/Navbar';
// import useWindowSize from './hooks/useWindowSize';
const App = () => {
  // const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();

  const cursor1Ref = useRef();
  // const scrollContainer = useRef();

  // // Configs
  // const data = {
  //   ease: 0.1,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0,
  // };

  // // Run scrollrender once page is loaded.

  // //Set the height of the body to the height of the scrolling div
  // const setBodyHeight = () => {
  //   document.body.style.height = `${
  //     scrollContainer.current.getBoundingClientRect().height
  //   }px`;
  // };
  // //set the height of the body.
  // useEffect(() => {
  //   setInterval(() => {
  //     setBodyHeight();
  //   }, 1000);
  //   return () => {
  //     setBodyHeight();
  //     clearInterval(setInterval);
  //   };
  // }, []);

  // // Scrolling
  // const skewScrolling = () => {
  //   //Set Current to the scroll position amount
  //   data.current = window.scrollY;
  //   // Set Previous to the scroll previous position
  //   data.previous += (data.current - data.previous) * data.ease;
  //   // Set rounded to
  //   data.rounded = Math.round(data.previous * 100) / 100;

  //   // Difference between
  //   const difference = data.current - data.rounded;
  //   const acceleration = difference / size.width;
  //   const velocity = +acceleration;
  //   const skew = velocity * 20.5;

  //   //Assign skew and smooth scrolling to the scroll container
  //   scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

  //   //loop vai raf
  //   requestAnimationFrame(() => skewScrolling());
  // };

  // requestAnimationFrame(() => skewScrolling());

  // ==================================
  // cursor animations

  document.addEventListener('mousemove', (e) => {
    document.querySelector('.cursor1').style.left = `${e.clientX}px`;
    document.querySelector('.cursor1').style.top = `${e.clientY}px`;
  });

  return (
    <div ref={app} className="app">
      <span ref={cursor1Ref} className="cursor1"></span>
      <Navbar />
      {/* <div ref={scrollContainer} className="scroll-container"> */}
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default App;
