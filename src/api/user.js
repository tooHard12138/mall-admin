import ins from "./interceptors";

//用户登录
export function userLogin(loginForm) {
  return ins.post("/passport/login", loginForm);
}

