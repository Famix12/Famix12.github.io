<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set the recipient email address
  $to = 'abdulkarim.abahusain@gmail.com';

  // Set the email subject
  $subject = 'New message from ' . $name;

  // Set the email message
  $body = "Name: $name\nEmail: $email\n\n$message";

  // Set the email headers
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo '<p>Thank you for your message!</p>';
  } else {
    echo '<p>There was an error sending your message. Please try again later.</p>';
  }
}
