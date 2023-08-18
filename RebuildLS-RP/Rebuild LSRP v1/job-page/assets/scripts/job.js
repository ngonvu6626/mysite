let item_index = -1;

// Wait for the document to be ready
$(document).ready(function () {
  // Handle click event for help_close button
  $("#help_close").click(function () {
    // Trigger Destroy_Character_Menu event
    mp.trigger("Destroy_Character_Menu");
  });
});

// Function to trigger Get_Job event
function GetJob(id) {
  mp.trigger("Get_Job", id);
}

// Handle keydown event on document
$(document).keydown(function (e) {
  switch (e.which) {
    // Show input.
    case 8:
    case 27:
    case 32:
    case 13: {
      // Trigger Destroy_Character_Menu event for specified key codes
      mp.trigger("Destroy_Character_Menu");
      break;
    }
  }
});
