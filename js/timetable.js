class Lesson {
    constructor(start, end, room, teacher, name, team) {
        this.start = start;
        this.end = end;
        this.room = room;
        this.teacher = teacher;
        this.name = name;
        this.team = team;
    }
}
class Timetable {
    static getMonday(d) {
        d = new Date(d);
        let day = d.getDay(),
            diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }

    static getTimetable(date) {
        let monday = moment(Timetable.getMonday(date));
        let timetable = [];

        for (let i = 0; i < 7; i++) {
            let weekday = monday.clone().add({days: i});
            console.log(weekday._d, i);
            let day = data.timetable.filter(a => a.date === weekday.format('YYYY-MM-DD'));
            let lessons = [];
            for (let j = 0; j < day.length; j++) {
                if (day[j].type !== -1) {
                    let lesson = new Lesson(Timetable.parseHour(day[j].startTime), Timetable.parseHour(day[j].endTime), day[j].classroom, Utils.getTeacherLongName(day[j].teacherId), Utils.getSubject(day[j].subjectId).subjectLongName, Utils.getTeam(day[j].teamId).teamName);
                    lessons.push(lesson);
                }
            }
            if (lessons.length > 0)
                timetable.push(lessons);
        }
        return timetable;
    }

    static parseHour(time) {
        if (time === null) return "";
        return time.match(/.{1,2}/g).splice(0, 2).join(":");
    }
}
