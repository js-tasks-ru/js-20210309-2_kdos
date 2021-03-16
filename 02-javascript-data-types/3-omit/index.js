/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  if (!obj) {
    return {};
  }

  const result = {};
  for (const field of Object.entries(obj)) {
    if (!fields.includes(field[0])) {
      result[field[0]] = field[1];
    }
  }

  return result;

};
