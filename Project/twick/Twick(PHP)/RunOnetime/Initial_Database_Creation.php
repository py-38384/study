<?php
    $server = "localhost";
    $name = "root";
    $pass = "";

    $connect = mysqli_connect($server,$name,$pass);
    if(!$connect){
        die("Database not created!". mysqli_connect_error());
    }
    else{
        $sql = "CREATE DATABASE twickdb";
        $result = mysqli_query($connect,$sql);
        if($result){
            echo "<h2>Database creation successful.</h2>";
        }
        else{
            echo "<h2>Database creation unsuccessful!</h2>";
        }
    }
?>