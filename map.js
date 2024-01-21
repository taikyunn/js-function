// 偶数を10個求めよ = 0-9までの値を全て2倍するということ

var map = function (array, f) {
  var array1 = [];
  for (var n = 0; n < array.length; n++) {
    array1[n] = f(array[n]);

    console.info('---------------------------------');
    console.info('n = ', n);
    console.info('array[n] = ', array[n]);
    console.info('array1', array1);
  }

  return array1;
}

// 2倍にする関数
var double = function (n) {
  return n * 2;
}

// mapという関数にdoubleという関数を渡す
var after = map([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], double);
