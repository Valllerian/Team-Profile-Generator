const Employee = require("./Employee");

// inheriting name, id, email from employee class and adding gitHub to later create an Engineer object;
class Engineer extends Employee {
    constructor (name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    };
    // adding methods;
    getGitHub(){
        return this.gitHub;
    };
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;