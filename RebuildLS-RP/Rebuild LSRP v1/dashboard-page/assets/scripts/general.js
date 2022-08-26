// Nút đóng site
$(document).ready(function () {
  $("#help_close").click(function () {
    mp.trigger("Destroy_Character_Menu");
  });
});

// Nút mua #utilityShop và #vehicleShop
const buyBtns = document.querySelectorAll(".js-buy-btn");
const modal = document.querySelector(".js-modal");
const modalContent = document.querySelector(".js-modal-content");
const modalClose = document.querySelector("#modalClose");

// Thêm class - hiện modalBuy
function showBuyItems() {
  modal.classList.add("openFlex");
}
// Xóa class - ẩn modalBuy
function hideBuyItems() {
  modal.classList.remove("openFlex");
}

// Chạy vòng lập lấy từng nút .js-buy-btn
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyItems);
}

// Nút đóng modal #modalClose
modalClose.addEventListener("click", hideBuyItems);

// Bấm ra ngoài overlay đóng modal
modal.addEventListener("click", hideBuyItems);

// Chặn sự kiện nổi bọt tại .js-modal-content
modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});
