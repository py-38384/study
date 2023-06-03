<?php
    if(isset($_POST["id"])){
        include "config.php";
        $id = $_POST["id"];
        $t=time();
        mysqli_query($connect,"UPDATE `users` SET `last_online` = '$t' WHERE `users`.`unique_id` = ".$id);
}