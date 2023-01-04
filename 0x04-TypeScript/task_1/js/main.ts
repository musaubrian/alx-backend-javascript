interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

const printTeacher = (firstname: string, lastname: string): string => `${firstname.charAt(0)}.${lastname}`
