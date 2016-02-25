import {INSTAGRAM_API_BASE_URL, INSTAGRAM_CLIENT_ID} from './consts';

const clientIdQuery = 'client_id=' + INSTAGRAM_CLIENT_ID;

/**
 * Wraps API endpoint into a Yahoo Query Language (YQL) proxy, since Instagram doesn't support NO-CORS requests
 * @param {String} url - Url to be wrapped
 */
function toYQL(url) {
  const yqlUrl = 'https://query.yahooapis.com/v1/public/yql?q=',
    query = 'select * from json where url="{url}"'.replace('{url}', url);
  return yqlUrl + encodeURIComponent(query) + '&format=json';
}

export function imagesByTag(tag) {
  return toYQL(INSTAGRAM_API_BASE_URL + 'tags/' + tag + '/media/recent?' + clientIdQuery);
}

export function popularImages() {
  return toYQL(INSTAGRAM_API_BASE_URL + 'media/popular?' + clientIdQuery);
}

export function imageById(imageId) {
  return toYQL(INSTAGRAM_API_BASE_URL + 'media/' + imageId + '?' + clientIdQuery);
}

export function tags(tag) {
  return toYQL(INSTAGRAM_API_BASE_URL + 'tags/search?q=' + tag + '&count=10&' + clientIdQuery);
}

export function comments(imageId) {
  return toYQL(INSTAGRAM_API_BASE_URL + 'media/' + imageId + '/comments?' + clientIdQuery);
}
