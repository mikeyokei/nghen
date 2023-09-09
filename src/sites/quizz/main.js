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

////////

const topics = {
    "A": ["Answer 1A", "Apple 2A", "linen 2A", "Pear 3A", "Lion 4A",  "Lionhai 4A",  "Lionpa 4A"],
    "B": ["Answer 1B", "Banana 2B", "Orange 3B", "Tiger 1B",  "Haii 1B", "Niche heheheheh 1B"],
    "C": ["Answer 1C", "Cherry 2C", "Grapes 3C", "Elephant 1C"],
    "D": ["Answer 1D", "Dog 2D", "Cat 3D", "Fish 1D"],
    "F": ["Fnswer 1F", "Fpple 2F", "linen 2F", "Pefr 3F", "Lion 4F", "Lionhfi 4F", "Lionpf 4F"],
    "G": ["Gnswer 1G", "Gpple 2G", "linen 3G", "Pegr 4G", "Lion 3G", "Lionhgi 3G", "Lionpg 3G"],
    "E": ["Enswer 3E", "Epple 3E", "linen 3E", "Peer 3E", "Lion 3E", "Lionhei 3E", "Lionpe 3E"],
    "H": ["Hnswhr 3H", "Hpplh 3H", "linhn 3H", "Phhr 3H", "Lion 3H", "Lionhhi 3H", "Lionph 3H"],
    "J": ["Jnswjr 3J", "Jpplj 3J", "linjn 3J", "Pjjr 3J", "Lion 3J", "Lionjji 3J", "Lionpj 3J"],
};

const states = {
    "1": ["Answer 1A", "Answerser 1B", "Kiitos 1C", "Answer 1D", "Fish 1D", "Haii 1B", "Niche heheheheh 1B"],
    "2": ["Apple 2A", "linen 2A", "Banana 2B", "Cherry 2C", "Dog 2D", "Tiger 1B"],
    "3": ["Pear heheheheh 3A", "Orange heheheheh 3A", "Catto heheheheh 3A", "Niche heheheheh 3A", 
    "numero haihai 3A", "Anteeksi moimoi 3A", "Hei hei 3A", "Moi hei 3A", "Tantan hei 3A",
    "Orange 3B", "Pear 3A", "Orange 3B", "Grapes 3C", "Cat 3D", "Niche heheheheh 3B", "Haii 3B", 
    "Fnswer 3F", "Fpple 3F", "linen 3F", "Pefr 3F", "Lion 3F", "Lionhfi 3F", "Lionpf 3F",
    "Gnswer 3G", "Gpple 3G", "linen 3G", "Pegr 3G", "Lion 3G", "Lionhgi 3G", "Lionpg 3G",
    "Enswer 3E", "Epple 3E", "linen 3E", "Peer 3E", "Lion 3E", "Lionhei 3E",
    "Hnswhr 3H", "Hpplh 3H", "linhn 3H", "Phhr 3H",
    "Jnswjr 3J", "Jpplj 3J", "linjn 3J", "Pjjr 3J", "Lion 3J",
    ],
    "4": ["Lion 4A"],
};


const selectedButtons = new Set();
const answerContainer = document.getElementById("answer");
const generateButton = document.getElementById("generate");
let currentAnswerIndex = 0;


function updateButton(buttonId) {
    const button = document.getElementById(buttonId);

    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        selectedButtons.delete(buttonId);
    } else {
        // Check if it's a letter button (A-D)
        if (buttonId.match(/[A-J]/)) {
            button.classList.add("selected");
            selectedButtons.add(buttonId);
        } else if (buttonId.match(/[1-4]/)) {
            // Check if it's a number button (1-4) and deselect others
            document.querySelectorAll(".button-group .selected").forEach(selectedButton => {
                if (selectedButton.id.match(/[1-4]/)) {
                    selectedButton.classList.remove("selected");
                    selectedButtons.delete(selectedButton.id);
                }
            });
            button.classList.add("selected");
            selectedButtons.add(buttonId);
        }
    }
}

function toggleAnswerState(button) {
    if (button.classList.contains("disabled")) {
        button.classList.remove("disabled");
    } else {
        button.classList.add("disabled");
    }
}

function generateAnswer() {
    const letterButtons = Array.from(selectedButtons).filter(buttonId => buttonId.match(/[A-J]/));
    const numberButton = Array.from(selectedButtons).find(buttonId => buttonId.match(/[1-4]/));

    if (letterButtons.length > 0 && numberButton) {
        const number = numberButton.charAt(0);
        const matchingAnswers = letterButtons.flatMap(letterButton => {
            const selectedLetter = letterButton.charAt(0);

            // Check if the selected number is "3," "2," "1," or "4"
            if (["3", "2", "1", "4"].includes(number)) {
                return [...states["3"], ...states[number]].filter(answer => answer.includes(selectedLetter));
            } else {
                return states[number].filter(answer => answer.includes(selectedLetter));
            }
        });

        if (matchingAnswers.length > 0) {
            // Clear previous buttons
            answerContainer.innerHTML = '';

            // Create buttons for up to 4 matching answers
            for (let i = 0; i < Math.min(15, matchingAnswers.length); i++) {
                const button = document.createElement('button');
                const answerText = matchingAnswers[i].replace(/\s+\d+[A-J]$/, '');

                // Check if the answer is from const states "3"
                const isFromStates3 = states["3"].includes(matchingAnswers[i]);

                // Split the answer text into words
                const words = answerText.split(' ');

                // Create a new array to store the formatted words
                const formattedWords = words.map((word, index) => {
                    // Make the first word (index 0) bold for the answers from const states "3"
                    if (index === 0 && isFromStates3) {
                        // Wrap the word in a <div> with id for styling
                        return `<div id="bold-word">${word}</div>`;
                    }
                    return word;
                });

                // Join the formatted words back into a single string
                const formattedAnswer = formattedWords.join(' ');

                button.innerHTML = formattedAnswer;
                button.id = `answerbutton${i + 1}`;
                button.addEventListener('click', () => {
                    toggleAnswerState(button);
                });
                answerContainer.appendChild(button);
            }

            // Enable the "Generate" button
            generateButton.disabled = false;
        } else {
            answerContainer.textContent = "No matching answers found.";
        }
    } else {
        answerContainer.textContent = "Please select one letter (A-J) and one number (1-4).";
    }
}


generateButton.addEventListener("click", () => {
    generateNextAnswer();
});

const usedAnswers = new Set();


function generateNextAnswer() {
    const disabledAnswerButtons = Array.from(document.querySelectorAll(".disabled"));

    if (disabledAnswerButtons.length > 0) {
        const letterButtons = Array.from(selectedButtons).filter(buttonId => buttonId.match(/[A-J]/));
        const numberButton = Array.from(selectedButtons).find(buttonId => buttonId.match(/[1-4]/));
        const number = numberButton.charAt(0);

        // Check if the selected number is "3", "2", "1", or "4"
        if (["3", "2", "1", "4"].includes(number)) {
            // Combine answers from const states["3"] and const states[number]
            const combinedAnswers = [...states["3"], ...states[number]];

            // Filter answers based on the selected letter
            const matchingAnswers = letterButtons.flatMap(letterButton => {
                const selectedLetter = letterButton.charAt(0);
                return combinedAnswers.filter(answer => answer.includes(selectedLetter));
            });

            // Filter out used answers
            const availableAnswers = matchingAnswers.filter(answer => !usedAnswers.has(answer));

            if (availableAnswers.length > 0) {
                disabledAnswerButtons.forEach(button => {
                    // Generate a random index for the next answer
                    const randomIndex = Math.floor(Math.random() * availableAnswers.length);
                    const nextAnswer = availableAnswers[randomIndex];
                    const answerText = nextAnswer.replace(/\s+\d+[A-J]$/, '');

                    // Check if the answer is from const states["3"]
                    const isFromStates3 = states["3"].includes(nextAnswer);

                    // Split the answer text into words
                    const words = answerText.split(' ');

                    // Create a new array to store the formatted words
                    const formattedWords = words.map((word, index) => {
                        // Make the first word (index 0) bold for the first answer from const states "3"
                        return (index === 0 && isFromStates3) ? `<strong>${word}</strong>` : word;
                    });

                    // Join the formatted words back into a single string
                    const formattedAnswer = formattedWords.join(' ');

                    button.innerHTML = formattedAnswer;
                    toggleAnswerState(button);

                    // Add the used answer to the set
                    usedAnswers.add(nextAnswer);

                    // Remove the answer from availableAnswers
                    availableAnswers.splice(randomIndex, 1);
                });
            } else {
                // Reset used answers if all answers have been used
                usedAnswers.clear();
                generateNextAnswer();
            }
        }
    }
}



document.querySelectorAll(".button-group button").forEach(button => {
    button.addEventListener("click", () => {
        const buttonId = button.id;
        updateButton(buttonId);
    });
});



document.getElementById("submit").addEventListener("click", generateAnswer);

////dhbvs

const draggableButtons = document.querySelectorAll('.button-group button');
const bgImage = document.getElementById('bg'); // Get the img element with the ID "bg"



draggableButtons.forEach((element) => {
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
    const rectImg = bgImage.getBoundingClientRect();
    const rectElement = element.getBoundingClientRect();

    const overlapX = Math.max(0, Math.min(rectImg.right, rectElement.right) - Math.max(rectImg.left, rectElement.left));
    const overlapY = Math.max(0, Math.min(rectImg.bottom, rectElement.bottom) - Math.max(rectImg.top, rectElement.top));

    if (overlapX > 0 && overlapY > 0) {
        element.classList.add('selected');
        // There is an overlap, change the filter style of the img element
        bgImage.style.filter = 'contrast(1) saturate(1.1) brightness(1.1) drop-shadow(5px 5px 15px white)';
        // Change the text color of the draggableButtons
    } else {
        // No overlap, revert the filter style and text color
        bgImage.style.filter = '';
        element.style.color = '';
        element.classList.remove('selected');
    }
};

const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
};

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
});
element.addEventListener('dragstart', event => {
event.preventDefault(); // Prevent the default drag-and-drop behavior
});
});
