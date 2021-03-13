<?php

global $db;
$db = new SQLite3('broshido.db', SQLITE3_OPEN_CREATE | SQLITE3_OPEN_READWRITE);
$response = "";

$id = $_POST['id'];

$query = "DELETE FROM samurai WHERE samurai_id='$id'";

if($db->exec($query)) {
        $response = "success";
}else{
        $response = "error";
}

echo json_encode($response);
?>