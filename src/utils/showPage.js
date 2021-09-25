// 是否显示页面
export default function showPage(role, needAdmin) {
  return !(role !== "admin" && needAdmin);
}
