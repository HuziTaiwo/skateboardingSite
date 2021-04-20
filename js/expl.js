const showcase = document.querySelector(".showcase");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", toggleActive);

function toggleActive() {
  showcase.classList.toggle("active");
  toggle.classList.toggle("active");
}
