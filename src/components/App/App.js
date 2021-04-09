import { useState, useEffect } from 'react';
import Header from '../Header';
import Intro from '../Intro';
// import SliderMobile from '../SliderMobile';
// import SliderDesktop from '../SliderDesktop';
import Slider from '../Slider';
import Products from '../Products';
import NewsLetter from '../NewsLetter';
import Footer from '../Footer';

import styles from './App.module.css';

import useWindowSize from '../../hooks/useWindowSize';

const App = () => {
  const [isMobile, setIsMobile] = useState(true);
  const size = useWindowSize();

  return (
    <div className={styles.wrapper}>
      {isMobile ? null : <Slider />}
      <div className={styles.wrapper_inner}>
        <Header />
        <Intro />
        {isMobile ? <Slider /> : null}
        <Products />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
