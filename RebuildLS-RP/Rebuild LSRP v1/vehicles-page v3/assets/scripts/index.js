const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Lấy các phần tử menuPrimary
const tabsNav = $$(".js-listItem");
const panesNav = $$(".contents");
const modal = $("#modal");
const btnBack = $("#btn-back");
const btnClose = $("#btn-close");
const viewsMore = $$(".js-viewMore");
const picksColor = $$(".colorItem");

// Xử lý sự kiện click cho các tab menu
tabsNav.forEach((tabNav, index) => {
  const paneNav = panesNav[index];

  tabNav.onclick = function () {
    // Xóa lớp active từ tab menu hiện tại và lớp openBlock từ pane tương ứng
    $(".js-listItem.active").classList.remove("active");
    $(".contents.openBlock").classList.remove("openBlock");

    // Thêm lớp active vào tab menu được nhấp và lớp openBlock vào pane tương ứng
    this.classList.add("active");
    paneNav.classList.add("openBlock");
    modal.classList.remove("openBlock");
  };
});

// Xử lý sự kiện click cho các phần tử View More
viewsMore.forEach((viewMore, index) => {
  viewMore.onclick = function () {
    // Thêm lớp openBlock vào modal
    modal.classList.add("openBlock");
  };
});

// Xử lý sự kiện click cho nút btn-back
btnBack.onclick = function () {
  // Xóa lớp openBlock từ modal
  modal.classList.remove("openBlock");
};

// Xử lý sự kiện click cho nút btn-close
btnClose.onclick = function () {
  // Xóa lớp openBlock từ modal
  modal.classList.remove("openBlock");
};

// Xử lý sự kiện click cho các phần tử picksColor
picksColor.forEach((pickColor, index) => {
  pickColor.onclick = function () {
    // Xóa lớp active từ colorItem hiện tại
    $(".colorItem.active").classList.remove("active");

    // Thêm lớp active vào colorItem được nhấp vào
    this.classList.add("active");
  };
});
