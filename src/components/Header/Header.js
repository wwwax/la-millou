import logo from '../../img/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt='site logo' />
    </div>
  );
};

export default Header;
