function viewerTemplate(imagePath, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imagePath}" alt="${altText}">
        </div>
    `;
}

// Function to handle clicking an image in the gallery
function viewHandler(event) {
    const clickedElement = event.target;

    // Ensure the clicked element is an image
    if (clickedElement.tagName === "IMG") {
        // Get the image src and modify it to point to the full-size version
        const imageSrcParts = clickedElement.src.split("-");
        const fullSizeImage = imageSrcParts[0] + "-full.jpeg"; // Adjust this if your naming convention is different

        // Insert the modal into the DOM
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullSizeImage, clickedElement.alt));

        // Add event listener to close button
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

// Function to close the viewer modal
function closeViewer() {
    document.querySelector(".viewer").remove();
}

// Add event listener to the gallery section
document.querySelector(".gallery").addEventListener("click", viewHandler);