let item_index = -1;
$(document).ready(function () {
  $("#help_close").click(function () {
    mp.trigger("Destroy_Character_Menu");
  });
  $("#ask_buy_confirm").click(function () {
    mp.trigger("Buy_Item_From_Credit_Store", item_index);
    //alert(item_index);
  });
});

//Ask_Before_Buy(1, "Veiculo", 300);

function Ask_Before_Buy(item_id, item_name, item_price) {
  item_index = item_id;
  document.getElementById("ask_item_name").innerHTML = item_name;
  document.getElementById("ask_item_price").innerHTML = item_price;
  $(".js-modal").modal("show");
}

function Load_VIP_Data(arr_player, arr_store, arr_store2) {
  // Player
  let player = JSON.parse(arr_player);

  document.getElementById("account_name").innerHTML = player[0].Name;
  document.getElementById("account_credits").innerHTML = player[0].Credits;

  if (player[0].Vip == 0) {
    $("#vip_status").hide();
    $("#no_vip_status").show();
  } else {
    document.getElementById("vip_status_data").innerHTML = player[0].Data;
    document.getElementById("vip_status_expire").innerHTML = player[0].Expire;
    $("#no_vip_status").hide();
    $("#vip_status").show();
  }

  //vip_status_data
  // Store Item
  let store_item = JSON.parse(arr_store);
  $("#credit_store_table").empty();
  if (store_item.length > 0) {
    for (let i = 0; i < store_item.length; i++) {
      $("#credit_store_table").append(
        '<div class="content-shop__items--img"><img src="' +
          store_item[i].img +
          '" alt="Hình Ảnh"></div><div class="content-shop__items--desc"><span class="content-shop__items--title bb">' +
          store_item[i].name +
          '</span><span class="content-shop__items--info bb">' +
          store_item[i].description +
          '</span><div class="content-shop__credit"><span class="content-shop__credit--title">CREDIT: </span><span class="content-shop__credit--price">' +
          store_item[i].credits +
          '</span></div><div id="credit_store_buy_' +
          store_item[i].type +
          '" class="content-shop__items--btn js-btn "><span>CHỌN</span></div></div>'
      );

      $("#credit_store_buy_" + store_item[i].type).click(function () {
        Ask_Before_Buy(
          store_item[i].type,
          store_item[i].name,
          store_item[i].credits
        );
      });
    }
  }

  let store_vehicle = JSON.parse(arr_store2);
  $("#credit_store_vehicle_table").empty();
  if (store_vehicle.length > 0) {
    for (let i = 0; i < store_vehicle.length; i++) {
      $("#credit_store_vehicle_table").append(
        '<div class="content-shop__cars"><div class="content-shop__items--img"><img src="' +
          store_vehicle[i].img +
          '" alt="Hình Ảnh"></div><div class="content-shop__items--desc"><span class="content-shop__items--title bb">' +
          store_vehicle[i].name +
          '</span><span class="content-shop__items--info bb">' +
          store_vehicle[i].description +
          '</span><div class="content-shop__credit"><span class="content-shop__credit--title">CREDIT:</span><span class="content-shop__credit--price">' +
          store_vehicle[i].credits +
          '</span></div><div id="credit_store_vehicle_buy_' +
          store_vehicle[i].credits +
          '" class="content-shop__items--btn js-btn"><span>CHỌN</span></div></div></div>'
      );

      $("#credit_store_vehicle_buy_" + store_vehicle[i].type).click(
        function () {
          Ask_Before_Buy(
            store_vehicle[i].type,
            store_vehicle[i].name,
            store_vehicle[i].credits
          );
        }
      );
    }
  }
}
$(document).keydown(function (e) {
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
