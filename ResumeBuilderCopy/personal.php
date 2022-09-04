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

if(!$conn)                                      //incase connection fails
{
    echo "connection failed";
    die("Connection failed".mysqli_error($conn));       //exits the program
}

if(isset($_POST)&&!empty($_POST))               //checks whether $POST variable is valid or not
{
    $email = $_SESSION["email"];

    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $dob = $_POST["dob"];
    $remail = $_POST["email"];
    $phno = $_POST["phno"];
    $house = $_POST["houseno"];
    $street = $_POST["street"];
    $regn = $_POST["region"];
    $city = $_POST["city"];
    $dist = $_POST["district"];
    $state = $_POST["state"];
    $linkdn = $_POST["linkedin"];
    $github = $_POST["github"];
    $summ = $_POST["summary"];

    $_SESSION["email"] = $email;

    if(isset($_FILES)&&!empty($_FILES))
    { 
        //switch is used to find the correct file extension
        //$_FILES["pic"]["type"] gives the type of uploaded file
        switch($_FILES["picture"]["type"])
        {
            case "image/jpeg" : $ext = "jpg";
                                break;

            case "image/png" : $ext = "png";
                                break;
                                
            default : $ext = "";
                        break;
        }

        if(!empty($ext))                                    //$ext is not set -> invalid file type
        {
            $temp = $_FILES["picture"]["tmp_name"];             //temp name of the uploaded file stored in server
            $old = $_FILES["picture"]["name"];                  //name of the uploaded file'$fname'.' '.'$lname' 
            
            $new = "pics/".$email.".".$ext;                //location to store the new file
            $res = move_uploaded_file($temp , $new);        //placing the uploaded file in new location 
            
            if($res)
            {
                $name = $fname." ".$lname;
                $hsstr = $house." ".$street;
                $regct = $regn." ".$city;
                $disstt = $dist." ".$state;
                $query = "UPDATE User SET REmail='$remail' , Username='$name' , Dob='$dob' , Phone='$phno' , HouseStreet='$hsstr' , RegionCity='$regct' , DistState='$disstt' , LinkedIn='$linkdn' , Github='$github' , Summary='$summ' , Picture='$new' WHERE Email='$email'";       //query
                $insrt = mysqli_query($conn , $query);        //executing query

                if($insrt)                   //if both qyeries are successfull
                {
                    echo <<<_END
                    <script>
                    alert("Details successfully submitted");
                    window.location.href="Education_&_Skill.html"
                    </script>
                    _END;
                    
                    die();
                }
            }
            else
            {
                echo <<<_END
                    <script>
                    alert("Some error occured");
                    window.location.href="Personal_info.html"
                    </script>
                    _END;
                    
                    die();
            }
        }
        else
        {
            echo <<<_END
                <script>
                alert("Uploaded file type is invalid");
                window.location.href="Personal_info.html"
                </script>
                _END;
                
            die();
        }
    }
    else
    {
        echo <<<_END
            <script>
            alert("Some error occured");
            window.location.href="Personal_info.html"
            </script>
            _END;
            
        die();
    }
}

mysqli_close($conn);
?>