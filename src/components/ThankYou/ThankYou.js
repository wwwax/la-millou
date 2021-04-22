import styles from './ThankYou.module.css';

const ThankYou = ({ text }) => {
  return <div className={styles.message}>{text}</div>;
};

export default ThankYou;
