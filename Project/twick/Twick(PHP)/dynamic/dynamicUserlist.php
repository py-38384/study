<?php
session_start();
include_once '../config.php';
if (isset($_SESSION["unique_id"])) {
    try {
        $sql = mysqli_query($connect, "SELECT * FROM users");
    } catch (Exception $e) {
        die('Server reached its limit. Wait for a moment to cool it down: ' . $e->getMessage());
    }
    $output = "";
    if (mysqli_num_rows($sql) == 1) {
        $output .= "No users are avaliable to chat";
    } elseif (mysqli_num_rows($sql) > 1) {
        while ($row = mysqli_fetch_assoc($sql)) {
            if ($row['unique_id'] == $_SESSION["unique_id"]) {
            } else {
                if ((time() - $row["last_online"]) > 3) {
                    mysqli_query($connect, "UPDATE `users` SET `status` = 'offline' WHERE `users`.`unique_id` = " . $row["unique_id"]);
                } else {
                    mysqli_query($connect, "UPDATE `users` SET `status` = 'Active now' WHERE `users`.`unique_id` = " . $row["unique_id"]);
                }
                $sql2 = mysqli_query($connect, "SELECT * FROM `messages` WHERE (`incoming_msg_id` = '" . $row['unique_id'] . "' AND `outgoing_msg_id` = '" . $_SESSION["unique_id"] . "') OR (`outgoing_msg_id` = '" . $row['unique_id'] . "' AND `incoming_msg_id` = '" . $_SESSION["unique_id"] . "') ORDER BY msg_id DESC LIMIT 1");
                $msg = "";
                $status = '';
                if ($row["status"] == "Active now") {
                    $status = '<div class="status-dot" style="color: rgb(7, 143, 75);"><i class="fas fa-circle"></i></div>';
                } else {
                    $status = '<div class="status-dot" style="color: rgb(173, 173, 173);"><i class="fas fa-circle"></i></div>';
                }
                if (mysqli_num_rows($sql2) <= 0) {
                    $msg = "No message avaliable";
                } else {
                    $msg_row = mysqli_fetch_assoc($sql2);
                    if ($msg_row["outgoing_msg_id"] == $_SESSION["unique_id"]) {
                        if (strlen($msg_row["msg"]) <= 11) {
                            $msg = "You: " . substr($msg_row["msg"], 0, 11);
                        } else {
                            $msg = "You: " . substr($msg_row["msg"], 0, 11) . ". . .";
                        }
                    } else {
                        if (strlen($msg_row["msg"]) <= 15) {
                            $msg = substr($msg_row["msg"], 0, 15);
                        } else {
                            $msg = substr($msg_row["msg"], 0, 15) . ". . .";
                        }
                    }
                }
                $output .= '
                        <a href="chat.php?user_id=' . $row['unique_id'] . '">
                        <div class="content">
                            <img src="photos/' . $row["photo"] . '" alt="">
                            <div class="details">
                                <span>' . $row["firstname"] . " " . $row["lastname"] . '</span>
                                <p>' . $msg . '</p>
                            </div>
                        </div>
                        ' . $status . '
                    </a>
                                    ';
            }
        }
        $sql = mysqli_query($connect, "SELECT * FROM broadcast ORDER BY msg_id DESC LIMIT 1");
        if (mysqli_num_rows($sql)) {
            $row = mysqli_fetch_assoc($sql);
            $broadcast_msg = "";
            if ($row["msg_sender_id"] == $_SESSION["unique_id"]) {
                if (strlen($row["msg"]) <= 11) {
                    $broadcast_msg = "You: " . substr($row["msg"], 0, 11);
                } else {
                    $broadcast_msg = "You: " . substr($row["msg"], 0, 11) . ". . .";
                }
            } else {
                $sql2 = mysqli_query($connect, "SELECT * FROM users WHERE unique_id = " . $row["msg_sender_id"]);
                $sender_row = mysqli_fetch_assoc($sql2);
                if (strlen($row["msg"]) <= 15) {
                    $broadcast_msg = $sender_row["firstname"] . " " . $sender_row["lastname"] . ": " . substr($row["msg"], 0, 15);
                } else {
                    $broadcast_msg =  $sender_row["firstname"] . " " . $sender_row["lastname"] . ": " . substr($row["msg"], 0, 15) . ". . .";
                }
            }
            $output .= '
    <a href="broadcast.php"> 
    <div class="content">
        <div class="details">
            <strong>Broadcast Room</strong>
            <p>' . $broadcast_msg . '</p>
        </div>
    </div>
</a>
    ';
        } else {
            $output .= '
    <a href="broadcast.php">
    <div class="content">
        <div class="details">
            <span>Broadcast Room</span>
            <p>No message found..</p>
        </div>
    </div>
</a>
    ';
        }
    }
    echo $output;
} else {
    header("Location: login.php");
}
