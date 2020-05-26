class Announcement {
    constructor(start, end, subject, content, teacher) {
        this.start = start;
        this.end = end;
        this.subject = subject;
        this.content = content;
        this.teacher = teacher;
        this.initials = teacher.split(" ").map((n)=>n[0]).join("");;
    }
}

class Announcements {
    static getAnnouncements() {
        let announcements = [];
        moment.locale('pl');
        for (let i = 0; i < data.announcements.length; i++) {
            const a = data.announcements[i];
            const announcement = new Announcement(moment(a.announcementStartDate).format("DD MMMM"), moment(a.announcementEndDate).format("DD MMMM"), a.announcementSubject, a.announcementText, Utils.getTeacherLongName(a.teacherId));
            announcements.push(announcement);
        }
        return announcements;
    }
}