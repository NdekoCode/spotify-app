export function catString(str) {
  if (str.length > 20) {
    return str.substring(0, 20) + "...";
  }
  return str;
}
