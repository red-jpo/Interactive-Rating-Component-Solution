//selects HTML elements from the DOM and stores them in variables for later use
const submitBtn = document.getElementById("submit");
const ratingState = document.querySelector(".rating-state");
const thankYouCard = document.querySelector(".thank-you-card");
const rateInform = document.getElementById("rate-inform");
const rates = document.querySelectorAll(".btn");

//add a click event listener to the submit button. When the button is clicked, it hides the rating state element and display the thank you card element
submitBtn.addEventListener("click", function () {
  ratingState.style.display = "none";
  thankYouCard.style.display = "flex";

  //gets the currently selected rating button and updates the rate inform text accordingly.
  let selectedRating = document.querySelector(".btn.selected");
  rateInform.innerHTML = `You have selected ${selectedRating.innerHTML} out of 5`;
});

//adds click event listeners to each rating button. When a button is clicked removes the "selected" class from the previously selected button, and adds the "selected" class to the clicked button
rates.forEach((value) => {
  value.addEventListener("click", function () {
    document.querySelector(".btn.selected").classList.remove("selected");
    value.classList.add("selected");
  });
});

//checks if there is a selected rating button (using the "selected" class), and if not, sets the default rating to 5 and updates the rate inform text accordingly
let defaultRating = 5;

if (document.querySelector(".btn.selected") === null) {
  rateInform.innerHTML = `You have selected ${defaultRating} out of 5`;
}
