function setSelectedMenuItem(i) {
    app.screen = i;
    document.title = "".concat(pages[i], " :: Szkolny.eu");
    menuItems.forEach(function(item) {
        return item.className = "mdc-list-item";
    });
    menuItems[i].className += " mdc-list-item--activated";
    if (i === 2) {
        setTimeout(function() {
            initCalendar()
        }, 500);
        document.querySelector("#app").style.background = "#fff";
    } else {
        document.querySelector("#app").style.background = "";
    }
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
        events: [{
            groupId: 0,
            title: 'Wielomiany - Sprawdzian',
            start: '2020-02-08T14:05:00',
            end: '2020-02-08T14:50:00'
        },
            {
                color: '#4db6ac',
                groupId: 0,
                title: 'Walentynki',
                start: '2020-02-14'
            }
        ]
    });
    calendar.render();
}

function showSnackbar(text) {
    var hasAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var actionText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Retry";
    var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function() {};
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

function getTeacher(id) {
    return data.teachers.filter(obj => {
        return obj.teacherId === id
    })[0];
}