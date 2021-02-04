import {connect} from 'react-redux';
import Home from './Home.js';
import {createActionAddList, getNewList} from '../../../redux/listsRedux.js';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
