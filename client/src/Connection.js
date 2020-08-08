import config from './config';

class Connection {
  api = (path, method='GET', body=null, requiresAuth=false, credentials={}) => { // credentials will be an object like {emailAddress, password}
    const url = config.apiBaseURL + path;

    const options = {
      method,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }

    if (body) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {
      const { emailAddress, password } = credentials;
      const encodedCredentials = btoa(`${emailAddress}:${password}`);
      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }

    return fetch(url, options);
  }

  createCourse = async (course, user) => {
    const { id, emailAddress, password } = user;
    course.userId = id;
    const response = await this.api('/courses', 'POST', course, true, {emailAddress, password});
    if (response.status === 201) {
      return [];
    } else if (response.status === 400) {
      const { message } = await response.json();  // 'message' is an array containing error messages.
      return message;
    } else if (response.status === 401) {
      return ["Access Denied"];
    } else {
      throw new Error();
    }
  }

  deleteCourse = async (id, emailAddress, password) => {
    const response = await this.api(`/courses/${id}`, 'DELETE', null, true, {emailAddress, password});
    if (response.status === 204) {
      return [];
    } else if (response.status === 401 || response.status === 404) {
      const { message } = await response.json();
      return [ message ];
    } else {
      throw new Error();
    }
  }

  updateCourse = async (id, course, emailAddress, password) => {
    const response = await this.api(`/courses/${id}/`, 'PUT', course, true, {emailAddress, password});
    if (response.status === 204) {
      return [];
    } else if (response.status === 400) {
      const data = await response.json();
      const { message } = data; // 'message' is an array in this case
      return message;  
    } else if (response.status === 401 || response.status === 404) {  // 'message' is a string in these cases
      const data = await response.json();
      const { message } = data;
      return [ message ];
    } else {
      throw new Error();
    }
  }

  getCourse = async (id) => {
    const response = await this.api(`/courses/${id}`, 'GET');
    
    if (response.status === 200) {
      const course = await response.json();
      return course;
    } else if (response.status === 404) {
      return null;
    } else {
      return new Error();
    }
  }

  getUser = async (emailAddress, password) => {
    const response = await this.api('/users', 'GET', null, true, {emailAddress, password});
    
    if (response.status === 200) {
      const user = await response.json();
      return user;
    } else if (response.status === 401) {
      return null;
    } else {
      return new Error();
    }
  }

  createUser = async (user) => {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return [];
    } else if (response.status === 400) {
      const { message } = await response.json();  // 'message' is an array containing error messages.
      return [...message];
    } else {
      throw new Error();
    }
  }
}

export default Connection;