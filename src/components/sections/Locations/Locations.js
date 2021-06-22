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
      mapVisible: false,
      mapLoading: false,
      locations: locationsData,
    };
  }

  showMap = () => {
    this.setState({ mapLoading: true });
    setTimeout(() => {
      this.setState({
        mapVisible: !this.state.mapVisible,
      });
    }, 600);
  };

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
          mapVisible: false,
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
            <div
              className={
                this.state.mapLoading
                  ? styles.faded + ' ' + styles.locationMediaWrapper
                  : styles.locationMediaWrapper
              }
            >
              {!this.state.mapVisible ? (
                <img
                  src={this.state.locations[this.state.activeLocation].img}
                  alt="Restauracja"
                  onLoad={() => this.setState({ mapLoading: false })}
                />
              ) : (
                <iframe
                  title="mapa lokalizacji"
                  src="https://maps.google.com/maps?q=krakow%20d%C5%82uga%201&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  tabIndex="0"
                  onLoad={() => this.setState({ mapLoading: false })}
                ></iframe>
              )}
            </div>
            <div className={styles.locationInfo}>
              <p className={styles.locationName}>
                {this.state.locations[this.state.activeLocation].name}
              </p>
              <div className={styles.infoLine}>
                <p>ul. Jaworska 123</p>
                <p onClick={() => this.showMap()}>
                  Zobacz lokalizacje na mapie
                </p>
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
              <img
                src={this.state.locations['krakow'].img}
                alt="Restauracja Kraków"
              />
            </div>
            <div
              onClick={() => this.switchLocation('lublin')}
              className={styles.locationSwitch}
            >
              <p>Lublin</p>
              <img
                src={this.state.locations['lublin'].img}
                alt="Restauracja Lublin"
              />
            </div>
            <div
              onClick={() => this.switchLocation('wroclaw')}
              className={styles.locationSwitch}
            >
              <p>Wrocław</p>
              <img
                src={this.state.locations['wroclaw'].img}
                alt="Restauracja Wrocław"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Locations;
