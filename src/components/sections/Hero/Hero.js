import React from 'react';
import Div100vh from 'react-div-100vh';
import heroImg from '../../../assets/images/hero-min.jpg';
import heroImgWebp from '../../../assets/images/hero-min.webp';
import styles from './Hero.module.scss';

const Hero = () => (
  <Div100vh>
    <div className={styles.imgContainer}>
      <picture>
        <source srcset={heroImgWebp} />
        <img src={heroImg} alt="Hero image" className={styles.heroImg} />
      </picture>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Pizzeria Portafortuna</h1>
        <p className={styles.phrase}>
          Włoska kuchnia to nasza pasja i chcemy się nią podzielić!
        </p>
      </div>
    </div>
  </Div100vh>
);

export default Hero;
