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
    imageObjectPosition: 'top',
    tooltips: [
      {
        id: 1,
        name: 'Torba',
        brand: 'Dolce Vita',
        position: {
          left: '50%',
          top: '50%',
        },
      },
    ],
  },

  {
    id: 2,
    src: img_2,
    imageObjectPosition: 'bottom',
    tooltips: [
      {
        id: 1,
        name: 'Big John',
        brand: 'Navy Jungle',
        position: {
          left: '70%',
          top: '50%',
        },
      },
      {
        id: 2,
        name: 'Kocyk średniaka',
        brand: 'Navy Jungle',
        position: {
          left: '30%',
          top: '80%',
        },
      },
      {
        id: 3,
        name: 'Koc narzuta',
        brand: 'Navy Jungle',
        position: {
          left: '80%',
          top: '80%',
        },
      },
    ],
  },

  {
    id: 3,
    src: img_3,
    imageObjectPosition: 'center',
    tooltips: [
      {
        id: 1,
        name: 'Bambusowa Kura Babci Dany',
        brand: 'Boho Palms Light',
        position: {
          left: '35%',
          top: '40%',
        },
      },
      {
        id: 2,
        name: 'Bamboo Bedding Medium',
        brand: 'Boho Girl',
        position: {
          left: '55%',
          top: '60%',
        },
      },
      {
        id: 3,
        name: 'Organic Jersey Collection - KOMPLET POŚCIELI "M" 80X100',
        brand: 'Boho Girl',
        position: {
          left: '80%',
          top: '70%',
        },
      },
    ],
  },
];

const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
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
                    <div className={styles.name}>{tooltipItem.name}</div>
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
