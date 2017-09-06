$(document).ready(function(){
		
	$('#level-create').click(function(){
		if (level_create == false){
			level_create = true;
			if (!(level_create_array.length > 0)){
				for (i = 0; i < horizontal_division* vertical_division; i++){
					level_create_array.push(0);
				}
			}
			$(this).html('Play level');
		} else if (level_create == true){
			level_create = false;
			level_create_play = true;
			reset();
			$(this).html('Create level');
		}
	});
	
	$('.print-level').click(function(){
		if ($('#show-level').css('display')=='none'){
			$('#show-level').html('[');
			for (i = 0; i < level_create_array.length; i++){
				if (i == level_create_array.length - 1){
					$('#show-level').append(str(level_create_array[i]));
				} else {
					$('#show-level').append(str(level_create_array[i]) + ", ");
				}
			}
			$('#show-level').append(']');
			$('#show-level').slideDown();
			$(this).html('Hide level code');
		} else {
			$('#show-level').slideUp();
			$(this).html('Show level code');
		}
	});
	
	$('#play').click(function(){
		level_create = false;
		level_create_play = false;
		level = $('#level-select').val();
		reset();
	});
	
	$('#edit-level').click(function(){
		if (level_create == false){
			level_create = true;
			level_create_array = play_level();
			$(this).html('Play level');
		} else if (level_create == true){
			level_create = false;
			level_create_play = true;
			reset();
			$(this).html('Edit level');
		}
	});
	
});