const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name,age,clazzes){
        super(name,age);
        this.clazzes = clazzes;
    }
    introduce(){
        var array = [];
         for (var value of this.clazzes){
            array.push(value.number);
          }
          let string = array.join(",");

        if(string.length === 0){
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }else{
            return super.introduce() + " I am a Teacher. I teach Class " + string +".";
        }
    }
}