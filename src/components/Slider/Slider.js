import SlickSlider from 'react-slick';
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
        {sliderItems.map((item) => (
          <div className={styles.sliderItem} key={item.id}>
            <img
              style={{ objectPosition: item.imageObjectPosition }}
              className={styles.sliderImage}
              src={item.src}
              alt=''
            />

            {item.tooltips.map((tooltipItem) => {
              return (
                <div
                  className={styles.tooltip}
                  style={{
                    left: tooltipItem.position.left,
                    top: tooltipItem.position.top,
                  }}
                  key={tooltipItem.id}>
                  <div className={styles.pulseButton}></div>
                  <div className={styles.tooltipContent}>
                    <a
                      className={styles.name}
                      href={tooltipItem.productLink}
                      target='_blank'
                      rel='noopener noreferrer'>
                      {tooltipItem.name}
                    </a>
                    <div className={styles.brand}>{tooltipItem.brand}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
