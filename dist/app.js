"use strict";
let apId = "abc";
const button = document.querySelector("button");
function addEmUp(n1, n2) {
    if (n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log("clicked!" + message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
class Department {
    constructor(id, name, employee = []) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describe() {
        console.log(`Department: ${this.name} ID : ${this.id}`);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
const accounting = new Department("3", "Accounting");
console.log(accounting.describe());
accounting.addEmployee("Yann");
accounting.addEmployee("Max");
console.log(accounting.printEmployeeInformation());
const accountingCopy = { name: "DUMMY", describe: accounting.describe };
class ITDepartment extends Department {
    constructor(id, admin) {
        super(id, "IT");
        this.admin = admin;
        this.admin = admin;
    }
}
const IT = new ITDepartment("it", ["Hervé", "Samir"]);
console.log(IT);
class AccountingDept extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employee.push(name);
    }
    addReports(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
const newAccounting = new AccountingDept("AC", []);
console.log(newAccounting);
newAccounting.addReports("Oups something went wrong! ");
console.log(newAccounting.printReports());
newAccounting.addEmployee("Max");
newAccounting.addEmployee("Tony");
newAccounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map