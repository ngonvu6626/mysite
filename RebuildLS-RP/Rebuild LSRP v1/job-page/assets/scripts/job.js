			let item_index = -1;
			$(document).ready(function() {
				$("#help_close").click(function() {
					mp.trigger("Destroy_Character_Menu");
				});
			});
			
			//Ask_Before_Buy(1, "Veiculo", 300);
			
			function GetJob(id) {
				mp.trigger("Get_Job", id);
			}

$(document).keydown(function(e) {

	switch (e.which) {
		// Show input.
		case 8: {
			mp.trigger("Destroy_Character_Menu");
			break;
		}
		case 27: {
			mp.trigger("Destroy_Character_Menu");
			break;
		}
		case 32: {
			mp.trigger("Destroy_Character_Menu");
			break;
		}
		case 13: {
			mp.trigger("Destroy_Character_Menu");
			break;
		}
	}
});