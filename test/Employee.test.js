const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Name", () => {
        it("Storing Employee`s name", () => {
            const testEmployee = new Employee("test");
            expect(testEmployee.name).toEqual("test");
        });
    });
    describe("getName() test", () => {
        it("Method returns Employee name", () => {
            const testEmployee = new Employee("test");
            expect(testEmployee.getName()).toEqual("test");
        });
    });
    describe("getRole() test", () => {
        it("Method returns Employee`s role", () => {
            const testEmployee = new Employee("test");
            expect(testEmployee.getRole()).toEqual("Employee");
        });
    });
    describe("getId() test", () => {
        it("Method returns Employee`s id", () => {
            const testEmployee = new Employee("test", "5");
            expect(testEmployee.getId()).toEqual("5");
        });
    });
    describe("getEmail() value test", () => {
        it("Method returns Employee`s email", () => {
            const testEmployee = new Employee("test", "5","gmail");
            expect(testEmployee.getEmail()).toEqual("gmail");
        });
    });
});
