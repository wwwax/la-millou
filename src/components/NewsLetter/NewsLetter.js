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
          <div className={styles.registration}>
            <input className={styles.registrationInput} type='text' />
            <Button text='Зареєструйтесь' />
          </div>

          <div className={styles.privacyPolicy}>
            <input className={styles.privacyPolicyInput} type='checkbox' id='policy' />
            <label className={styles.privacyPolicyLabel} htmlFor='policy'>
              Більше інформації про обробку даних можна знайти в нашій Політиці
              конфіденційності.
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
