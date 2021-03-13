<?php

global $db;
$db = new SQLite3('broshido.db', SQLITE3_OPEN_CREATE | SQLITE3_OPEN_READWRITE);
$response = "";

$id = $_POST['id'];
$image = $_POST['image'];
$name = $_POST['name'];
$price = $_POST['price'];
$type = $_POST['type'];


$query = "UPDATE samurai SET samurai_profile='$image', samurai_name='$name', samurai_price='$price', samurai_type_id='$type' WHERE samurai_id='$id'";

if($db->exec($query)) {
        $response = "success";
}else{
        $response = "error";
}

echo json_encode($response);
?>