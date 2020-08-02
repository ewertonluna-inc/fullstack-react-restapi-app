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
    // TODO: complete method
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