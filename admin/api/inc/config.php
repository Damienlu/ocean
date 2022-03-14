<?php
    $domain = $_SERVER['SERVER_NAME'];
    $isdev = strpos($domain, 'localhost') !== false;
    $host = $isdev ? 'localhost' : 'businesstodayarticle.c4yqwfyoixiw.ap-northeast-1.rds.amazonaws.com';
    $username = $isdev ? 'test' : 'bt_topic';
    $password = $isdev ? '123' : 'bt27760904topic';
    $dbname = $isdev ? 'dinotest' : 'bt_topic';
    $tablename = 'projectblue1095';
    // 建立資料庫連結
    $link = mysqli_connect($host, $username, $password) or die ("無法開啟Mysql資料庫連結");
    mysqli_select_db($link, $dbname) or die ("無法選擇資料庫");
    mysqli_query("SET NAMES UTF8");
?>