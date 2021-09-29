import axios from "axios";
import stoer from "@/store";

const ins = axios.create({
  baseURL: "https://mallapi.duyiedu.com",
});

ins.interceptors.request.use(
  function(config) {
    if (!config.url.includes("passport")) {
      if (config.method === "post" || config.method === "put") {
        config.data.appkey = stoer.state.user.user.appkey;
      } else {
        config.params.appkey = stoer.state.user.user.appkey;
      }
    }
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
