import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className='container'>
        <h2 className={styles.title}>Вітаємо в світі LaMillou!!!</h2>

        <p className={styles.text}>
          Невдозві ви зможете придбати наші продукти на цій онлайн-платформі за
          посередництвом офіційного дистриб'ютора в Україні. Що це означає? Перш за все,
          ви отримаєте оригінальний продукт виробника за офіційною ціною. По-друге, ми
          докладемо всіх зусиль, аби завжди надавати вам оперативну та фахову консультацію
          при виборі товарів чи вирішенні операційних проблем. Залишайтеся вдома і робіть
          безпечні купівлі онлайн! До зустрічі тут, друзі!
        </p>
      </div>
    </div>
  );
};

export default Intro;
