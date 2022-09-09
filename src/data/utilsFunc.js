export function catString(str, length = 20) {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
}
export function getDataStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function setDataStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function verifyUserConnect() {
  if (
    getDataStorage("userData") !== null &&
    getDataStorage("userData") !== undefined
  ) {
    return Object.keys(getDataStorage("userData")).length > 1;
  }
  return false;
}

export function connectedUser(newUser) {
  setDataStorage("userData", newUser);
}
export function disconnectedUser() {
  localStorage.removeItem("userData");
}
