import React from 'react';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const Menu = ({ links, href }) =>
  true ? (
    <div className={styles.menuContainer}>
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li className={styles.link}>
            <a href={href}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );

Menu.defaultProps = {
  links: [],
  href: '/#',
};

export default Menu;
