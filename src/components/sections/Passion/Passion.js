import React from 'react';
import styles from './Passion.module.scss';
import rightImg from '../../../assets/images/passion.jpg';
import rightImgWebp from '../../../assets/images/passion.webp';
import ArrowDown from '../../partials/ArrowDown/ArrowDown';
import { use100vh } from 'react-div-100vh';

const Passion = () => {
  const mobileHeight = use100vh();
  return (
    <section id="nasza-pasja">
      <div className={styles.wrapper} style={{ height: mobileHeight }}>
        <div className={styles.textContainer}>
          <h2 className={styles.sectionHeader}>Nasza pasja</h2>
          <p className={styles.boxText}>
            Etiam lorem massa, ornare nec molestie ac, cursus tempus mauris.
            Proin maximus magna id metus ultricies, posuere pulvinar tortor
            ornare. Mauris non efficitur metus, id ultricies metus.
          </p>
          <p className={styles.boxText}>
            Etiam lorem massa, ornare nec molestie ac, cursus tempus mauris.
            Proin maximus magna id metus ultricies, posuere pulvinar tortor
            ornare.
          </p>
          <ArrowDown target="ph" />
        </div>
        <div className={styles.right}>
          <picture>
            <source srcSet={rightImgWebp} />
            <img src={rightImg} alt="nasza pasja" className={styles.image} />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Passion;
