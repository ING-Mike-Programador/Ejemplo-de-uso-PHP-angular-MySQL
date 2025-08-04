<?php
$host = "localhost";
$db_name = "ejemploDB";
$username = "root";
$password = "";
$port = "3307";

// inicio de conexión a la base de datos
$conn = new mysqli($host, $username, $password, $db_name, $port);

if ($conn->connect_error) {
    die("Connection fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa a la base de datos";
}
