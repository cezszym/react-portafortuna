import React from 'react';
import SectionHeader from '../../partials/SectionHeader/SectionHeader';
import styles from './ContactForm.module.scss';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      mail: '',
      message: '',
      messageSent: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: '', mail: '', message: '', messageSent: true });
    // Wysyłanie wiadomości do zewnętrznego serwisu
  };

  render() {
    return (
      <section id="kontakt">
        <SectionHeader
          head="Skontaktuj się z nami"
          subHead="Lorem ipsum dolor sit amet, consectetur adipiscing elit,."
          right
        />
        <div className={styles.formContainer}>
          <form className={styles.formCard} onSubmit={this.handleSubmit}>
            <input
              name="name"
              placeholder="Imię i nazwisko"
              className={styles.textField}
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              required
            />
            <input
              name="mail"
              placeholder="Adres e-mail"
              value={this.state.mail}
              onChange={(e) => {
                this.setState({ mail: e.target.value });
              }}
              required
              type="email"
            />
            <textarea
              name="message"
              placeholder="Treść wiadomości"
              value={this.state.message}
              onChange={(e) => {
                this.setState({ message: e.target.value });
              }}
              required
              rows={10}
            />
            <div className={styles.submitContainer}>
              <p
                className={`${styles.resultMessage} ${
                  this.state.messageSent ? styles.active : ''
                }`}
              >
                Wiadomość została wysłana
              </p>
              <button>Wyślij wiadomość</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Locations;
