/* Declare variables below to save the different sections (divs) of your story*/

let storyopening = document.querySelector(".story-opening");
let option1 = document.querySelector(".option-one-screen");
let option2 = document.querySelector(".option-two-screen");
let end1 = document.querySelector(".option-one-end");
let end2 = document.querySelector(".option-two-end");
let fish = document.querySelector(".fish");
let hand = document.querySelector(".hand");
let cat = document.querySelector(".cat");
let ambulance = document.querySelector(".ambulance");
let bandage = document.querySelector(".bandage");
let title = document.querySelector(".title");



//When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
fish.onclick = function() {
    option1.style.display = "block";
    storyopening.style.display = "none";
}; 

hand.onclick = function() {
	option2.style.display = "block";
    storyopening.style.display = "none";
};

cat.onclick = function() {
	end1.style.display = "block";
    option1.style.display = "none";
};

ambulance.onclick = function() {
	end2.style.display = "block";
    option2.style.display =  "none";
};

bandage.onclick = function() {
	title.innerHTML = "game over";
};