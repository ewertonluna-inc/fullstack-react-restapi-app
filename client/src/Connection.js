import config from './config';

// The Connection class is a helper class that can be used to communicate and make requests to the REST API.
class Connection {

  /* Sends customizable requests to the back-end. It returns a promise containing the response */
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

  /*
    Sends POST request to the back-end to create new course. 
    Returns a Promise that resolves with an array containing error messages, if there's any.
  */ 
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

  /*
    Sends DELETE request to the back-end to delete course related to the id. 
    It Requires user credentials.
    Returns a Promise that resolves with an array containing error messages, if there's any. 
  */ 
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

  /*
    Sends UPDATE request to the back-end to update course related to the id. 
    It Requires user credentials.
    Returns a Promise that resolves with an array containing error messages, if there's any.
  */
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

  /*
    Sends GET request to the back-end to get course related to the id. 
    Returns a Promise that resolves with the course if the course exists. Otherwise, returns null.
  */
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

  /*
    Sends GET request to the back-end to get course related to the id. 
    Returns a Promise that resolves with the authenticated user, if it has authorization. Otherwise, returns null.
  */
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

  /*
    Sends POST request to the back-end to create new user. 
    Returns a Promise that resolves with an array containing error messages, if there's any.
  */ 
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