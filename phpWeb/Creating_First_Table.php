<?php
    $server = "localhost";
    $name = "root";
    $pass = "";
    $database = "phpweb";

    $connect = mysqli_connect($server,$name,$pass,$database);
    if(!$connect){
        die("Database not connected ". mysqli_connect_error());
    }
    else{
        $sql = "CREATE TABLE `phpweb`.`users` ( `sno` INT(12) NOT NULL AUTO_INCREMENT , `username` VARCHAR(20) NOT NULL , `pass` TEXT NOT NULL , `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`sno`), UNIQUE `username` (`username`)) ENGINE = InnoDB;
        ";
        $result = mysqli_query($connect,$sql);
        if($result){
            echo "<h1>Teble created successful<h1>";
        }
        else{
            echo "SQL not executed";
        }
    }
?>