<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    //session_start();
    //if(!isset($_SESSION["userId"])) {
        // header('Location: http://szkolny.eu/login');
        // exit();
    //}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Strona główna :: Szkolny.eu</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./css/material-components-web.min.css">
    <link rel="stylesheet" href="./css/font/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="./css/style.css">
</head>

<body style="opacity:0">

    <aside class="mdc-drawer">
        <div class="mdc-drawer__header">
            <h3 class="mdc-drawer__title" id="username"></h3>
            <h6 class="mdc-drawer__subtitle" id="useremail"></h6>
        </div>
        <div class="mdc-drawer__content">
            <nav class="mdc-list">
                <?php include 'menu.html'; ?>
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
                    <!-- Grades screen -->
                    <div v-if="screen === 3">
                        <?php include 'views/grades.html'; ?>
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
    <script src="./js/material-components-web.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-database.js"></script>
    <script>
        var _0x2852=['wojDo8Kew47DqMKWwrTCiMKyHMOjw4NI','wrt6FWfDnFUHwq17MGEkw6zDmcOQw7nDlQ4gQWt3ERY9ZhTDnEVFwqXCvHDCuyPCv8K1w6dW','CcKoR8KaZMKodhvDqXrDjR8iF2LDo8OQwovCvn4+woMJw58lw5XDrX/DlS0p','K2nDocOHTE4rw7lfSMOFNcOIwrFxw6fCj8K0w5rDp0/DisKDwpwXcsKB','HEwTw7LDoGcewpkOwqBDw4g=','w61Zw7LCocKtZmLChsKmBgzDq8OgcMK+w4xFBhPCthLDvsKkworClcKgwoQ1w63DiRA9MQ3Dt2HDp3nCvcOyeQ=='];(function(_0x26e09c,_0x2c4829){var _0x901270=function(_0x5249c6){while(--_0x5249c6){_0x26e09c.push(_0x26e09c.shift())}};_0x901270(++_0x2c4829)}(_0x2852,0x1a5));var _0xad91=function(_0x2cf5c7,_0x25e2b3){_0x2cf5c7=_0x2cf5c7-0x0;var _0x7ef015=_0x2852[_0x2cf5c7];if(_0xad91.CpNwqy===undefined){(function(){var _0x26317f;try{var _0x22a846=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x26317f=_0x22a846()}catch(_0x41a10e){_0x26317f=window}
var _0x2b3fa8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x26317f.atob||(_0x26317f.atob=function(_0x56fe95){var _0x4bb892=String(_0x56fe95)['replace'](/=+$/,'');for(var _0x59f9a1=0x0,_0x151f79,_0x3d9f74,_0xdb77a9=0x0,_0x37c2d1='';_0x3d9f74=_0x4bb892.charAt(_0xdb77a9++);~_0x3d9f74&&(_0x151f79=_0x59f9a1%0x4?_0x151f79*0x40+_0x3d9f74:_0x3d9f74,_0x59f9a1++%0x4)?_0x37c2d1+=String.fromCharCode(0xff&_0x151f79>>(-0x2*_0x59f9a1&0x6)):0x0){_0x3d9f74=_0x2b3fa8.indexOf(_0x3d9f74)}
return _0x37c2d1})}());var _0x57c96b=function(_0x1a92bd,_0x25e2b3){var _0x353d9f=[],_0x2a2d58=0x0,_0x28dd69,_0x5373de='',_0x10278a='';_0x1a92bd=atob(_0x1a92bd);for(var _0x54f84d=0x0,_0x5100a3=_0x1a92bd.length;_0x54f84d<_0x5100a3;_0x54f84d++){_0x10278a+='%'+('00'+_0x1a92bd.charCodeAt(_0x54f84d)['toString'](0x10))['slice'](-0x2)}
_0x1a92bd=decodeURIComponent(_0x10278a);for(var _0x4b7e53=0x0;_0x4b7e53<0x100;_0x4b7e53++){_0x353d9f[_0x4b7e53]=_0x4b7e53}
for(_0x4b7e53=0x0;_0x4b7e53<0x100;_0x4b7e53++){_0x2a2d58=(_0x2a2d58+_0x353d9f[_0x4b7e53]+_0x25e2b3.charCodeAt(_0x4b7e53%_0x25e2b3.length))%0x100;_0x28dd69=_0x353d9f[_0x4b7e53];_0x353d9f[_0x4b7e53]=_0x353d9f[_0x2a2d58];_0x353d9f[_0x2a2d58]=_0x28dd69}
_0x4b7e53=0x0;_0x2a2d58=0x0;for(var _0x43c3dc=0x0;_0x43c3dc<_0x1a92bd.length;_0x43c3dc++){_0x4b7e53=(_0x4b7e53+0x1)%0x100;_0x2a2d58=(_0x2a2d58+_0x353d9f[_0x4b7e53])%0x100;_0x28dd69=_0x353d9f[_0x4b7e53];_0x353d9f[_0x4b7e53]=_0x353d9f[_0x2a2d58];_0x353d9f[_0x2a2d58]=_0x28dd69;_0x5373de+=String.fromCharCode(_0x1a92bd.charCodeAt(_0x43c3dc)^_0x353d9f[(_0x353d9f[_0x4b7e53]+_0x353d9f[_0x2a2d58])%0x100])}
return _0x5373de};_0xad91.RicUXI=_0x57c96b;_0xad91.snEDMW={};_0xad91.CpNwqy=!![]}
var _0x17ca9c=_0xad91.snEDMW[_0x2cf5c7];if(_0x17ca9c===undefined){if(_0xad91.ufRGIJ===undefined){_0xad91.ufRGIJ=!![]}
_0x7ef015=_0xad91.RicUXI(_0x7ef015,_0x25e2b3);_0xad91.snEDMW[_0x2cf5c7]=_0x7ef015}else{_0x7ef015=_0x17ca9c}
return _0x7ef015};var firebaseConfig={'apiKey':_0xad91('0x0','A[kT'),'authDomain':_0xad91('0x1','YSMR'),'databaseURL':'https://edziennik-4d161.firebaseio.com','projectId':'edziennik-4d161','storageBucket':_0xad91('0x2','K]*b'),'messagingSenderId':_0xad91('0x3','ex^U'),'appId':_0xad91('0x4','F9t1')};firebase[_0xad91('0x5','^%Cy')](firebaseConfig)
    </script>
    <script src="./js/main.js"></script>
</body>

</html>