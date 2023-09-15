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

///////Click to change color

// Get references to the button and the div
const buttonq = document.getElementById('q');
const buttonw = document.getElementById('w');
const buttone = document.getElementById('e');
const buttonr = document.getElementById('r');
const buttont = document.getElementById('t');
const buttony = document.getElementById('y');
const buttonu = document.getElementById('u');

const buttonglow1 = document.getElementById('selectdef');
const buttonglow2 = document.getElementById('selectcus');

const divB = document.getElementById('def');
const imgbut = document.getElementById('inbox');

const divC = document.getElementById('cus');
const glow = document.getElementById('box');


const divD = document.getElementById('divD');

// Add a click event listener to the button
buttonq.addEventListener('click', function() {
    imgbut.style.filter = "";
    buttonq.style.filter = "opacity(1)";
  // Change the background color of Div B
  buttonglow2.style.color = 'black';
  divB.style.backgroundColor = '#B3B492';
  divB.style.backgroundImage = 'none';
  buttonglow1.style.color = '#B3B492';
  glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, white 55.21%, rgba(217, 217, 217, 0.00) 100%)'; } 
)

  buttonw.addEventListener('click', function() {
    // Change the background color of Div B
    imgbut.style.filter = "";
    buttonw.style.filter = "opacity(1)";
    buttonglow2.style.color = 'black';
    divB.style.backgroundColor = 'black'; 
    divB.style.backgroundImage = 'none';
    buttonglow1.style.color = '#B3B492';
    glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, white 55.21%, rgba(217, 217, 217, 0.00) 100%)'; }  )
    
    buttone.addEventListener('click', function() {
        // Change the background color of Div B
        buttone.style.filter = "opacity(1)";
        buttonglow2.style.color = 'black';
        divB.style.backgroundColor = 'white'; 
        imgbut.style.filter = "invert(0.3)";
        divB.style.backgroundImage = 'none';
        buttonglow1.style.color = '#B3B492';
        glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, white 55.21%, rgba(217, 217, 217, 0.00) 100%)'; }  )
        
        buttonr.addEventListener('click', function() {
            imgbut.style.filter = "";
            // Change the background color of Div B
            buttonr.style.filter = "opacity(1)";
            buttonglow2.style.color = 'black';
            divB.style.backgroundColor = 'transparent';
            divB.style.background = 'linear-gradient(180deg, #D9D9D9 81.77%, #FFF 100%)'; 
            buttonglow1.style.color = '#B3B492';
            buttonglow2.style.color = 'black';
            glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, white 55.21%, rgba(217, 217, 217, 0.00) 100%)'; }  )


            buttont.addEventListener('click', function() {
                imgbut.style.filter = "";
                // Change the background color of Div B
                buttont.style.filter = "opacity(1)";
                buttonglow2.style.color = 'black';
                divB.style.backgroundColor = 'transparent';
                divB.style.background = 'linear-gradient(180deg, #D9D9D9 79.69%, #B3B492 100%)';  buttonglow1.style.color = '#B3B492';
                glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, white 55.21%, rgba(217, 217, 217, 0.00) 100%)'; }  )

                buttony.addEventListener('click', function() {
                    imgbut.style.filter = "";
                    // Change the background color of Div B
                    buttony.style.filter = "opacity(1)";
                    buttonglow2.style.color = 'black';
                    divB.style.backgroundColor = 'transparent';
                    divB.style.background = 'linear-gradient(180deg, #D9D8D7 79.35%, #000 105.37%)'; 
                    buttonglow1.style.color = '#B3B492';
                    glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, white 55.21%, rgba(217, 217, 217, 0.00) 100%)'; }  )

                    buttonu.addEventListener('click', function() {
                        imgbut.style.filter = "";
                        // Change the background color of Div B
                        buttonu.style.filter = "opacity(1)";
                        buttonglow2.style.color = 'black';
                        divB.style.backgroundColor = 'transparent';
                        divB.style.background = 'linear-gradient(180deg, #D9D9D9 81.77%, #FFF 100%)';  
                        buttonglow1.style.color = '#B3B492';
                        glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, white 55.21%, rgba(217, 217, 217, 0.00) 100%)'; } 
                        )



// Add a click event listener to the button



    buttonglow1.addEventListener('mouseover', function() {
        // Change the background color of Div B
    
        glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, #B3B492 55.21%, rgba(217, 217, 217, 0.00) 100%)'; } )
        buttonglow2.addEventListener('mouseover', function() {
            // Change the background color of Div B
        
            glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, #B3B492 55.21%, rgba(217, 217, 217, 0.00) 100%)'; } )

    


            let buttonAClicked = false;


            // Function to change the background color to red
    function glow1() {
        buttonAClicked = true;
        glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, #B3B492 55.21%, rgba(217, 217, 217, 0.00) 100%)'; } 

      function glow2() {
        buttonAClicked = true;
        glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, white 55.21%, rgba(217, 217, 217, 0.00) 100%)'; } 
  
      // Function to change the background color back to default
      function changeToDefault() {
        if (!buttonAClicked) {
        glow.style.background = ''; }
        }

         // Function to change the background color back to default
      function changeToDefault1() {
        if (!buttonAClicked) {
        glow.style.background = ''; }
        }


      // Add click event listener to buttonA to change the color
      buttonglow1.addEventListener('click', glow2);
      buttonglow1.addEventListener('mouseover', glow1);
      buttonglow1.addEventListener('mouseout', changeToDefault);



      buttonglow2.addEventListener ('click', function() {
        // Change the background color of Div B
    
        buttonglow1.style.color = 'black';
        glow.style.background = 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, white 55.21%, rgba(217, 217, 217, 0.00) 100%)'; } )

        buttonglow1.addEventListener ('click', function() {
            // Change the background color of Div B
            buttonq.style.filter = "opacity(1)";
            buttonw.style.filter = "opacity(1)";
            buttone.style.filter = "opacity(1)";
            buttonr.style.filter = "opacity(1)";
            buttont.style.filter = "opacity(1)";
            buttony.style.filter = "opacity(1)";
            buttonu.style.filter = "opacity(1)";
           
            cus.style.display = "none";
            def.style.display = "flex";
            buttonglow1.style.color = '#B3B492';
            buttonglow2.style.color = 'black'; } )

            buttonglow2.addEventListener ('click', function() {
                // Change the background color of Div B
            cus.style.display = "flex";
            def.style.display = "none";
            buttonq.style.filter = "opacity(0.5)";
            buttonw.style.filter = "opacity(0.5)";
            buttone.style.filter = "opacity(0.5)";
            buttonr.style.filter = "opacity(0.5)";
            buttont.style.filter = "opacity(0.5)";
            buttony.style.filter = "opacity(0.5)";
            buttonu.style.filter = "opacity(0.5)";
           
            
                buttonglow2.style.color = '#B3B492';
             } )

            buttonglow1.addEventListener ('mouseover', function() {
                // Change the background color of Div B
            
                buttonglow1.style.color = 'white'; } )

            buttonglow1.addEventListener ('mouseout', function() {
                // Change the background color of Div B
            
                buttonglow1.style.color = ''; } )

                buttonglow2.addEventListener ('mouseover', function() {
                    // Change the background color of Div B
                
                    buttonglow2.style.color = 'white'; } )

                    buttonglow2.addEventListener ('mouseout', function() {
                        // Change the background color of Div B
                    
                        buttonglow2.style.color = ''; } )


      // Add click event listener to buttonA to change the color
      buttonglow2.addEventListener('click', glow2);
      buttonglow2.addEventListener('mouseout', changeToDefault);


      /////
      /// Get references to the canvas, file input, and the image
      // Get references to the "cus" div, the canvas, and the file input
    const cus = document.getElementById('cus');
    const canvas1 = document.getElementById('canvasimg');
  
    const fileInput = document.getElementById('picker');
    const fileNameElement = document.getElementById('fileName');
    const canvas2 = document.getElementById('canvasimg2');
    const canvas3 = document.getElementById('canvasimg3');
    let src = ''; // Initialize src here
let polyEffectApplied = false; 

    let img2;

    // Function to handle file selection and draw the image on the canvas
    function handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = new Image();
          img.src = e.target.result;
          img.onload = function () {
            
            // Resize the canvas to match the image dimensions
            canvas1.width = img.width;
            canvas1.height = img.height;
            canvas2.width = img.width;
            canvas2.height = img.height;
            canvas3.width = img.width;
            canvas3.height = img.height;
            const ctx1 = canvas1.getContext('2d');
            ctx1.willReadFrequently = true; 
            // Draw the image on the canvas
            ctx1.drawImage(img, 0, 0, canvas1.width, canvas1.height);
            const ctx2 = canvas2.getContext('2d');
            ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
            ctx2.willReadFrequently = true; 
            const ctx3 = canvas3.getContext('2d');
            ctx3.drawImage(img, 0, 0, canvas3.width, canvas3.height);
            ctx3.willReadFrequently = true; 
            
            // Display the file name
            fileNameElement.textContent = file.name;
            //////
            img2 = img;
            src = e.target.result;
            polyEffectApplied = false;
          };
        };
        reader.readAsDataURL(file);
      } else {
        // Clear the canvas if no file is selected
        canvas1.width = 0;
        canvas1.height = 0;
        canvas2.width = 0;
        canvas2.height = 0;
        canvas3.width = 0;
        canvas3.height = 0;
        fileNameElement.textContent = '';
        polyEffectApplied = false;
      }
    }

    // Add event listener to the file input to handle file selection
    fileInput.addEventListener('change', handleImageUpload);


// Assuming you have already set canvas2 dimensions and img2 is loaded

function applyAsciiEffectToCanvas2(image) {
    const ctx = canvas2.getContext('2d');
    ctx.canvas.width = img2.width;
    ctx.canvas.height = img2.height;
    // Calculate the font size based on canvas height and number of rows
    const numberOfRows = 80; // Adjust the number of rows as needed
    const fontHeight = 24;
    
    // Set font for drawing the ASCII art
    const fontFamily = 'monospace'; // You can change the font family as needed
    ctx.font = `${fontHeight}px ${fontFamily}`;
    ctx.fillStyle = 'white';
  

    // Draw the loaded image on canvas2
    ctx.drawImage(image, 0, 0, img2.width, img2.height);
  
    // Get the image data
    const imgData = ctx.getImageData(0, 0, img2.width, img2.height);
    const grayscalePixels = [];
  
    // Convert image data to grayscale
    for (let i = 0; i < imgData.data.length; i += 4) {
      const r = imgData.data[i];
      const g = imgData.data[i + 1];
      const b = imgData.data[i + 2];
      // Calculate grayscale value (average of R, G, B)
      const grayscale = (r + g + b) / 3;
      grayscalePixels.push(grayscale);
    }
  
    // Define ASCII characters to represent different intensity levels
    const asciiCharacters = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@'];
  
    // Convert grayscale values to ASCII characters
    let asciiArt = '';
    for (let i = 0; i < grayscalePixels.length; i++) {
      // Map grayscale value to an index in the ASCII characters array
      const index = Math.floor(
        (grayscalePixels[i] / 255) * (asciiCharacters.length - 1)
      );
      // Append the corresponding ASCII character to the ASCII art
      asciiArt += asciiCharacters[index];
      // Add line breaks as needed based on canvas width
      if ((i + 1) % canvas2.width === 0) {
        asciiArt += '\n';
      }
    }
  
    // Draw the ASCII art on canvas2
    const lines = asciiArt.split('\n');
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], 0, (i + 1) * fontHeight);
    }
  }
  
  
  // Add event listener to the file input to handle file selection
  fileInput.addEventListener('change', handleImageUpload);
  
  // Event listener for Button A
  const applyAsciiButton = document.getElementById('llg');
  
  let isAsciiApplied = false;

applyAsciiButton.addEventListener('click', function () {
  if (isAsciiApplied) {
    // If the ASCII effect is already applied, remove it
    removeAsciiEffect();
  } else {
    // If the ASCII effect is not applied, apply it
    applyAsciiEffectToCanvas2(img2);
  }
  // Toggle the state of the ASCII effect
  isAsciiApplied = !isAsciiApplied;
});

// Function to remove the ASCII effect
function removeAsciiEffect() {
    const ctx2 = canvas2.getContext('2d');
    // Clear the canvas
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.drawImage(img2, 0, 0, canvas2.width, canvas2.height);

  }

  //////

  fileInput.addEventListener('click', function() {
    imgbut.style.filter = "";
    // Change the background color of Div B

    buttonglow1.style.color = 'black';

    buttonglow2.style.color = '#B3B492';
  })



/////navigate 

// Use variables to track button selections
let isdivBSelected = false;
let isdivDSelected = false;
let isdivASelected = false;

// Add click event listener to button A
buttonglow1.addEventListener('click', () => {
isdivBSelected = true;
navigateToPage1();

});

// Add click event listener to button B
buttonglow2.addEventListener('click', () => {
isdivASelected = true;
navigateToPage2();
});


// Function to navigate to page B when both buttons are selected
function navigateToPage1() {
if (isdivBSelected && isdivDSelected) {
  buttonglow1.style.color = 'B3B492';
  // Redirect to page B
  window.location.href = 'quizz.html';
}
}

// Function to navigate to page B when both buttons are selected
function navigateToPage2() {
  if (isdivASelected && isdivDSelected) {
    buttonglow2.style.color = 'B3B492';
    swiper.slideNext(); 
  }
}


divD.addEventListener('click', () => {
isdivDSelected = true; // Set isdivDSelected to true when divD is clicked
// Now that isdivDSelected is true, check both conditions for navigation
navigateToPage1();
navigateToPage2();
});

/////

const buttons = document.querySelectorAll('.topic');
const imgbox = document.getElementById('canvasimg2');
const imgbox1 = document.getElementById('canvasimg3');
const img2bg = document.getElementById('img2bg');
const activeEffects = {}; // Store active effects by button ID

// Function to apply the click effect for a button
function applyClickEffect(buttonId) {
    const button = document.getElementById(buttonId);
    if (!activeEffects[buttonId]) {
        // If the button is not already active, apply its effect
        switch (buttonId) {
            case 'll':
                imgbox.style.filter += "invert(0) blur(1px) brightness(5) ";
                break;
            case 'mh':
                imgbox.style.filter += "invert(1) ";
                break;
            case 'wl':
                img2bg.style.background = "linear-gradient(90deg, rgb(0 0 0) 47.44%, rgba(217, 217, 217, 0) 60.94%)";
                break;
            case 'co':
                motionblur();
                break;
            case 'exp':
                imgbox1.style.display = "block";
                imgbox1.classList.toggle('split');
                
                imgbox1.style.filter = "blur(0px) opacity(1)"
               
                imgbox1.style.transform = "scaleY(-100)";
                imgbox1.classList.remove('motion');
                break;
            // Add more cases for other buttons
        }
        activeEffects[buttonId] = true;
        button.classList.add('active');
    } else {
        // If the button is already active, remove its effect
        removeEffect(buttonId);
        activeEffects[buttonId] = false;
        button.classList.remove('active');
    }
}

// Function to hide imgbox1
function hideImgBox1() {
    imgbox1.style.display = "none";
    imgbox1.classList.remove('split');
    imgbox1.classList.remove('motion');
}

function undofilterimgbox() {
    imgbox.style.filter = "";
}

function undobgimg2() {
    img2bg.style.background = "";
}

// Function to apply motion blur effect
function motionblur() {
 
    imgbox1.classList.toggle('motion');
    imgbox1.style.display = "block";
    imgbox1.style.filter = "blur(1px) opacity(0.5)";
    imgbox1.style.transform = "scaleX(1.1)";
    imgbox1.style.left = "0%";
}

// Function to remove the effect for a button
function removeEffect(buttonId) {
    switch (buttonId) {
        case 'll':
        case 'llg':
        case 'mh':
        case 'wl':  undobgimg2();
        case 'co':
        case 'exp':
            // Reset or remove the specific effect
         
            hideImgBox1();
          
            undofilterimgbox();
         
            break;
        // Add more cases for other buttons
        
    }
    const button = document.getElementById(buttonId);
    button.classList.remove('active'); 
}

// Function to remove motion blur effect
function removemotion() {
    imgbox1.classList.toggle('split');

    imgbox1.style.filter = "";
    imgbox.style.filter = "";
}

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        applyClickEffect(buttonId);
    });
});


// Event listener for Button JK to toggle the Poly effect
const polyapp = document.getElementById('ic');

polyapp.addEventListener('click', function () {
  if (polyEffectApplied) {
    // Remove the Poly effect (do not clear canvas2)
    polyEffectApplied = false;
  } else {
    // Apply the Poly effect
    poly(src);
    polyEffectApplied = true;
  }
});

function poly() {
  Polygonize({
    src: src,
    cellSize: 89, // Set the cellSize to 89
    progress: function (progress) {
      // console.log(progress + '%');
    },
    onSuccess: function (canvas) {
      const canvasContainer = document.getElementById('canvasimg3'); // Use canvasimg2
      canvasContainer.innerHTML = ''; // Clear existing content
      canvasContainer.appendChild(canvas); // Append the Poly art canvas to canvasimg2
    }
  });
}

  
  
  
  
  
  