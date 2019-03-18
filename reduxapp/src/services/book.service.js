
import { authHeader } from '../helpers';


const localhost = "https://localhost:44311";
export const bookService = {
  create,
  getAll,
  delete: _delete
}

function create(book) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(book)
  };
  return fetch(`${localhost}/Books/Create`,requestOptions).then(handleResponse);
}

function _delete(id) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(id)
  };
  return fetch(`${localhost}/Books/Delete`,requestOptions).then(handleResponse);
}

function getAll(){
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${localhost}/Books/GetAll`, requestOptions).then(handleResponse);
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
