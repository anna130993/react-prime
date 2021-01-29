import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import MenuBtn from '../MenuBtn';

const List = ({title, image, description, columns, addColumn}) => (
  <section className={styles.component}>
    <Hero titleText={title} imgBcg={image}/>
    <div className={styles.description}>
      {ReactHtmlParser(description)}
      <span>           </span><MenuBtn />
    </div>
    <div className={styles.columns}>
      {columns.map(columnData => (
        <Column key={columnData.id} {...columnData} />
      ))}
    </div>
    <div className={styles.creator}>
      <Creator text={settings.columnCreatorText} action={addColumn}/>
    </div>
  </section>
);

List.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  columns: PropTypes.array,
  image: PropTypes.string.isRequired,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
  image: settings.defaultImage,
};

export default List;
