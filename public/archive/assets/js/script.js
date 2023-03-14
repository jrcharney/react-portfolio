/* File: assets/js/script.js */

// I don't know why I couldn't set the visibility of the top link in CSS, so I had to forcce it by setting the HTML attribute.
const nav = document.querySelector("nav");
const topLink = document.querySelector(".navmenu > ul > li:last-child");
window.addEventListener('scroll', () => {
    if(window.scrollY >= nav.offsetTop){
        nav.classList.add("sticky");
        topLink.setAttribute("style",'visibility:visible;')
    }else{
        nav.classList.remove("sticky");
        topLink.setAttribute("style",'visibility:hidden;')
    }
});

/* Added a scroll function! Super simple! */
document.querySelectorAll(".navmenu > ul > li > a").forEach((a) => a.addEventListener("click",(ev) => {
    ev.preventDefault();
    document.querySelector(ev.target.getAttribute("href")).scrollIntoView({behavior: "smooth"});
}));
