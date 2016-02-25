import {createAction} from 'redux-actions';
import {bind} from 'redux-effects';
import {fetch} from 'redux-effects-fetch';
import {tags} from '../utils/APIendpoints';

const startFetchingTags = createAction('TAGS_ARE_LOADING');
export const setTags = createAction('SET_TAGS');


export function fetchTags(tag) {
  return [
    startFetchingTags(),
    bind(fetch(tags(tag)), ({value}) => setTags(value.query.results.json.data))
  ]
}
