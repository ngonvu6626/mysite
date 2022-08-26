let item_index = -1;
$(document).ready(function () {
  $("#help_close").click(function () {
    mp.trigger("Destroy_Character_Menu");
  });

  //Thay doi hieu ung select khi click vào tung the Card
  $(".vehicleCard").click(function (e) {
    $(this).addClass("activeCard").siblings().removeClass("activeCard");
  });
  //Thay doi hieu ung select khi click vào tung the Color
  $(".colorItem").click(function (e) {
    $(this).addClass("activeColor").siblings().removeClass("activeColor");
  });
  //Thay doi hieu ung select khi click vào tung the nav item
  $(".group__item").click(function (e) {
    $(this)
      .addClass("group__item--active")
      .siblings()
      .removeClass("group__item--active");
  });

  // Thay doi giao dien RightContent thanh full
  $(".rightContent__footer--btn").click(function (e) {
    $(".rightContent").toggleClass("rightContent--full");
  });
});
