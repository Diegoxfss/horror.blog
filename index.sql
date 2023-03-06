--- table for the html post(reviews form) to be sent  via php
CREATE TABLE reviews (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  author VARCHAR(50) NOT NULL,
  content TEXT NOT NULL,
  file VARCHAR(255)
);
