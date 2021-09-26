import ins from "./interceptors";

//查询类目列表信息
export function queryCategory(params = {}) {
  return ins.get("/category/all", {
    params,
  });
}
