/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n (0-index), and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 */

var nthFibonacci = function(n) {
  // Your code here

	if(n < 2) return n;
	return fib(n-1)+ fib(n-2);
};


for(var i = 0; i < 20; i++){
	console.log('n is:' + i + '   fib_n:' + fib(i));
}


var fib = function(n){
	return fib(n) = || n && (
		n === 1 ? n : fib(n-1) + fib(n-2)
	)
}