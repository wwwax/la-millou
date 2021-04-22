import styles from './Tooltip.module.css';

const Tooltip = ({ tooltip }) => {
  return (
    <div
      className={styles.tooltip}
      style={{
        left: tooltip.position.left,
        top: tooltip.position.top,
      }}>
      <div className={styles.pulseButton}></div>
      <div className={styles.tooltipContent}>
        <a
          className={styles.name}
          href={tooltip.productLink}
          target='_blank'
          rel='noopener noreferrer'>
          {tooltip.name}
        </a>
        <div className={styles.brand}>{tooltip.brand}</div>
      </div>
    </div>
  );
};

export default Tooltip;
