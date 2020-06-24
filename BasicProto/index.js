const fs = require("fs")

const employees = []

employees.push({
    "name": "Akshay",
    "salary": 1000,
    "id": 1101
})

const akshay = {
    "name": "Akshay2",
    "salary": 10000,
    "id": 1102
}

employees.push(akshay)

employees.push({
    "name": "normal",
    "salary": 4000,
    "id": 1103
})

fs.writeFileSync("empdata.json", JSON.stringify(employees))
