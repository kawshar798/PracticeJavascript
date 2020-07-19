// The some() method iterates through elements and checks if any value in the array satisfies a condition.
const arr = [7,3,11,5,9,2];

const result = arr.some(function(value){
    return  value % 2 === 0;
});

console.log(result);

