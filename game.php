<!DOCTYPE html>
<html>
<title>Game</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="js/libraries/p5.js"></script>
<script src="js/libraries/jquery-3.2.1.js"></script>
<script src="js/cookie-plugin/jquery.cookie.js"></script>
<link rel="stylesheet" href="css/w3-css.css">
<link rel="stylesheet" href="css/main.css">

<script src="js/main.js"></script>
<script src="js/player.js"></script>
<script src="js/background_main.js"></script>
<script src="js/level_create.js"></script>
<script src="js/levels.js"></script>
<script src="js/setup.js"></script>
<script src="js/draw.js"></script>
<script src="js/main_menu.js"></script>
<script src="js/level_select.js"></script>
<script src="js/user_inputs.js"></script>
<script src="js/stars.js"></script>
<script src="js/tutorials.js"></script>
<script src="js/complete.js"></script>
<script src="js/cookies.js"></script>
<script src="js/arcs.js"></script>
<script src="js/blue.js"></script>
<script src="js/purple.js"></script>

<body>

<div style="position:absolute; top:0px; width:100%;" class="w3-padding">
	<select class="w3-select" id="level-select" style="width:200px;">
		<?php for ($x = 1; $x<=5; $x++){ ?>
			<option value="<?php echo $x; ?>"><?php echo $x;?></option>
		<?php } ?>
	</select>
	<div class="w3-btn w3-blue" id="play">Play</div>
	<div class="w3-btn w3-blue" id="edit-level">Edit level</div>
	<div class="w3-btn w3-blue print-level">Show level code</div>
	<div id="frame-rate"></div>
</div>

<div style="position:absolute; bottom:0px; width:100%;" class="w3-padding screen_size_dependent">
	<div class="w3-row ">
		<div class="w3-col l2 m2"><div class="w3-btn w3-blue" id="level-create">Create level</div></div>
		<div class="w3-col l2 m2"><div class="w3-btn w3-blue print-level">Show level code</div></div>
	</div>
	<div class="w3-text-black w3-white w3-card w3-padding" style="display:none; font-size:12px;" id="show-level"></div>
</div>

</body>
</html>
