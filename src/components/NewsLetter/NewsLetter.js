import { useState } from 'react';
import ThankYou from '../ThankYou';
import Button from '../Button';
import styles from './NewsLetter.module.css';

const NewsLetter = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [emailInputText, setEmailInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailInputText.trim().length === 0) {
      alert('Введіть будь ласка email!');
      return;
    }

    setIsFormSubmitted(true);
  };

  const handleChange = (e) => {
    setEmailInputText(e.target.value);
  };

  return (
    <div className={styles.section}>
      <div className='container'>
        <div className={styles.text}>
          Залишіть свій поштовий адрес{' '}
          <span className={styles.bold}>та використайте 5% знижки</span> на своє перше
          замовлення
        </div>

        {!isFormSubmitted ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.registration}>
              <input
                className={styles.registrationInput}
                type='text'
                onChange={handleChange}
              />
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
        ) : (
          <ThankYou text='Дякуємо за підписку на розсилку. Незабаром ви отримаєте перші повідомлення від нас :)' />
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
