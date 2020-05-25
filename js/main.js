"use strict";

// const database = firebase.database();
const date = new Date("20 May 2020 15:12:00");
// var date = new Date();
const weekdays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
const eventDialog = new mdc.dialog.MDCDialog(document.querySelector('#eventDialog'));
const gradeDialog = new mdc.dialog.MDCDialog(document.querySelector('#gradeDialog'));
const data = demo_db;
let calendar;

Vue.config.ignoredElements = ['divider', 'space', 'loop'];
Vue.component('grade', {
    props: ['value', 'gradeId'],
    data: function data() {
        return {
            color: Utils.getGradeColor(this._props.value)
        };
    },
    template: '<div v-bind:style="{ backgroundColor: color }" class="grade" v-html="value" onclick="Grades.showInfo(this)" id="gradeId"></div>'
});

let app = new Vue({
    el: '#app',
    data: {
        versionName: "0.1.21, pre-alpha",
        timetable: Timetable.getTimetable(date),
        grades: Grades.getGrades(),
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
    },
    updated: function () {
        this.$nextTick(function () {
            tippy('.grade', {
                arrow: false,
                placement: 'bottom-start',
                content: "",
                onShow(instance) {
                    const grade = Grades.getGrade(instance.reference.getAttribute('id'));
                    if(grade.desc.trim() === '')
                        instance.setContent(grade.category);
                    else
                        instance.setContent(grade.desc);
                },
            });
        })
    }
});

document.querySelector("#username").innerText = data.profiles[0].studentNameLong;
document.querySelector("#useremail").innerText = data.profiles[0].subname;

//#region Menu stuff

const pages = ['Strona główna', 'Plan lekcji', 'Terminarz', 'Oceny', null, null, null, null, null, null, 'Ustawienia'];
const content = document.getElementById('main-content');
const menuItems = document.querySelectorAll(".mdc-drawer .mdc-list-item");
const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));

Utils.setClickListener(menuItems[0], () => Utils.setSelectedMenuItem(0));
Utils.setClickListener(menuItems[1], () => Utils.setSelectedMenuItem(1));
Utils.setClickListener(menuItems[2], () => Utils.setSelectedMenuItem(2));
Utils.setClickListener(menuItems[3], () => Utils.setSelectedMenuItem(3));
Utils.setClickListener(menuItems[4], () => Utils.showSnackbar("Wiadomości wkrótce zostaną dodane!"));
Utils.setClickListener(menuItems[5], () => Utils.showSnackbar("Zadania domowe wkrótce zostaną dodane!"));
Utils.setClickListener(menuItems[6], () => Utils.showSnackbar("Zachowanie wkrótce zostanie dodane!"));
Utils.setClickListener(menuItems[7], () => Utils.showSnackbar("Frekwencja wkrótce zostanie dodana!"));
Utils.setClickListener(menuItems[8], () => Utils.showSnackbar("Tabilca ogłoszeń wkrótce zostanie dodana!"));
Utils.setClickListener(menuItems[9], () => Utils.showSnackbar("Powiadomienia wkrótce zostaną dodane!"));
Utils.setClickListener(menuItems[10], () => Utils.setSelectedMenuItem(10));


document.body.style.opacity = "1";
switch (location.hash) {
    case '#home':
        Utils.setSelectedMenuItem(0);
        break;

    case '#plan-lekcji':
        Utils.setSelectedMenuItem(1);
        break;

    case '#terminarz':
        Utils.setSelectedMenuItem(2);
        break;

    case '#oceny':
        Utils.setSelectedMenuItem(3);
        break;

    case '#ustawienia':
        Utils.setSelectedMenuItem(10);
        break;

    default:
        Utils.setSelectedMenuItem(0);
        break;
}

//#endregion