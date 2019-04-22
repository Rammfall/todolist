import axios from 'axios/index';

const authFail = (error) => {
  if (error.data.message === 'Auth failed') {
    // alert(error.data.message);
    // delete localStorage.usertoken;
    // window.location.href = '/';
    // window.location.reload();
  }
};

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(res => {
      return res.data;
    });
};

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(res => {

      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const instance = axios.create({
  timeout: 2000,
  headers: {
    'Authorization': localStorage.usertoken ? `sdSfapodIF ${localStorage.usertoken}` : ' Token is not get',
  }
});

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