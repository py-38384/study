<?php
if (isset($_COOKIE["trial"])) {
    $trial = (int)$_COOKIE["trial"];
    if ($trial <= 0) {
        header("Location: blocked.php");
    }
}
if (isset($_COOKIE["user"])) {
    if($_COOKIE["user"]=="misterBot"){
        setcookie("trial", "100", time() - 3600);
        header("Location: admin.php");
    }else{
        setcookie("trial", "-1", time() + (86400 * 30), "/");
        header("Location: blocked.php");        
    }
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_COOKIE["user"])) {
        if($_COOKIE["user"]=="misterBot"){
            header("Location: admin.php");
        }
    } else {
        $trial = 0;
        if (isset($_COOKIE["trial"])) {
            $trial = (int)$_COOKIE["trial"];
            if ($trial <= 0) {
                header("Location: blocked.php");
            }
        } else {
            setcookie("trial", "3", time() + (86400 * 30), "/");
            $trial = 3;
        }
        $mobileNumber = $_POST["mobilenumber"];
        $password = $_POST["password"];
        $trueMobileNumber = "01317143305";
        $truePassword = "password";
        if ($mobileNumber == $trueMobileNumber && $password == $truePassword) {
            setcookie("trial", "100", time() - 3600);
            setcookie("user", "misterBot", time() + (86400 * 30), "/");
            header("Location: admin.php");
        } else {
            $trial = $trial - 1;
            setcookie("trial", (string)$trial, time() + (86400 * 30), "/");
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to my portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>
    <header>Admin login for portfolio</header>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <input type="text" name="mobilenumber" placeholder="Mobile number">
        <input type="password" name="password" placeholder="Password">
        <button>SignUp</button>
    </form>
</body>
<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
<script src="main.js"></script>

</html>