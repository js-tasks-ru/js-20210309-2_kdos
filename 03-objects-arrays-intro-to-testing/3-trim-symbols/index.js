/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (!string || size === undefined) {
    return string;
  }

  let result = "";
  let prevChar;
  let repeatedCharNumber = 0;
  for (const ch of string) {
    repeatedCharNumber = (prevChar === ch ? repeatedCharNumber + 1 : 0);
    if (repeatedCharNumber < size) {
      result = result + ch;
    }

    prevChar = ch;
  }

  return result;
}
