<?php
    include("inc/config.php");
    header('Content-type:text/json');
    // 允許其他domain
    // header("Access-Control-Allow-Origin: *");

    // 接收資料
    $action =  $_POST['action'];
    $id = $_POST['id'];
    $ismedia = $_POST['ismedia'];
    $myorder = $_POST['myorder'];
    $title = $_POST['title'];
    $subtitle = $_POST['subtitle'];
    $url = $_POST['url'];
    $image = $_POST['image'];
    $category = $_POST['category'];
    $iscount = $_POST['count'];

    // 處理查詢結果
    // echo '<pre>';
    // var_dump($postData);
    // echo '</pre>';

    $data = [
        "action" => $action,
        "result" => "success"
    ];
    switch($action) {
        case 'getIndex':
        case 'getAdmin':
            $sqlstr = "SELECT * FROM `" . $tablename . "` WHERE 1 ORDER BY `myorder` ASC";
	        $response = mysqli_query($link, $sqlstr) or die ("無法查詢");
            while($tmp = mysqli_fetch_assoc($response)) {
                $arrs[] = $tmp;
            }
            $articles = array();
            $counts = array();
            foreach($arrs as $value) {
                if($value["iscount"] >= 0) {
                    $counts[$value["category"]] = $value["iscount"];
                } else {
                    $articles[$value["category"]][] = $action === 'getAdmin' ?
                        $value : [
                            "ismedia" => $value["ismedia"],
                            "title" => $value["title"],
                            "contents" => $value["subtitle"],
                            "link" => $value["url"],
                            "image" => $value["image"]
                        ];
                }
            }
            // 自組json
            $data = [
                "articles" => $articles,
                "counts" => $counts
            ];
            break;
        case 'add':
            $sqlstr = "INSERT INTO `" . $tablename . "`(`title`, `subtitle`, `url`, `image`, `myorder`, `ismedia`, `category`) VALUES ('". $title ."','". $subtitle ."','". $url ."','". $image ."','". $myorder ."','". $ismedia ."','". $category ."')";
	        $response = mysqli_query($link, $sqlstr) or die ("無法新增");
            break;
        case 'update':
            $sqlstr = "UPDATE `" . $tablename . "` SET `title` = '" . $title . "', `subtitle` = '" . $subtitle . "', `url` = '" . $url . "', `image` = '" . $image . "', `myorder` = '" . $myorder . "', `ismedia` = '" . $ismedia . "' WHERE `id` = '" . $id . "'";
	        $response = mysqli_query($link, $sqlstr) or die ("無法更新article");
            break;
        case 'delete':
            $sqlstr = "DELETE FROM `" . $tablename . "` WHERE id = '" . $id . "'";
            $response = mysqli_query($link, $sqlstr) or die ("無法刪除");
            break;
        case 'setCounts':
            $sqlstr = "UPDATE `" . $tablename . "` SET `iscount` = '" . $iscount . "' WHERE `category` = '" . $category . "'";
            $response = mysqli_query($link, $sqlstr) or die ("無法更新count");
            break;
        case 'adminAddCounts':
            $sqlstr = "INSERT INTO `" . $tablename . "` (`id`, `ismedia`, `title`, `subtitle`, `url`, `image`, `iscount`, `category`, `myorder`) VALUES (NULL, '0', '', '', '', '', '1', '". $category ."', '0')";
            $response = mysqli_query($link, $sqlstr) or die ("無法新增count");
            break;
        default:
            header("location: /topic/projectblue1095");
    }

    // 關閉SQL
    mysqli_close();

    echo json_encode($data, JSON_PRETTY_PRINT);

?>