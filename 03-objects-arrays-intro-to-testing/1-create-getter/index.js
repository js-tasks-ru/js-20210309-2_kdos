/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  if (!path) {
    return function (obj) {};
  }

  const pathFields = path.split(".");

  return obj => {
    if (!obj) {
      return;
    }

    let fieldValue;
    for (let i = 0; i < pathFields.length; i++) {
      fieldValue = (i === 0 ? obj[pathFields[i]] : fieldValue[pathFields[i]]);
      if (!fieldValue) {
        return;
      }
    }
    return fieldValue;
  };
}
