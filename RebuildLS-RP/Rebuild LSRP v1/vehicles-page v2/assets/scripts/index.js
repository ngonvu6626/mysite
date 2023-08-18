const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Get menuPrimary elements
const tabsMenu = $$(".js-Menu");
const panesItem = $$(".js-paneItem");

// Handle click event for menu tabs
tabsMenu.forEach((tabMenu, index) => {
  const paneItem = panesItem[index];

  tabMenu.onclick = function () {
    // Remove active class from the currently active menu tab and openGrid class from the currently open pane item
    $(".js-Menu.active").classList.remove("active");
    $(".js-paneItem.openGrid").classList.remove("openGrid");

    // Add active class to the clicked menu tab and openGrid class to the corresponding pane item
    this.classList.add("active");
    paneItem.classList.add("openGrid");

    // Remove active class from tabsAll element (if present)
    tabsAll.classList.remove("active");
  };
});
