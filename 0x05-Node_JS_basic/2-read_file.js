const fs = require('fs')
// Read file synchronously
const countStudents = (path) => {
    try {
        const data = fs.readFileSync(path);
        // get only the header
        const header = data.split('\n')[0].slice(0, 1).split(",");
        // actual data except the header(first line)
        const lines = data.split('\n').slice(1, -1);
        // get indices of firstname and field
        const fNameIdx = header.findIndex((ele) => ele === 'firstname');
        const fieldIdx = header.findIndex((ele) => ele === 'field');
        // declarate two dictionaries for count each fields and store list of students
        const fields = {};
        const students = {};

        lines.forEach((line) => {
            const list = line.split(',');
            if (!fields[list[fieldIdx]]) fields[list[fieldIdx]] = 0;
            fields[list[fieldIdx]] += 1;
            if (!students[list[fieldIdx]]) students[list[fieldIdx]] = '';
            students[list[fieldIdx]] += students[list[fieldIdx]] ? `, ${list[fNameIdx]}` : list[fNameIdx];
        });

        console.log(`Number of students: ${lines.length}`)
        for (const k in fields) {
            if (Object.hasOwnProperty.call(fields, key)) {
                const element = fields[key];
                console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
            }
        }
    } catch (error) {
        throw new Error("Cannot load the database")
    }
}

module.exports = countStudents;
