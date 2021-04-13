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
            <label className={styles.privacyPolicyLabel}>
              <input className={styles.privacyPolicyCheckbox} type='checkbox' />
              <span className={styles.checkmark}></span>
              Більше інформації про обробку даних можна знайти в нашій{' '}
              <span className={styles.labelBold}>Політиці конфіденційності.</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
