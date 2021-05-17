const Employee = require("../index.js");
const Manager = require("../index.js");
const Engineer = require("../index.js");
const Intern = require("../index.js");


describe("Employee class", () => {
it("The name should be set from the constructor"), () => {
    let name="Esperancita";
    let newName = new Employee (name);
    expect (newName).toBe(name);
}

it("The email should be set from the constructor"), () => {
    let email="ep@gmail.com";
    let newEmail = new Employee (email);
    expect (newEmail).toBe(email);
}

it("The title should be set from the constructor"), () => {
    let title="Specialist";
    let newTitle = new Employee (title);
    expect (newTitle).toBe(title);
}

it("The id should be set from the constructor"), () => {
    let id="123456";
    let newId = new Employee (id);
    expect (newId).toBe(id);
}
});

//Test for the manager class
describe("Manager class", () => {
it("The name should be set from the constructor"), () => {
    let name="Peter";
    let newName = new Manager (name);
    expect (newName).toBe(name);
}

it("The email should be set from the constructor"), () => {
    let email="pp@gmail.com";
    let newEmail = new Manager (email);
    expect (newEmail).toBe(email);
}

it("The title should be set from the constructor"), () => {
    let title="Manager";
    let newTitle = new Manager (title);
    expect (newTitle).toBe(title);
}

it("The id should be set from the constructor"), () => {
    let id="789654";
    let newId = new Manager (id);
    expect (newId).toBe(id);
}

it("The Office Number should be set from the constructor"), () => {
    let office="789";
    let office = new Manager (officeNumber);
    expect (office).toBe(officeNumber);
}

});

//Test for the Engineer class
describe("Engineer class", () => {
it("The name should be set from the constructor"), () => {
    let name="Petunia";
    let newName = new Engineer (name);
    expect (newName).toBe(name);
}

it("The email should be set from the constructor"), () => {
    let email="pa@gmail.com";
    let newEmail = new Engineer (email);
    expect (newEmail).toBe(email);
}

it("The title should be set from the constructor"), () => {
    let title="Engineer";
    let newTitle = new Engineer(title);
    expect (newTitle).toBe(title);
}

it("The id should be set from the constructor"), () => {
    let id="125634";
    let newId = new Engineer (id);
    expect (newId).toBe(id);
}

it("The gitHub should be set from the constructor"), () => {
    let newGit="petuniagit";
    let newGit = new Engineer (gitHub);
    expect (newGit).toBe(gitHub);
}
})

//Test for the Intern class
describe("Intern class", () => {
it("The name should be set from the constructor"), () => {
    let name="Augusto";
    let newName = new Intern (name);
    expect (newName).toBe(name);
}

it("The email should be set from the constructor"), () => {
    let email="aa@gmail.com";
    let newEmail = new Intern (email);
    expect (newEmail).toBe(email);
}

it("The title should be set from the constructor"), () => {
    let title="Intern";
    let newTitle = new Intern (title);
    expect (newTitle).toBe(title);
}

it("The id should be set from the constructor"), () => {
    let id="236589";
    let newId = new Intern (id);
    expect (newId).toBe(id);
}

it("The gitHub should be set from the constructor"), () => {
    let newSchool="UM";
    let newSchool = new Intern (school);
    expect (newSchool).toBe(school);
}
})