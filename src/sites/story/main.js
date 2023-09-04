var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    updateOnWindowResize: true,
    parallax: true,
    speed: 600,
    initialSlide: 0,
    slideToClickedSlide: true,
 
    speed: 0, 
    clickable: true,
});

// Add click event listener to <p> elements
var paragraphs = document.querySelectorAll('.swiper-slide p');
paragraphs.forEach(function(paragraph) {
    paragraph.addEventListener('click', function() {
        swiper.slideNext(); // Move to the next slide
    });
});