import {connect} from 'react-redux';
import Home from './Home';
import {createActionAddList, getNewList} from '../../../redux/listsRedux.js';
import { createAction_moveCard } from '../../../redux/cardsRedux';

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getNewList(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    listId: props.id,
    title,
  })),
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
