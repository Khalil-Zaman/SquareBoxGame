<!DOCTYPE html>
<html>
<title>Game - Level Select</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="js/p5.js"></script>
<script src="js/jquery-3.2.1.js"></script>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="css/main.css">
<body style="background-color:black;">

<div id="middle">
<?php for ($x = 0; $x < 5; $x++){ ?>
<div class="w3-btn w3-padding w3-grey" style="position:relative; top:20px;">Level <?php echo $x;?></div>
<?php }?>
</div>


</body>
</html>