//Slider #Project .tab-content
// Gắn sự kiện click cho phần tử có id "next"
document.getElementById("next").addEventListener("click", function () {
  const slide = document.getElementById("slide");

  // Lấy phần tử đầu tiên trong slide
  const firstItem = slide.querySelector(".item");

  // Di chuyển phần tử đầu tiên đến cuối danh sách bằng cách thêm nó vào cuối slide
  slide.appendChild(firstItem);
});

// Gắn sự kiện click cho phần tử có id "prev"
document.getElementById("prev").addEventListener("click", function () {
  const slide = document.getElementById("slide");

  // Lấy tất cả các phần tử .item trong slide
  const itemList = slide.querySelectorAll(".item");

  // Lấy phần tử cuối cùng trong danh sách
  const lastItem = itemList[itemList.length - 1];

  // Di chuyển phần tử cuối cùng đến đầu danh sách bằng cách thêm nó vào đầu slide
  slide.prepend(lastItem);
});

// ==============================================

// Card profile
const card = document.querySelector(".card");
const THRESHOLD = 15;
const perspective = card.clientWidth;
const cardRect = card.getBoundingClientRect();

function handleHover(e) {
  const { clientX, clientY } = e;

  // Tính toán tọa độ x và y của tâm của phần tử .card
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;

  // Tính toán khoảng cách giữa tâm của phần tử .card và vị trí con trỏ chuột
  const deltaX = clientX - cardCenterX;
  const deltaY = clientY - cardCenterY;

  // Tính toán góc quay dựa trên khoảng cách tính được và kích thước phần tử .card
  const rotateX = (deltaY / cardRect.height) * THRESHOLD;
  const rotateY = -(deltaX / cardRect.width) * THRESHOLD;

  // Áp dụng góc quay và tỉ lệ phóng đại vào phần tử .card
  card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
}

function resetStyles() {
  // Đặt lại giá trị góc quay về trạng thái ban đầu
  card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
}

// Gắn sự kiện mousemove với phần tử .card, khi di chuột qua phần tử sẽ gọi hàm handleHover
card.addEventListener("mousemove", handleHover);

// Gắn sự kiện mouseleave với phần tử .card, khi di chuột ra khỏi phần tử sẽ gọi hàm resetStyles
card.addEventListener("mouseleave", resetStyles);

// ==============================================

// TAB UI CONTENT
// Sử dụng các hàm rút gọn để gọi các phương thức querySelector và querySelectorAll
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Lấy tất cả các phần tử có lớp "tab-item" và "tab-content"
const tabs = $$(".tab-item");
const contents = $$(".tab-content");

tabs.forEach((tab, index) => {
  const content = contents[index];

  // Gán sự kiện onclick cho mỗi phần tử tab
  tab.onclick = function () {
    // Xóa lớp "active" khỏi phần tử tab và nội dung đang được kích hoạt
    $(".tab-item.active").classList.remove("active");
    $(".tab-content.active").classList.remove("active");

    // Thêm lớp "active" vào phần tử tab và nội dung tương ứng
    this.classList.add("active");
    content.classList.add("active");
  };
});

// ==============================================
