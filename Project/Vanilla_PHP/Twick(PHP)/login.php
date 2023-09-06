<?php
session_start();
if (isset($_SESSION["unique_id"])) {
    header("Location: user.php");
}
require 'config.php';
$login = false;
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    try {
        $sql = "SELECT * FROM `users` WHERE `email` = '$email'";
    } catch (Exception $e) {
        die('Server reached its limit. Wait for a moment to cool it down: ' . $e->getMessage());
    }
    $result = mysqli_query($connect, $sql);
    $exist = mysqli_num_rows($result);
    if ($exist == 1) {
        $row = mysqli_fetch_assoc($result);
        if (password_verify($password, $row["password"])) {
            $_SESSION["unique_id"] = $row["unique_id"];
            header("Location: user.php");
        } else {
            $err = "Password not matched!!";
            header("Location: login.php?error=$err");
        }
    } else {
        $err = "This email has no account!!";
        header("Location: login.php?error=$err");
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twick - a simple messaging app</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/51440e4cbe.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="wrapper">
        <section class="form login">
            <header>Twick - A messaging application</header>
            <form action="login.php" method="post">
                <div class="error-text" style="display:<?php if (isset($_GET["error"])) {
                                                            echo "block";
                                                        } else {
                                                            echo "none";
                                                        } ?>;"><?php if (isset($_GET["error"])) {
                                                                    echo $_GET["error"];
                                                                } ?></div>
                <div class="field input">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter your email" required>
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" required>
                    <div class="eye"><i id="eye" class="fas fa-eye"></i></div>
                </div>
                <div class="field button">
                    <input type="submit" value="Continue to Chat">
                </div>
            </form>
            <div class="link">Not yet signed up? <a href="index.php">Signup now</a></div>
        </section>
    </div>
</body>
<script src="js/pass_show_hide.js"></script>

</html>