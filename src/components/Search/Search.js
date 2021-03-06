import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore.js';
import Icon from '../Icon.js';
import {withRouter} from 'react-router';

class Search extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
    history: PropTypes.object,
  }

  static defaultProps = {
    text: settings.search.defaultText,
  }

  state = {
    value: this.props.searchString,
  }

  componentDidMount() {
    if(this.props.history.location.pathname.startsWith('/search/')) {
      if(!this.state.value) {
        const searchStringFromPath = this.props.history.location.pathname.replace('/search/', '');
        this.setState({
          value: searchStringFromPath,
          visibleButtons: searchStringFromPath.length > 0,
        });
      }
    }
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK(){
    this.props.history.push(`/search/${this.state.value}`);
  }

  componentDidUpdate(prevProps){
    if(this.props.searchString != prevProps.searchString){
      this.setState({value: this.props.searchString});
    }
  }

  render() {
    const {text} = this.props;
    const {value} = this.state;
    const {icon} = settings.search;
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={text}
          value={value}
          onChange={event => this.handleChange(event)}
        />
        <div className={styles.buttons}>
          <Button onClick={() => this.handleOK()}><Icon name={icon} /></Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
