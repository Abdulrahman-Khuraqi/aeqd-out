<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // استلام البيانات من الفورم
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phoneNumber"]);
    $message = htmlspecialchars($_POST["message"]);

    // عنوان البريد المستلم
    $to = "info@dawaer.com.sa";
    $subject = "New Message || Website";

    // محتوى الرسالة
    $body = "الاسم: $name\n";
    $body .= "البريد الإلكتروني: $email\n";
    $body .= "رقم الهاتف: $phone\n";
    $body .= "الرسالة:\n$message";

    // الرؤوس (headers)
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // إرسال الرسالة
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "error";
}
?>
