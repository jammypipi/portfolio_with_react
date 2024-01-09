<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $description = $_POST["description"];

    $to = "ppthroline@outlook.com"; 
    $subject = "New Contact Form Submission";

    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Description: $description\n";

    // Additional headers
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $message, $headers);

    // You can redirect the user to a thank you page or display a success message here
    echo "Thank you for your submission!";
} else {
    // Handle the case when the form is not submitted properly
    echo "Error: Form not submitted";
}
?>
