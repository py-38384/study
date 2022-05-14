<?php
    require 'webpart\databaseconn.php';
    $log = "";
    if(!$connect){
        $log = '<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Database not connected!</strong> we will fix it soon. we apologize for our fault.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>';
    }
    else{
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $username = $_POST['username'];
            $pass = $_POST['pass'];
            $cpass = $_POST['cpass'];
            if($pass == $cpass){
                $passhash = password_hash($pass, PASSWORD_DEFAULT);
                $sql = "INSERT INTO `users` (`username`, `pass`, `date`) VALUES ('$username', '$passhash', CURRENT_TIMESTAMP);";
                $result = mysqli_query($connect,$sql);
                if($result){
                    $log = '<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Account created successfully.</strong> Enjoy our security service.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>';
                }
                else{
                    $log = '<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Account not created!</strong> Someting went wrong.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>';
                }
            }
            else{
                $log = '<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Password not matched!</strong> Plese check the conform password.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>';
            }
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

    <title>SignUp to iSecure</title>
  </head>
  <body style="padding:5px;">
     <?php 
     require 'webpart\nav.php'; 
    ?>
    <h1>Sign up to iSecure</h1>
    <?php 
    echo $log;
    ?>

    <form style="padding:20px;" action="/phpWeb/login/signup.php" method="post">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User name</label>
    <input type="text" name="username" class="form-control" id="username" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name="pass" id="pass">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Conform password</label>
    <input type="password" class="form-control" name="cpass" id="cpass">
  </div>
  <button type="submit" class="btn btn-primary">Sign up</button>
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