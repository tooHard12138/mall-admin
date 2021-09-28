import ins from "./interceptors";

//用户登录
export function userLogin(loginForm) {
  return ins.post("/passport/login", loginForm);
}

// 获取验证码
export function getCode(params) {
  return ins.post("/passport/getCode", params);
}

// 获取验证码
export function logon(params) {
  return ins.post("/passport/logon", params);
}