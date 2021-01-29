import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon.js';
import Card from '../Card/Card.js';
import {Droppable} from 'react-beautiful-dnd';

const Column = ({title, icon, cards, addCard, id}) => (
  <section className={styles.component}>
    <h3 className={styles.title}><span className={styles.icon}><Icon name={icon}/></span>{title}</h3>
    <div>
      <Droppable droppableId={id}>
        {provided => (
          <div
            className={styles.cards}
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
    <div className={styles.creator}>
      <Creator text={settings.cardCreatorText} action={addCard}/>
    </div>
  </section>
);

Column.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.node,
  cards: PropTypes.array,
  addCard: PropTypes.func,
  id: PropTypes.string,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
