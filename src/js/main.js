const burguer = document.getElementById("burguer");
burguer.addEventListener("click", (event) => {
  event.preventDefault();
  const sidebar = document.getElementById("sidebar");
  //*al hacer clic en el burguer le añadimos la clase open al sidebar
  sidebar.classList.add("open");
});

const closeButton = document.getElementById("sidebarClose");
closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  const sidebar = document.getElementById("sidebar");

  // al hacer clic en el sidebarClose le quitamos la clase open al sidebar para que se oculte
  sidebar.classList.remove("open");
});

// FUNCIONALIDAD MODAL
const triggerModal1 = document.getElementById("triggerModal1");
triggerModal1.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto1 = document.getElementById("proyecto1");

  proyecto1.classList.add("open");

  const bgModal = document.getElementById("bgModal");

  bgModal.classList.add("open");

  const body = document.querySelector("body");

  body.classList.add("openModal");
});

const closeModal1 = document.getElementById("closeModal1");
closeModal1.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto1 = document.getElementById("proyecto1");

  proyecto1.classList.remove("open");

  const bgModal = document.getElementById("bgModal");

  bgModal.classList.remove("open");

  const body = document.querySelector("body");

  body.classList.remove("openModal");
});

// modal 2

const triggerModal2 = document.getElementById("triggerModal2");
triggerModal2.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto2 = document.getElementById("proyecto2");

  proyecto2.classList.add("open");

  const bgModal = document.getElementById("bgModal");

  bgModal.classList.add("open");

  const body = document.querySelector("body");

  body.classList.add("openModal");
});

const closeModal2 = document.getElementById("closeModal2");
closeModal2.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto2 = document.getElementById("proyecto2");

  proyecto2.classList.remove("open");

  const bgModal = document.getElementById("bgModal");

  bgModal.classList.remove("open");

  const body = document.querySelector("body");

  body.classList.remove("openModal");
});

// Modal 3

const triggerModal3 = document.getElementById("triggerModal3");
triggerModal3.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto3 = document.getElementById("proyecto3");

  proyecto3.classList.add("open");

  const bgModal3 = document.getElementById("bgModal3");

  bgModal.classList.add("open");

  const body = document.querySelector("body");

  body.classList.add("openModal");
});

const closeModal3 = document.getElementById("closeModal3");
closeModal3.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto3 = document.getElementById("proyecto3");

  proyecto3.classList.remove("open");

  const bgModal3 = document.getElementById("bgModal3");

  bgModal.classList.remove("open");

  const body = document.querySelector("body");

  body.classList.remove("openModal");
});

// Modal 4

const triggerModal4 = document.getElementById("triggerModal4");
triggerModal4.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto4 = document.getElementById("proyecto4");

  proyecto4.classList.add("open");

  const bgModal4 = document.getElementById("bgModal");

  bgModal.classList.add("open");

  const body = document.querySelector("body");

  body.classList.add("openModal");
});

const closeModal4 = document.getElementById("closeModal4");
closeModal4.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto4 = document.getElementById("proyecto4");

  proyecto4.classList.remove("open");

  const bgModal4 = document.getElementById("bgModal4");

  bgModal.classList.remove("open");

  const body = document.querySelector("body");

  body.classList.remove("openModal");
});

// Modal 5

const triggerModal5 = document.getElementById("triggerModal5");
triggerModal5.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto5 = document.getElementById("proyecto5");

  proyecto5.classList.add("open");

  const bgModal5 = document.getElementById("bgModal");

  bgModal.classList.add("open");

  const body = document.querySelector("body");

  body.classList.add("openModal");
});

const closeModal5 = document.getElementById("closeModal5");
closeModal5.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto5 = document.getElementById("proyecto5");

  proyecto5.classList.remove("open");

  const bgModal5 = document.getElementById("bgModal5");

  bgModal.classList.remove("open");

  const body = document.querySelector("body");

  body.classList.remove("openModal");
});

// Modal 6
const triggerModal6 = document.getElementById("triggerModal6");
triggerModal6.addEventListener("click", (event) => {
  event.preventDefault();
  const proyecto6 = document.getElementById("proyecto6");

  proyecto6.classList.add("open");

  const bgModal6 = document.getElementById("bgModal6");

  bgModal.classList.add("open");

  const body = document.querySelector("body");

  body.classList.add("openModal");
});

const closeModal6=document.getElementById("closeModal6");
closeModal6.addEventListener("click",(event) => {
  event.preventDefault();
  const proyecto6 = document.getElementById("proyecto6");

  proyecto6.classList.remove("open");

  const bgModal6 = document.getElementById("bgModal6");

  bgModal.classList.remove("open");

  const body = document.querySelector("body");

  body.classList.remove("openModal");
  
})
