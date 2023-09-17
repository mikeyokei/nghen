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
const cus = document.getElementById('cus');
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
            buttonglow1.classList.add('defact');
            cus.style.display = "none";
            def.style.display = "flex";
            buttonglow1.style.color = '#B3B492';
            buttonglow2.style.color = 'black'; } )

            buttonglow1.click();

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
   
    const canvas1 = document.getElementById('canvasimg');
  
    const fileInput = document.getElementById('picker');
    const fileNameElement = document.getElementById('fileName');
    const canvas2 = document.getElementById('canvasimg2');
    const canvas3 = document.getElementById('canvasimg3');
    const canvas4 = document.getElementById('canvasimg4');
    const canvas5 = document.getElementById('canvasimg5');
    const canvas6 = document.getElementById('canvasimg6');
    let img2;
    let img4 = new Image(); 
  
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
            canvas4.width = img.width;
            canvas4.height = img.height;
            canvas5.width = img.width;
            canvas5.height = img.height;
            canvas6.width = img.width;
            canvas6.height = img.height;
            const ctx1 = canvas1.getContext('2d');
            // Draw the image on the canvas
            ctx1.drawImage(img, 0, 0, canvas1.width, canvas1.height);
            const ctx2 = canvas2.getContext('2d');
            ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
            const ctx3 = canvas3.getContext('2d');
            ctx3.drawImage(img, 0, 0, canvas3.width, canvas3.height);
            // Display the file name
            const ctx4 = canvas4.getContext('2d');
            ctx4.drawImage(img, 0, 0, canvas4.width, canvas4.height);
            const ctx5 = canvas5.getContext('2d');
            ctx5.drawImage(img, 0, 0, canvas5.width, canvas5.height);
            const ctx6 = canvas5.getContext('2d');
            ctx6.drawImage(img, 0, 0, canvas6.width, canvas6.height);
            fileNameElement.textContent = file.name;
            //////
            const dataUrl = canvas4.toDataURL;
            img4.src = dataUrl;
            img2 = img;
            img4 = img;
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
        canvas4.width = 0;
        canvas4.height = 0;
        canvas5.width = 0;
        canvas5.height = 0;
        canvas6.width = 0;
        canvas6.height = 0;
        fileNameElement.textContent = '';

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
    const numberOfRows = 30; // Adjust the number of rows as needed
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

;


 // Function to clear the ASCII art from canvas2
function undoascii() {
    const ctx = canvas2.getContext('2d');
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
  }


  //////

// Function to apply a basic low-poly effect to an image
const ctx4 = canvas4.getContext('2d');


function poly() {

  
    const cellSize = 30;
    
    Polygonize({
      src: img4.src,
      cellSize: cellSize,
      onSuccess: function (canvas) {
        // Set the canvas dimensions to match the generated canvas
        canvas4.width = canvas.width;
        canvas4.height = canvas.height;
  
        // Clear the canvas4
        ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
  
        // Draw the generated canvas onto canvas4
        ctx4.drawImage(canvas, 0, 0);
      }
    });
  }
  
 

/////
  

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
    if (!isdivDSelected) {
        // Perform the action for button A here
        buttonglow2.style.color = 'B3B492';
        isdivBSelected = true;
      } else {
        navigateToPage1();
        buttonglow2.style.color = 'B3B492';
        isdivBSelected = true;
        isdivDSelected = false; // Reset the flag for button D
      }
    });

// Add click event listener to button B
buttonglow2.addEventListener('click', () => {
    if (!isdivDSelected) {
        // Perform the action for button A here
        buttonglow1.style.color = 'B3B492';
        isdivASelected = true;
      } else {
        navigateToPage2();
        buttonglow1.style.color = 'B3B492';
        isdivASelected = true;
        isdivDSelected = false; // Reset the flag for button D
      }
    });


    divD.addEventListener('click', () => {
        isdivDSelected = true; // Set isdivDSelected to true when divD is clicked
        // Now that isdivDSelected is true, check both conditions for navigation
        navigateToPage1();
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




//////
const topics = document.querySelectorAll('.topic');

topics.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active'); // Toggle the 'active' class on button click
  });
});

const mh = document.getElementById('mh');
const wl = document.getElementById('wl');
const ll = document.getElementById('ll');
const co = document.getElementById('co');
const topic = document.getElementsByClassName('topic');

const none1 = document.getElementsByClassName('none');
const imgbox = document.getElementById('canvasimg2');
const imgbox1 = document.getElementById('canvasimg3');
const polybox = document.getElementById('canvasimg4');
const rgb1 = document.getElementById('canvasimg5');
const rgb2 = document.getElementById('canvasimg6');
const img2bg = document.getElementById('img2bg');
// Add a click event listener to the button
// Use variables to track the state of each effect

let mhActive = false;
let wlActive = false;
let llActive = false;
let coActive = false;
let icActive = false;
let siActive = false;

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

// Function to hide imgbox1
function removemotion() {
imgbox1.classList.toggle('split');
img2bg.style.background = "";
imgbox1.style.filter = "";
imgbox.style.filter = "";
}

// Function to hide imgbox1
function removeexp() {
    imgbox1.style.display = "none";
    imgbox1.classList.remove('split');
    img2bg.style.background = "";
    imgbox1.style.filter = "";
    imgbox.style.filter = "";
    imgbox1.style.transform = "";
    }
    


////
mh.addEventListener('click', function() {
    if (!mhActive) {
      imgbox.style.filter = "invert(1)";
    } else {
      undofilterimgbox();

    }
    mhActive = !mhActive;
    hideImgBox1();
  });

wl.addEventListener('click', function() {
    if (!wlActive) {
      img2bg.style.background = "linear-gradient(90deg, #595959b0 47.44%, #ffffff00 60.94%)";
    } else {
      undobgimg2();
    }
    wlActive = !wlActive;
    hideImgBox1();
  });

ll.addEventListener('click', function() {
    if (!llActive) {
      imgbox.style.filter = "invert(0) grayscale(0.1)  contrast(100%) blur(1px) brightness(2)";
    } else {
      undofilterimgbox();
    }
    llActive = !llActive;
    hideImgBox1();
  });

  const exp = document.getElementById('exp');

  let expActive = false; // Variable to track the state of the 'exp' effect
  
  exp.addEventListener('click', () => {
    if (!expActive) {
      // Apply the 'exp' effect when it's not active
      imgbox1.style.display = "block";
      imgbox1.classList.toggle('split');
      img2bg.style.background = "";
      imgbox1.style.filter = "blur(0px) opacity(1)";
      imgbox.style.filter = '';
      imgbox1.style.transform = "scaleY(-100)";
      imgbox1.classList.remove('motion');
    } else {
        
      // Remove the 'exp' effect when it's active
      imgbox1.style.display = "none";
      imgbox1.classList.remove('split');
      img2bg.style.background = "";
      imgbox1.style.filter = "";
      imgbox.style.filter = "";
      imgbox1.style.transform = "";
    }
    
    expActive = !expActive; // Toggle the state of the 'exp' effect
  });

/////
function motionblur() {
    imgbox1.classList.remove('split');
    imgbox1.classList.toggle('motion');
    undobgimg2();
    undofilterimgbox();
    none1.style.display = "block";
    imgbox1.style.display = "block";
    imgbox1.style.filter = "blur(1px) opacity(0.5)";
    imgbox1.style.transform = "scaleX(1.1)";
    imgbox1.style.left = "0%";
    }

    function removemotionblur() {
        imgbox1.classList.toggle('split');
        imgbox1.classList.remove('motion');
        undobgimg2();
        undofilterimgbox();
        }
    


  co.addEventListener('click', function() {
    if (!coActive) {
        imgbox1.style.filter = "blur(1px) opacity(0.5)";
        imgbox.style.filter = '';
        imgbox1.style.transform = "scaleX(1.1) scaleY(1)";
        
      motionblur();
    } else {
        
      removemotionblur() ;
      // Reset any other styles you want to remove here
    }
    coActive = !coActive;
    hideImgBox1();
  });


   // Event listener for the "ic" button
   const ic = document.getElementById('ic');
  
   ic.addEventListener('click', poly); // Apply the poly function on button click
   
   ic.addEventListener('click', function() {
    if (!icActive) {
        polybox.style.display = "block";
    } else {
        polybox.style.display = "none";
    }
    icActive = !icActive;
  });

  const ss = document.getElementById('ss');

// Add a click event listener to the button
ss.addEventListener('click', () => {
    // Toggle the 'posterize-filter' class on canvas3
    imgbox.classList.toggle('posterize-filter');
});


// Get references to the button and canvasimg5
const si = document.getElementById('si');

si.addEventListener('click', function() {
    if (!siActive) {
        rgb1.style.display = "block";
        rgb2.style.display = "block";
    
    } else {
        rgb1.style.display = "none";
        rgb2.style.display = "none";
       
    }
    siActive = !siActive;
  });


  const selectTone = document.getElementById('tone');
  const canvases = document.querySelectorAll('canvas');
  
  selectTone.addEventListener('change', () => {
    const selectedTone = selectTone.value;
    adjustFilterAndBrightness(selectedTone);
  });
  
  function adjustFilterAndBrightness(tone) {
    let brightness = 100; // Default brightness in percentage
    let filter = ''; // Default CSS filter value

    if (tone === 'option1') {
        // Adjust brightness for option1 (brighter)
        filter = 'brightness(2) saturate(2) blur(1px) hue-rotate(120deg)'; // Add complex filter for option1
      } else if (tone === 'option2') {
        filter = 'brightness(0.5) saturate(1) blur(0px) hue-rotate(0deg)';  // Adjust brightness for option2 (darker)
        // No filter needed for option2
      } else if (tone === 'option3') {
        // Reset values for option3
        filter = 'brightness(1) saturate(1) blur(1px) hue-rotate(0deg)';
        // No filter needed for option3
      }
    
  
      canvases.forEach((canvas) => {
    canvas.style.filter = filter; // Apply the CSS filter
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = Math.min(255, imgData.data[i] * (brightness / 100));
      imgData.data[i + 1] = Math.min(255, imgData.data[i + 1] * (brightness / 100));
      imgData.data[i + 2] = Math.min(255, imgData.data[i + 2] * (brightness / 100));
    }

    ctx.putImageData(imgData, 0, 0);
  });
}
  
const selectMethod = document.getElementById('method');
const canvases1 = document.querySelectorAll('canvas:not(#canvasimg3)'); // Exclude canvas3
const glitch = document.getElementById('glitch'); // Get the "co" button element

  selectMethod.addEventListener('change', () => {
    const selectedMethod = selectMethod.value;
  
    // Check if option 4 is selected
    if (selectedMethod === 'option4') {
      glitch.style.display = 'flex';
    // You can programmatically click the button
    } else {
        glitch.style.display = 'none';
    }
  
    // Check if option 5 is selected
    if (selectedMethod === 'option5') {
      // Add the "noise" class to all canvases
      canvases1.forEach((canvas) => {
        canvas.classList.add('grain');
      });
    } else {
      // Remove the "noise" class from all canvases
      canvases1.forEach((canvas) => {
        canvas.classList.remove('grain');
      });
    }
  
    // Check if option 6 is selected
    if (selectedMethod === 'option6') {
      // Add both "glitch" and "noise" classes to all canvases
      glitch.style.display = 'flex';
      canvases1.forEach((canvas) => {
        canvas.classList.add('grain');
      });
    }
  });


  // Get references to the canvases


// Function to draw a 2px dot on the canvas at a random position
function drawRandomDot(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white'; // You can set the color of the dots
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, Math.PI * 40); // A 2px dot
  ctx.fill();
}

// Function to add random dots to all canvases, overlapping each other
function addRandomDotsToCanvases() {
  canvases.forEach((canvas) => {
    // You can specify the number of dots to add
    const numDots = 100;
    for (let i = 0; i < numDots; i++) {
      drawRandomDot(canvas);
    }
  });
}

// Get the "confirm" button
const confirmButton = document.getElementById('dot');

// Add a click event listener to the "confirm" button
confirmButton.addEventListener('click', () => {
  // Call the function to add random dots to all canvases
  addRandomDotsToCanvases();
});



//////
   // Set the default option's class to "selected" when the page loads
   document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("tone");
    const defaultOption = dropdown.querySelector("option");
    defaultOption.classList.add("selected");
});

// Add an event listener to change the class when an option is selected
const dropdown = document.getElementById("tone");
dropdown.addEventListener("change", function () {
    const selectedOption = dropdown.querySelector("option:checked");
    dropdown.querySelectorAll("option").forEach(function (option) {
        option.classList.remove("selected");
    });
    selectedOption.classList.add("selected");
});
// Prevent canvases from being dragged
document.addEventListener('DOMContentLoaded', () => {
    const opacityRange = document.getElementById('opacityRange');
    const canvases = document.querySelectorAll('canvas');

    opacityRange.addEventListener('input', () => {
        // Calculate opacity value inversely, so 1 corresponds to full opacity, and 10 corresponds to 0.1 opacity.
        const opacityValue = 1 - (opacityRange.value - 10) * 0.009;

        canvases.forEach(canvas => {
            canvas.style.opacity = opacityValue.toFixed(1); // Limit opacity value to one decimal place.
        });
    });
});


let min = 10;
let max = 100;

const calcLeftPosition = value => 100 / (100 - 10) *  (value - 10);

$('#opacityRange').on('input', function(e) {
  const newValue = parseInt(e.target.value);
  if (newValue > max) return;
  min = newValue;
  $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
  $('#min').html(newValue);
  $('#line').css({
    'left': calcLeftPosition(newValue) + '%',
    'right': (100 - calcLeftPosition(max)) + '%'
  });
});
