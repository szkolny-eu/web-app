"use strict";

const gradesColors = {
    '1': 'red',
    '2': 'orange',
    '3': 'amber',
    '4': 'lightgreen',
    '5': 'lightgreen',
    '6': 'lightblue',
    '-': 'orange',
    '+': 'lightgreen'
};
const database = firebase.database();
const date = new Date("20 May 2020 15:12:00");
// var date = new Date();
const weekdays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
const data = demo_db;
let calendar;

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

let app = new Vue({
    el: '#app',
    data: {
        versionName: "0.0.15, pre-alpha",
        timetable: getTimetable(date),
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

database.ref("K3325HOG").once('value').then((snapshot) => {
    const snap = snapshot.val();
    document.querySelector("#username").innerText = snap.profiles[0].accountNameLong;
    document.querySelector("#useremail").innerText = snap.profiles[0].subname;

    document.body.style.opacity = "1";
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
});

//#region Menu stuff

const pages = ['Strona główna', 'Plan lekcji', 'Terminarz', 'Oceny', null, null, null, null, null, null, 'Ustawienia'];
const content = document.getElementById('main-content');
const menuItems = document.querySelectorAll(".mdc-drawer .mdc-list-item");
const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));

setClickListener(menuItems[0], () => setSelectedMenuItem(0));
setClickListener(menuItems[1], () => setSelectedMenuItem(1));
setClickListener(menuItems[2], () => setSelectedMenuItem(2));
setClickListener(menuItems[3], () => setSelectedMenuItem(3));
setClickListener(menuItems[4], () => showSnackbar("Wiadomości wkrótce zostaną dodane!"));
setClickListener(menuItems[5], () => showSnackbar("Zadania domowe wkrótce zostaną dodane!"));
setClickListener(menuItems[6], () => showSnackbar("Zachowanie wkrótce zostanie dodane!"));
setClickListener(menuItems[7], () => showSnackbar("Frekwencja wkrótce zostanie dodana!"));
setClickListener(menuItems[8], () => showSnackbar("Tabilca ogłoszeń wkrótce zostanie dodana!"));
setClickListener(menuItems[9], () => showSnackbar("Powiadomienia wkrótce zostaną dodane!"));
setClickListener(menuItems[10], () => setSelectedMenuItem(10));


//#endregion