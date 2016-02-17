import {createAction} from 'redux-actions';
import {bind} from 'redux-effects';
import {fetch} from 'redux-effects-fetch';

export const setTags = createAction('SET_TAGS');
