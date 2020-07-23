//Create javascript object
// a JavaScript object can be created by simply setting its properties within a pair of curly braces: {...}. 
// Each property is a key/value pair. This is called an object literal.

// The semicolon ; after the closing brace is optional, but it’s safer to add it anyway.


const person = {
    name : 'Kawshar',
    phone: '0187919999',
    age  : 27
};

console.log(person.name);

//Object modifying

person.address = 'Cumilla';
console.log(person.address);
console.log(person);


//Example 

const  aurora = {
    name : 'aurora',
    health: 150,
    strength:25,
    xp:0,
    describe(){
        return `${this.name} has ${this.health} health points and ${this.strength} as strenght and ${this.xp}`;
    }
}

console.log(aurora.describe());

//Example 2

const dog = {
    name     : 'dogi',
    species  : 'germany',
    size     : 'L',
    bark(){
        return "Woff!"
    }
}

console.log(dog.bark())

// Modeling a Circle

const circle = {
radius:10,
    circumference(){
        const   circum =  2  * Math.PI * this.radius;
        return circum.toFixed(2);
    },
    area(){
        const area = Math.PI * (this.radius ** 2);
        return area.toFixed(2);
    }
}

console.log(circle.area());
console.log(circle.circumference());

// Modeling a Bank Account

const account = {
    name    : "Kawshar",
    balance : 0,
    credit(value){
        this.balance += value;
        return this.balance;
    },
    describe(){
        return `Your name is ${this.name} and balace is ${this.balance}`
    }
}

console.log(account.credit(10));
