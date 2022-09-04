<?php
session_start();

if(empty($_SESSION))                //checks whether session variable is set , if not then user has logged out
{                                   //to ensure that cant see details after logging out
    session_unset();
    session_destroy();
    header("location:../Login.html");  //if logged out redirect to login page
}

$server = "localhost";
$user = "root";
$password = "";
$database = "ResumeBuilder";

$conn = mysqli_connect($server , $user , $password , $database);

$txt = file_get_contents("php://input");

$obj = json_decode($txt , true);

$id = $obj["id"];
$data = $obj["data"];
$email = $_SESSION["email"];

if($id=="crs"){
    foreach($data as $elem)
    {
        $name = $elem["name"];
        $org = $elem["org"];
        $date = $elem["date"];
        $query = "INSERT INTO CourseWorkshop (UserEmail , CourseName , Organization , YearMonth) values('$email' , '$name' , '$org' , '$date')";
        $exec = mysqli_query($conn , $query);
        echo $exec;
    }
}
else if($id=="ext"){
    foreach($data as $elem)
    {
        $name = $elem["name"];
        $query = "INSERT INTO AchievementExtra (UserEmail , Details) values('$email' , '$name')";
        $exec = mysqli_query($conn , $query);
        echo $exec;
    }
}

?>