namespace Subjects {
    export interface Teacher {
        experienceTeaching?: number
    }

    class Cpp extends Subject {
        getRequirements = (): string => 'Here is the list of requirements for Cpp';
        getAvailableTeacher(): string {
            return this.teacher.experienceTeaching > 0 ? `Available teacher ${this.teacher.firstName}` : 'No available teacher'
        }
    }
}
