import Button from '../Button';
import styles from './Products.module.css';

const Products = () => {
  return (
    <div className={styles.section}>
      <div className='container'>
        <p className={styles.text}>
          <span className={styles.bold}>Для нас важливо знати,</span> які продукти ви б
          хотіли мати змогу придбати в першу чергу. Виберіть будь-ласка зі списку ті
          продукти LaMillou, які повинні бути в продажі на вашу думку як найшвидше
        </p>

        <form className={styles.form}>
          <div className={styles.productList}>
            <div className={styles.productListItem}>
              <input className={styles.input} type='checkbox' id='blankets' />
              <label className={styles.label} htmlFor='blankets'>
                ковдри
              </label>
            </div>

            <div className={styles.productListItem}>
              <input className={styles.input} type='checkbox' id='baby-clothes' />
              <label className={styles.label} htmlFor='baby-clothes'>
                дитячий одяг
              </label>
            </div>

            <div className={styles.productListItem}>
              <input className={styles.input} type='checkbox' id='pillows' />
              <label className={styles.label} htmlFor='pillows'>
                подушки
              </label>
            </div>

            <div className={styles.productListItem}>
              <input className={styles.input} type='checkbox' id='towels-bathrobes' />
              <label className={styles.label} htmlFor='towels-bathrobes'>
                рушники і халати
              </label>
            </div>

            <div className={styles.productListItem}>
              <input className={styles.input} type='checkbox' id='bags-backpacks' />
              <label className={styles.label} htmlFor='bags-backpacks'>
                торби і рюкзаки
              </label>
            </div>
          </div>

          <Button text='Надіслати' />
        </form>
      </div>
    </div>
  );
};

export default Products;
