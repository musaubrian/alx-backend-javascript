namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number
    }
    class Java extends Subject {
        getRequirement = (): string => 'Here is the list of requirements for Java';
        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingJava > 0 ? `Available teacher ${this.teacher.firstName}` : 'No available teacher'
        }

    }
}