// In JS, and in coding in general, A recursive function is a function which calls itsel

// Example:
//100 number sum

function sum(n){

    if( n === 1){
        return 1;
    }

    return n + sum(n -1);
}

console.log(sum(100));

//find factorial number 
function  factorial(n){
    if(n === 1){
        return 1
    }
    return n * factorial(n - 1);
}
console.log(factorial(10));

// Calculate the value of n to the m power

function power(n,m){
    if(m === 0 ){
        return 1;
    }
    if( m === 1){
        return n;
    }

    return n * power(n,m-1);
}
console.log(power(3,2));