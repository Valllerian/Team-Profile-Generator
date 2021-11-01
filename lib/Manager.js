const TeamMember = require("./TeamMember");

class Manager extends TeamMember {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;