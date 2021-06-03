import React from 'react';
import SectionHeader from '../../partials/SectionHeader/SectionHeader';
import styles from './Locations.module.scss';

class Locations extends React.Component {
  render() {
    return (
      <section id="nasze-lokale">
        <SectionHeader
          head="Nasze lokale"
          subHead="Lorem ipsum dolor sit amet, consectetur adipiscing elit,."
          id="nasze-lokale"
        />
        <div className={styles.locationsWrapper}>
          <div className={styles.locationBox}></div>
          <div className={styles.locationOptions}></div>
        </div>
      </section>
    );
  }
}

export default Locations;
