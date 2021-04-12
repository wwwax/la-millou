import Header from '../Header';
import Intro from '../Intro';
import Slider from '../Slider';
import Products from '../Products';
import NewsLetter from '../NewsLetter';
import Footer from '../Footer';

import useWindowSize from '../../hooks/useWindowSize';

import styles from './App.module.css';

const App = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024;

  return (
    <div className={styles.wrapper}>
      {!isMobile && <Slider />}
      <div className={styles.wrapper_inner}>
        <Header />
        <Intro />
        {isMobile && <Slider />}
        <Products />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
