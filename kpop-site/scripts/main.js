const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mamamoo01.jpg") {
        myImage.setAttribute("src", "images/mamamoo02.jpg");
    } else {
        myImage.setAttribute("src", "images/mamamoo01.jpg");
    }

};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName();

function setUserName(){

};

    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `New kpop addict, ${myName}!`;

    
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back, ${storedName}!`;
};

