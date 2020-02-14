"use strict";

var gradesColors = {
    '1': 'red',
    '2': 'orange',
    '3': 'amber',
    '4': 'lightgreen',
    '5': 'lightgreen',
    '6': 'lightblue',
    '-': 'orange',
    '+': 'lightgreen'
};
var database = firebase.database();
var date = new Date("20 Nov 2019 15:12:00");
// var date = new Date();
var weekdays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
var nextDayV = undefined;
var tim = [];

Vue.config.ignoredElements = ['divider', 'space', 'loop'];
Vue.component('grade', {
    props: ['value'],
    data: function data() {
        return {
            color: gradesColors[this._props.value.slice(0, 1)]
        };
    },
    template: '<div v-bind:style="{ backgroundColor: color }" class="grade">{{value}}</div>'
});
var app = new Vue({
    el: '#app',
    data: {
        versionName: "0.0.14, pre-alpha",
        timetable: [],
        screen: -1,
        days: weekdays,
        home: {
            tomorrow: weekdays[date.getDay()],
            today: weekdays[date.getDay() - 1],
            startEnd: "",
            hasEnded: false,
            hasStarted: false,
            firstLessons: ["", ""],
            nextLessons: ["", ""],
            events: [""]
            // startEndTomorrow: timetable[date.getDay()][0].start+" - "+timetable[date.getDay()][timetable[date.getDay()].length-1].end,

        }
    }
});

/*

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

Date.prototype.getHoursMinutes = function (days) {
    var date = new Date(this.valueOf());
    return date.getHours() + ":" + date.getMinutes();
};



function compareHours(a, b) {
    return new Date ('1/1/1999 ' + a) > new Date ('1/1/1999 ' + b);
}

function nextDay() {
    var i = 1;

    if(nextDayV != undefined) {
        return nextDayV;
    }

    if (app.timetable[date.addDays(1).getDay() - 1] == undefined) {
        console.log(date);

        while (app.timetable[date.addDays(i).getDay() - 1] == undefined) {
            i++;
        }

        console.log(i, date);
        nextDayV = date.addDays(i).getDay() - 1;
        return nextDayV;
    } else {
        nextDayV = date.addDays(1).getDay() - 1;
        return nextDayV;
    }
}

function getCurrentWeek(d) {
    var c = [];

    if (d.getDay() == 0 || d.getDay() == 6) {
        var dd = d.addDays(d.getDay() == 0 ? 1 : 2);

        for (var i = 0; i < 7; i++) {
            c.push(dd.addDays(i));
        }

        return c;
    } else {
        var _dd = d.addDays(-d.getDay() + 1);

        for (var _i = 0; _i < 7; _i++) {
            c.push(_dd.addDays(_i));
        }

        return c;
    }
}

function getSETimes(d) {
    var s = tim.timetable.filter(function (a) {
        return a.date == formatDate(d);
    });
    app.home.hasEnded = compareHours(date.getHoursMinutes(), processHour(s[s.length - 1].endTime));
    app.home.hasStarted = compareHours(date.getHoursMinutes(),processHour(s[0].startTime)) && !compareHours(date.getHoursMinutes(), processHour(s[s.length - 1].endTime));

    return processHour(s[0].startTime) + " - " + processHour(s[s.length - 1].endTime);
}

function getSETimesTomorrow(d) {
    var s = tim.timetable.filter(function (a) {
        return a.date == formatDate(d);
    });
    app.home.hasEnded = compareHours(date.getHoursMinutes(), processHour(s[s.length - 1].endTime));
    app.home.hasStarted = compareHours(date.getHoursMinutes(),processHour(s[0].startTime)) && !compareHours(date.getHoursMinutes(), processHour(s[s.length - 1].endTime));

    return processHour(s[0].startTime) + " - " + processHour(s[s.length - 1].endTime);
}

function formatDate(w) {
    return w.getFullYear() + "-" + ('0' + (w.getMonth() + 1)).slice(-2) + "-" + ('0' + w.getDate()).slice(-2);
}

function processHour(t) {
    return parseInt(t.match(/.{1,2}/g)[0]) + ":" + t.match(/.{1,2}/g)[1];
}

function getTeacher(id) {
    return tim.teachers.find(function (a) {
        return a.teacherId == id;
    });
}

function getSubject(id) {
    return tim.subjects.find(function (a) {
        return a.subjectId == id;
    });
}

function processTimetable(snap) {
    var dates = getCurrentWeek(new Date());
    var t = [];

    var _loop = function _loop(i) {
        var tt = snap.filter(function (a) {
            return a.date == formatDate(dates[i]);
        });
        var f = [];

        for (var j = 0; j < tt.length; j++) {
            if (tt[j].type == -1) continue;
            f.push({
                start: processHour(tt[j].startTime),
                end: processHour(tt[j].endTime),
                room: 0,
                name: getSubject(tt[j].subjectId)['subjectLongName'],
                teacher: getTeacher(tt[j].teacherId)['teacherName'] + " " + getTeacher(tt[j].teacherId)['teacherSurname']
            });
        }

        if (f.length != 0) t.push(f);
    };

    for (var i = 0; i < 7; i++) {
        _loop(i);
    }

    console.log(t);

    return t;
}*/

database.ref("K3325HOG").once('value').then(function (snapshot) {
    var snap = snapshot.val();
    // tim = snap;
    document.querySelector("#username").innerText = snap.profiles[0].accountNameLong;
    document.querySelector("#useremail").innerText = snap.profiles[0].subname;
    // // app.timetable = processTimetable(snap.timetable);

    // // console.log(nextDay());
    // app.home.startEnd = getSETimes(date);
    // app.home.startEnd = getSETimes(date);


    // if(!app.home.hasStarted && !app.home.hasEnded)
    //     app.home.firstLessons = [app.timetable[date.getDay()-1][0].start + " " + app.timetable[date.getDay()-1][0].name + ", " + app.timetable[date.getDay()-1][0].room, app.timetable[date.getDay()-1][1].start + " " + app.timetable[date.getDay()-1][1].name + ", " + app.timetable[date.getDay()-1][1].room]
    // else if(app.home.hasEnded)
    //     app.home.firstLessons = [app.timetable[nextDay()][0].start + " " + app.timetable[nextDay()][0].name + ", " + app.timetable[nextDay()][0].room, app.timetable[nextDay()][1].start + " " + app.timetable[nextDay()][1].name + ", " + app.timetable[nextDay()][1].room]

    // app.tomorrow = nextDay();

    document.body.style.opacity = 1;
    setTimeout(function () {
        switch (location.hash) {
            case '#home':
                setSelectedMenuItem(0);
                break;

            case '#plan-lekcji':
                setSelectedMenuItem(1);
                break;

            case '#oceny':
                setSelectedMenuItem(3);
                break;

            case '#ustawienia':
                setSelectedMenuItem(10);
                break;

            default:
                setSelectedMenuItem(0);
                break;
        }
    }, 100);
});

//#region Menu stuff and Snackbar

var pages = ['Strona główna', 'Plan lekcji', null, "Oceny", null, null, null, null, null, null, 'Ustawienia'];
var content = document.getElementById('main-content');
var menuItems = document.querySelectorAll(".mdc-drawer .mdc-list-item");
var snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
setClickListener(menuItems[0], function () {
    setSelectedMenuItem(0);
});
setClickListener(menuItems[1], function () {
    setSelectedMenuItem(1);
});
setClickListener(menuItems[2], function () {
    showSnackbar("Terminarz wkrótce zostanie dodany!");
});
setClickListener(menuItems[3], function () {
    setSelectedMenuItem(3); // showSnackbar("Oceny wkrótce zostaną dodane!")
});
setClickListener(menuItems[4], function () {
    showSnackbar("Wiadomości wkrótce zostaną dodane!");
});
setClickListener(menuItems[5], function () {
    showSnackbar("Zadania domowe wkrótce zostaną dodane!");
});
setClickListener(menuItems[6], function () {
    showSnackbar("Zachowanie wkrótce zostanie dodane!");
});
setClickListener(menuItems[7], function () {
    showSnackbar("Frekwencja wkrótce zostanie dodana!");
});
setClickListener(menuItems[8], function () {
    showSnackbar("Tabilca ogłoszeń wkrótce zostanie dodana!");
});
setClickListener(menuItems[9], function () {
    showSnackbar("Powiadomienia wkrótce zostaną dodane!");
});
setClickListener(menuItems[10], function () {
    setSelectedMenuItem(10);
});

function setSelectedMenuItem(i) {
    app.screen = i;
    document.title = "".concat(pages[i], " :: Szkolny.eu");
    menuItems.forEach(function (item) {
        return item.className = "mdc-list-item";
    });
    menuItems[i].className += " mdc-list-item--activated";
}

function showSnackbar(text) {
    var hasAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var actionText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Retry";
    var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5000;
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

function setClickListener(elem, cb) {
    elem.addEventListener("click", function () {
        cb();
    });
}

//#endregion