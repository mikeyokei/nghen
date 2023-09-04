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

///
const parentsAndVarname = document.querySelectorAll('.parent, .varname'); // Select all elements with class 'parent' or 'varname'
let z = 1;

parentsAndVarname.forEach((element) => {
  element.addEventListener('mousedown', (event) => {
    z++;
    element.style.zIndex = z;

    let startX = event.clientX;
    let startY = event.clientY;

    let startLeft = parseFloat(getComputedStyle(element).left);
    let startTop = parseFloat(getComputedStyle(element).top);

    const onMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      element.style.left = startLeft + deltaX + 'px';
      element.style.top = startTop + deltaY + 'px';

      // Check for overlap with other elements
      parentsAndVarname.forEach((otherElement) => {
        if (otherElement !== element) {
          const rect1 = element.getBoundingClientRect();
          const rect2 = otherElement.getBoundingClientRect();

          const overlapX = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
          const overlapY = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));

          if (overlapX > 0 && overlapY > 0) {
            // There is an overlap, change the background color
            element.style.filter = 'contrast(1) saturate(1.1) brightness(1.1) drop-shadow(5px 5px 15px white)'; // Adjust the drop-shadow parameters and color as needed
            otherElement.style.filter = 'contrast(1) saturate(1.1) brightness(1.1) drop-shadow(5px 5px 15px white)';
            element.style.boxShadow = '0 0 10px white'; // Adjust shadow properties as needed
            otherElement.style.boxShadow = '0 0 10px white';
          } else {
            // No overlap, revert to original background color
            element.style.filter = ''; // Remove inline style to use CSS rules
            otherElement.style.filter = ''; // Remove inline style to use CSS rules
            element.style.boxShadow = ''; // Remove inline style to use CSS rules
            otherElement.style.boxShadow = '';
          }
        }
      });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
});
