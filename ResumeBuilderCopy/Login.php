<?php

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

if(isset($_POST)&&!empty($_POST))       //checks whether $POST variable is valid or not 
{
    $email = $_POST["email"];           //retieve vlue submitted using POST method from html form
    $pass = $_POST["password"];

    $query = "SELECT * FROM User WHERE Email='$email'";        //query for fetching the details of the entered username
    $res = mysqli_query($conn , $query);                       //executing query

    if(mysqli_num_rows($res)==1)
    {
        $rows = mysqli_fetch_assoc($res);                   //converts the query result into associative array
        $Upass = $rows['UserPassword'];                     //retrieves the password stored in the database

        if($pass==$Upass)
        {
            session_start();                            //starting session
            $_SESSION['email']=$email;                  //storing name and password in session vriable

            echo <<<_END
                <script>
                    alert("Login successful");
                    window.location.href="New_Home.php"
                </script>
                _END;

            die();
        }
        else
        {
            echo <<<_END
                <script>
                    alert("Incorrect password");
                    window.location.href="Login.html"
                </script>
                _END;
        
            die();
        }
    }
    else
    {
        echo <<<_END
            <script>
                alert("Email id not registered");
                window.location.href="Login.html"
            </script>
            _END;

        die();
    }
    
}

mysqli_close($conn);

?>