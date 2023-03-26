import axios from "axios";

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 3000,
    // headers: {'X-Custom-Header': 'foobar'}
});

axios.interceptors.request.use(function (config: any) {
    // Do something before request is sent
    return config;
  }, function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


  export default service;