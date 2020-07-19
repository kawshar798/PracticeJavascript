//Built in forEach function
var arr = [10,20,30,40,50,100];

var sum = 0;
arr.forEach(function(value,index,arr){
    return sum +=value;
});
console.log(sum);


//custom foreach function 

function myForeach(arr,callBack){

    for(let i = 0; i<arr.length; i++){
                
       return  callBack(arr[i]);
    }
   
}

const result = myForeach(arr,function(value){
 let sum = 0;
 return sum += value;
});

console.log(sum);