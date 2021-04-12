import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <div className={styles.text}>&copy; 2021 La Millou</div>
      </div>
    </div>
  );
};

export default Footer;
