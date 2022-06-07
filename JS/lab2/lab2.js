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
 * @param {*} n 
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
 * @param {number} n - число чисел Фибоначи* 
 * @returns {bigInt} - n-ное число Фибоначи
 * 
 */
function fib(n) {
    let a = 1 n;
    let b = 1 n;
    let c;
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 1;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    if (b == 1 n)
        b = 0;
    return b;
}

/**
 *Функция,которая принимает целочисленное значение x и возвращает анонимную функцию.
 *Если y больше, чем x, то возвращается true
 *Если y меньше, чем x, то возвращается false
 *Если значения равны, то возвращается null
 * @param {number} x - число
 * @returns {}
 */
function compare(x) {
    let res = function() {
        let y = prompt('Введите y');
        if (x < y) return true
        else if (x > y) return false
        else if (x = y) return null;
    }
    return res();

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
    let rows = Math.ceil(num / cols); //кол-во строк округлено в большую сторону
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