const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("Name", () => {
        it("Storing Intern`s name", () => {
            const testIntern = new Intern("test");
            expect(testIntern.name).toEqual("test");
        });
    });
    describe("getName() test", () => {
        it("Method returns Intern name", () => {
            const testIntern = new Intern("test");
            expect(testIntern.getName()).toEqual("test");
        });
    });
    describe("getId() test", () => {
        it("Method returns Intern`s id", () => {
            const testIntern = new Intern("test", "15");
            expect(testIntern.getId()).toEqual("15");
        });
    });
    describe("getEmail() test", () => {
        it("Method returns Intern`s email", () => {
            const testIntern = new Intern("test", "15","email");
            expect(testIntern.getEmail()).toEqual("email");
        });
    });
    describe("getSchool() test", () => {
        it("Method returns Intern`s School", () => {
            const testIntern = new Intern("test", "5","gmail","school");
            expect(testIntern.getSchool()).toEqual("school");
        });
    });
});