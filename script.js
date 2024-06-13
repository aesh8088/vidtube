let sidebar = document.querySelector(".sidebar");
let menu = document.querySelector(".menu");
let container = document.querySelector(".container")

menu.addEventListener('click', () => {
    sidebar.classList.toggle("menu-side");
    container.classList.toggle("large-container");
})


