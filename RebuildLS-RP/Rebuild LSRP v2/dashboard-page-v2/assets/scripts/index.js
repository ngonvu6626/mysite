const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Get
const picksColor = $$(".js-Color");
const tabsNav = $$(".js-menuPrimary");
const blockContents = $$(".js-content");
const btnBuys = $$(".js-buyCar");
const modal = $("#modal-buy");
const btnCancel = $("#js-cancel");
const helpMenus = $$(".js-menu-help");
const helpContents = $$(".js-content-help");

helpMenus.forEach((helpMenu, index) => {
  const helpContent = helpContents[index];

  helpMenu.onclick = function () {
    $(".js-menu-help.active").classList.remove("active");
    $(".js-content-help.openBlock").classList.remove("openBlock");

    this.classList.add("active");
    helpContent.classList.add("openBlock");
  };
});

//Thay doi hieu ung select khi click vào tung the Color
picksColor.forEach((pickColor, index) => {
  pickColor.onclick = function () {
    $(".js-Color.active").classList.remove("active");

    this.classList.add("active");
  };
});

// menu primary
tabsNav.forEach((tabNav, index) => {
  const blockContent = blockContents[index];

  tabNav.onclick = function () {
    $(".js-menuPrimary.active").classList.remove("active");
    $(".js-content.openFlex").classList.remove("openFlex");

    this.classList.add("active");
    blockContent.classList.add("openFlex");
    // modal.classList.remove("openBlock");
  };
});

// click button buy
btnBuys.forEach((btnBuy, index) => {
  btnBuy.onclick = function () {
    modal.classList.add("openFlex");
  };
});
// click button cancel
btnCancel.onclick = function () {
  modal.classList.remove("openFlex");
};
