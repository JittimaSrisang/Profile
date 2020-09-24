const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');

});


const  htmlBar = document.querySelector('.bar-html')
const  cssBar = document.querySelector('.bar-css')
const  jsBar = document.querySelector('.bar-javascript')
const  pythonBar = document.querySelector('.bar-python')
const  vueBar = document.querySelector('.bar-vue')
const  sqlBar = document.querySelector('.bar-sql')
const  djangoBar = document.querySelector('.bar-django')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease:Power4.easeOut})
    .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease:Power4.easeOut})
    .fromTo(jsBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease:Power4.easeOut})
    .fromTo(pythonBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease:Power4.easeOut})
    .fromTo(vueBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease:Power4.easeOut})
    .fromTo(sqlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease:Power4.easeOut})
    .fromTo(djangoBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease:Power4.easeOut})


const  filterButtons =document.querySelector("#filter-btns").children
const  items = document.querySelector(".portfolio-gallery").children

for (let i=0; i<filterButtons.length; i++){
    filterButtons[i].addEventListener("click",function () {
        for (let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const  target = this.getAttribute("data-target")

        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            if (target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block"
            }
            if (target=="all"){
                items[k].style.display="block"
            }
        }
    })
}

// const closeLightbox = document.querySelector(".close-lightbox")
// const lightbox =document.querySelector(".lightbox")
// const lightboxImage = lightbox.querySelector("img")
//
//     lightbox.addEventListener("click",function () {
//         if(event.target!=lightboxImage){
//             lightbox.classList.remove("show")
//             lightbox.classList.add("hide")
//         }
//     })
//
//     closeLightbox.addEventListener("click",function () {
//         lightbox.classList.remove("show")
//         lightbox.classList.add("hide")
// })
//
//
// const gallery = document.querySelector(".portfolio-gallery")
// const galleryItem = gallery.querySelectorAll(".item")
//
// galleryItem.forEach(function (element) {
//     element.querySelector(".fa-plus").addEventListener("click",function () {
//         lightbox.classList.remove("hide")
//         lightbox.classList.add("show")
//         lightboxImage.src=element.querySelector("img").getAttribute("src")
//     })
// })



// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left' , {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300

});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600

});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600

});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600

});