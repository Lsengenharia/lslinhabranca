const navBar = document.querySelector("#header");
document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    navBar.classList.toggle("rolar", scrollTop > 0);
});
const element = document.querySelector("#text");
const text = "Praticidade e Tecnologia para o seu dia a dia";
const interval = 200;
function showTxt(element, text, interval) {
    const char = text.split("").reverse();
    const typer = setInterval(() => {
        if (!char.length) {
            clearInterval(typer);
            return;
        }
        element.innerHTML += char.pop();
    }, interval);
}
showTxt(element, text, interval);
const sr = ScrollReveal({
    reset: !1,
    duration: 900,
    distance: "50px",
    delay: 200,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: 0,
});
sr.reveal(".hero-anim", { delay: 500, origin: "left" });
sr.reveal(".txt1", { delay: 500, origin: "left" });
sr.reveal(".img1", { origin: "right" });
sr.reveal(".img2", { origin: "left" });
sr.reveal(".txt2", { origin: "right" });
sr.reveal(".txt3", { origin: "left" });
sr.reveal(".img3", { origin: "right" });
const lightbox = GLightbox({ selector: ".glightbox" });