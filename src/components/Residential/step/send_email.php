<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the JSON data from the POST request
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['name']) || !isset($data['contactNumber'])) {
        echo json_encode(["status" => "error", "message" => "Invalid input."]);
        exit;
    }

    // Extract the name and contact number
    $name = $data['name'];
    $contactNumber = $data['contactNumber'];

    // Define the recipient email and the subject
    $to = "ak@aidaksa.com";
    $subject = "Residential Contract Registration Start";

    // Create the email body
    $body = "Name: $name\nContact Number: $contactNumber";

    // Set the email headers
    $headers = "From: ak@aidaksa.com\r\n";
    $headers .= "Reply-To: ak@aidaksa.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Respond with a success message
        echo json_encode(["status" => "success", "message" => "Email sent successfully."]);
    } else {
        // Respond with an error message
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    // Respond with an error message if the request method is not POST
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
