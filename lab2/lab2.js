'use strict';
function pow(x,n) {
return x**n;
}

function sumTo(n){
let sum=0;
for (let i=1;i<=n;i++){
sum = sum+i; }
return sum;
}

function factorial(n){
let multiplier = 1;
let i=1;
while (i<=n) {
    multiplier*=i 
    i++;
}
return multiplier;
}