import ins from "./interceptors";

//查询产品列表
export function productList(params = {}) {
  return ins.get("/products/all", {
    params,
  });
}
