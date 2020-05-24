class Grades {
    static getGrades() {
        let semester = Utils.getSemester(Utils.getCurrentSemester());

        semester = semester.sort((a, b) => {
            return a.subjectId - b.subjectId;
        });

        let grades = {};
        let currentSubject = semester[0].subjectId;

        for (let i = 0; i < semester.length; i++) {
            if (grades[Utils.getSubject(semester[i].subjectId).subjectLongName] === undefined) grades[Utils.getSubject(semester[i].subjectId).subjectLongName] = [];
            grades[Utils.getSubject(semester[i].subjectId).subjectLongName].push(semester[i]);
        }

        return grades;
    }
}