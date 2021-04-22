import { useState } from 'react';
import Button from '../Button';
import ThankYou from '../ThankYou';
import styles from './Products.module.css';

const products = [
  {
    id: 'blankets',
    name: 'ковдри',
  },
  {
    id: 'baby-clothes',
    name: 'дитячий одяг',
  },
  {
    id: 'pillows',
    name: 'подушки',
  },
  {
    id: 'towels-bathrobes',
    name: 'рушники і халати',
  },
  {
    id: 'bags-backpacks',
    name: 'торби і рюкзаки',
  },
];

const Products = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <div className={styles.section}>
      <div className='container'>
        <p className={styles.text}>
          <span className={styles.bold}>Для нас важливо знати,</span> які продукти ви б
          хотіли мати змогу придбати в першу чергу. Виберіть будь-ласка зі списку ті
          продукти LaMillou, які повинні бути в продажі на вашу думку як найшвидше
        </p>

        {!isFormSubmitted ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.productList}>
              {products.map((product) => (
                <div className={styles.productListItem} key={product.id}>
                  <input className={styles.input} type='checkbox' id={product.id} />
                  <label className={styles.label} htmlFor={product.id}>
                    {product.name}
                  </label>
                </div>
              ))}
            </div>

            <Button text='Надіслати' />
          </form>
        ) : (
          <ThankYou text='Дякую за участь у голосуванні. До зустрічі!' />
        )}
      </div>
    </div>
  );
};

export default Products;
