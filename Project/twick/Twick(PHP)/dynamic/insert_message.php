<?php
session_start();
if (isset($_SESSION["unique_id"])) {
    include_once "../config.php";
    if (isset($_POST['msg'])) {
        $msg = $_POST['msg'];
        $incoming_msg_id = $_POST['Other_user_id'];
        $outgoing_msg_id = $_POST['Current_user_id'];
        if (empty($msg)) {
        } else {
            $sql = mysqli_query($connect, "INSERT INTO `messages` (`incoming_msg_id`, `outgoing_msg_id`, `msg`) VALUES ( '$incoming_msg_id', '$outgoing_msg_id', '$msg');");
            if ($sql) {
            } else {
                echo "error";
            }
        }
    }
}else{
    header("Location: ../login.php");
}
