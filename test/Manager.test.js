const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("Name", () => {
        it("Storing Manager`s name", () => {
            const testManager = new Manager("test");
            expect(testManager.name).toEqual("test");
        });
    });
    describe("getName() test", () => {
        it("Method returns Manager name", () => {
            const testManager = new Manager("test");
            expect(testManager.getName()).toEqual("test");
        });
    });
    describe("getRole() test", () => {
        it("Method returns Manager`s role", () => {
            const testManager = new Manager("test");
            expect(testManager.getRole()).toEqual("Manager");
        });
    });
    describe("getId() test", () => {
        it("Method returns Manager`s id", () => {
            const testManager = new Manager("test", "12");
            expect(testManager.getId()).toEqual("12");
        });
    });
    describe("getEmail() test", () => {
        it("Method returns Manager`s email", () => {
            const testManager = new Manager("test", "12","email");
            expect(testManager.getEmail()).toEqual("email");
        });
    });
    describe("officeNumber value  test", () => {
        it("Method returns Manager`s email", () => {
            const testManager = new Manager("test", "5","gmail","720");
            expect(testManager.officeNumber).toEqual("720");
        });
    });
});