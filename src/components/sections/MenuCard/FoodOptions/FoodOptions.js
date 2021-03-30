import React, { useState } from 'react';
import styles from './FoodOptions.module.scss';
import veganIcon from '../../../../assets/images/vegan.svg';
import fishIcon from '../../../../assets/images/fish.svg';
import pepperIcon from '../../../../assets/images/pepper.svg';

const FoodOptions = () => {
  const [vegan, setVegan] = useState(false);
  const [fish, setFish] = useState(false);
  const [spicy, setSpicy] = useState(false);

  return (
    <>
      <div className={styles.options}>
        <div className={styles.option}>
          <div
            onClick={() => setVegan(!vegan)}
            className={`${styles.optionCircle} ${vegan ? styles.active : ''}`}
          >
            <img src={veganIcon} className={styles.icon} alt="food option" />
          </div>
          <p>wegetariańskie</p>
        </div>
        <div className={styles.option}>
          <div
            onClick={() => setFish(!fish)}
            className={`${styles.optionCircle} ${fish ? styles.active : ''}`}
          >
            <img src={fishIcon} className={styles.icon} alt="food option" />
          </div>
          <p>ryby i owoce morza</p>
        </div>
        <div className={styles.option}>
          <div
            onClick={() => setSpicy(!spicy)}
            className={`${styles.optionCircle} ${spicy ? styles.active : ''}`}
          >
            <img src={pepperIcon} className={styles.icon} alt="food option" />
          </div>
          <p>pikantne</p>
        </div>
      </div>
    </>
  );
};

export default FoodOptions;
