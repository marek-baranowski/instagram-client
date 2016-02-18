import {handleActions} from 'redux-actions';
import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

const reducers = {
  images: handleActions({
    IMAGES_ARE_LOADING: (state) => ({
      isFetching: true,
      data: state.data
    }),
    SET_IMAGES: (state, action) => ({
      isFetching: false,
      data: action.payload && !Array.isArray(action.payload) ? [action.payload] : action.payload
    })
  }, {isFetching: false, data: []}),
  tags: handleActions({
    SET_TAGS: (state, action) => ({
      isFetching: false,
      data: action.payload && !Array.isArray(action.payload) ? [action.payload] : action.payload
    })
  }, {isFetching: false, data: []}),
  comments: handleActions({
    COMMENTS_ARE_LOADING: (state) => ({
      isFetching: true,
      data: state.data
    }),
    SET_COMMENTS: (state, action) => ({
      isFetching: false,
      data: action.payload && !Array.isArray(action.payload) ? [action.payload] : action.payload
    })
  }, {isFetching: false, data: []}),
  routing: routeReducer
};
module.exports = combineReducers(reducers);
