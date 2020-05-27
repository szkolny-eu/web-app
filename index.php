<?php
    $html = file_get_contents('views/index.html');
    $html = str_replace('{{menu}}',file_get_contents('views/menu.html'), $html);
    $html = str_replace('{{home}}',file_get_contents('views/home.html'), $html);
    $html = str_replace('{{timetable}}',file_get_contents('views/timetable.html'), $html);
    $html = str_replace('{{schedule}}',file_get_contents('views/schedule.html'), $html);
    $html = str_replace('{{grades}}',file_get_contents('views/grades.html'), $html);
    $html = str_replace('{{announcements}}',file_get_contents('views/announcements.html'), $html);
    $html = str_replace('{{settings}}',file_get_contents('views/settings.html'), $html);
    $html = preg_replace( '/\r|\n/', '', $html);
    $html = preg_replace('/\s+/', ' ', $html);

    echo $html;

    file_put_contents('index.html', $html);