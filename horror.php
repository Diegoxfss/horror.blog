<!-- PHP (horror.php) -->

<script>
  function validateForm() {
    // Implementation here
  }
</script>


<?php
// Connect to database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$title = $_POST["title"];
$date = $_POST["date"];
$author = $_POST["author"];
$content = $_POST["content"];
$file = $_POST["file"];

  
$sql = "INSERT INTO reviews (title, date, author, content, file) VALUES ('$title', '$date', '$author', '$content', '$file')";
if ($conn->query($sql) === TRUE) {
  echo "Review posted successfully!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close database connection
$conn->close();
?>




