import axios from "axios";

const ins = axios.create({
  baseURL: "https://mallapi.duyiedu.com",
});

ins.interceptors.request.use(
  function(config) {
    console.log(config);
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

ins.interceptors.response.use(
  function(response) {
    if (response.data.status === "fail") {
      return Promise.reject(response.data.msg);
    }
    return Promise.resolve(response.data.data);
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default ins;
