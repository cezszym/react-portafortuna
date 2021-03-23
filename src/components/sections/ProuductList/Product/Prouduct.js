import React from 'react';
import styles from './Product.module.scss';

const Product = ({ name, desc, image }) => (
  <li className={styles.productBox}>
    <div className={styles.textContainer}>
      <p className={styles.productName}>{name}</p>
      <p className={styles.productDesc}>{desc}</p>
    </div>
    <div className={styles.imageContainer}>
      {image && <img className={styles.productImage} src={image} />}
    </div>
  </li>
);

export default Product;
