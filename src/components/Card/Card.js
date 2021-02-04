import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';

const Card = ({title, id, index, columnTitle, listTitle, listId, draggable}) => {
  const origin = <Link className={styles.origin} to={'/list/' + listId}>{ReactHtmlParser(listTitle)} / {columnTitle} </Link>;

  if (!draggable) {
    return (
      <article className={styles.component}>
        {title}
        <span>           </span>
        {columnTitle && listTitle && listId && origin}
      </article>);
  } else {
    return (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <article
            className={styles.component}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            {title}
            {columnTitle && listTitle && listId && origin}
          </article>
        )}
      </Draggable>);
  }
};


Card.propTypes = {
  title: PropTypes.node,
  id: PropTypes.string,
  index: PropTypes.number,
  columnTitle: PropTypes.string,
  listTitle: PropTypes.string,
  draggable: PropTypes.bool,
};

Card.defaultProps = {
  draggable: true,
};

export default Card;
