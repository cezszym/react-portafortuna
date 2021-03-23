import React from 'react';
import styles from './ProductList.module.scss';
import SectionHeader from '../../partials/SectionHeader/SectionHeader';
import Product from './Product/Prouduct';

const ProductList = ({ products }) => (
  <section>
    <SectionHeader
      head="Wyjątkowe składniki"
      subHead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum matti"
      id="składniki"
    />
    <ul className={styles.listWrapper}>
      {products.map((product) => (
        <Product
          name={product.name}
          desc={product.desc}
          image={product.image}
          key={product.name}
        />
      ))}
    </ul>
  </section>
);

export default ProductList;
