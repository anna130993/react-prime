import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = ({title}) => (
  <section className={styles.component}>
    <h3>{title}</h3>
  </section>
);


Card.propTypes = {
  title: PropTypes.node,
};

export default Card;
