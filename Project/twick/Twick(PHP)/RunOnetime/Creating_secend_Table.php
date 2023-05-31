<?php
    $server = "localhost";
    $name = "root";
    $pass = "";
    $database = "twickdb";

    $connect = mysqli_connect($server,$name,$pass,$database);
    if(!$connect){
        die("Database not connected ". mysqli_connect_error());
    }
    else{
        $sql = "CREATE TABLE `twickdb`.`messages` (`msg_id` INT NOT NULL AUTO_INCREMENT , `incoming_msg_id` TEXT(255) NOT NULL, `outgoing_msg_id` TEXT(255) NOT NULL,`msg` VARCHAR(1500) NOT NULL , PRIMARY KEY (`msg_id`)) ENGINE = InnoDB;";
        $result = mysqli_query($connect,$sql);
        if($result){
            echo "<h1>Teble created successful<h1>";
        }
        else{
            echo "SQL not executed";
        }
    }
?>