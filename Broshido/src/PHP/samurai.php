<?php

global $db;
$db = new SQLite3('broshido.db', SQLITE3_OPEN_CREATE | SQLITE3_OPEN_READWRITE);

$results = $db->query('
SELECT S.samurai_id AS id, S.samurai_profile AS image, S.samurai_name AS name, S.samurai_price AS price, ST.samurai_type_name AS type
FROM samurai AS S
INNER JOIN samurai_type AS ST ON ST.samurai_type_id = S.samurai_type_id
ORDER BY ST.samurai_type_id
');

while($row = $results->fetchArray(SQLITE3_ASSOC)){
        $jsonArray[] = $row;
}

echo json_encode($jsonArray)
?>