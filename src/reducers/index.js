import {handleActions} from 'redux-actions';
import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

const commonSetDataReducer = (state, action) => ({
  isFetching: false,
  data: action.payload && !Array.isArray(action.payload) ? [action.payload] : action.payload
});

const commonStartFetchingDataReducer = (state) => ({
  isFetching: true,
  data: state.data
});

const reducers = {
  images: handleActions({
    IMAGES_ARE_LOADING: commonStartFetchingDataReducer,
    SET_IMAGES: commonSetDataReducer
  }, {isFetching: false, data: []}),
  tags: handleActions({
    TAGS_ARE_LOADING: commonStartFetchingDataReducer,
    SET_TAGS: commonSetDataReducer
  }, {isFetching: false, data: []}),
  comments: handleActions({
    COMMENTS_ARE_LOADING: commonStartFetchingDataReducer,
    SET_COMMENTS: commonSetDataReducer
  }, {isFetching: false, data: []}),
  routing: routeReducer
};
module.exports = combineReducers(reducers);
