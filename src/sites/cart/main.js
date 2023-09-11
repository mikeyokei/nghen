////
const el = document.getElementById('he');

const hiddenDiv = document.getElementById('a');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
    el.style.display = 'none';
  hiddenDiv.style.display = 'grid';

});

// ✅ (optionally) Hide DIV on mouse out
el.addEventListener('mouseleave', function handleMouseOut() {
  // 👇️ if you used visibility property to hide div

  el.style.display = 'grid';
  hiddenDiv.style.display = 'none';


});

  

////
const el1 = document.getElementById('the');

const hiddenDiv1 = document.getElementById('b');

// ✅ Show hidden DIV on hover
el1.addEventListener('mouseover', function handleMouseOver() {
    el1.style.display = 'none';
    hiddenDiv1.style.display = 'grid';


});

// ✅ (optionally) Hide DIV on mouse out
el1.addEventListener('mouseleave', function handleMouseOut() {
    hiddenDiv1.style.display = 'none';
    el1.style.display = 'grid';
  
});