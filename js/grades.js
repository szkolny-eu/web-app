class Grade {
    constructor(semester, subject, weight, teacher, category, desc, value, date, name, id) {
        this.semester = semester;
        this.subject = subject;
        this.weight = weight;
        this.teacher = teacher;
        this.category = category;
        this.desc = desc;
        this.value = value;
        this.date = date;
        this.id = id;
        this.name = name.trim() === "" ? " &nbsp; " : name;
    }
}

class Grades {
    static getGrades() {
        let s = Utils.getSemester(Utils.getCurrentSemester());

        s = s.sort((a, b) => {
            return a.subjectId - b.subjectId;
        });

        let grades = {};

        for (let i = 0; i < s.length; i++) {
            if (grades[Utils.getSubject(s[i].subjectId).subjectLongName] === undefined) grades[Utils.getSubject(s[i].subjectId).subjectLongName] = [];
            const grade = new Grade(s[i].gradeSemester, Utils.getSubject(s[i].subjectId).subjectLongName, s[i].gradeWeight, Utils.getTeacherLongName(s[i].teacherId), s[i].gradeCategory, s[i].gradeDescription, s[i].gradeValue, s[i].addedDate, s[i].gradeName, s[i].gradeId);
            grades[Utils.getSubject(s[i].subjectId).subjectLongName].push(grade);
        }

        return grades;
    }

    static getGrade(id) {
        const s = data.grades.filter((a) => {
            return parseInt(a.gradeId) === parseInt(id);
        })[0];
        return new Grade(s.gradeSemester, Utils.getSubject(s.subjectId).subjectLongName, s.gradeWeight, Utils.getTeacherLongName(s.teacherId), s.gradeCategory, s.gradeDescription, s.gradeValue, s.addedDate, s.gradeName, s.gradeId);
    }

    static showInfo(e) {
        const grade = this.getGrade(e.getAttribute('id'));
        const container = gradeDialog.container_;
        container.querySelector('#gradeTeacher').innerHTML = grade.teacher;
        container.querySelector('#gradeCategory').innerHTML = grade.category;
        container.querySelector('#gradeDesc').innerHTML = grade.desc.trim() === '' ? '(brak opisu)' : grade.desc;
        container.querySelector('#gradeValue').innerHTML = grade.value.toString().replace('.', ',');
        moment.locale('pl');
        container.querySelector('#gradeAdded').innerHTML = moment(grade.date).format('DD MMM, HH:mm');
        container.querySelectorAll('.gradeInfo p')[0].innerHTML = 'semestr ' + grade.semester;
        container.querySelectorAll('.gradeInfo p')[1].innerHTML = grade.subject;
        container.querySelectorAll('.gradeInfo p')[2].innerHTML = 'waga ' + grade.weight;
        container.querySelector('.gradeField').innerHTML = grade.name;
        container.querySelector('.gradeField').style.backgroundColor = Utils.getGradeColor(grade.name)
        gradeDialog.open();
    }
}