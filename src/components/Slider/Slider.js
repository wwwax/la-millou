import SlickSlider from 'react-slick';
import Tooltip from '../Tooltip';
import { sliderItems } from './config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.css';

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
    pauseOnHover: true,
  };

  return (
    <div className={styles.slider}>
      <SlickSlider {...settings}>
        {sliderItems.map((item) => {
          return (
            <div className={styles.sliderItem} key={item.id}>
              <img
                style={{ objectPosition: item.imageObjectPosition }}
                className={styles.sliderImage}
                src={item.src}
                alt=''
              />

              {item.tooltips.map((tooltip) => (
                <Tooltip key={tooltip.id} tooltip={tooltip} />
              ))}
            </div>
          );
        })}
      </SlickSlider>
    </div>
  );
};

export default Slider;
