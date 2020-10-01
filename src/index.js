/**
 * @param {Array} array 
 */
exports.min = function min(array) {
  let minimal = 0;
  if (array && array.length) {
    minimal = array[0];
    for (let i = 1; i + 1 <= array.length; i++) {
      if (array[i] < minimal) {
        minimal = array[i];
      }
    }
  }
  return minimal;
}

exports.max = function max(array) {
  let maxim = 0;
  if (array && array.length) {
    maxim = array[0];
    for (let i = 1; i + 1 <= array.length; i++) {
      if (array[i] > maxim) {
        maxim = array[i];
      }
    }
  }
  return maxim;
}

exports.avg = function avg(array) {
  let avgValue = 0;
  if (array && array.length) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    avgValue = sum / array.length;
  }
  return avgValue;
}
