<?php
session_start();
include_once "../config.php";
$SearchTerm = $_POST['SearchTerm'];
$output = "";
$sql = mysqli_query($connect,"SELECT * FROM users WHERE firstname LIKE '%{$SearchTerm}%' OR lastname LIKE '%{$SearchTerm}%'");
if(mysqli_num_rows($sql)>0){
    while ($row = mysqli_fetch_assoc($sql)) {
        if ($row['unique_id'] == $_SESSION["unique_id"]){}else{
            $output .= '
                        <a href="../twick/chat.php?user_id='.$row['unique_id'].'">
                        <div class="content">
                            <img src="photos/' . $row["photo"] . '" alt="">
                            <div class="details">
                                <span>' . $row["firstname"] . " " . $row["lastname"] . '</span>
                                <p>this is a text message</p>
                            </div>
                        </div>
                        <div class="status-dot"><i class="fas fa-circle"></i></div>
                    </a>
                                    ';
        }
    }
}else{
    $output = "No people found to chat!!";
}
echo $output;