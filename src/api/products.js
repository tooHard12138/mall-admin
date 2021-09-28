import ins from "./interceptors";

//查询产品列表
export function productList(params = {}) {
  return ins.get("/products/all", {
    params,
  });
}

// 删除商品
export function productDelete(id) {
  return ins.delete(`/products/${id}`, {
    params: {},
  });
}

// 新增商品
export function productAdd(params) {
  return ins.post("/products/add", params);
}
