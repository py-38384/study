<?php
$url = "localhost";
$name = "root";
$pass = "";
$database = "twickdb";

$connect = mysqli_connect($url,$name,$pass,$database);

if(!$connect){
    die("Databese not connected".mysqli_connect_error());
}
// echo "Databese conected";
?>