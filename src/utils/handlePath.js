export default function handlePath(ParentPath, ChildPath) {
  if (ParentPath === "/") {
    return ParentPath + ChildPath;
  } else {
    return ParentPath + "/" + ChildPath;
  }
}
