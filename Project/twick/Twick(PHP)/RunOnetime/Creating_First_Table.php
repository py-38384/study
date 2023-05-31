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
        $sql = "CREATE TABLE `twickdb`.`users` (`user_id` INT NOT NULL AUTO_INCREMENT , `unique_id` INT(200) NOT NULL , `firstname` VARCHAR(255) NOT NULL , `lastname` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `password` VARCHAR(255) NOT NULL , `photo` VARCHAR(400) NOT NULL , `status` VARCHAR(100) NOT NULL , PRIMARY KEY (`user_id`)) ENGINE = InnoDB;";
        $result = mysqli_query($connect,$sql);
        if($result){
            echo "<h1>Teble created successful<h1>";
        }
        else{
            echo "SQL not executed";
        }
    }
?>