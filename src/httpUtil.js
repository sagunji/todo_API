import axios from 'axios';

const BASE_URL = 'https://todo-simple-api.herokuapp.com';

const TODO_URL = `${BASE_URL}/todos`;

export function get(url) {
  //data tanne
  return axios({
    method: 'GET',
    url: url
  });
}

export function post(url, data) {
  // naya data create garne
  return axios({
    method: 'POST',
    url: url,
    data: data
  });
}

export function put(url, id, data) {
  // update
  return axios({
    method:'PUT',
    url: `${url}/${id}`,
    data: data
  });
}

export function remove(url,id) {
  return axios({
    method: 'DELETE',
    url: `${url}/${id}`
  });
  // delete
}

export function createTodoDiv(){}

export function elementCreator(element, width, height){

  let ele = document.createElement(element);
  ele.style.width = width;
  ele.style.height = height;
  ele.style.float = 'left';
  return ele;
}

export function getTODOURL(){
  return TODO_URL;
}