import {createAction} from 'redux-actions';
import {bind} from 'redux-effects';
import {fetch} from 'redux-effects-fetch';
import {imagesByTag, imageById} from '../common/APIendpoints';

const startFetchingImages = createAction('IMAGES_ARE_LOADING');
const setImages = createAction('SET_IMAGES');

export function fetchImagesByTag(tag) {
  return [
    startFetchingImages(),
    bind(fetch(imagesByTag(tag)), ({value}) => setImages(value.query.results.json.data))
  ]
}

export function fetchImageById(imageId) {
  return [
    startFetchingImages(),
    bind(fetch(imageById(imageId)), ({value}) => setImages(value.query.results.json.data))
  ]
}
