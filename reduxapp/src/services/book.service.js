
import { authHeader } from '../helpers';

const localhost = "https://localhost:44311";
export const bookService = {
  create,
  getAll,
  update,
  delete: _delete
}

function create(book) {
  var token = JSON.parse(localStorage.getItem('user'));
  if (token) {
  var accessToken = token.accessToken;
  const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + accessToken
      },
      body: JSON.stringify(book)
  };
  return fetch(`${localhost}/Books/Create`,requestOptions).then(handleResponse);
  }

}

function update(book) {
  var token = JSON.parse(localStorage.getItem('user'));
  if (token) {
  var accessToken = token.accessToken;
  const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + accessToken
      },
      body: JSON.stringify(book)
  };
  return fetch(`${localhost}/Books/Update`,requestOptions).then(handleResponse);
  }
}

function _delete(id) {
  var token = JSON.parse(localStorage.getItem('user'));
  if (token) {
  var accessToken = token.accessToken;
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + accessToken},
      body: JSON.stringify(id)
  };
  return fetch(`${localhost}/Books/Delete/${id}`,requestOptions).then(handleResponse);
  }
}

function getAll(){
  var token = JSON.parse(localStorage.getItem('user'));
  if (token) {
  var accessToken = token.accessToken;
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + accessToken
    }
  };
  return fetch(`${localhost}/Books/GetAll`, requestOptions).then(handleResponse);
}
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function handleArrayResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        data.map((book) => {
          return book;
        })
    });
}
