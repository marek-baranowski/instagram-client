const baseUrl = 'https://api.instagram.com/v1/',
  clientIdQuery = 'client_id=a778c35c48824baca6837071dba766df';

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
  return toYQL(baseUrl + 'tags/' + tag + '/media/recent?' + clientIdQuery);
}

export function popularImages() {
  return toYQL(baseUrl + 'media/popular?' + clientIdQuery);
}

export function imageById(imageId) {
  return toYQL(baseUrl + 'media/' + imageId + '?' + clientIdQuery);
}

export function tags(tag) {
  return toYQL(baseUrl + 'tags/search?q=' + tag + '&count=10&' + clientIdQuery);
}

export function comments(imageId) {
  return toYQL(baseUrl + 'media/' + imageId + '/comments?' + clientIdQuery);
}
