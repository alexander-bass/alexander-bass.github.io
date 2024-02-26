const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/rat.png") {
    myImage.setAttribute("src", "images/rat2.png");
  } else {
    myImage.setAttribute("src", "images/rat.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `sup ${myName}, i am here to fight`;
    }
  }
  
 
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `sup ${storedName}, i am here to fight`;
}

myButton.onclick = () => {
  setUserName();
};
