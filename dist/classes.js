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
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(id, admin) {
        super(id, "IT");
        this.admin = admin;
        this.admin = admin;
    }
    describe() {
        console.log(`IT department as id: ${this.id}`);
    }
}
const IT = new ITDepartment("it", ["Hervé", "Samir"]);
console.log(IT);
class AccountingDept extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("no report found.");
        }
    }
    set mostRecentReport(text) {
        if (!text) {
            throw new Error("Please pass a valid value");
        }
        this.addReports(text);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDept("CA", []);
        return this.instance;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employee.push(name);
    }
    describe() {
        console.log(`the id is ${this.id}`);
    }
    addReports(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
}
const newAccounting = AccountingDept.getInstance();
const newAccounting2 = AccountingDept.getInstance();
console.log(newAccounting, "newAccounting");
console.log(newAccounting2, "newAccounting2");
console.log(newAccounting.describe(), "describe method on accounting instance");
newAccounting.addReports("Oups something went wrong! ");
newAccounting.mostRecentReport = "This is the last report";
console.log(newAccounting.mostRecentReport, "mostRecentReport");
console.log(newAccounting.printReports(), "printReports");
newAccounting.addEmployee("Max");
newAccounting.addEmployee("Tony");
newAccounting.printEmployeeInformation();
//# sourceMappingURL=classes.js.map