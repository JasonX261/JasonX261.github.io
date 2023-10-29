const sticky = document.querySelector(".nav-container");
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".nav-items");

menuBtn.addEventListener("click", ()=> {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");

});


window.addEventListener("scroll", ()=> {
    sticky.classList.toggle("open", window.scrollY > 0);
});