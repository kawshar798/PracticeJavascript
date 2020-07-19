//Built in find method

var arr = [2,3,4,5,6,7,90,8];

var reuslt = arr.find(function(value) {
    
    return value === 90;
});
console.log(reuslt);

//Custom find method

function myFind(arr,cb) {
    let result = '';
    for(let i = 0; i < arr.length; i++){
 
        if(cb(arr[i])){
            return arr[i];
        }
      
    }
   
}

const result = myFind(arr,function(value){

    return value === 90;
});
console.log(reuslt);