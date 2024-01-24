function findFactorialRecursive(number) {
    if (number <= 1) return 1;
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    let answer = 1;
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}
  

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));