import {createAction} from 'redux-actions';
import {bind} from 'redux-effects';
import {fetch} from 'redux-effects-fetch';

const startFetchingComments = createAction('COMMENTS_ARE_LOADING');
const setComments = createAction('SET_COMMENTS');

function toYQL(url) {
  var yqlUrl = 'http://query.yahooapis.com/v1/public/yql?q=',
    query = 'select * from json where url="{url}"'.replace('{url}', url);

  return yqlUrl + encodeURIComponent(query) + '&format=json';
}

export function fetchComments(photoId) {
  return [
    startFetchingComments(),
    bind(fetch(toYQL('https://api.instagram.com/v1/media/'+photoId+'/comments?client_id=a778c35c48824baca6837071dba766df')),
      ({value}) => setComments(value.query.results.json.data), ({value}) => {
        console.log(999, value);
      })
  ]
}
