function instanceOf(left, right) {
  if (typeof left !== "object" && left === null) {
    throw new Error();
  }

  let proto = Object.getPrototypeOf(right);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
