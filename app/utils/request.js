import 'whatwg-fetch';
import config from '../config';

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  const requestParams = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: (options && options.method) ? options.method : 'GET',
    body: (options && options.body) ? JSON.stringify(options.body) : null,
  };
  if (options && options.token) {
    requestParams.headers.Authorization = `Bearer ${options.token}`;
  }
  const endPoint = `${config.apiUrl}${url}`; //eslint-disable-line
  return fetch(endPoint, requestParams)
    .then((response) => response.json())
    .then((responseJson) => responseJson)
    .catch((error) => {
      const customError = new Error(`Hay problemas de comunicación con el API. [${error.message}]`);
      throw customError;
    });
}
