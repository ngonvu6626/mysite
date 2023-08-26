const swipeContainer = document.querySelector(".swipe");
const wrapper = document.querySelector(".wrapper");
const slides = document.querySelectorAll(".slide");
let initialX = null;
let dragging = false;
let startPosition = 0;
let currentPosition = 0;
let isAtEnd = false;
let timeoutId = null;

swipeContainer.addEventListener("touchstart", (e) => {
  initialX = e.touches[0].clientX;
  dragging = true;
  startPosition = currentPosition;
  isAtEnd = false;

  // Tắt transition khi bắt đầu kéo
  wrapper.style.transition = "none";

  // Hủy bỏ timeout nếu đang chờ
  clearTimeout(timeoutId);
});

swipeContainer.addEventListener("touchmove", (e) => {
  if (!dragging) return;

  const currentX = e.touches[0].clientX;
  const diffX = currentX - initialX;
  currentPosition = startPosition + diffX;

  // Giới hạn vị trí kéo
  if (currentPosition > 0) {
    currentPosition = 0;
  }

  // Kiểm tra nếu đã đạt đến slide cuối cùng
  const lastSlide = slides[slides.length - 1];
  const maxPosition =
    0 -
    (lastSlide.offsetLeft - swipeContainer.offsetWidth + lastSlide.offsetWidth);

  if (currentPosition < maxPosition) {
    currentPosition = maxPosition;
    isAtEnd = true;
  } else {
    isAtEnd = false;
  }

  wrapper.style.transform = `translateX(${currentPosition}px)`;
});

swipeContainer.addEventListener("touchend", () => {
  initialX = null;
  dragging = false;

  // Kích hoạt transition khi kết thúc kéo
  wrapper.style.transition = "transform 0.3s ease-out";

  // Kiểm tra nếu đang ở vị trí cuối cùng và vẫn tiếp tục kéo
  if (isAtEnd) {
    timeoutId = setTimeout(() => {
      wrapper.style.transform = "translateX(0)";
      currentPosition = 0;
    }, 1500);
  }
});
