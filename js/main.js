let header = document.querySelector("header");
let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (this.scrollY > 500) {
        header.classList.add("fixedHeader");
        toTop.style.right = "31px";
        document.querySelector("header .container .list").style.top = "86px";
    } else {
        header.classList.remove("fixedHeader");
        toTop.style.right = "-50px";
        document.querySelector("header .container .list").style.top = "106px";
    }
});

toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});




let bars = document.querySelector(".hamburger svg")
let X_color = document.querySelector(".line")
let cenC = document.querySelector(".hamburger svg .C")
let line_top = document.querySelector(".line-top-bottom")
let Svg = document.querySelector(".hamburger input + svg")
let nav = document.querySelector("header .container .list");


bars.addEventListener("click", () => {
    nav.classList.toggle("Show");
    X_color.classList.toggle("X-color")
    Svg.classList.toggle("rotSVG")
    line_top.classList.toggle("line_T")
    cenC.classList.toggle("cen")
});




let placeInput = document.querySelector(".container .top .sub form input");

placeInput.addEventListener("focus", () => {
    placeInput.placeholder = "";
})

placeInput.addEventListener("blur", () => {
    placeInput.placeholder = "Your email address";
})


let CR_year = document.querySelector("footer .container .bottom p .year");

let year = new Date().getFullYear();


CR_year.innerHTML = year;