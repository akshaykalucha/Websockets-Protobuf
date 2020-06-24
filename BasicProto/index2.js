const Schema = require("./employee_pb")

const fs = require("fs")

const Akshay = new Schema.Employee();
Akshay.setId(1101)
Akshay.setName("Akshay")
Akshay.setSalary(1000)


const Akshay2 = new Schema.Employee();
Akshay2.setId(1102)
Akshay2.setName("Akshay2")
Akshay2.setSalary(10000)

const normal = new Schema.Employee();
normal.setId(1103)
normal.setName("normal")
normal.setSalary(4000)


const employees = new Schema.Employees()
employees.addEmployees(Akshay)
employees.addEmployees(Akshay2)
employees.addEmployees(normal)

// console.log("My name is: " + Akshay2.getName())

const binData = employees.serializeBinary()

// console.log("My binary data is: " + employees.serializeBinary())

// fs.writeFileSync("empdataBinary", binData)

const employees2 = Schema.Employees.deserializeBinary(binData)

console.log(employees2.toString())