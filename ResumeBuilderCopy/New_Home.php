<?php
session_start();
if(empty($_SESSION))                //checks whether session variable is set , if not then user has logged out
{                                   //to ensure that cant see details after logging out
    session_unset();
    session_destroy();
    header("location:../Login.html");  //if logged out redirect to login page
}

$server="localhost";                    //server name
$user="root";                           //user name
$password="";                           //password is empty for sql
$db="ResumeBuilder";                //database name

$conn = mysqli_connect($server,$user,$password,$db);    //connecting to database

if(!$conn)                              //incase connection fails
{
    echo "connection failed";
    die("Connection failed".mysqli_error($conn));       //exits the program
}

$email = $_SESSION["email"];
$query = "SELECT * FROM User WHERE Email='$email'";        //query for fetching the details of the entered username
$res = mysqli_query($conn , $query);

$rows = mysqli_fetch_assoc($res);
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Home Page</title>
	<link rel="stylesheet" type="text/css" href="Home.css">
	<link href="https://fonts.googleapis.com/css?family=Nunito|Pacifico" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
</head>
<body>

	<nav>
	  <ul>
	    <li><a href="Personal_Info.html">Create Now &nbsp;<i class="fas fa-edit"></i></a></li>
	    <li><a href="Logout.php">Log Out &nbsp;<i class="fas fa-power-off"></i></a></li>
	  </ul>
	</nav>


	<div id="mainDiv">
		<marquee behavior="alternate"><strong><b><font color="maroon">There are no secrets to success. It is the result of preparation, hard work, and learning from failure.</font></b></strong></marquee>
		<div id="upperDiv">
					
			<span>Hey <?php echo $rows["Username"]; ?> !!</span>
			<h2><b> Build Standout Resumes in minutes.</b></h2>
			<h4 id="h4">A perfect resume is your ticket to a great job.<br>Our easy to use resume builder puts you on the professional track.</h4>
		</div>
		<div class="imgDiv">
			<img src="Images/Home.png" height="500px" width="800px">
	</div>
	</body>
</html>

