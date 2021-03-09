import React, { useState } from 'react';
import styles from './Menu.module.scss';

const Menu = ({ links, href }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const activeClass = modalOpen ? styles.active : '';

  return links.length ? (
    <>
      <div className={styles.menuContainer}>
        <ul className={styles.linkList}>
          {links.map((link) => (
            <li className={styles.link} key={link}>
              <a href={href}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setModalOpen(!modalOpen)}
        className={`${styles.hamburger} ${activeClass}`}
      >
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
      <div className={`${styles.modal} ${activeClass}`}>
        <ul className={styles.modalLinks}>
          {links.map((link) => (
            <li className={styles.modalLink} key={link}>
              <a href={href}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <></>
  );
};

Menu.defaultProps = {
  links: [],
  href: '/#',
};

export default Menu;
