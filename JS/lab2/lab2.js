'use strict';

function pow(x, n) {
    return x ** n;
}

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

function factorial(n) {
    let multiplier = 1;
    let i = 1;
    while (i <= n) {
        multiplier *= i
        i++;
    }
    return multiplier;
}

function fib(n) {
    let a = 1n;
    let b = 1n;
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function compare(x) {
    let res = function() {
        let y = prompt('Введите y');
        if (x < y) return true
        else if (x > y) return false
        else if (x = y) return null;
    }
return res();

}