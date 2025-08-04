<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

$sql = "UPDATE users SET name=?, email=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $data->name, $data->email, $data->id);

if ($stmt->execute()) {
    echo json_encode(["message" => "User updated"]);
} else {
    echo json_encode(["error" => "Error updating user"]);
}
