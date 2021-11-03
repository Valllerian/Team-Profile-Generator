const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("Name", () => {
        it("Storing Engineer`s name", () => {
            const testEngineer = new Engineer("test");
            expect(testEngineer.name).toEqual("test");
        });
    });
    describe("getName() test", () => {
        it("Method returns Engineer name", () => {
            const testEngineer = new Engineer("test");
            expect(testEngineer.getName()).toEqual("test");
        });
    });
    describe("getId() test", () => {
        it("Method returns Engineer`s id", () => {
            const testEngineer = new Engineer("test", "15");
            expect(testEngineer.getId()).toEqual("15");
        });
    });
    describe("getEmail() test", () => {
        it("Method returns Engineer`s email", () => {
            const testEngineer = new Engineer("test", "15","email");
            expect(testEngineer.getEmail()).toEqual("email");
        });
    });
    describe("getGitHub() test", () => {
        it("Method returns Engineer`s GitHub", () => {
            const testEngineer = new Engineer("test", "5","gmail","git");
            expect(testEngineer.getGitHub()).toEqual("git");
        });
    });
});