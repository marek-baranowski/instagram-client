import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Header from '../components/Header';

function mapDispatchToProps(dispatch) {
  return {
    logoClick: () => {
      dispatch(routeActions.push({pathname: '/'}))
    }
  }
}

export default connect(null, mapDispatchToProps)(Header)
