// If even a single value doesn't satisfy the element it returns false, otherwise it returns true.
let arr = [1,2,3,4,5,7];

const result = arr.every(function(value){
    return value % 2 === 0;
});
console.log(result);