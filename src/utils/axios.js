/**
 * axios setup to use mock service
 */

import axios from "axios";

let instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// interceptor for http
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
