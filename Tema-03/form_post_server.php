<?php
    $_REQUEST["name"];
    $_REQUEST["surname"];
    $_REQUEST["email"];
    $_REQUEST["pass"];
    $_REQUEST["passConfirm"];
    $_REQUEST["age"];
    //$_REQUEST["hobbieCheckBox0"];
    //$_REQUEST["hobbieCheckBox1"];
    //$_REQUEST["hobbieCheckBox2"];
    //$_REQUEST["hobbieCheckBox3"];
    $_REQUEST["gender"];
    $_REQUEST["incomeSource"];
    $_REQUEST["income"];
    $_REQUEST["profilePic"];
    $_REQUEST["bio"];
?>


<html>
   <body>      
       <p><?php echo "Hola ". $_REQUEST["name"] . " " . $_REQUEST["surname"] ?></p>
   </body>
</html>