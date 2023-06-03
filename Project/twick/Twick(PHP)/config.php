<?php
$url = "localhost";
$name = "id20849482_piyal4633";
$pass = "fi8hdftwipiyD*";
$database = "id20849482_twickdb";

$connect = mysqli_connect($url,$name,$pass,$database);

if(!$connect){
    die("Databese not connected".mysqli_connect_error());
}
// echo "Databese conected";
?>