// Get the modal
var nav = document.getElementsByClassName("nav");

// // Get the button that opens the modal
// var btn = document.getElementById("contact");

// Get the <span> element that closes the modal
var toggle = document.getElementById("toggle")[0];

nav.style.display = "block";

// // When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (e) {
//   if (e.target == nav) {
//     nav.style.display = "none";
//   }
// };

//When user clicks Esc key, close modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    nav.style.display = "none";
  }
});
