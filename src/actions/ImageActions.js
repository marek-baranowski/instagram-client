import {createAction} from 'redux-actions';
import {bind} from 'redux-effects';
import {fetch} from 'redux-effects-fetch';

const startFetchingImages = createAction('IMAGES_ARE_LOADING');
const setImages = createAction('SET_IMAGES');

function toYQL(url) {
  var yqlUrl = 'http://query.yahooapis.com/v1/public/yql?q=',
    query = 'select * from json where url="{url}"'.replace('{url}', url);

  return yqlUrl + encodeURIComponent(query) + '&format=json';
}

export function fetchImagesByTag(tag) {
  return [
    startFetchingImages(),
    bind(fetch(toYQL('https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id=a778c35c48824baca6837071dba766df')),
      ({value}) => setImages(value.query.results.json.data), ({value}) => {
        console.log(999, value);
      })
  ]
}

export function fetchImageById(imageId) {
  return [
    startFetchingImages(),
    bind(fetch(toYQL('https://api.instagram.com/v1/media/'+imageId+'?client_id=a778c35c48824baca6837071dba766df')),
      ({value}) => setImages([value.query.results.json.data]), ({value}) => {
        console.log(999, value);
      })
  ]
}
