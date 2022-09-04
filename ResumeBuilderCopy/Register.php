<?php
$server = "localhost";                    //server name
$user = "root";                           //user name
$password = "";                           //password is empty for sql
$db = "ResumeBuilder";                //type database name

$conn = mysqli_connect($server,$user,$password,$db);    //connecting to database

if(!$conn)                                      //incase connection fails
{
    echo "connection failed";
    die("Connection failed".mysqli_error($conn));       //exits the program
}

if(isset($_POST)&&!empty($_POST))               //checks whether $POST variable is valid or not
{
    $fname = $_POST["fname"];                 //retieve value submitted using POST method from html form
    $email = $_POST["email"];
    $lname = $_POST["lname"];
    $pass = $_POST["password"];

    $query = "SELECT * FROM User WHERE Email='$email'";     //query
    $res = mysqli_query($conn,$query);                       //executing query

    if(!(mysqli_num_rows($res)>0))              //incase the username exists in the database
    {        //password hashing
        $sql = "INSERT INTO User (Email , UserPassword , Username) VALUES ('$email' , '$pass' , '$fname $lname')";       //query
        $insrt = mysqli_query($conn,$sql);                      //executing query
        
        echo <<<_END
                <script>
                    alert("Registration successful");
                    window.location.href="Login.html"
                </script>
                _END;

        die();
    }
    else
    {
        echo <<<_END
                <script>
                    alert("Email id alreday exists");
                    window.location.href="Register.html"
                </script>
                _END;

        die();
    }

}

mysqli_close($conn);
?>