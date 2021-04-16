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
    autoplaySpeed: 7000,
    fade: true,
    speed: 2000,
    pauseOnHover: false,
  };

  return (
    <div className={styles.slider}>
      <SlickSlider {...settings}>
        <div className={styles.sliderItem}>
          <img className={styles.sliderImage} src={img_1} alt='' />

          <div className={styles.tooltip}>
            <div className={styles.pulseButton}></div>
            <div className={styles.tooltipContent}>
              <div className={styles.name}>Torba</div>
              <div className={styles.brand}>Dolce Vita</div>
            </div>
          </div>
        </div>

        <div className={styles.sliderItem}>
          <img className={styles.sliderImage} src={img_2} alt='' />

          <div className={styles.tooltip}>
            <div className={styles.pulseButton}></div>
            <div className={styles.tooltipContent}>
              <div className={styles.name}>Shirt</div>
              <div className={styles.brand}>Dolce Gabbana</div>
            </div>
          </div>
        </div>

        <div className={styles.sliderItem}>
          <img className={styles.sliderImage} src={img_3} alt='' />

          <div className={styles.tooltip}>
            <div className={styles.pulseButton}></div>
            <div className={styles.tooltipContent}>
              <div className={styles.name}>Hat</div>
              <div className={styles.brand}>Louis Vuitton</div>
            </div>
          </div>
        </div>
      </SlickSlider>
    </div>
  );
};

export default Slider;
