const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// get menuPrimary

const tabsMenu = $$(".js-Menu");
const panesItem = $$(".js-paneItem");

// Menu All Tabs
tabsMenu.forEach((tabMenu, index) => {
  const paneItem = panesItem[index];

  tabMenu.onclick = function () {
    $(".js-Menu.active").classList.remove("active");
    $(".js-paneItem.openGrid").classList.remove("openGrid");
    this.classList.add("active");
    paneItem.classList.add("openGrid");
    tabsAll.classList.remove("active");
  };
});
