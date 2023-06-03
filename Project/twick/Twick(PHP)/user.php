<?php
session_start();
include_once "config.php";
if (!isset($_SESSION["unique_id"])) {
    header("Location: login.php");
}else{
    // mysqli_query($connect,"UPDATE `users` SET `status` = 'Active now' WHERE `users`.`unique_id` = ".$_SESSION["unique_id"]);
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
        <section class="user">
            <header>
                <?php
                $sql = mysqli_query($connect, "SELECT * FROM users WHERE unique_id = {$_SESSION['unique_id']}");
                if (mysqli_num_rows($sql) > 0) {
                    $row = mysqli_fetch_assoc($sql);
                    $my_unique_id = $row['unique_id'];
                }
                ?>
                <div class="content">
                    <img src="photos/<?php echo $row['photo'] ?>" alt="">
                    <div class="details">
                        <span>
                            <?php echo $row['firstname'] . " " . $row['lastname'] ?>
                        </span>
                        <p>
                            Active now
                        </p>
                    </div>
                </div>
                <a href="logout.php" class="logout">Logout</a>
            </header>
            <div class="search">
                <input type="text" placeholder="Enter name to search..."></input>
            </div>
            <span class="text">Select an user to start chat</span>
            <div class="userlist">
                <!-- userlist will load dynamically-->
            </div>
        </section>
    </div>
</body>
<script>
    let searchBar = document.querySelector(".search input");
    let userList = document.querySelector(".user .userlist");
    searchBar.onkeyup = () => {
        if (searchBar.value == "") {
            searchBar.classList.remove("searching");
        } else {
            searchBar.classList.add("searching");
        }
        let searchTerm = searchBar.value;
        let param = "SearchTerm=" + searchTerm;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "dynamic/dynamicSearch.php", true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                let data = xhr.response;
                userList.innerHTML = data;
            }
        }
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(param);
    }
    setInterval(GetUserList, 500);
    function GetUserList() {
        let userList = document.querySelector(".user .userlist");
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "dynamic/dynamicUserlist.php", true);
        xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let data = xhr.response;
                    if (searchBar.classList.contains("searching")) {} else {
                        userList.innerHTML = data;
                    }
                }
            }
        }
        xhr.send();
        update_self();
    }

    function update_self(){
        let xhr = new XMLHttpRequest();
        xhr.open("POST","update_status.php",true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("id="+<?php echo $_SESSION["unique_id"];?>);
    }
</script>

</html>
<?php
?>