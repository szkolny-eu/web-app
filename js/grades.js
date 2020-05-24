class Grade {
    constructor(semester, subject, weight, teacher, category, desc, gradeValue, date, name) {
        this.semester = semester;
        this.subject = subject;
        this.weight = weight;
        this.teacher = teacher;
        this.category = category;
        this.desc = desc;
        this.gradeValue = gradeValue;
        this.date = date;
        this.name = name;
    }
}

class Grades {
    static getGrades() {
        let semester = Utils.getSemester(Utils.getCurrentSemester());

        semester = semester.sort((a, b) => {
            return a.subjectId - b.subjectId;
        });

        let grades = {};

        for (let i = 0; i < semester.length; i++) {
            if (grades[Utils.getSubject(semester[i].subjectId).subjectLongName] === undefined) grades[Utils.getSubject(semester[i].subjectId).subjectLongName] = [];
            const grade = new Grade(semester[i].gradeSemester, Utils.getSubject(semester[i].subjectId).subjectLongName, semester[i].gradeWeight, Utils.getTeacherLongName(semester[i].teacherId), semester[i].gradeCategory, semester[i].gradeDescription, semester[i].gradeValue, semester[i].addedDate, semester[i].gradeName);
            grades[Utils.getSubject(semester[i].subjectId).subjectLongName].push(grade);
        }

        return grades;
    }
}