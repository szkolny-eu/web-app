<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Strona główna :: Szkolny.eu</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/material-components-web.min.css">
    <link rel="stylesheet" href="/css/font/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="/css/style.css">
</head>

<body style="opacity:0" class="mdc-typography">
<aside class="mdc-drawer">
    <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title" id="username"></h3>
        <h6 class="mdc-drawer__subtitle" id="useremail"></h6>
    </div>
    <div class="mdc-drawer__content">
        <nav class="mdc-list">
            <?php include 'views/menu.html'; ?>
        </nav>
    </div>
</aside>
<div class="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
    <main class="main-content" id="main-content">
        <div id="app">
            <!-- Home screen -->
            <transition name="fade">
                <div v-if="screen === 0">
                    <?php include 'views/home.html'; ?>
                </div>
            </transition>
            <transition name="fade">
                <!-- Timetable screen -->
                <div v-if="screen === 1">
                    <?php include 'views/timetable.html'; ?>
                </div>
            </transition>
            <transition name="fade">
                <!-- Timetable screen -->
                <div v-if="screen === 2">
                    <?php include 'views/schedule.html'; ?>
                </div>
            </transition>
            <transition name="fade">
                <!-- Grades screen -->
                <div v-if="screen === 3">
                    <?php include 'views/grades.html'; ?>
                </div>
            </transition>
            <transition name="fade">
                <!-- Announcements screen -->
                <div v-if="screen === 8">
                    <?php include 'views/announcements.html'; ?>
                </div>
            </transition>
            <transition name="fade">
                <!-- Settings screen -->
                <div v-if="screen === 10">
                    <?php include 'views/settings.html'; ?>
                </div>
            </transition>
        </div>
    </main>
</div>
<div class="mdc-snackbar">
    <div class="mdc-snackbar__surface">
        <div class="mdc-snackbar__label" role="status" aria-live="polite">
            Text
        </div>
        <div class="mdc-snackbar__actions">
            <button type="button" class="mdc-button mdc-snackbar__action">Button</button>
        </div>
    </div>
</div>
<div class="mdc-dialog" role="alertdialog" aria-modal="true" aria-labelledby="my-dialog-title"
     aria-describedby="my-dialog-content">
    <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
            <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
            <h2 class="mdc-dialog__title" id="my-dialog-title"><!--
                 -->Dialog Title<!--
            --></h2>
            <div class="mdc-dialog__content" id="my-dialog-content">
                Dialog body text goes here.
            </div>
            <footer class="mdc-dialog__actions">
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">
                    <span class="mdc-button__label">No</span>
                </button>
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes">
                    <span class="mdc-button__label">Yes</span>
                </button>
            </footer>
        </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
</div>
<div class="mdc-dialog" id="eventDialog">
    <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface"
             role="alertdialog"
             aria-modal="true"
             aria-labelledby="my-dialog-title"
             aria-describedby="my-dialog-content">
            <div class="mdc-dialog__content" id="event-dialog-content">
                <p class="mdc-typography--caption" style="margin-bottom:0">Nauczyciel</p>
                <p class="gradeText" id="eventTeacher">Jan Kowalski</p>
                <p class="mdc-typography--caption" style="margin-bottom:0">Dodano</p>
                <p class="gradeText" id="eventAdded">16 maja przez Jan Kowalski</p>
                <p class="mdc-typography--caption" style="margin-bottom:0">Temat</p>
                <p style="margin:0;color:rgba(0,0,0,0.87);" id="eventTopic">Temat wydarzenia</p>
            </div>
            <div class="mdc-dialog__actions">
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">Zamknij</span>
                </button>
            </div>
        </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
</div>
<div class="mdc-dialog" id="gradeDialog">
    <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface"
             role="alertdialog"
             aria-modal="true"
             aria-labelledby="my-dialog-title"
             aria-describedby="my-dialog-content">
            <div class="mdc-dialog__content" id="event-dialog-content">
                <div class="gradeTop">
                    <div class="gradeField">4</div>
                    <div class="gradeInfo">
                        <p>semestr 2</p>
                        <p>Język angielski</p>
                        <p>waga 2</p>
                    </div>
                </div>
                <p class="mdc-typography--caption" style="margin-bottom:0">Nauczyciel</p>
                <p class="gradeText" id="gradeTeacher">Jan Kowalski</p>
                <p class="mdc-typography--caption" style="margin-bottom:0">Kategoria</p>
                <p class="gradeText" id="gradeCategory">sprawdzian</p>
                <p class="mdc-typography--caption" style="margin-bottom:0">Opis</p>
                <p class="gradeText" id="gradeDesc">Temat wydarzenia</p>
                <p class="mdc-typography--caption" style="margin-bottom:0">Wartość do średniej</p>
                <p class="gradeText" id="gradeValue">4,00</p>
                <p class="mdc-typography--caption" style="margin-bottom:0">Data dodania</p>
                <p class="gradeText" id="gradeAdded">16 maja, 10:42</p>
            </div>
            <div class="mdc-dialog__actions">
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">Zamknij</span>
                </button>
            </div>
        </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
</div>
<script src="/js/libs/material-components-web.min.js"></script>
<script src="/js/libs/vue.js"></script>
<link href="/js/calendar/core/main.min.css" rel="stylesheet"/>
<link href="/js/calendar/daygrid/main.min.css" rel="stylesheet"/>
<link href="/js/calendar/timegrid/main.min.css" rel="stylesheet"/>
<link href="/js/calendar/list/main.min.css" rel="stylesheet"/>
<script src="/js/calendar/core/main.min.js"></script>
<script src="/js/calendar/interaction/main.min.js"></script>
<script src='/js/calendar/core/locales-all.min.js'></script>
<script src="/js/calendar/daygrid/main.min.js"></script>
<script src="/js/calendar/timegrid/main.min.js"></script>
<script src="/js/calendar/list/main.min.js"></script>
<script src="/js/libs/moment-with-locales.min.js"></script>
<script src="/js/libs/popper.min.js"></script>
<script src="/js/libs/tippy-bundle.umd.min.js"></script>
<script src="/account.js"></script>
<script src="/js/utils.js"></script>
<script src="/js/timetable.js"></script>
<script src="/js/events.js"></script>
<script src="/js/grades.js"></script>
<script src="/js/announcements.js"></script>
<script src="/js/index.js"></script>
</body>

</html>