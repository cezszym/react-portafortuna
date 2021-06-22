import React from 'react';
import SectionHeader from '../../partials/SectionHeader/SectionHeader';
import styles from './Locations.module.scss';
import { locationsData } from '../../../data/data';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      activeLocation: 'krakow',
      activeTransition: false,
      locations: locationsData,
    };
  }

  switchLocation = (location) => {
    if (
      !this.state.activeTransition &&
      location !== this.state.activeLocation
    ) {
      this.setState({
        activeTransition: true,
      });
      setTimeout(() => {
        this.setState({
          activeTransition: false,
        });
      }, 1500);

      setTimeout(() => {
        this.setState({
          activeLocation: location,
        });
      }, 600);
    }
  };

  render() {
    return (
      <section id="nasze-lokale">
        <SectionHeader
          head="Nasze lokale"
          subHead="Lorem ipsum dolor sit amet, consectetur adipiscing elit,."
          id="nasze-lokale"
        />
        <div className={styles.locationsWrapper}>
          <div
            className={
              this.state.activeTransition
                ? styles.transition + ' ' + styles.locationBox
                : styles.locationBox
            }
          >
            <div className={styles.locationImgWrapper}>
              <img
                src={this.state.locations[this.state.activeLocation].img}
                alt="Restauracja"
              />
            </div>
            <div className={styles.locationInfo}>
              <p className={styles.locationName}>
                {this.state.locations[this.state.activeLocation].name}
              </p>
              <div className={styles.infoLine}>
                <p>ul. Jaworska 123</p>
                <p>Zobacz lokalizacje na mapie</p>
              </div>
              <div className={styles.infoLine}>
                <p>+48 989 823 948</p>
                <p>porta.krakow@mail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.locationOptions}>
            <div
              onClick={() => this.switchLocation('krakow')}
              className={styles.locationSwitch}
            >
              <p>Kraków</p>
            </div>
            <div
              onClick={() => this.switchLocation('lublin')}
              className={styles.locationSwitch}
            >
              <p>Lublin</p>
            </div>
            <div
              onClick={() => this.switchLocation('wroclaw')}
              className={styles.locationSwitch}
            >
              <p>Wrocław</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Locations;
