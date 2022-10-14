<?php
echo "Today is " . date("d/m/y");
?>


<?php
echo "Today is " . date("D/M/Y");
?>


------------------------------------------------------------------

<html> 
<body>
<?php
echo "Today is " . date("D/M/Y");
 echo "&copy; " . date("Y") ;
?>
</body>
</html>



-----------------------------------------------------------------

<?php

  
echo date("h:t:s:a");
?>

----------------------------------------

<?php
$d = strtotime("10:30pm April 15 2014");
echo "Created date is " . date("y-m-d h:i:sa", $d);
?>

-------------------------------------------$_COOKIE

<html>
<body>
<h1> Welcome to my homepage </h1>
<p> Some text </p>
<?php include 'try.php'; ?>
</body>
</html>
------------------------------------------

new file <?php
 echo "copywrite &copy; " . date("Y") ;
?>


-------------------------------------

<html>
<body>
<h1> Welcome to my home page </h1>
<?php include 'nofile.php';
 echo "i have a $color $car" ?>
</body>
</html>
----------------------------------------$_COOKIE
// File Handling 
1. readfile(); 
2. fopen(); 

$myfile = fopen("main.txt", "r"); 
r ----> for read only 
w ----> for write only 
a ----> for write only
x ----> create a new file for write only.. 
r+ ----> opens a file for read and write purpose! 
w+ -----> Opens a file for read and write purpose 
x+ ---> creates a new file for reading and writing purpose


-----------------------------------------------

<?php
$myfile = fopen("main.txt", "r")
or die ("unable to open file");

echo fread($myfile, filesize("main.txt"));

fclose($myfile); 
?>

-----------------------------------------------------------
<html> 
<body>
<?php
echo "Today is " . date( "d. M. Y" ) ;
echo " Copywrite by i-Ray group &copy; " . date("Y") ;
?>
</body>
</html>
