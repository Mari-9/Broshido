<?php

global $db;
$db = new SQLite3('broshido.db', SQLITE3_OPEN_CREATE | SQLITE3_OPEN_READWRITE);
$response = "";

$image = $_POST['image'];
$name = $_POST['name'];
$price = $_POST['price'];
$type = $_POST['type'];


$query = "INSERT INTO samurai (samurai_profile, samurai_name, samurai_price, samurai_type_id) VALUES('$image', '$name', '$price', '$type')";

if($db->exec($query)) {
        $response = "success";
        $lastId = $db->lastInsertRowid();
}else{
        $response = "error";
}

echo json_encode([$response,$lastId], $lastId);
?>
