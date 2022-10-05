// const Person = {
//     name: 'talha',
//     Age: 18,
//     developer: true
// }

// module.exports = Person;

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`my name is ${this.name} and my age is ${this.age}`)
    }
}

module.exports = Person;


// Module Wrapper funtion 
// (funtion (exports,require,module ,--filename ,--dirname {

// })
console.log(__dirname,__filename);