import SlickSlider from 'react-slick';
import Tooltip from '../Tooltip';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.css';

import img_1 from '../../img/slider/image-1.jpg';
import img_2 from '../../img/slider/image-2.jpg';
import img_3 from '../../img/slider/image-3.jpg';

import ico from '../../img/bag.svg';

const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    speed: 2000,
    pauseOnHover: false,
  };

  return (
    <div className={styles.slider}>
      <SlickSlider {...settings}>
        <div className={styles.sliderItem}>
          <Tooltip name='Torba' brand='Dolce Vita' ico={ico} />
          <img className={styles.sliderImage} src={img_1} alt='' />
        </div>

        <div className={styles.sliderItem}>
          <Tooltip name='lorem ipsum dolor' brand='lorem ipsum dolor' ico={ico} />
          <img className={styles.sliderImage} src={img_2} alt='' />
        </div>

        <div className={styles.sliderItem}>
          <Tooltip name='lorem ipsum dolor' brand='lorem ipsum dolor' ico={ico} />
          <img className={styles.sliderImage} src={img_3} alt='' />
        </div>
      </SlickSlider>
    </div>
  );
};

export default Slider;
