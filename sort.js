
var persons = [
    {
        name:'A',
        age:24
    },
    {
        name:'B',
        age:21
    },
    {
        name:'C',
        age:18
    },
    {
        name:'D',
        age:20
    }
]

var arr = [ 4,8,1,6,7,9,5,9,20,1,8,9,-8,-4];

arr.sort(function(a,b){
    if(a > b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        return 0;
    }
});
console.log(arr);

persons.sort(function(a,b){
    if(a.age > b.age){
        return 1;
    }else if(a.age < b.age){
        return -1;
    }else{
        return 0
    }
});

console.log(persons);

