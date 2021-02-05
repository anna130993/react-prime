import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';

const SearchResult = ({cards}) => (
  <Container>
    <section className={styles.component}>
      {(cards).map(cardData => (
        <Card key={cardData.id} draggable={false} {...cardData} />
      ))}
    </section>
  </Container>
);
SearchResult.propTypes = {
  cards: PropTypes.array,
};


export default SearchResult;
