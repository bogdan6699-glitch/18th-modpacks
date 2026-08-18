function toggleMenu() {
    const nav = document.querySelector("nav");

    nav.classList.toggle("active");
}


// Închide meniul după ce apeși pe un link
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector("nav").classList.remove("active");

    });

});
