import React from 'react';
import styles from './Product.module.scss';

const Product = ({ name, desc, image }) => (
  <li className={styles.productBox}>
    <div className={styles.textContainer}>
      <p className={styles.productName}>{name}</p>
      <p className={styles.productDesc}>{desc}</p>
    </div>
    <div className={styles.imageContainer}>
      {image && (
        <picture>
          <source srcSet={image.webp} />
          <img src={image.jpg} alt="product" className={styles.productImage} />
        </picture>
      )}
    </div>
  </li>
);

export default Product;
