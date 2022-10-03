const nav__hamburguer = document.querySelector(".nav__hamburguer");
const nav__list = document.querySelector(".nav__list");

nav__hamburguer.addEventListener("click", () => {
  nav__hamburguer.classList.toggle("active");
  nav__list.classList.toggle("active");
});
