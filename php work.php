<?php 

$favoritecolor = "pink";

switch ($favoritecolor){

    case "blue":
    echo "Nice one";
    break;

    case "yellow":
    echo "thank you";
    break;

    case "green":
    echo "yes you are right";
    break;


    default:
    echo "no match found";


}

?>

-----------------------------------------------------------
<?php 
$number = 20;

while($number <= 40){

    echo"The number is: $number <br>";
    $number++;
}

?>

-----------------------------------------------------------$_COOKIE

<?php 
$number =50;

do { 
    echo"The number is $number<br>";
        $number++;
}
while ($number<= 20)

?>

---------------------------------------------------
/** array*/
<?php 
$cars = array("benz", "fiat", "BMW", "GLK", "Camry");

foreach ($cars as $value) {
    echo "$value <br>";
}

?>
-------------------------------------------------------
/** array*/
<?php 
$cars = array("Benz", "Fiat", "BMW", "GLK", "Camry", "Honda", "Toyota", "Volkswagen");

foreach ($cars as $value) {
    echo "$value <br>";
}

?>
---------------------------------------------------

<?php 
for ($x = 1; $x <= 20; $x++) {
    print "The number is: $x      <br>";
}
?>

--------------------------------------------
/**indexing of array */
<?php 
$name = array("Raymond", "Desmond", "RichMond", "Derrick"); 


echo $name[0];
?>

-----------------------------------------------

<?php 
$name = array("Raymond", "Desmond", "RichMond", "Derrick","Johnson","David","Juliet"); 


echo $name [4];
?>
----------------------------------------------------------------

<?php 
$name[0] = "Frank";
$name[1] = "Anna";
$name[2] = "John";
$name[3] = "Peter";

echo $name [0];
?>

-----------------------------------------------------------
PHP - Two-dimensional Arrays

<?php 
$cars = array (
    array("Volvo",22,18),
    array("BMW",15,13),
    array("Saab",5,2),
    array("Land Rover",17,15)
  );
  
  echo $cars[0][0].": In stock: ".$cars[0][1].", sold: ".$cars[0][2].".<br>";
echo $cars[1][0].": In stock: ".$cars[1][1].", sold: ".$cars[1][2].".<br>";
echo $cars[2][0].": In stock: ".$cars[2][1].", sold: ".$cars[2][2].".<br>";
echo $cars[3][0].": In stock: ".$cars[3][1].", sold: ".$cars[3][2].".<br>";
?>
------------------------------------$_COOKIE
Php Globals 

The PHP superglobal variables are:

$GLOBALS
$_SERVER
$_REQUEST
$_POST
$_GET
$_FILES
$_ENV
$_COOKIE
$_SESSION

<?php
$x = 12; 
$y = 10; 

function myfunction() {
    $GLOBALS['z'] = $GLOBALS['x'] +$GLOBALS['y'];
}

myfunction();
echo $z; 


?>
-------------------------------------------
*REQUEST /$POST/$GET

<html>
<body>
<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>"> 
Name: <input type="text" name="fname"/>
<input type="submit"/>
</form> 
   
<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Colect the value of the input field 
    $name = $_REQUEST['fname']; 
    if (empty($name)) {
        echo "Input is Empty";
    } else {
        echo $name; 
    }
}



?>
   
   
</body>

--------------------------------------------------------------------
//cookies

<?php
$cookie_name = "user";
$cookie_value = "John Doe";

setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>
<html>
<body>

<?php
if (!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}





?>

</body>
</html>

------------------------------------------------------------

reg
Pregmatch 


<?php
$str = "Visit W3schools"; 
$pattern = "/Visit Wschools/i";

echo preg_match($pattern, $str);

?>

--------------------------------------------

//preg_match_all


<?php
$str = "The Rains in spain falls mainly on the plains"; 
$pattern = "/in/i";

echo preg_match_all($pattern, $str);

?>
--------------------------------------

<?php
$str = "Hello World"; 
$pattern = "/world/i";

echo preg_replace($pattern, "Africa",$str);

?>

<?php
$str = "My pen isn't his pen therefore he has a new pen"; 
$pattern = "/pen/i";

echo preg_replace($pattern, "Book",$str);

?>

---------------------------------------------
<?php
$str = "My pen isn't his pen therefore he has a new pen"; 
$pattern = "/pen/im";

echo preg_replace($pattern, "Book",$str);

?>

/m for multilple lines.
/i- i dentilfier 

---------------------

<html>
<body>





<form action= "welcome php" method= "post">

Name: <input type = "text" name="charlse"/> <br> <br>
Email: <input type = "text" femail="femail"/> <br> <br>
hobbie: <input type = "text" hobbies="hobbies"/> <br> <br>


<input type = "submit"/>

</form>



</body>

</html>

---------------------------------------------------------------------------

<!DOCTYPE HTML>  
<html>
<head>
<style>
.error {color: red;}
</style>
</head>
<body>  

<?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }
    
  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=_|!:,.;]*[-a-z0-9+&@#\/%=_|]/i",$website)) {
      $websiteErr = "Invalid URL";
    }
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<h2>PHP Form Validation Example</h2>
<p><span class="error">* required field</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Name: <input type="text" name="name" value="<?php echo $name;?>">
  <span class="error">* <?php echo $nameErr;?></span>
  <br><br>
  E-mail: <input type="text" name="email" value="<?php echo $email;?>">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>
  Website: <input type="text" name="website" value="<?php echo $website;?>">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
  <br><br>
  Gender:
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?> value="female">Female
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?> value="male">Male
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="other") echo "checked";?> value="other">Other  
  <span class="error">* <?php echo $genderErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Submit">  
</form>

<?php
echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $website;
echo "<br>";
echo $comment;
echo "<br>";
echo $gender;
?>

</body>
</html>
----------------------------------------------------------------------