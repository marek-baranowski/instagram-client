import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Tag from '../components/Tag';
import * as C from '../utils/consts';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    tagClick: () => {
      dispatch(routeActions.push({
        pathname: C.ROUTES.PHOTOS_BY_TAG,
        search: '?tag=' + ownProps.tag
      }))
    }
  }
}

export default connect(null, mapDispatchToProps)(Tag)
