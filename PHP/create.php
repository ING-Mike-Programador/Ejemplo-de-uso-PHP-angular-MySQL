<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

$sql = "INSERT INTO users (name, email) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $data->name, $data->email);

if ($stmt->execute()) {
    echo json_encode(["message" => "User created"]);
} else {
    echo json_encode(["error" => "Error creating user"]);
}
