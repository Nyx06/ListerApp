/**
 * @name localstorage
 * @description description
 * @author PB
 * @version 1.0
 **/

export default {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  load(key) {
    const value = localStorage.getItem(key);
    if (value != null) {
      return JSON.parse(value);
    }

    return null;
  },
  delete() {},
};
