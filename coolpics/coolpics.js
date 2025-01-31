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
        const imageSrcParts = clickedElement.src.split("-");
        const fullSizeImage = clickedElement.src.replace(/(.*)(\.\w+)$/, "$1-full$2");

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullSizeImage, clickedElement.alt));

        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);