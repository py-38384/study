<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    include "../config.php";
    $id = $_GET["id"];
    $sql = mysqli_query($connect, "SELECT * FROM contect WHERE contect_id = $id");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message ID - <?php echo $id; ?></title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
            font-family: 'Poppins', 'sans-serif';
        }
        body{
            padding: 4%;
            font-size: 1.3rem;
        }
        p{
            margin: 25px 0;
        }
        p span{
            color: #F16B6B;
        }
    </style>
</head>

<body>
    <div class="container">
        <?php
            $row = mysqli_fetch_assoc($sql);
            $time = date("d-m-Y", $row["time"]);
            echo '
            <p class="time"><strong>Time:</strong> <span> '.$time.'</span></p>
            <p class="name"><strong>Name:</strong> <span> '.$row["fullname"].'</span></p>
            <p class="email"><strong>Email:</strong> <span> '.$row["email"].'</span></p>
            <p class="mobile"><strong>Mobile Number:</strong> <span> '.$row["mobilenumber"].'</span></p>
            <p class="subject"><strong>Subject:</strong> <span>'.$row["subject"].'</span></p>
            <p class="message"><strong>Message:</strong> '.$row["message"].'</p>               
            ';
        ?>
    </div>
</body>

</html>