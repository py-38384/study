<?php
session_start();
if (isset($_SESSION["unique_id"])) {
    header("Location: user.php");
}
include_once "config.php";
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $firstName = $_POST['firstname'];
    $lastName = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailCheck = mysqli_query($connect, "SELECT email FROM users WHERE email = '{$email}'");
        if (mysqli_num_rows($emailCheck) > 0) {
            $err = "This email is already submitted!!";
            header("Location: index.php?error=$err");
        } else {
            if (isset($_FILES['photo'])) {
                $photo_name = $_FILES['photo']['name'];
                $photo_type = $_FILES['photo']['type'];
                $tmp_name = $_FILES['photo']['tmp_name'];
                $img_explode = explode('.', $photo_name);
                $img_ext = end($img_explode);
                $extensions = ['png', 'jpeg', 'jpg'];
                if (in_array($img_ext, $extensions) === true) {
                    $time = time();
                    $new_img_name = $time . $photo_name;
                    if (move_uploaded_file($tmp_name, 'photos/' . $new_img_name)) {
                        $status = "Active now";
                        $random_id = rand(time(), 10000000);
                        $sql = mysqli_query($connect,"INSERT INTO `users` (`user_id`, `unique_id`, `firstname`, `lastname`, `email`, `password`, `photo`, `status`, `last_online`) VALUES (NULL, '$random_id', '$firstName', '$lastName', '$email', '$password', '$new_img_name', '$status',0);");
                        if (!$sql) {
                            die('Something went miserably wrong.<br>' . mysqli_error($connect));
                        } else {
                            $sql2 = "SELECT * FROM users WHERE email = '{$email}'";
                            $result2 = mysqli_query($connect, $sql2);
                            if (mysqli_num_rows($result2) > 0) {
                                $row = mysqli_fetch_assoc($result2);
                                $_SESSION['unique_id'] = $random_id;
                                header("Location: user.php");
                            }
                        }
                    }
                } else {
                    $err = "Photo format is not supported!!";
                    header("Location: index.php?error=$err");
                }
            }
        }
    } else {
        $err = "Your email is not valid!!";
        header("Location: index.php?error=$err");
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
        <section class="form signup">
            <header>Twick - A messaging application</header>
            <form action="index.php" method="post" enctype="multipart/form-data">
                <div class="error-text" style="display:<?php if (isset($_GET["error"])) {
                                                            echo "block";
                                                        } else {
                                                            echo "none";
                                                        } ?>;"><?php if (isset($_GET["error"])) {
                                                                                                                                echo $_GET["error"];
                                                                                                                            } ?></div>
                <div class="name-details">
                    <div class="field input">
                        <label>First Name</label>
                        <input type="text" placeholder="First name" name="firstname" required>
                    </div>
                    <div class="field input">
                        <label>Last Name</label>
                        <input type="text" placeholder="last name" name="lastname" required>
                    </div>
                </div>
                <div class="field input">
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email" name="email" required>
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" placeholder="New password" name='password' required>
                    <div class="eye"><i class="fa fa-eye-slash"></i></div>
                </div>
                <div class="field image">
                    <label>Select Image</label>
                    <input type="file" name="photo" required>
                </div>
                <div class="field button">
                    <input type="submit" value="Continue to Chat" name="continuebutton">
                </div>
            </form>
            <div class="link">Already signed up? <a href="login.php">Login now</a></div>
        </section>
    </div>
</body>
<script src="js/pass_show_hide.js"></script>

</html>