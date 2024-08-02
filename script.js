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