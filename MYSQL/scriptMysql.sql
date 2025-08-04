CREATE DATABASE IF NOT EXISTS ejemploDB;
USE ejemploDB;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  years INT NOT NULL
);
INSERT INTO users (name, years) VALUES
('Miguel', 25),
('Ana', 30),
('Luis', 22);

select * from users