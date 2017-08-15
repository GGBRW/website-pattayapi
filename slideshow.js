var slides = document.querySelectorAll(".slideshow .slide");
var slide = 0;

slides[0].style.display = "block";
setTimeout(function() {
    slides[0].style.opacity = 1;
    slides[0].style.transform = "translateY(0px)";
});

setInterval(function() {
    slides[(slide + 1) % slides.length].style.display = "block";
    setTimeout(function() {
        slides[slide].style.zIndex = 1;
        slides[(slide + 1) % slides.length].style.zIndex = 2;
        slides[(slide + 1) % slides.length].style.opacity = 1;
        slides[(slide + 1) % slides.length].style.transform = "translateY(0px)";
    }, 100);

    setTimeout(function() {
        slides[slide].style.display = "none";
        slides[slide].style.transform = "translateY(-100px)";
        slides[slide].style.opacity = 0;
        slide = ++slide % slides.length;
    }, 500);
}, 3000);