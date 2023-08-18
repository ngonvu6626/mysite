const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Lấy các phần tử
const picksColor = $$(".js-Color");
const tabsNav = $$(".js-menuPrimary");
const blockContents = $$(".js-content");
const btnBuys = $$(".js-buyCar");
const modal = $("#modal-buy");
const btnCancel = $("#js-cancel");
const helpMenus = $$(".js-menu-help");
const helpContents = $$(".js-content-help");

// Xử lý khi click vào menu help
helpMenus.forEach((helpMenu, index) => {
  const helpContent = helpContents[index];

  helpMenu.onclick = function () {
    const activeMenu = $(".js-menu-help.active");
    const activeContent = $(".js-content-help.openBlock");

    activeMenu?.classList.remove("active");
    activeContent?.classList.remove("openBlock");

    this.classList.add("active");
    helpContent.classList.add("openBlock");
  };
});

// Thay đổi hiệu ứng khi click vào từng mục Color
picksColor.forEach((pickColor) => {
  pickColor.onclick = function () {
    const activeColor = $(".js-Color.active");

    activeColor?.classList.remove("active");
    this.classList.add("active");
  };
});

// Xử lý khi click vào menu primary
tabsNav.forEach((tabNav, index) => {
  const blockContent = blockContents[index];

  tabNav.onclick = function () {
    const activeTab = $(".js-menuPrimary.active");
    const activeContent = $(".js-content.openFlex");

    activeTab?.classList.remove("active");
    activeContent?.classList.remove("openFlex");

    this.classList.add("active");
    blockContent.classList.add("openFlex");
  };
});

// Xử lý khi click vào nút mua
btnBuys.forEach((btnBuy) => {
  btnBuy.onclick = function () {
    modal.classList.add("openFlex");
  };
});

// Xử lý khi click vào nút hủy
btnCancel.onclick = function () {
  modal.classList.remove("openFlex");
};
