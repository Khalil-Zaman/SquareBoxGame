$(document).ready(function(){

	$('#level-create').click(function(){
		if (level_create == false){
			level_create = true;
			if (!(level_create_array.length > 0)){
				lim = horizontal_division* vertical_division;
				for (i = 0; i < lim; i++){
					level_create_array.push(0);
				}
			}
			$(this).html('Play level');
			bottombar = (windowHeight - (((windowWidth / 45)/2)*30))/2;
			topbar = bottombar;
			topbar_bottombar_dependent();
			stars_reset();
		} else if (level_create == true){
			level_create = false;
			level_create_play = true;
			reset();
			$(this).html('Create level');
			bottombar = topbar = 0;
			topbar_bottombar_dependent();
			stars_reset();
			reset();
		}
	});

	$('.print-level').click(function(){
		if ($('#show-level').css('display')=='none'){
			$('#show-level').html('[');
			lim = level_create_array.length;
			for (i = 0; i < lim; i++){
				if (i == lim - 1){
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
			bottombar = (windowHeight - (((windowWidth / 45)/2)*30))/2;
			topbar = bottombar;
			initialize_background_variables();
			topbar_bottombar_dependent();
			stars_reset();
		} else if (level_create == true){
			level_create = false;
			level_create_play = true;
			reset();
			$(this).html('Edit level');
			bottombar = topbar = 0;
			initialize_background_variables();
			topbar_bottombar_dependent();
			reset();
			stars_reset();
		}
	});

});
