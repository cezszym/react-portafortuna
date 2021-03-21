import React from 'react';
import styles from './ArrowDown.module.scss';

class ArrowDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { target: props.target };
  }

  scrollDown = () => {
    const targetElement = document.getElementById(this.state.target);
    if (targetElement) {
      targetElement.scrollIntoView();
    }
  };

  render() {
    return (
      <div onClick={this.scrollDown} className={styles.arrowCircle}>
        <div className={styles.arrowDown} />
      </div>
    );
  }
}

export default ArrowDown;
