import {createAction} from 'redux-actions';
import {bind} from 'redux-effects';
import {fetch} from 'redux-effects-fetch';
import {comments} from '../utils/APIendpoints';

const startFetchingComments = createAction('COMMENTS_ARE_LOADING');
const setComments = createAction('SET_COMMENTS');

export function fetchComments(photoId) {
  return [
    startFetchingComments(),
    bind(fetch(comments(photoId)), ({value}) => setComments(value.query.results.json.data))
  ]
}
