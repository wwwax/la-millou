import Header from '../Header';
import Intro from '../Intro';
import SliderMobile from '../SliderMobile';
import Products from '../Products';
import NewsLetter from '../NewsLetter';
import Footer from '../Footer';
import SliderDesktop from '../SliderDesktop';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <SliderDesktop />
      <div className={styles.wrapper_inner}>
        <Header />
        <Intro />
        <SliderMobile />
        <Products />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
