import axios from 'axios';

const authFail = (error) => {
  if (error.data.message === 'Auth failed') {
    // alert(error.data.message);
    // delete localStorage.usertoken;
    console.log('Auth fail');
  }
};

const instance = axios.create({
  headers: {
    'Authorization': localStorage.usertoken ? `sdSfapodIF ${localStorage.usertoken}` : ' Token is not get',
  }
});

// Projects queries

export const getProjects = () => {
  return instance.post('/projects/get')
    .then(res => res)
    .catch(error => {
      console.log(error);
      authFail(error.response)
    });
};

export const putProject = (data) => {
  return instance.post('/projects/put', data)
    .then(res => res.data)
    .catch(error => authFail(error));
};

export const dropProject = (data) => {
  return instance.post('/projects/delete', data)
    .then(res => res)
    .catch(error => console.log(error));
};

export const editProject = (data) => {
  return instance.post('/projects/update', data)
    .then(res => res.data)
    .catch(error => console.log(error));
};

// Task queries

export const getTasks = (data) => {
  return instance.post('/tasks/get', data)
    .then(res => res)
    .catch(error => error);
};

export const putTask = (data) => {
  return instance.post('/tasks/put', data)
    .then(res => res.data)
    .catch(error => authFail(error));
};

export const dropTask = (data) => {
  return instance.post('/tasks/delete', data)
    .then(res => res)
    .catch(error => console.log(error));
};

export const editTask = (data) => {
  return instance.post('/tasks/update', data)
    .then(res => res.data)
    .catch(error => console.log(error));
};
