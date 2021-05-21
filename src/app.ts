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

class Department {
  //private name: string; // field of the class
  // private employee: string[] = [];
  constructor(
    private readonly id: string,
    public name: string,
    protected employee: string[] = []
  ) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name} ID : ${this.id}`);
  }

  addEmployee(employee: string) {
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

//const accountingCopy = { describe: accounting.describe }; // here we de-structure the object to assign a property that links to a Department method
// accountingCopy.describe(); ts yield an error because the this: Department type made clear the describe method should be called with objects with a 'name' property

const accountingCopy = { name: "DUMMY", describe: accounting.describe }; // ok
//console.log(accountingCopy.describe());

// inheritance of a class from another class with extends keyword
class ITDepartment extends Department {
  constructor(id: string, public admin: string[]) {
    super(id, "IT");
    this.admin = admin;
  }
}
const IT = new ITDepartment("it", ["Hervé", "Samir"]);

console.log(IT);

class AccountingDept extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  // overriding a property inherited from the parent

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employee.push(name);
  }

  addReports(report: string) {
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
newAccounting.printEmployeeInformation(); // only one employee was added
