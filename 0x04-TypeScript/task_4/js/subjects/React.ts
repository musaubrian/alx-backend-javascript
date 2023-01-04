namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number
    }

    class React extends Subject{
        getRequirements = (): string => 'Here is the list of requirements for React';
        getAvailableTeacher(): string {
           return this.teacher.experienceTeachingReact > 0 ? `Available teacher ${this.teacher.firstName}` : 'No available teacher' 
        }
    }
}
