<?php
    $to      = 'ibodlaevsaid@gmail.com';
$subject = 'Письмо от клиента';
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
mail(
    $to,
    $subject,
    'Имя потенциального клиента: '.$name.
    '. Его контакт: '.$email.
    '. Его номер телефона: '.$phone.
    '. Его сообщение: '.$message
);
?>