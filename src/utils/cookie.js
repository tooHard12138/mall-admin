import Cookie from "js-cookie";

/**
 * 设置用户信息cookie
 * @param {Object} user
 */
export function setUserCookie(user) {
  const userArr = Object.entries(user);
  userArr.forEach(([key, value]) => {
    Cookie.set(key, value, { expires: 7 });
  });
}

/**
 *
 * 获取用户信息cookie
 */
export function getUserCookie() {
  return {
    appkey: Cookie.get("appkey"),
    username: Cookie.get("username"),
    email: Cookie.get("email"),
    role: Cookie.get("role"),
  };
}

/**
 *
 * 删除用户信息cookie
 */
export function removeUserCookie() {
  Cookie.remove("appkey");
  Cookie.remove("username");
  Cookie.remove("email");
  Cookie.remove("role");
}
