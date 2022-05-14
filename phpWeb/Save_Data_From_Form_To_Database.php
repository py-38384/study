<?php
    $server = "localhost";
    $name = "root";
    $pass = "";
    $database = "phpweb";

    $connect = mysqli_connect($server,$name,$pass,$database);
    if(!$connect){
        die("Database not connected ". mysqli_connect_error());
    }
    else{
        echo "<h2>Database connected</h2> <br>";
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $name = $_POST['name'];
            $dist = $_POST['dist'];
            $sql = "INSERT INTO `travel` (`name`, `dist`) VALUES ('$name', '$dist')";
            $result = mysqli_query($connect,$sql);
            if($result){
                echo "<h3>Data saved.</h3>";
            }
            else{
                echo "<h3>ERROR! Data not saved</h3>";
            }
           //echo $name . "<br>" . $dist ;
     }
    }
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
    <style>
        body{
            padding:20px;
        }
    </style>
  </head>
  <body>
  <form action="/phpWeb/Save_Data_From_Form_To_Database.php" method="post">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter your name/-</label>
    <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter your distination/-</label>
    <input type="text" class="form-control" id="dist" name="dist">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>