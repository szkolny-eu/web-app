class Event {
    constructor(groupId, title, start, end, color, reference) {
        this.title = title;
        this.start = start;
        this.end = end;
        this.groupId = groupId;
        this.color = color;
        this.reference = reference;
    }
}

const eventColors = ["#ff9800", "#f44336", "#9c27b0", "#673ab7",
    "#00bcd4", "#03a9f4", "#2196f3", "#009688",
    "#4caf50", "#8bc34a", "#e91e63", "#ff5722",
    "#795548", "#607d8b"];
const eventDialog = new mdc.dialog.MDCDialog(document.querySelector('#eventDialog'));
const monthsAlt = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'listopada', 'października', 'grudnia'];

// eventColors.shuffle();

function getEvents() {
    let events = [{
        groupId: 0,
        title: 'Wielomiany - Sprawdzian',
        start: '2020-02-08T14:05:00',
        end: '2020-02-08T14:50:00'
    }];

    for (let i = 0; i < data.events.length; i++) {
        let start = moment(data.events[i].eventDate + ' ' + parseHour(data.events[i].eventTime));
        let end = start.clone().add(45, 'minutes');
        let event = new Event(data.events[i].eventType, data.events[i].eventTopic.split('\n')[0], start.format("YYYY-MM-DDTHH:mm:01"), end.format("YYYY-MM-DDTHH:mm:01"), eventColors[getRandomInt(0, eventColors.length, data.events[i].eventType)], data.events[i]);
        events.push(event);
    }

    return events;
}

function initCalendar() {
    const calendarEl = document.getElementById('calendar');

    calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
        height: 'parent',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        defaultView: 'dayGridMonth',
        defaultDate: moment().format("YYYY-MM-DD"),
        locale: 'pl',
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        events: getEvents(),
        eventClick: function(info) {
            const event = info.event._def.extendedProps.reference;
            const eventTeacher = getTeacher(event.teacherId);
            console.log(event);
            eventDialog.container_.querySelector('#eventTopic').innerHTML = event.eventTopic;
            eventDialog.container_.querySelector('#eventAdded').innerHTML = moment(event.eventDate).format("DD") + ' ' + monthsAlt[moment(event.eventDate).format("M")-1] + ' przez ' + eventTeacher.teacherName + ' ' + eventTeacher.teacherSurname;
            eventDialog.container_.querySelector('#eventTeacher').innerHTML = eventTeacher.teacherName + ' ' + eventTeacher.teacherSurname;
            eventDialog.open();
        }
    });
    calendar.render();
}