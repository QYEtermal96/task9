const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name,age,clazzes){
        super(name,age);
        this.clazzes = clazzes;
        this.array = []
    }
    introduce() {
        for (var value of this.clazzes) {
            this.array.push(value.number);
        }
        let string = this.array.join(",");

        if (string.length === 0) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        } else {
            return super.introduce() + " I am a Teacher. I teach Class " + string + ".";
        }
    }
    isTeaching(student){
        for (var value of this.clazzes) {
            this.array.push(value.number);
        }
        if(student.clazz.hasStudent === 1){
            if(this.array.includes(student.clazz.number)){
                return true;
            } else {
                return false;
            }
        }else{
            return false;
        }
    }

}