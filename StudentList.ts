import { Student } from "./Student";

export class StudentList {
    students: Array<Student>;

    constructor(students: Array<Student>) {
        this.students = students
    }

    getStudents() {
        return this.students;
    }

    updateStudentName(id: string, name: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.name = name;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";
    }

    checkStudentId(id: string) {
        // let valid = false;

        // for (let index = 0; index < this.students.length; index++) {
        //     const element = this.students[index];

        //     if (element.studentId === id) {
        //         valid = true;
        //     }
        // }
        let checkStudent = this.students.find(element => element.studentId === id);

        if (checkStudent) return true;

        return false;
    }

    updateAge(id: string, age: number) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.age = age;
            return student;
        }

        return "Student id doesnt exists";
    }
    updateCourse(id: string, courseName: string) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.course = courseName;
            return student;
        }

        return "Student id doesnt exists";

    }

    updateCollege(id: string, collegeName: string) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.college = collegeName;
            return student;
        }

        return "Student id doesnt exists";

    }

    updateAddress(id: string, address: string) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.address = address;
            return student;
        }

        return "Student id doesnt exists";

    }

    numberOfStudent(){
        return this.students.length;
    }

    deletestudent(id: string) {
    let index = this.students.findIndex(element => element.studentId === id);

    if (index > -1) {
        this.students.splice(index,1);
        return "Student has been successfully deleted.";

    }
    return "Student id doesnt exists";
}
}