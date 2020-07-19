/***
 * 
 * The purpose of reduce is to turn an array of items into a single value. We’re going to start with a beginning value and each item in the array should transform our value in some way.
 *  The end result after all items have transformed our value is what we get back from the function.
 * 
 */

 //Built in reduce function
 const arr = ['Hello','there!', 'How','are','you','doing!'];

 function addNextItemToAccumulator(accumulator,nextItem){
       console.log('accumulator:',accumulator);
       console.log('nextItem:',nextItem);
       console.log('\n');

       const accumulatorNextItem = accumulator + nextItem;
       return accumulatorNextItem;

 }

 const str = arr.reduce(addNextItemToAccumulator,'');
 console.log(str);

  //Custom Reduce functoin 

  const arrNum = [10,2,34,9,1];

  function myReduce(arr,callBack,accumulator){
    var index = 0;
    if (accumulator === undefined) {
        accumulator = arr[0];
      	index = 1;
    }
    for(; index<arr.length; index++){

        accumulator = callBack(accumulator,arr[index])
    }
    return accumulator;

  }

  var sum = myReduce(arrNum,function(acc,nextItem){
    return acc + nextItem;
  },2);

  console.log(sum);


  //Find max number
  let  max =  myReduce(arrNum,function(acc,nextItem){

   return  Math.max(acc,nextItem);
  });
  console.log(max);

    //Find min number

    let min = myReduce(arrNum,function(acc,nextItem){
        return Math.min(acc,nextItem);
    })

    console.log(min);