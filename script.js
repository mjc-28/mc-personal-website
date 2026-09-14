//creating the dropdown menu

//variables
let menuIcon = document.querySelector("#menuIcon");
let navBar = document.querySelector(".navBar");

menuIcon.onclick = () => {
    //changes the icon to an x to show that is where you click to close menu
    menuIcon.classList.toggle("bx-x");
    //active class that was created in CSS
    navBar.classList.toggle("active");
}