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
const htmlElement = document.documentElement;



const toggleTracker = document.getElementsByClassName("toggle-track")[0];

themeToggler.addEventListener("click", () => {
    // check current theme
    const currentTheme = htmlElement.getAttribute("data-theme");

    const newTheme = currentTheme === "light" ? "dark" : "light";

    // update theme-attribute
    htmlElement.setAttribute('data-theme', newTheme);


    // toggle a class on the tracker for sliding animation
    const toggleTrack = themeToggler.querySelector('.toggle-track');
    toggleTrack.classList.toggle('active');
});


// ==== MOBILE MENU ====

// ==== BOARD SWITCHING ====

// ==== DYNAMIC INPUTS ====

// ==== DRAG AND DROP ====
