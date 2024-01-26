// 0からn個の自然数を作る関数
var range = function (n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    array[i] = i;
  }
  return array;
}

// 10個の自然数を出力
console.log(range(10)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// -- 10個の奇数を求める --
var map = function (array, f) {
  var array1 = [];
  for (var n = 0; n < array.length; n++) {
    array1[n] = f(array[n]);
  }
  return array1;
}

var even = function (n) {
  return n * 2 + 1;
}

var after = map(range(10), even);
console.log(after); // [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]

// -- 0から9までの数を全て足す --
var plus = function (a, b) {
  return a + b;
}

var reduce = function (array, f) {
  var s;
  for (var n = 0; n < array.length; n++) {
   if (n === 0) {
     s = array[0];
    } else {
      s = f(s, array[n]);
    }
  }
  return s;
}
var after1 = reduce(range(10), plus);
console.log(after1); // 45

// 0から1000までの数を全て足す
var after2 = reduce(range(1000), plus);
console.log(after2); // 45
