<!DOCTYPE html>
<html>
<title>Game</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<script src="js/main.js"></script>
<script src="js/player.js"></script>
<script src="js/background_main.js"></script>
<script src="js/level_create.js"></script>
<script src="js/levels.js"></script>
<link rel="stylesheet" href="css/main.css">
<body>

<div style="position:absolute; top:0px; width:100%;" class="w3-padding">
	<select class="w3-select" id="level-select" style="width:200px;">
		<?php for ($x = 1; $x<=3; $x++){ ?>
			<option value="<?php echo $x; ?>"><?php echo $x;?></option>
		<?php } ?>
	</select>
	<div class="w3-btn w3-blue" id="play">Play</div>
	<div class="w3-btn w3-blue" id="edit-level">Edit level</div>
	<div class="w3-btn w3-blue print-level">Show level code</div>
</div>

<div style="position:absolute; bottom:0px; width:100%;" class="w3-padding">
	<div class="w3-row ">
		<div class="w3-col l2 m2"><div class="w3-btn w3-blue" id="level-create">Create level</div></div>
		<div class="w3-col l2 m2"><div class="w3-btn w3-blue print-level">Show level code</div></div>
	</div>
	<div class="w3-text-black w3-white w3-card w3-padding" style="display:none; font-size:12px;" id="show-level"></div>
</div>

</body>
</html>