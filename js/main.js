"use strict";

var gradesColors = {'1':'red','2':'orange','3':'amber','4':'lightgreen','5':'lightgreen','6':'lightblue','-':'orange','+':'lightgreen'};
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
        timetable: [
            [{
                start: "8:00",
                end: "8:45",
                room: "4",
                teacher: "Jan Kowalski",
                name: "Matematyka",
            }, {
                start: "8:50",
                end: "9:35",
                room: "16",
                teacher: "Adam Nowak",
                name: "Polski",
            }],
            [{
                start: "8:00",
                end: "8:45",
                room: "4",
                teacher: "Jan Kowalski",
                name: "Matematyka",
            }, {
                start: "8:50",
                end: "9:35",
                room: "16",
                teacher: "Adam Nowak",
                name: "Polski",
            }],
            [{
                start: "8:00",
                end: "8:45",
                room: "4",
                teacher: "Jan Kowalski",
                name: "Matematyka",
            }, {
                start: "8:50",
                end: "9:35",
                room: "16",
                teacher: "Adam Nowak",
                name: "Polski",
            }],
            [{
                start: "8:00",
                end: "8:45",
                room: "4",
                teacher: "Jan Kowalski",
                name: "Matematyka",
            }, {
                start: "8:50",
                end: "9:35",
                room: "16",
                teacher: "Adam Nowak",
                name: "Polski",
            }],
            [{
                start: "8:00",
                end: "8:45",
                room: "4",
                teacher: "Jan Kowalski",
                name: "Matematyka",
            }, {
                start: "8:50",
                end: "9:35",
                room: "16",
                teacher: "Adam Nowak",
                name: "Polski",
            }]
        ],
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

database.ref("K3325HOG").once('value').then(function (snapshot) {
    var snap = snapshot.val();
    document.querySelector("#username").innerText = snap.profiles[0].accountNameLong;
    document.querySelector("#useremail").innerText = snap.profiles[0].subname;

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

var pages = ['Strona główna', 'Plan lekcji', 'Terminarz', 'Oceny', null, null, null, null, null, null, 'Ustawienia'];
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
    setSelectedMenuItem(2);
});
setClickListener(menuItems[3], function () {
    setSelectedMenuItem(3);
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
    if(i == 2) setTimeout(function(){initCalendar()}, 500);
}
var calendar;
function initCalendar() {
    var calendarEl = document.getElementById('calendar');

    calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
      height: 'parent',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      defaultView: 'dayGridMonth',
      defaultDate: '2019-08-12',
      locale: 'pl',
      navLinks: true, // can click day/week names to navigate views
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          groupId: 0,
          title: 'Wielomiany - Sprawdzian',
          start: '2019-08-09T14:05:00'
        }
      ]
    });
    // calendar.setOption('locale', 'pl');

    calendar.render();
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