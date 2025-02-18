function viewerTemplate(imagePath, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imagePath}" alt="${altText}">
        </div>
    `;
}

function viewHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === "IMG") {
        const imageSrc = clickedElement.src;
        const fullSizeImage = imageSrc.replace(".png", "-full.png");

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullSizeImage, clickedElement.alt));

        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);

