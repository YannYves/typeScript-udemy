let apId = "abc"; // ts doesn't complain because it's a global variable
const button = document.querySelector("button");
function addEmUp(n1: number, n2: number) {
  if (n2 > 0) {
    return n1 + n2;
  }
  return; // we make sure that all calls path return something
}

function clickHandler(message: string) {
  console.log("clicked!" + message);
}

// we make sure the button will exist at runtime
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}

abstract class Department {
  //private name: string; // field of the class
  // private employee: string[] = [];
  static fiscalYear = 2021;
  constructor(
    protected readonly id: string,
    public name: string,
    protected employee: string[] = [] // console.log(Department.fiscalYear) // static properties are not available with the this keyword that represents the instance of the class
  ) {
    // this.name = name;
  }
  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

// const accounting = new Department("3", "Accounting");
// cannot create an instance of an abstract class
// console.log(accounting.describe());
// accounting.addEmployee("Yann");
// accounting.addEmployee("Max");
// console.log(accounting.printEmployeeInformation());

// const employee1 = Department.createEmployee("Lenou");
// console.log(employee1, Department.fiscalYear);

//const accountingCopy = { describe: accounting.describe }; // here we de-structure the object to assign a property that links to a Department method
// accountingCopy.describe(); ts yield an error because the this: Department type made clear the describe method should be called with objects with a 'name' property

// const accountingCopy = { name: "DUMMY", describe: accounting.describe }; // ok
//console.log(accountingCopy.describe());

// inheritance of a class from another class with extends keyword
class ITDepartment extends Department {
  constructor(id: string, public admin: string[]) {
    super(id, "IT");
    this.admin = admin;
  }
  describe() {
    console.log(`IT department as id: ${this.id}`);
  }
}
const IT = new ITDepartment("it", ["Hervé", "Samir"]);

console.log(IT);

class AccountingDept extends Department {
  private lastReport: string;
  private static instance: AccountingDept;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("no report found.");
    }
  }

  set mostRecentReport(text: string) {
    if (!text) {
      throw new Error("Please pass a valid value");
    }
    this.addReports(text);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDept("CA", []);
    return this.instance;
  }

  // overriding a property inherited from the parent
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employee.push(name);
  }

  describe() {
    console.log(`the id is ${this.id}`);
  }

  addReports(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const newAccounting = new AccountingDept("CA", []);
const newAccounting = AccountingDept.getInstance();
const newAccounting2 = AccountingDept.getInstance();

console.log(newAccounting, "newAccounting");
console.log(newAccounting2, "newAccounting2"); // exact same object instantiated

console.log(newAccounting.describe(), "describe method on accounting instance");

newAccounting.addReports("Oups something went wrong! ");
newAccounting.mostRecentReport = "This is the last report";

console.log(newAccounting.mostRecentReport, "mostRecentReport");

console.log(newAccounting.printReports(), "printReports");
newAccounting.addEmployee("Max");
newAccounting.addEmployee("Tony");
newAccounting.printEmployeeInformation(); // only one employee was added
