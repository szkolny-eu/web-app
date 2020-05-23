function setSelectedMenuItem(i) {
    app.screen = i;
    document.title = "".concat(pages[i], " :: Szkolny.eu");
    menuItems.forEach(function (item) {
        return item.className = "mdc-list-item";
    });
    menuItems[i].className += " mdc-list-item--activated";
    if (i === 2) {
        setTimeout(function () {
            initCalendar()
        }, 500);
        document.querySelector("#app").style.background = "#fff";
    } else {
        document.querySelector("#app").style.background = "";
    }
}

function random(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function getRandomInt(min, max, seed = 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(random(seed) * (max - min + 1)) + min;
}

function showSnackbar(text) {
    var hasAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var actionText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Retry";
    var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    };
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

Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if ( i == 0 ) return this;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
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

function getSubject(id) {
    return data.subjects.filter(obj => {
        return obj.subjectId === id
    })[0];
}

function getTeam(id) {
    return data.teams.filter(obj => {
        return obj.teamId === id
    })[0];
}