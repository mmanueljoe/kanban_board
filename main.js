// ==== MODAL ====
const createBoardModal = document.getElementById("modal-add-board");

const addTaskModal = document.getElementById("modal-add-task");

const addTaskBtn = document.getElementById("btn-add-task");

const addTaskBtnMobile = document.getElementById("btn-add-task-mb");

const createBoardBtn = document.getElementById("create-board");

const sidebar = document.getElementById("sidebar");

function openModal(modal) {
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// click backdrop to close
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal);
  });
});

createBoardBtn.addEventListener("click", () => openModal(createBoardModal));

addTaskBtn.addEventListener("click", () => openModal(addTaskModal));

addTaskBtnMobile.addEventListener("click", () => openModal(addTaskModal));

// ==== SIDEBAR ====
const hideSidebarBtn = document.getElementById("hide-sidebar");

const showSidebarBtn = document.getElementById("show-sidebar");
hideSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("hidden");
});

showSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
});

// ==== THEME TOGGLER ====

const themeToggler = document.getElementById("theme-toggler");
const themeTogglerMobile = document.getElementById("theme-toggler-mb");
const htmlElement = document.documentElement;

function setTheme(theme) {
  htmlElement.dataset.theme = theme;

  const isDark = theme === "dark";

  themeToggler
    .querySelector(".toggle-track")
    .classList.toggle("active", isDark);
  themeTogglerMobile
    .querySelector(".toggle-track")
    .classList.toggle("active", isDark);
}

function toggleTheme() {
  const next = htmlElement.dataset.theme === "light" ? "dark" : "light";
  setTheme(next);
}

themeToggler.addEventListener("click", toggleTheme);

themeTogglerMobile.addEventListener("click", toggleTheme);

// ==== MOBILE MENU ====
const mobileMenuBtn = document.getElementById("mobile-menu-toggler");
const mobileMenu = document.getElementById("mobile-menu");

function setMobileMenuOpen(isOpen) {
  mobileMenu.classList.toggle("open", isOpen);

  mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));

  mobileMenuBtn.setAttribute("aria-hidden", String(!isOpen));
}

mobileMenuBtn.addEventListener("click", () =>
  setMobileMenuOpen(!mobileMenu.classList.contains("open")),
);

// ==== BOARD SWITCHING ====

// ==== DYNAMIC INPUTS ====

// ==== DRAG AND DROP ====
