var _ = require('lodash');
var __ = require('immutable');

var __natural = __.Range();

var fibF = _.memoize(function(n) {
  return n < 2 ? n : fibF(n - 1) + fibF(n - 2);
} );

var __fib = __natural.map(fibF);
var __fib100 = __fib.take(100);

console.log(__fib100.toArray());
