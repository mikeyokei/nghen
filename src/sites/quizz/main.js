// Get references to the button and dropdown options
var button = document.getElementById('dropdown-button');
var options = document.getElementById('dropdown-options');
var dropdown = document.getElementById('my-select');

// Function to show the dropdown options
function showDropdownOptions() {
    options.style.display = 'grid';
}

// Function to hide the dropdown options
function hideDropdownOptions() {
    options.style.display = 'none';
}

// Toggle the visibility of the dropdown options when the button is clicked
dropdown.addEventListener('click', function () {
    if (options.style.display === 'none' || options.style.display === '') {
        showDropdownOptions();
    } else {
        hideDropdownOptions();
    }
});

// Handle option selection and update the button text
options.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName == 'LI') {
        // Create an <img> element for the icon
        var iconImg = document.createElement('img');
        iconImg.className = 'icon';
        iconImg.src = './src/Img/icon.svg';
        iconImg.alt = 'drop';

        // Update the button text and append the icon
        button.textContent = e.target.textContent;
        button.appendChild(iconImg);

        hideDropdownOptions();
    }
});

// Hide dropdown options when clicking outside the dropdown
document.addEventListener('click', function (e) {
    if (e.target != dropdown && e.target != button) {
        hideDropdownOptions();
    }
});


var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    updateOnWindowResize: true,
    initialSlide: 0,
    clickable: true, // Disable slideToClickedSlide
    noSwiping: true, // Disable swiping
    noSwipingClass: 'swiper-slide',
    speed: 0, // Set the speed to 0 for an instant transition

});



// Add click event listener to elements with class 'cont' (Next button)
var contButtons = document.querySelectorAll('.cont');
contButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the button from submitting forms (if any)
        swiper.slideNext(); // Move to the next slide
    });
});

// Add click event listener to elements with class 'back' (Back button)
var backButtons = document.querySelectorAll('.back');
backButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the button from submitting forms (if any)
        swiper.slidePrev(); // Move to the previous slide
    });
});


// Get references to the textarea and the varname element
var textarea = document.getElementById('nameInput');
var varnameElement = document.querySelector('.varname p');

// Add an event listener to the textarea to update the varname element
textarea.addEventListener('input', function () {
    varnameElement.textContent = textarea.value;
});

