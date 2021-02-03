import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container.js';
import Icon from '../Icon.js';
import {settings} from '../../data/dataStore.js';

class Header extends React.Component {
  render () {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.defaultIcon}/>
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.header.linkHome}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.header.linkInfo}</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>{settings.header.linkFAQ}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
