<?php
    if(isset($_COOKIE["user"])){
        if($_COOKIE["user"]=="misterBot"){
            include "../config.php";
            setcookie("user", "misterBot", time() + (86400 * 30), "/");

        }else{
            setcookie("trial", "-1", time() + (86400 * 30), "/");
            header("Location: blocked.php");    
        }
    }else{
        setcookie("trial", "-1", time() + (86400 * 30), "/");
        header("Location: blocked.php");        
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My portfolio admin panel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <a href="messages.php">Messages</a>
        <a href="add_portfolio.php">Add portfolio</a>
    </div>
</body>
</html>