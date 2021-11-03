const Employee = require("./Employee");

// inheriting name, id, email from employee class and adding officeNumber to later create an Manager object;
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
     // adding method;
    getRole(){
        return 'Manager';
    };
}

module.exports = Manager;