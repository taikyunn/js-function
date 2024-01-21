// 0から9までの数字を足し算する

var plus = function (a, b) {
    return a + b;
}
var s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(plus);

console.log(s);

// 1から9までの数字を掛け算する

var multiply = function (a, b) {
    return a * b;
}
var s = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(multiply); // 高階関数
console.log(s);

