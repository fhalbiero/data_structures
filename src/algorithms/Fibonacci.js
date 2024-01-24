// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n){ //O(n)
    if (n < 2) return n;
    let prev = 1;
    let response = 1;
    for (let i = 2; i < n; i++) {
        let tmp = response; 
        response = response + prev;
        prev = tmp;
    }
    return response;
}

function fibonacciIterative2(n){ //O(n)
    if (n < 2) return n;
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

// 0, 1, 1, 2,
let calculations = 0;
function fibonacciRecursive(n) { //O(2^n) exponential
    calculations++;
    if (n < 2) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

let memoizedCalcs = 0;
function fibonacciRecursiveMemoizedClosure() { //O(n) with Memoization
    const cache = {};
    return function fibo(n) {
        if (cache[n]) return cache[n];
        if (n < 2) return n;
        cache[n] = fibo(n - 1) + fibo(n - 2);
        return cache[n];
    }
}

console.log('Iterative 1 -> ', fibonacciIterative(40));
console.log('Iterative 2 -> ', fibonacciIterative(40));
console.log('Recursive Memoized Closure -> ', fibonacciRecursiveMemoizedClosure()(50));
console.log('Recursive -> ', fibonacciRecursive(20), 'calculations -> ', calculations);