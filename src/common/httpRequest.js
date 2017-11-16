import { message } from 'antd';

export const apiServer = 'http://localhost:8888';

function getRequestUrl(path) {
  return `${apiServer}${path}`;
}

function requestSuccess(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`服务器响应错误${response.url}`);
  }
}

function requestError(error) {
  message.error(error.message);
  throw error;
}

export function postJson(path, data) {
  console.log('postJson');
  return fetch(getRequestUrl(path), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })
    .then(requestSuccess)
    .catch(requestError);
}

export function get(path) {
  return fetch(getRequestUrl(path), {
    method: 'GET',
    credentials: 'include'
  })
    .then(requestSuccess)
    .catch(requestError);
}
