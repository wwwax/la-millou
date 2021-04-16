import styles from './Tooltip.module.css';

const Tooltip = ({ name, brand, ico }) => {
  return (
    <div className={styles.tooltip}>
      {/* <div className={styles.tooltipBtn}>
        <img className={styles.tooltipIco} src={ico} alt='product ico' />
      </div> */}

      <div className={styles.pulseButton}></div>

      <div className={styles.tooltipContent}>
        <div className={styles.name}>{name}</div>
        <div className={styles.brand}>{brand}</div>
      </div>
    </div>
  );
};

export default Tooltip;
