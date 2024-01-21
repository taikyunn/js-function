// increment関数とdouble関数を合成する
var increment = function (n) {
  return n + 1;
}

var double = function (n) {
  return n * 2;
}

// 2つの関数を合成
var double_increment = function (n) {
  return increment(double(n)); // (x * 2) + 1
}

var after = double_increment(3);
console.log(after); // 7

// 足してから2倍にする関数
var increment_double = function (n) {
  return double(increment(n)); // (x + 1) * 2
}

var after1 = increment_double(3);
console.log(after1); // 8

// 関数名を変数に入れる
var i = increment;
var d = double;

// 全ての組み合わせを試す
var id = function (n) { // (x * 2) + 1
  return i(d(n));
}

var ii = function (n) { // (x + 1) + 1
  return i(i(n));
}

var di = function (n) { // (x + 1) * 2
  return d(i(n));
}

var dd = function (n) { // (x * 2) + 1
  return d(d(n));
}

console.log(i(5)); // 6
console.log(d(5)); // 10
console.log(id(5)); // 11
console.log(ii(5)); // 7
console.log(di(5)); // 12
console.log(dd(5)); // 20

// 上記を一つの関数にまとめる P.103
// ここを毎回理解できるようにしておくことが大事
var compose = function (i, d) {
  var id =  function (x) {
    return i(d(x));
  }
  return id;
}

var id = compose(i,d);
var ii = compose(i,i);
var di = compose(d,i);
var dd = compose(d,d);

console.log(i(5)); // 6
console.log(d(5)); // 10
console.log(di(5)); // 12
console.log(id(5)); // 11
console.log(ii(5)); // 7
console.log(dd(5)); // 20

var iddi = compose(id,di);
console.log(iddi(5)); // 25
