const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// get menuPrimary
const tabsNav = $$(".js-listItem");
const panesNav = $$(".contents");
const modal = $("#modal");
const btnBack = $("#btn-back");
const btnClose = $("#btn-close");
const viewsMore = $$(".js-viewMore");
const picksColor = $$(".colorItem");

// menu primary
tabsNav.forEach((tabNav, index) => {
  const paneNav = panesNav[index];

  tabNav.onclick = function () {
    $(".js-listItem.active").classList.remove("active");
    $(".contents.openBlock").classList.remove("openBlock");

    this.classList.add("active");
    paneNav.classList.add("openBlock");
    modal.classList.remove("openBlock");
  };
});

// View More
viewsMore.forEach((viewMore, index) => {
  viewMore.onclick = function () {
    modal.classList.add("openBlock");
  };
});
// View More - btn-back
btnBack.onclick = function () {
  modal.classList.remove("openBlock");
};
btnClose.onclick = function () {
  modal.classList.remove("openBlock");
};

// //Thay doi hieu ung select khi click vào tung the Color
picksColor.forEach((pickColor, index) => {
  pickColor.onclick = function () {
    $(".colorItem.active").classList.remove("active");

    this.classList.add("active");
  };
});
