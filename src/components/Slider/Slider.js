import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.css';

import img_1 from '../../img/slider/image-1.jpg';
import img_2 from '../../img/slider/image-2.jpg';
import img_3 from '../../img/slider/image-3.jpg';

const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    speed: 2000,
  };

  return (
    <div className={styles.slider}>
      <SlickSlider {...settings}>
        <div className={styles.sliderItem}>
          <img className={styles.sliderImage} src={img_1} alt='product-pic' />
        </div>

        <div className={styles.sliderItem}>
          <img className={styles.sliderImage} src={img_2} alt='product-pic' />
        </div>

        <div className={styles.sliderItem}>
          <img className={styles.sliderImage} src={img_3} alt='product-pic' />
        </div>
      </SlickSlider>
    </div>
  );
};

export default Slider;
