<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

$sql = "DELETE FROM users WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $data->id);

if ($stmt->execute()) {
    echo json_encode(["message" => "User deleted"]);
} else {
    echo json_encode(["error" => "Error deleting user"]);
}
