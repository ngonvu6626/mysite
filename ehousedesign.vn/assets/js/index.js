// product
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});
// main
var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  mousewheelControl: true,
  slidesPerView: 1,
  effect: "fade-in",
  freeModeSticky: true,
});


// Slide Collection
var TIMEOUT = 1114500;

var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {
  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios.attr("checked", false);

  if (currentIndex >= radiosLength - 1) {
    $radios.first().attr("checked", true);
  } else {
    $activeRadio.next('input[class*="slide-radio"]').attr("checked", true);
  }
}


// Slide notification
const slider = document.querySelector(".slider-notif"),
  slides = Array.from(document.querySelectorAll(".slide-item"));

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0;

// VARIABLES FOR CONTROLS
var next = document.querySelector("#next"),
  prev = document.querySelector("#prev"),
  point = Array.from(document.querySelectorAll(".point"));

// EVENT LISTENERS FOR NEXT & PREV CONTROL POINTS
next.addEventListener("click", nextControl);
prev.addEventListener("click", prevControl);

// BOTTOM POSITION CONTROLLER BASED OFF POINTS
point[0].addEventListener("click", setPoint);
point[1].addEventListener("click", setPoint);
point[2].addEventListener("click", setPoint);
point[3].addEventListener("click", setPoint);

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector("img");
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());

  // TOUCH EVENTS
  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchend", touchEnd);
  slide.addEventListener("touchmove", touchMove);

  // MOUSE EVENTS
  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mouseleave", touchEnd);
  slide.addEventListener("mousemove", touchMove);
});

// disable right click or hold
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;

    slider.classList.add("grabbing");
    animationID = requestAnimationFrame(animation);
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < slides.length - 1) {
    currentIndex += 1;
  }

  if (movedBy > 100 && currentIndex > 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();
  slider.classList.remove("grabbing");

  // SET POSITION CONTROLLER BASED ON TOUCH SLIDE
  if (currentIndex === 0) {
    point[0].classList.add("active-point");
    point[1].classList.remove("active-point");
    point[2].classList.remove("active-point");
    point[3].classList.remove("active-point");
  } else if (currentIndex === 1) {
    point[1].classList.add("active-point");
    point[0].classList.remove("active-point");
    point[2].classList.remove("active-point");
    point[3].classList.remove("active-point");
  } else if (currentIndex === 2) {
    point[2].classList.add("active-point");
    point[0].classList.remove("active-point");
    point[1].classList.remove("active-point");
    point[3].classList.remove("active-point");
  } else {
    point[3].classList.add("active-point");
    point[0].classList.remove("active-point");
    point[1].classList.remove("active-point");
    point[2].classList.remove("active-point");
  }
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

// SET POSITION
function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

// NEXT CONTROL SET POSITIONS & POINT CLASS
function nextControl() {
  if (next) {
    if (currentIndex === 0) {
      point[1].classList.add("active-point");
      point[0].classList.remove("active-point");
      point[2].classList.remove("active-point");
      point[3].classList.remove("active-point");
      currentIndex += 1;
    } else if (currentIndex === 1) {
      point[2].classList.add("active-point");
      point[0].classList.remove("active-point");
      point[1].classList.remove("active-point");
      point[3].classList.remove("active-point");
      currentIndex += 1;
    } else if (currentIndex === 2) {
      point[3].classList.add("active-point");
      point[0].classList.remove("active-point");
      point[1].classList.remove("active-point");
      point[2].classList.remove("active-point");
      currentIndex += 1;
    } else {
      currentIndex === 3;
    }
    setPositionByIndex();
  }
}
// PREV CONTROL SET POSITIONS & POINT CLASS
function prevControl() {
  if (prev) {
    if (currentIndex === 1) {
      point[0].classList.add("active-point");
      point[1].classList.remove("active-point");
      point[2].classList.remove("active-point");
      point[3].classList.remove("active-point");
      currentIndex -= 1;
    } else if (currentIndex === 2) {
      point[1].classList.add("active-point");
      point[0].classList.remove("active-point");
      point[2].classList.remove("active-point");
      point[3].classList.remove("active-point");
      currentIndex -= 1;
    } else if (currentIndex === 3) {
      point[2].classList.add("active-point");
      point[0].classList.remove("active-point");
      point[1].classList.remove("active-point");
      point[3].classList.remove("active-point");
      currentIndex -= 1;
    } else {
      currentIndex === 0;
    }
    setPositionByIndex();
  }
}

// BOTTOM POINT CONTROL SELECTOR & SET POSITION / CLASSES
function setPoint(e) {
  if (e.target === point[0]) {
    currentIndex = 0;
    // ADD / REMOVE CLASSES ON POINT CLICK
    e.target.classList.add("active-point");
    point[1].classList.remove("active-point");
    point[2].classList.remove("active-point");
    point[3].classList.remove("active-point");
  } else if (e.target === point[1]) {
    currentIndex = 1;
    // ADD / REMOVE CLASSES ON POINT CLICK
    e.target.classList.add("active-point");
    point[0].classList.remove("active-point");
    point[2].classList.remove("active-point");
    point[3].classList.remove("active-point");
  } else if (e.target === point[2]) {
    currentIndex = 2;
    // ADD / REMOVE CLASSES ON POINT CLICK
    e.target.classList.add("active-point");
    point[0].classList.remove("active-point");
    point[1].classList.remove("active-point");
    point[3].classList.remove("active-point");
  } else {
    currentIndex = 3;
    // ADD / REMOVE CLASSES ON POINT CLICK
    e.target.classList.add("active-point");
    point[0].classList.remove("active-point");
    point[1].classList.remove("active-point");
    point[2].classList.remove("active-point");
  }
  setPositionByIndex();
}

// Slide Collection
var TIMEOUT = 1114500;

var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {
  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios.attr("checked", false);

  if (currentIndex >= radiosLength - 1) {
    $radios.first().attr("checked", true);
  } else {
    $activeRadio.next('input[class*="slide-radio"]').attr("checked", true);
  }
}
