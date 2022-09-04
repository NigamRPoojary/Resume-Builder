<?php
//thi php file is to terminate the session on logout

    session_start();
    session_unset();
    session_destroy();

    echo <<<_END
            <script>
                alert("Logged out successfully");
                window.location.href="Home.html"
            </script>
            _END;
?>