import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({ head, subHead, right }) => {
  const lineOption = right ? styles.rightLines : styles.leftLines;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.head + ' ' + lineOption}>{head}</h2>
      <h3 className={styles.subHead}>{subHead}</h3>
    </div>
  );
};

SectionHeader.propTypes = {
  head: PropTypes.string.isRequired,
  subHead: PropTypes.string,
  right: PropTypes.bool,
};

SectionHeader.defaultProps = {
  right: false,
};

export default SectionHeader;
