/*********************
 * map
**/

/*********
 * This function allows us to manipulate data effectively and efficiently. It’s meant to copy an array and change it a little bit in the process. You’ll be using it for the rest of your JavaScript career.

Array.map is meant to transform one array into another by performing some operation on each of its values. The original array is left untouched and the function returns a reference to a new array.
***************/


// let arr = [23,45,65,60,90];

// function myMap(arr,callBack){
// var newArray = [];
//    for(let i = 0; i< arr.length; i++){
//       let temp = callBack(arr[i]);
//      newArray.push(temp);
//    }
//    return newArray;
  
// }
// myMap(arr,function(value){

//    let result = value + 2;
//    console.log(result);
// })

const originalArr = [1,2,3,4,5];
// const newArr = [];

// for(let i = 0; i<originalArr.length; i++){

//    newArr[i] = originalArr[i] * 3;
// }
// console.log(newArr);


// Custom map function 
// function timesThree(item,index,arr){
//   console.log(item,index,arr);
// }

// function multiply(arr,transform){

//    const newArr = [];
//    for(let i = 0; i < arr.length; i++){
//    //   newArr[i] =  arr[i] * 3;
//    //   newArr[i] =   transform(arr[i],i,arr);
    
//      newArr.push(transform(arr[i],i,arr));
//    }
//    return newArr;
// }

//  const result = multiply(originalArr,timesThree);


//Built in map fucntion

/***
 * Write a function that will take an array of words and return an array of those same words with the first letter of each word capitalized.
 * 
 */


 const arr = ['Hello','there','how','are','Is','read'];
 
 const newArr = [];
//  function capitalized(){
 arr.map(function(item){
    const newItem =  item.charAt(0).toUpperCase() + item.slice(0);
    newArr.push(newItem);
 });

//  }
 console.log(newArr);
