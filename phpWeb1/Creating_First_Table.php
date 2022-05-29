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
        $sql = "CREATE TABLE `travel` ( `sno` INT(8) NOT NULL AUTO_INCREMENT , `name` TEXT NOT NULL , `dist` TEXT NOT NULL , PRIMARY KEY (`sno`)) ENGINE = InnoDB;";
        $result = mysqli_query($connect,$sql);
        if($result){
            echo "Teble created successful";
        }
        else{
            echo "SQL not executed";
        }
    }
?>