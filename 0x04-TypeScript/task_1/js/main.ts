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

const printTeacher = (firstName: string, lastName: string): string => `${firstName.charAt(1)}.${lastName}`


interface studentClassInterface {
    firstName: string,
    lastName: string,
    workOnHomeWork(): string,
    displayName(): string
}

interface studentConstructor {
    (firstName: string, lastName: string): studentClassInterface
}
class StudentClass implements studentClassInterface {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    displayName = (): string => this.firstName;
    workOnHomeWork = () => 'Currently working'

}
