import { Person } from "./Person";

export class StudentWOExtends {
    studentId: string;
    person: Person;

    constructor(studentId: string, person: Person) {
        this.studentId = studentId
        this.person = person
    }
}