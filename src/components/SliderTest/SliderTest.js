import Tooltip from '../Tooltip';

import styles from './SliderTest.module.css';

import img_1 from '../../img/slider/image-1.jpg';
import ico_1 from '../../img/bag.svg';

const SliderTest = () => {
  return (
    <div className={styles.sliderTest}>
      <div className={styles.item}>
        <img className={styles.itemImg} src={img_1} alt='torba' />
        <Tooltip name='Torba' brand='Dolce Vita' ico={ico_1} />
      </div>
    </div>
  );
};

export default SliderTest;
