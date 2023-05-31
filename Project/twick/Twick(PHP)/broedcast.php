<?php
session_start();
if (!isset($_SESSION["unique_id"])) {
    header("Location: login.php");
}
include_once "config.php";
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
        <section class="chat-area">
            <div class="chat-header-contenter">
                <header>
                    <a href="user.php" class="back-icon" style="margin-right:12px;"><i class="fas fa-arrow-left"></i></a>
                    <div class="details">
                        <span><?php echo "Broedcast Room"; ?></span>
                    </div>
                </header>
            </div>
            <div class="chat-box">
                
            </div>
            <form class="typing-area" action="#">
                <input type="text" placeholder="Type a message here...">
                <button><i class="fab fa-telegram-plane"></i></button>
            </form>
        </section>
    </div>
</body>
<script>
    let typingForm = document.querySelector(".typing-area");
    let typingInput = document.querySelector(".typing-area input");
    let typingButton = document.querySelector(".typing-area button");
    let current_user_id = <?php echo $_SESSION['unique_id'];?>;
    let chatBox = document.querySelector(".chat-area .chat-box");
    let chatPosition = chatBox.scrollTop;
    let chatScroll = true;

    
    chatBox.addEventListener("scroll",(e)=>{
        if((chatBox.scrollTop+chatBox.clientHeight) >= chatBox.scrollHeight){
            chatScroll = true;
        }else{
            chatScroll = false;
        }
    });
    function ScrollToDown(){
        if(chatScroll){
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }
    typingButton.addEventListener("click", (e) => {
        e.preventDefault();
        let msg = typingInput.value;
        msg = msg.replace(/'/g,"''");
        let param = "msg_sender_id=" + current_user_id + "&" + "msg=" + msg;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "dynamic/insert_broedcasting.php", true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                typingInput.value = "";
                let data = xhr.response;
                if(data == "error"){
                    alert("Error!!massage not send.Something went wrong!!")
                }
            }
        }
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(param);
    });
    setInterval(()=>{
        let param = "Current_user_id=" + current_user_id;
        let xhr = new XMLHttpRequest();
        xhr.open("post","dynamic/get_broedcast.php",true);
        xhr.onload = () => {
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.readyState == 4 && xhr.status == 200) {
                    let data = xhr.response;
                    chatBox.innerHTML = data;
                    ScrollToDown();
                }
            }
        }
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(param);
        update_self();
    },500);
    function update_self(){
        let xhr = new XMLHttpRequest();
        xhr.open("POST","update_status.php",true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("id="+<?php echo $_SESSION["unique_id"];?>);
    }
</script>

</html>