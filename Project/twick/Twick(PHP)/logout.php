<?php
session_start();
if (isset($_SESSION["unique_id"])) {
    include_once "config.php";
    session_unset();
    session_destroy();
    header("Location: login.php");    
}else{
    header("Location: login.php");
}

?>