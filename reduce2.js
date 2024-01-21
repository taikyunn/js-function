var plus = function (a, b) {
    return a + b;
}

var reduce = function (array, f) {
  var s;
  for (var i = 0; i < array.length; i++) {
      if (i === 0) {
          s = array[i];
      } else {
          s = f(s, array[i]);
          console.info('------------------');
          console.info('i=' + i);
          console.info('array[i]=' + array[i]);
          console.info('s=',s);
      }
  }
  return s;
}

var after1 = reduce([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], plus);
