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
              <input
                className={styles.input}
                type='checkbox'
                id='blankets'
                name='products'
              />
              <label className={styles.label} for='blankets'>
                ковдри
              </label>
            </div>

            <div className={styles.productListItem}>
              <input
                className={styles.input}
                type='checkbox'
                id='baby-clothes'
                name='products'
              />
              <label className={styles.label} for='baby-clothes'>
                дитячий одяг
              </label>
            </div>

            <div className={styles.productListItem}>
              <input
                className={styles.input}
                type='checkbox'
                id='pillows'
                name='products'
              />
              <label className={styles.label} for='pillows'>
                подушки
              </label>
            </div>

            <div className={styles.productListItem}>
              <input
                className={styles.input}
                type='checkbox'
                id='towels-bathrobes'
                name='products'
              />
              <label className={styles.label} for='towels-bathrobes'>
                рушники і халати
              </label>
            </div>

            <div className={styles.productListItem}>
              <input
                className={styles.input}
                type='checkbox'
                id='bags-backpacks'
                name='products'
              />
              <label className={styles.label} for='bags-backpacks'>
                торби і рюкзаки
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Products;
