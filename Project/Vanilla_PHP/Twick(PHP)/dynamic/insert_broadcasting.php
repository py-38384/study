<?php
session_start();
if (isset($_SESSION["unique_id"])) {
    include_once "../config.php";
    if (isset($_POST['msg'])) {
        $msg = $_POST['msg'];
        echo $msg;
        $msg_sender_id = $_POST['msg_sender_id'];
        if (empty($msg)) {
        } else {
            $sql = mysqli_query($connect, "INSERT INTO `broadcast` (`msg_sender_id`,`msg`) VALUES ( '$msg_sender_id','$msg');");
            if ($sql) {
            } else {
                echo "error";
            }
        }
    }
}else{
    header("Location: ../login.php");
}