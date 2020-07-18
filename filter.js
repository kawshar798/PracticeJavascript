/*******
 * The idea here is similar to Array.map,
 *  except instead of transforming individual values, we want to filter existing values
 * 
 */

/***
 * Example 1: We want to filter out values in an array that are Greaterthan  5
 * 
 */

 //Custom Filter array
//  const arr = [2,3,4,5,50,80];
//  const filterArr = [];
//  for (let i = 0; i < arr.length; i++){
//      if( arr[i] >= 5){
       
//          filterArr.push(arr[i]);
//      }
//  }

//  console.log(filterArr);

// function greaterThan7(item){
// if(item > 7){
//     return item;
// }

// }

//  function myFilterFun(arr,callBack){

//     const newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         // if(arr[i] >= 7){
//         //     newArr.push(arr[i]);
//         // }
//         if(callBack(arr[i])){
//             newArr.push(arr[i])
//         }
    
//     }
//     return newArr;

//  }

//  const result = myFilterFun(arr,greaterThan7);
//  console.log(result);

 //Built In  Filter array


//  Write a function that takes in an array of integers and filters out all numbers that are odd.
//  It should return an array of the even numbers.

const arr = [1,2,60,3,5,10,30];

function even(arr){
  return   arr.filter(function(item){
        if( item % 2 === 0){
            return true;
        }
    })
}

console.log(even(arr));


/***** 
Write a function that takes an array of objects of the following format:

{
    familyMember: 'Uncle',
    age: 52,
    location: 'California, USA'
}
Return an array of the familyMember properties, including only those family members that are above age 40.
*/

const family = [
    {
        familyMember : 'Uncle',
        age:52,
        location:'Cumilla'
    },
    {
        familyMember : 'Grandpa',
        age:60,
        location:'Cumilla'
    },
    {
        familyMember : 'sister',
        age:22,
        location:'Cumilla'
    },
    {
        familyMember : 'mother',
        age:45,
        location:'Cumilla'
    }
];


function getOldFamilyMember(family){

    return family.filter(function(item){
        return item.age > 40;
    }).map(function(item){
      return   item.familyMember;
    });
}

console.log(getOldFamilyMember(family))