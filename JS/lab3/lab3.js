'use strict';
function getDecimal(num) {
    let a = num.slice(num.indexOf("."));
    let str = 0 + a;
    if (Number(num) < 0) {
        str = 1 - Number(str);
        str = str.toFixed(a.length - 1);
    }
    return str;
}

function ucFirst(str) {
    return (str[0].toUpperCase() + str.slice(1));
}
let str = prompt("Введи строку");
alert(ucFirst(str));

function checkSpam(str) {
    str = str.toLowerCase();
    if ((str.includes('xxx')) || (str.includes('viagra')))
        return true;
    else return false;
}

function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '\u{2026}';
    return str;
}

function camelize(str) {
    let id;
    while (str.includes("-")) {
        id = str.indexOf('-');
        str = str.slice(0, id) + str[id + 1].toUpperCase() + str.substring(id + 2);
    }
    return str;
}
       function fib(n) {
            let count = 0;
            let n1 = 1,
                n2 = 1,
                c = 0;
            if (n == 0)
                n2 = 0;
            else
            if (n >= 1)
                if (n >= 2) {
                    for (let i = 2; i < n; i++) {
                        c = n2;
                        n2 = n1 + n2;
                        n1 = c;
                    }
                }
            return n2;
        }

function arrReverseSorted(arr){
arr_reserve=[];

arr_reserve=arr.sort((a, b) => b - a);

alert(arr_reserve);
}

function sum() {
    let result = 0;
  
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
  
    return result;
  }