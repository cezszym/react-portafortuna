import React from 'react';
import styles from './FoodList.module.scss';

const FoodList = ({ pizza }) => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listBoard}>
        <h3 className={styles.title}>Pizza</h3>
        <div className={styles.sizes}>
          <p className={styles.size}>28cm</p>
          <p className={styles.size}>35cm</p>
        </div>
        <ul className={styles.list}>
          {pizza.map((el) => (
            <li className={styles.foodPosition}>
              <div>
                <div className={styles.positionTitle}>
                  <p className={styles.positionName}>{el.name}</p>
                  {el.pref.vege && <div className={styles.greenMark}></div>}
                  {el.pref.fish && <div className={styles.blueMark}></div>}
                  {el.pref.spicy && <div className={styles.redMark}></div>}
                </div>
                <p className={styles.topings}>{el.topings}</p>
              </div>
              <div className={styles.prices}>
                <p className={styles.price}>{el.smallPrice} zł</p>
                <p className={styles.price}>{el.bigPrice} zł</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodList;
