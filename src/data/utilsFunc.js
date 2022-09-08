export function catString(str, length = 20) {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
}
