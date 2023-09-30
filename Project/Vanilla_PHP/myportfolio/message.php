<?php
session_start();
include_once "config.php";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_SESSION["Contected"]) {
        header("Location: index.php?alert=You need to slow down. You messaged me already..&status=failed");
    } else {
        $fullName = $_POST["fullname"];
        $email = $_POST["email"];
        $mobileNumber = $_POST["mobilenumber"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];
        $time = time();
        $messageInsertionResult = mysqli_query($connect, "INSERT INTO `contect` (`fullname`, `email`, `mobilenumber`, `subject`, `message`,`time`) VALUES ( '$fullName', '$email', '$mobileNumber', '$subject', '$message', $time);");
        if ($messageInsertionResult) {
            $_SESSION["Contected"] = true;
            header("Location: index.php?alert=Your message is successfully inserted. I will check your message shortly..&status=success");
        } else {
            header("Location: index.php?alert=Message insertion failed! something went wrong..&status=failed");
        }
    }
} else {
    header("location:javascript://history.go(-1)");
}
