import { connect } from 'react-redux';
import TagForm from '../components/TagForm';
import {fetchTags} from '../actions/TagActions';

function mapDispatchToProps(dispatch) {
  return {
    searchTag: (tag) => {
      dispatch(fetchTags(tag))
    }
  }
}

export default connect(null, mapDispatchToProps)(TagForm)
