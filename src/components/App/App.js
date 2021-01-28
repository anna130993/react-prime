import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import {listData, settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  state = {
    lists: listData ? [Object.assign({key: 0}, listData)] : [],
  }

  addList(title){
    this.setState (state => (
      {
        lists:[
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        <Creator text={settings.listCreatorText} action={title => this.addList(title)} warning={true} />
      </main>
    );
  }
}

export default App;
