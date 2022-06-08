'use strict';
/**
 * Функция возводит основание х в степень n 
 * @param {number} x - основание 
 * @param {number} n - степень
 * @returns x**n
 */
function pow(x, n) {
    return x ** n;
}

/**
 * Функция, которая для данного натурального n вычисляет сумму чисел от 1 до n. 
 * @param {number} n число
 * @returns сумму чисел от 1 до n
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
/**
 * Функция находит факториал введенного числа n
 * @param {number} n 
 * @returns 
 */
function factorial(n) {
    let multiplier = 1;
    let i = 1;
    while (i <= n) {
        multiplier *= i
        i++;
    }
    return multiplier;
}

/**
 * 
 * @param {number} n - е число число Фибоначчи
 * @returns возвращает n - e число Фибоначчи
 */
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
/**
 * 
 * @param {number} x - одно из ставниваемых чисел
 * @returns функцию
 */
 function compare(x)
 {
     return function(y){
     if(x>y){ return true;}
     if(x<y){return false;}
     if(x==y){return null;}
     
     }
     
 }	

/**
 * 
 * @param {number} num - число
 * @param {number} cols - к-во столбцов 
 * @returns {string} - на вывод
 * 
 */
function printNumbers(num, cols) {
    let str1 = ""
    let rows = Math.ceil(num / cols);
    for (let row = 0; row < rows; ++row) {
        let str = '';
        for (let col = 0; col < cols; ++col) {
            if ((row + rows * col) < num)
                str += (row + rows * col) + ' ';
        }
        str1 += str + "\n";
    }
    return str1;
}