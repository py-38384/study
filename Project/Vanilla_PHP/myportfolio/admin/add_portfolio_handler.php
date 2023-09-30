<?php
if (isset($_COOKIE["user"])) {
    if ($_COOKIE["user"] == "misterBot") {
    } else {
        setcookie("trial", "-1", time() + (86400 * 30), "/");
        header("Location: blocked.php");
    }
} else {
    setcookie("trial", "-1", time() + (86400 * 30), "/");
    header("Location: blocked.php");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_COOKIE["user"])) {
        if ($_COOKIE["user"] == "misterBot") {
            include "../config.php";
            $projectName = $_POST["projectname"];
            $projectDesc = $_POST["projectdesc"];
            $link = $_POST["link"];
            if (isset($_FILES["photo"])) {
                echo "Done";
                $photo_name = $_FILES['photo']['name'];
                $photo_type = $_FILES['photo']['type'];
                $tmp_name = $_FILES['photo']['tmp_name'];
                $img_explode = explode('.', $photo_name);
                $img_ext = end($img_explode);
                $extensions = ['png', 'jpeg', 'jpg'];
                if (in_array($img_ext, $extensions) === true) {
                    $time = time();
                    $new_img_name = $time . $photo_name;
                    move_uploaded_file($tmp_name, '../protfolioImage/' . $new_img_name);
                    $sql = mysqli_query($connect,"INSERT INTO `portfolio` (`id`, `projectname`, `prjectsmalldescription`, `projectphoto`, `projectlink`) VALUES (NULL, '$projectName', '$projectDesc', '$new_img_name', '$link')");
                    if($sql){
                        header("Location: add_portfolio.php?alert=Project successfully added&status=success");
                    }else{
                        header("Location: add_portfolio.php?alert=Something went erong&status=error");
                    }
                }
            }
        } else {
            setcookie("trial", "-1", time() + (86400 * 30), "/");
            header("Location: blocked.php");
        }
    } else {
        setcookie("trial", "-1", time() + (86400 * 30), "/");
        header("Location: blocked.php");
    }
}

?>