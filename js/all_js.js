const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
}); //對hamburger做監聽，點擊時若navLinks沒有active就加入，有的話就刪除active，active為漢堡選單下方區塊
