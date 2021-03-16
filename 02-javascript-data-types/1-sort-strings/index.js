/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  return [...arr].sort((s1, s2) =>
    param === "asc" ?
      localeSort(s1, s2)
      : -localeSort(s1, s2)
  );
}

function localeSort(s1, s2) {
  return s1.localeCompare(s2,
    ['ru', 'en'],
    {
      sensitivity: 'variant',
      caseFirst: 'upper',
    }
  );
}

