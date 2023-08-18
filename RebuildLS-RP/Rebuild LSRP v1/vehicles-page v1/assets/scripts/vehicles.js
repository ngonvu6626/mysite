let item_index = -1;

// Wait for the document to be ready
$(document).ready(function () {
  // Handle click event for help_close button
  $("#help_close").click(function () {
    // Trigger Destroy_Character_Menu event
    mp.trigger("Destroy_Character_Menu");
  });

  // Handle click event for vehicleCard elements
  $(".vehicleCard").click(function (e) {
    // Add activeCard class to the clicked element and remove it from siblings
    $(this).addClass("activeCard").siblings().removeClass("activeCard");
  });

  // Handle click event for colorItem elements
  $(".colorItem").click(function (e) {
    // Add activeColor class to the clicked element and remove it from siblings
    $(this).addClass("activeColor").siblings().removeClass("activeColor");
  });

  // Handle click event for group__item elements
  $(".group__item").click(function (e) {
    // Add group__item--active class to the clicked element and remove it from siblings
    $(this)
      .addClass("group__item--active")
      .siblings()
      .removeClass("group__item--active");
  });

  // Handle click event for rightContent__footer--btn button
  $(".rightContent__footer--btn").click(function (e) {
    // Toggle rightContent--full class on rightContent element
    $(".rightContent").toggleClass("rightContent--full");
  });
});
