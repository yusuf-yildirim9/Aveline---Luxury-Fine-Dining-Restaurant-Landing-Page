const navMenu = document.getElementById("navMenu");
const hamburgerIcon = document.getElementById("hamburgerMenu");
const navLinks = document.querySelectorAll(".nav-list .list-item .link, .list-item .nav-btn");
hamburgerIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if(navMenu.classList.contains("active")) {
        hamburgerIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }else {
        hamburgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
    })
})