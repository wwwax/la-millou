import Button from '../Button';
import styles from './NewsLetter.module.css';

const NewsLetter = () => {
  return (
    <div className={styles.section}>
      <div className='container'>
        <div className={styles.text}>
          Залишіть свій поштовий адрес{' '}
          <span className={styles.bold}>та використайте 5% знижки</span> на своє перше
          замовлення
        </div>

        <form className={styles.form}>
          <input className={styles.input} type='text' />
          <Button text='Зареєструйтесь' />
        </form>

        <div className={styles.privacyPolicy}>
          <input type='checkbox' />
          <label htmlFor=''></label>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
