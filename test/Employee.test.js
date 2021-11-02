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
});