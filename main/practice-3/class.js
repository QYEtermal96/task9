// Write your code here
module.exports = class Class {
    constructor(number){
        this.number = number;
        this.hasStudent = 0;
        this.string = "";
    }
    appendMember(student) {
        this.hasStudent = 1;
        this.string = "Jerry has joined Class 2"
        console.log(this.string);
    }
    assignLeader(student) {
        if(this.hasStudent === 1){
            this.leader = student.name;
            this.hasStudent = 2;
            this.string = "Jerry become Leader of Class 2";
            console.log(this.string);
            return "Assign team leader successfully.";
        }else {
            return "It is not one of us.";
        }
    }
}