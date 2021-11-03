const Employee = require("./Employee");

// inheriting name, id, email from employee class and adding school to later create an Intern object;
class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    };
     // adding methods;
    getSchool(){
        return this.school;
    };
    getRole(){
        return 'Intern';
    };
}

module.exports = Intern;