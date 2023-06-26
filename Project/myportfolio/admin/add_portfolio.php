
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Portfolio</title>
    <link rel="stylesheet" href="water.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', 'sans-serif';
        }

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100vh;
            background-color: #F16B6B;
        }

        .alert {
            width: 80%;
            height: 4%;
            display: none;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
        }
        .alert-denger{
            color: red;
            border: 1px solid red;
        }
        .alert-success{
            color: green;
            border: 1px solid green;
        }

        form {
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 80%;
            height: 40%;
            gap: 10px;
        }

        form div {
            height: 6%;
            flex-grow: 1;
            min-height: 50px;
        }

        form div input {
            width: 100%;
            height: 100%;
            padding: 10px;
            background-color: white;
            color: black;
        }

        form div textarea {
            resize: none;
            background-color: white;
            color: black;
        }

        form .project-small-description {
            flex-grow: 4;
        }

        form div button {
            width: 20%;
            min-width: 120px;
            height: 100%;
            background-color: white;
            color: black;
        }
        .submit button:hover{
            color: white;
        }

        @media (max-height: 950px) {
            form {
                height: 46.8%;
            }
        }
        @media (max-height: 800px) {
            form {
                height: 52%;
            }
        }
        @media (max-height: 700px) {
            form {
                height: 58.8%;
            }
        }
    </style>
</head>

<body>
    <div class="alert alert-denger" style="display:<?php if($_SERVER["REQUEST_METHOD"] == "GET"){if(isset($_GET["status"])){if($_GET["status"] == "error"){echo "flex";}else{echo "none";}}else{echo "none";}}else{echo "none";}?>">Something went wrong!!</div>
    <div class="alert alert-success" style="display: <?php if($_SERVER["REQUEST_METHOD"] == "GET"){if(isset($_GET["status"])){if($_GET["status"] == "success"){echo "flex";}else{echo "none";}}else{echo "none";}}else{echo "none";}?>"><?php if($_SERVER["REQUEST_METHOD"] == "GET"){if(isset($_GET["alert"])){if($_GET["status"] == "success"){echo $_GET["alert"];}else{echo "";}}else{echo "";}}else{echo "";}?></div>
    <form action="add_portfolio_handler.php" method="post" enctype="multipart/form-data">
        <div class="project-name"><input type="text" name="projectname" placeholder="Project name.."></div>
        <div class="project-small-description"><textarea name="projectdesc" type="text" placeholder="Small description.."></textarea></div>
        <div class="project-link"><input type="text" name="link" placeholder="Link.."></div>
        <div class="project-photo"><input type="file" name="photo"></div>
        <div class="submit"><button>Submit</button></div>
    </form>
</body>

</html>