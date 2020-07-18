/*******
 * The idea here is similar to Array.map,
 *  except instead of transforming individual values, we want to filter existing values
 * 
 */

/***
 * Example 1: We want to filter out values in an array that are Greaterthan  5
 * 
 */
 const arr = [2,3,4,5,50,80];
//  const filterArr = [];
//  for (let i = 0; i < arr.length; i++){
//      if( arr[i] >= 5){
       
//          filterArr.push(arr[i]);
//      }
//  }

//  console.log(filterArr);

function greaterThan7(item){
if(item > 7){
    return item;
}

}

 function myFilterFun(arr,callBack){

    const newArr = [];
    for(let i = 0; i < arr.length; i++){

        // if(arr[i] >= 7){
        //     newArr.push(arr[i]);
        // }
        if(callBack(arr[i])){
            newArr.push(arr[i])
        }
    
    }
    return newArr;

 }

 const result = myFilterFun(arr,greaterThan7);
 console.log(result);