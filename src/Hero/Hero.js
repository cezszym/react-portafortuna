import React from 'react';
import heroImg from '../assets/images/hero.jpg';
import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.imgContainer}>
    <img src={heroImg} alt="heroImg" className={styles.heroImg} />
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Pizzeria Portafortuna</h1>
      <p className={styles.phrase}>
        Włoska kuchnia to nasza pasja i chcemy się nią podzielić!
      </p>
    </div>
  </div>
);

export default Hero;
