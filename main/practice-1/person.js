// Write your code here
module.exports = class Person {
    constructor(name,age,klass){
        this.name = name;
        this.age = age;
    }
    introduce(){
        var string = "My name is "+ this.name +". I am "+ this.age +" years old.";
        return string;
    }

}