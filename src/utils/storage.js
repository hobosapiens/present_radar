// Set data to local storage
export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Get data from local storage
export function getLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
