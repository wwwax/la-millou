import { useState } from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ name, brand, ico }) => {
  const [showTooltipContent, setShowTooltipContent] = useState(false);

  const toggleTooltipContent = () => {
    console.log('click');
    setShowTooltipContent((prev) => !prev);
  };

  return (
    <div className={styles.tooltip}>
      <div className={styles.tooltipBtn} onClick={toggleTooltipContent}>
        <img className={styles.tooltipIco} src={ico} alt='product ico' />
      </div>

      {showTooltipContent && (
        <div className={styles.tooltipContent}>
          <div className={styles.name}>{name}</div>
          <div className={styles.brand}>{brand}</div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
