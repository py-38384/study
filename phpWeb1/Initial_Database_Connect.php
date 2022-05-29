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
        echo "<h2>Database connected</h2>";
    }
?>