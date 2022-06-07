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

function checkSpam(str) {
    str = str.toLowerCase();
    if ((str.includes('xxx')) || (str.includes('viagra')))
        return true;
    else return false;
}

function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength) + '\u{2026}';
    return str;
}

function camelize(str) {
    let id;
    while (str.includes("-")) {
        id = str.indexOf('-');
        str = str.slice(0, id) + str[id + 1].toUpperCase() + str.slice(id + 2);
    }
    return str;
}

function arrReverseSorted(arr) {
    let arr_reserve = [];

    arr_reserve = arr.sort((a, b) => b - a);

    alert(arr_reserve);
}

function sum() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}