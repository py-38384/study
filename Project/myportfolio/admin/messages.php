<?php
// if(isset($_COOKIE["user"])){
//     if($_COOKIE["user"]=="misterBot"){
//         include "../config.php";
//         setcookie("user", "misterBot", Time() + (86400 * 30), "/");

//     }else{
//         setcookie("trial", "-1", Time() + (86400 * 30), "/");
//         header("Location: blocked.php");    
//     }
// }else{
//     setcookie("trial", "-1", Time() + (86400 * 30), "/");
//     header("Location: blocked.php");        
// }

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All messages</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', 'sans-serif';
        }

        body {
            background-color: #F16B6B;
        }

        header {
            color: #fff;
            font-size: 4rem;
            text-align: center;
            padding: 1.5rem;
            text-shadow: 2px 2px 2px rgb(0, 0, 0);
            border-bottom: 2px solid white;
            box-shadow: 1px 1px 2px rgb(0, 0, 0);
        }

        .messages {
            width: 100%;
            min-height: max-content;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;

        }

        .messages a {
            display: block;
            text-decoration: none;
            background-color: #fff;
            color: #000;
            width: 100%;
            margin: 2px 0;
            min-height: 6rem;
            padding: 1%;
            font-size: 1.3rem;
            line-height: 1.3rem;
        }

        .messages a:hover {
            background-color: #e2e2e2;
        }
    </style>
</head>

<body>
    <Header>Messages</Header>
    <div class="messages">
        <?php
        include "../config.php";
        $sql = mysqli_query($connect, "SELECT * FROM contect");
        if (mysqli_num_rows($sql) > 0) {
            while ($row = mysqli_fetch_assoc($sql)) {
                $time = date("d-m-Y", $row["time"]);
                if (strlen($row["message"]) <= 250) {
                    $msg = $row["message"];
                } else {
                    $msg =  substr($row["message"], 0, 250) . ". . .";
                }
                echo '
                <a href="show_message.php?id=' . $row["contect_id"] . '">
                    <div><strong>Name: </strong>' . $row["fullname"] . ' <strong>Time: </strong>' . $time . ' <strong>Message: </strong> ' . $msg . '</div>
                </a>
                ';
            }
        }
        ?>
    </div>
</body>

</html>