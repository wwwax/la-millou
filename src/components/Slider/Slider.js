import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.css';

import img_1 from '../../img/slider/image-1.jpg';
import img_2 from '../../img/slider/image-2.jpg';
import img_3 from '../../img/slider/image-3.jpg';

const sliderItems = [
  {
    id: 1,
    src: img_1,
    name: 'Torba',
    brand: 'Dolce Vita',
  },
  {
    id: 2,
    src: img_2,
    name: 'Shirt',
    brand: 'Dolce Gabbana',
  },
  {
    id: 3,
    src: img_3,
    name: 'Hat',
    brand: 'Louis Vuitton',
  },
];

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
        {sliderItems.map((item) => (
          <div className={styles.sliderItem} key={item.id}>
            <img className={styles.sliderImage} src={item.src} alt={item.brand} />
            <div className={styles.tooltip}>
              <div className={styles.pulseButton}></div>
              <div className={styles.tooltipContent}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.brand}>{item.brand}</div>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
