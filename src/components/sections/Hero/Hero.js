import React from 'react';
import { use100vh } from 'react-div-100vh';
import heroImg from '../../../assets/images/hero-min.webp';
import heroImgWebp from '../../../assets/images/hero-min.webp';
import ArrowDown from '../../partials/ArrowDown/ArrowDown';
import styles from './Hero.module.scss';

const Hero = () => {
  const mobileHeight = use100vh();
  return (
    <header style={{ height: mobileHeight }} className={styles.fullHeight}>
      <div className={styles.imgContainer}>
        <picture>
          <source srcSet={heroImgWebp} />
          <img src={heroImg} alt="Hero" className={styles.heroImg} />
        </picture>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Pizzeria Portafortuna</h1>
          <p className={styles.phrase}>
            Włoska kuchnia to nasza <span className={styles.fat}>pasja</span> i
            chcemy się nią podzielić!
          </p>
          <ArrowDown target="nasza-pasja" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
