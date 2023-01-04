interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

const studentOne: Student = {
    firstname: "Jeremy",
    lastname: "Hughs",
    age: 18,
    location: "hiddenville"
}

const studentTwo: Student = {
    firstname: "Peter",
    lastname: "Parker",
    age: 15,
    location: "New York"
}

const studentList = [studentOne, studentTwo]

const table = document.createElement("table")
const tableBody = document.createElement("tbody")

table.appendChild(tableBody)

studentList.forEach((student: Student) => {
    const row = document.createElement("tr") as HTMLTableRowElement
    const name = document.createElement("td") as HTMLTableCellElement
    const location = document.createElement("td") as HTMLTableCellElement

    name.textContent = student.firstname
    location.textContent = student.location

    row.appendChild(name)
    row.appendChild(location)
    tableBody.appendChild(row)
});

document.body.appendChild(table)