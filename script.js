// select container
const container = document.querySelector("#container");

// create green paragraph
const greenP = document.createElement("p");
greenP.textContent = "Hey I'm green!";
greenP.style.color = "green";

// create yellow h3
const yellowH3 = document.createElement("h3");
yellowH3.textContent = "I'm a yellow h3!";
yellowH3.style.color = "yellow";

// create div with border
const box = document.createElement("div");
box.style.border = "8px solid brown";
box.style.background = "purple";

// inside the div
const title = document.createElement("h1");
title.textContent = "I'm in a div";

const text = document.createElement("p");
text.textContent = "ME TOO!";

box.appendChild(title);
box.appendChild(text);

// add everything to container
container.appendChild(greenP);
container.appendChild(yellowH3);
container.appendChild(box);

// EVENTS
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.target.style.background = "green";
    });
});

// select container
const kasarolla = document.querySelector("#kasarolla");

// create purple paragraph
const purpleP = document.createElement("p");
purpleP.textContent = "Hey I'm purple and I do not know why I am purple!";
purpleP.style.color = "purple";
purpleP.style.background = "yellow"

// add everything to container
kasarolla.appendChild(purpleP);


