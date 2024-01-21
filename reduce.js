var arr = [1,2,3,4,5]

// result:初期値
// current:回している値
// returnされた値が初期値（今回はresult）となって第二引数であるcurrentがなくなるまで実行される
var sum = arr.reduce(function (result, current) {
  console.log('result' + result + 'current' + current)
  return result + current;
  // ここには初期値が設定されている
},0)

// 最大値を求めるreduce関数
var max = arr.reduce(function (result, current) {
  console.log('result = ' + result);
  console.log('current = ' + current);
  return result < current ? current : result;
},0)

// 最小値を求めるreduce関数
var min = arr.reduce(function(result, current) {
  console.log('result = ' + result);
  console.log('current = ' + current);
  if (result == null) return current;
  return result > current ? current : result;
},null)

