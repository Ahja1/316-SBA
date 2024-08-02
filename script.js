//Cache at least one element using selectElementById.

document.getElementById("Enrolltxt").innerHTML = "Please Sign Up Below:";
const reloadBtn = document.getElementById("reloadBtn");


//Cache at least one element using querySelector
document.querySelector("h1").style.backgroundColor = "lightblue";

// Iterate over a collection of elements to accomplish some task.
////////////////////

//Create at least one element using createElement.
//Use appendChild and/or prepend to add new elements to the DOM.
const para = document.createElement("p");
para.innerText = "Please meet the criterea";

document.body.appendChild(para);


//Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.

let text = document.getElementById("signup").innerText;
document.getElementById("header").innerHTML = text; 



// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.


 //Modify at least one attribute of an element in response to user interaction.

const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("Enrolltxt").innerHTML = "Thank You";
}


//Register at least two different event listeners and create the associated event handler functions.

// Event listener for click to change text color
element.addEventListener('click', changeTextColor);

function changeTextColor() {
    document.getElementById("Enrolltxt").style.color = "red";
}

// Event listener for mouseover to change background color
element.addEventListener('mouseover', changeBackgroundColor);

function changeBackgroundColor() {
    element.style.backgroundColor = "lightgreen";
}


////Use at least two Browser Object Model (BOM) properties or methods.

 // Event listener for click to change text and alert message
 element.addEventListener("click", function () {
    myFunction();
    window.alert("Whohoo! Welcome to the team!!");
});

// Event listener for click to reload the page
reloadBtn.addEventListener('click', function () {
    location.reload(true);
});