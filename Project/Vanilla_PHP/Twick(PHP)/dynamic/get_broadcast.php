<?php
session_start();
if (isset($_SESSION["unique_id"])) {
    include_once "../config.php";
    $outgoing_msg_id = $_POST['Current_user_id'];
    $sql = mysqli_query($connect, "SELECT * FROM `broadcast` ORDER BY msg_id ASC");
    $output = "<p style='text-align:center;width:100%;height:100px;line-height:100px'>No Broedcasting yet...</p>";
    if(mysqli_num_rows($sql) > 0){
        $output = "";
        while($row = mysqli_fetch_assoc($sql)){
            if($row["msg_sender_id"] == $outgoing_msg_id){
                $output .= '
            <div class="chat outgoing">
                    <div class="details">
                        <p>'.$row["msg"].'</p>
                    </div>
                </div>
                ';
            }else{
                $other_user_sql = mysqli_query($connect, "SELECT * FROM `users` WHERE `unique_id` = ".$row["msg_sender_id"]);
                $other_user_row = mysqli_fetch_assoc($other_user_sql);
                $output .= '
                <div class="chat incoming">
                    <img src="photos/'.$other_user_row["photo"].'" alt="">
                    <div class="details">
                    <span>'.$other_user_row["firstname"]." ".$other_user_row["lastname"].'</span>
                    <p>'.$row["msg"].'</p>
                    </div>
                </div>
                ';
            }
        }
    }
} else {
    header("Location: ../login.php");
}
echo $output;
?>