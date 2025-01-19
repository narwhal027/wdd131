const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

const newText = document.createElement("h2");
newText.innerText = "DOM Basics";
document.body.appendChild(newText);

const newParagraph1 = document.createElement("p");
newParagraph1.innerText = "This was added with Javascript!";
document.body.appendChild(newParagraph1);