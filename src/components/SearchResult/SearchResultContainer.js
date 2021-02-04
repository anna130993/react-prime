import {connect} from 'react-redux';
import SearchResult from './SearchResult.js';
import {getCardsForSearchResult} from '../../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;

  return {
    cards: getCardsForSearchResult(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResult);
