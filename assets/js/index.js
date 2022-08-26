// Card myprofile

const card = document.querySelector(".card");
const THRESHOLD = 15;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

card.addEventListener("mousemove", handleHover);
card.addEventListener("mouseleave", resetStyles);


// TAB UI CONTENT

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

  const tabs = $$('.tab-item')
  const contents = $$('.tab-content')
  
tabs.forEach((tab, index) => {

  const content = contents[index]

  tab.onclick = function () {
    $('.tab-item.active').classList.remove('active');
      $(".tab-content.active").classList.remove("active");

    this.classList.add('active');
      content.classList.add("active");
    }
  })
