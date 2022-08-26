const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// get menuPrimary
const tabsNav = $$(".navLeft__item");
const panesNav = $$(".hideDisplaySection");

// get menuGeneral
const tabsGeneral = $$(".js-menuGeneral");
const panesGeneral = $$(".hideDisplayGeneral");

// get menuVipleft + menuVipright
const tabsVipleft = $$(".js-menuVipleft");
const panesVipleft = $$(".hideDisplayVipleft");

const tabsVipright = $$(".js-menuVipright");
const panesVipright = $$(".hideDisplayVipright");

// get menuHelp
const tabsHelp = $$(".js-menuHelp");
const panesHelp = $$(".hideDisplayHelp");

//
//
//

// menu primary
tabsNav.forEach((tabNav, index) => {
  const paneNav = panesNav[index];

  tabNav.onclick = function () {
    $(".navLeft__item.navLeft__item--active").classList.remove(
      "navLeft__item--active"
    );
    $(".hideDisplaySection.openFlex").classList.remove("openFlex");

    this.classList.add("navLeft__item--active");
    paneNav.classList.add("openFlex");
  };
});

// menu generalRight
tabsGeneral.forEach((tabGeneral, index) => {
  const paneGeneral = panesGeneral[index];

  tabGeneral.onclick = function () {
    $(".js-menuGeneral.top-heading--active").classList.remove(
      "top-heading--active"
    );
    $(".hideDisplayGeneral.openBlock").classList.remove("openBlock");

    this.classList.add("top-heading--active");
    paneGeneral.classList.add("openBlock");
  };
});

// menu Vipleft
tabsVipleft.forEach((tabVipleft, index) => {
  const paneVipleft = panesVipleft[index];

  tabVipleft.onclick = function () {
    $(".js-menuVipleft.top-heading--active").classList.remove(
      "top-heading--active"
    );
    $(".hideDisplayVipleft.openBlock").classList.remove("openBlock");

    this.classList.add("top-heading--active");
    paneVipleft.classList.add("openBlock");
  };
});

// menu Vipright
tabsVipright.forEach((tabVipright, index) => {
  const paneVipright = panesVipright[index];

  tabVipright.onclick = function () {
    $(".js-menuVipright.top-heading__menu--active").classList.remove(
      "top-heading__menu--active"
    );
    $(".hideDisplayVipright.openGrid").classList.remove("openGrid");

    this.classList.add("top-heading__menu--active");
    paneVipright.classList.add("openGrid");
  };
});

// menu #Help
tabsHelp.forEach((tabHelp, index) => {
  const paneHelp = panesHelp[index];

  tabHelp.onclick = function () {
    $(".js-menuHelp.top-heading--active").classList.remove(
      "top-heading--active"
    );
    $(".hideDisplayHelp.openBlock").classList.remove("openBlock");

    this.classList.add("top-heading--active");
    paneHelp.classList.add("openBlock");
  };
});
