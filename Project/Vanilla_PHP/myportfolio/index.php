<?php
if (isset($_GET["alert"])) {
    $alert = $_GET["alert"];
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to my portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>
    <header class="header container">
        <a href="index.php" class="logo">It's Hossein.</a>

        <nav class="navbar">
            <a href="#home" class="active" style="--i:1;">Home</a>
            <a href="#about" style="--i:2;">About</a>
            <a href="#skills" style="--i:3;">Skills</a>
            <a href="#portfolio" style="--i:4;">portfolio</a>
            <a href="#contact" style="--i:5;">Contact</a>
        </nav>
        <div class="hamburger">
            <span class="bar" id="line1"></span>
            <span class="line" id="line2"></span>
            <span class="line" id="line3"></span>
            <span class="bar" id="line4"></span>
        </div>
    </header>
    <nav class="responsive-navber">
        <a href="#home" class="active" style="--i:1;">Home</a>
        <a href="#about" style="--i:2;">About</a>
        <a href="#skills" style="--i:3;">Skills</a>
        <a href="#portfolio" style="--i:4;">portfolio</a>
        <a href="#contact" style="--i:5;">Contact</a>
    </nav>
    <div class="cover"></div>

    <section class="home" id="home">
        <div class="home-content">
            <h3>Hello, It's me</h3>
            <h1>Piyal hossein</h1>
            <h3>And I am a <span class="multiple-text"></span></h3>
            <p>I am working as a freelancer for almost 5 years. I deliver quality work in reasonable price. Clients full
                satisfaction is my first priority. Lets talk and solve your problem.</p>
            <div class="social-media">
                <a href="https://www.facebook.com/people/Piyal-Hossain/pfbid021nUPyedTFro5NQqY6rzdmDXWvFA43QPThABfNNsLnayZ4peP2YWbXTBViqbfdDsnl/" target="_blank" style="--i:6"><i class='bx bxl-facebook-circle'></i></a>
                <a href="https://github.com/py-38384" target="_blank" style="--i:7"><i class='bx bxl-github'></i></a>
                <a href="https://www.instagram.com/piyalhossein/" target="_blank" style="--i:8"><i class='bx bxl-instagram'></i></a>
                <a href="https://www.linkedin.com/in/piyal-hossain-b3720b21b/" target="_blank" style="--i:9"><i class='bx bxl-linkedin-square'></i></a>
            </div>
            <a href="https://www.fiverr.com/piyalhossein" target="_blank" style="border-radius: 15px 0 0 15px;" class="btn hire-btn">Hire me</a>
            <span class="divider"></span>
            <a href="resume.txt" target="_blank" style="border-radius: 0px 15px 15px 0px;" class="btn hire-btn">Download CV</a>
        </div>
        <div class="home-image"><img src="heroPic.png" alt="img image" srcset=""></div>
    </section>

    <section class="about container" id="about">
        <h2 class="heading" style="border: none;">About <span>Me</span></h2>
        <div class="about-image">
            <img src="about.png" alt="">
            <span class="circle-spin"></span>
        </div>
        <div class="about-content">
            <h3>Technology enthusiast</h3>
            <p>Hallo my name is piyal hossein. I am from bangladesh. I am a computer nard. I know a little bit about
                everything within the computer field. but mainly I am a programmer and a web developer. So about the
                programming side. Yet again I know a little bit about every popular programming language out there. but
                mainly I am a python programmer who have decent experience of machine learning and data analysis using
                python. And about the web development. Well Html, css, javascript, php, laravel, django, react, nextjs,
                notejs, asp.net those are my expertise. I am a quick learner. And I learned all those things using only
                the internet. and I am still learning. currently my main focus is unity..</p>
            <div class="btn-box btns">
                <a href="#contact" class="btn">Contact me</a>
            </div>
        </div>
    </section>

    <section class="skills container" id="skills">
        <h2 class="heading">My <span>Skills</span></h2>
        <div class="skills-row">

            <div class="skills-column">
                <h3 class="title">Coding skills</h3>
                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>HTML <span>95%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>CSS <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>JavaScript <span>75%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Python <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skills-column">
                <h3 class="title">Professional skills</h3>
                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>Web Development <span>95%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Web Design <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Machine Learning <span>70%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Game Development <span>80%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <section class="portfolio container" id="portfolio">
        <h2 class="heading">My <span>Portfolio</span></h2>
        <div class="project-box">
            <!-- this is where you will put your portfolio work/project  -->
            <?php
                include "config.php";
                $sql = mysqli_query($connect,"SELECT * FROM portfolio");
                $output = "";
                while($row = mysqli_fetch_assoc($sql)){
                    $output .= '
                    <a href="'.$row['projectlink'].'" target="_blank" class="project">
                    <div class="image-container">
                        <img src="protfolioImage/'.$row['projectphoto'].'" alt="">
                    </div>
                    <div class="desc-box">
                        <h3>'.$row['projectname'].'</h3>
                        <p>'.$row['prjectsmalldescription'].'</p>
                    </div>
                </a>
                    ';
                }
                echo $output;
            ?>
            
        </div>
    </section>
    <section class="contact" id="contact">
        <h2 class="heading" style="border: none;">Contect <span>Me</span></h2>
        <form action="message.php" method="post">

        <?php
        if (isset($_GET["alert"])) {
            $alert = $_GET["alert"];
            if($_GET["status"] == "success"){
                echo '<div class="contact-success">'.$alert.'</div>';
                echo '<script>alert("Message successfully send");</script>';
            }else if($_GET["status"] == "failed"){
                echo '<div class="contact-failed">'.$alert.'</div>';
                echo '<script>alert("Error!!Message not send");</script>';
            }
        }
        ?>

            <div class="input-box">
                <div class="input-field">
                    <input type="text" name="fullname" placeholder="Full name" required>
                    <span class="focus"></span>
                </div>
                <div class="input-field">
                    <input type="email" name="email" placeholder="Email Address" required>
                    <span class="focus"></span>
                </div>
            </div>
            <div class="input-box">
                <div class="input-field">
                    <input type="text" name="mobilenumber" placeholder="Mobile Number">
                    <span class="focus"></span>
                </div>
                <div class="input-field">
                    <input type="text" name="subject" placeholder="Subject">
                    <span class="focus"></span>
                </div>
            </div>
            <div class="textarea-field">
                <textarea name="message" id="" cols="30" rows="10" placeholder="Enter your message here..." required></textarea>
                <span class="focus"></span>
            </div>
            <div class="submit-btn-box btns">
                <button type="submit" class="btn">Submit</button>
            </div>
        </form>
    </section>
    <footer>
        <div class="footer-text">
            <p>Copyright &copy; 2023 by Piyal | All Rights Reserved.</p>
        </div>
        <div class="footer-iconTop">
            <a href="#"><i class='bx bx-up-arrow-alt'></i></a>
        </div>
    </footer>
</body>
<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
<script src="main.js"></script>

</html>