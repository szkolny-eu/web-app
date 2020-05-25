class Utils {
    static setSelectedMenuItem(i) {
        app.screen = i;
        document.title = "".concat(pages[i], " :: Szkolny.eu");
        menuItems.forEach(function (item) {
            return item.className = "mdc-list-item";
        });
        menuItems[i].className += " mdc-list-item--activated";
        if (i === 2) {
            setTimeout(() => {Events.initCalendar()}, 500);
            document.querySelector("#app").style.background = "#fff";
        } else {
            document.querySelector("#app").style.background = "";
        }
    }

    static random(seed) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    static getRandomInt(min, max, seed = 1) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Utils.random(seed) * (max - min + 1)) + min;
    }

    static showSnackbar(text) {
        const hasAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const actionText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Retry";
        const cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
        };
        const timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5000;
        snackbar.labelText = text;
        snackbar.timeoutMs = timeout;

        if (!hasAction) {
            snackbar.actionEl_.style.display = "none";
        } else {
            snackbar.actionEl_.style.display = "";
            snackbar.actionEl_.innerText = actionText; //TODO: Repair this strange action button click event
            //snackbar.actionEl_.addEventListener("click", cb(), false);
        }

        snackbar.open();
    }

    static getGradeColor(grade) {
        switch (grade.toLowerCase()) {
            case "+":
            case "++":
            case"+++":
                return "#4caf50";
            case "0":
            case"-":
            case"-,":
            case"-,-,":
            case"np":
            case"np.":
            case"npnp":
            case"np,":
            case"np,np,":
            case"bs":
            case"nk":
            case"bz":
                return "#ff7043";
            case "1-":
            case"1":
            case"f":
            case"ng":
                return "#ff0000";
            case "1+":
            case"ef":
                return "#ff3d00";
            case "2-":
            case"2":
            case"e":
            case"ndp":
                return "#ff9100";
            case "2+":
            case"de":
                return "#ffab00";
            case "3-":
            case"3":
            case"d":
            case"popr":
                return "#ffff00";
            case "3+":
            case"cd":
                return "#c6ff00";
            case "4-":
            case"4":
            case"c":
            case"db":
                return "#76ff03";
            case "4+":
            case"bc":
                return "#64dd17";
            case "5-":
            case"5":
            case"b":
            case"bdb":
                return "#00c853";
            case "5+":
            case"ab":
                return "#00bfa5";
            case "6-":
            case"6":
            case"a":
            case"wz":
                return "#2196f3";
            case "6+":
            case"a+":
                return "#0091ea";
            default:
                console.log(grade.toLowerCase());
                return "#ccc";
        }
    }

    static getCurrentSemester(date) {
        //TODO: Add logic (I tried, but it doesn't work. It'll be hardcoded for now)
        return 2;
    }

    static setClickListener(elem, cb) {
        elem.addEventListener("click", function () {
            cb();
        });
    }

    static getTeacher(id) {
        return data.teachers.filter(obj => {
            return obj.teacherId === id
        })[0];
    }

    static getTeacherLongName(id) {
        let teacher = this.getTeacher(id);
        return teacher.teacherName + ' ' + teacher.teacherSurname;
    }

    static getSubject(id) {
        return data.subjects.filter(obj => {
            return obj.subjectId === id
        })[0];
    }

    static getTeam(id) {
        return data.teams.filter(obj => {
            return obj.teamId === id
        })[0];
    }

    static getSemester(id) {
        return data.grades.filter(obj => {
            return obj.gradeSemester === 2
        });
    }
}