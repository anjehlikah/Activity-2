import { Person } from "./Person";

export class Student extends Person {
    studentId: string;
    course: string;
    college: string;

    constructor(
        studentId: string,
        course: string,
        college: string,
        name: string,
        age: number,
        gender: string,
        address: string,
    ) {
        super(name, age, gender, address);
        this.studentId = studentId
        this.course = course
        this.college = college
    }

    getStudentInfo() {
        // Expected format
        // Student Id: 2015-XXXX
        // Course: BSCPE
        // College: CEIT
        return `Student ID: ${this.studentId} \nCourse: ${this.course}\nCollege: ${this.college}`;
    }

} 