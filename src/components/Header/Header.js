import logo from '../../img/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header_inner}>
          <img className={styles.logo} src={logo} alt='site logo' />
        </div>
      </div>
    </div>
  );
};

export default Header;
