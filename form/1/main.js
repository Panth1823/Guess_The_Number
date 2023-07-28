<<<<<<< HEAD

let isImageVisible = false;
const toggleBtn = document.getElementById("toggleBtn");
const image = document.getElementById("image");
const status = document.getElementById("status");

function toggleImage() {
    isImageVisible = !isImageVisible;

    if (isImageVisible) {
        image.style.display = "block";
        status.textContent = "Image is currently visible.";
    } else {
        image.style.display = "none";
        status.textContent = "Image is currently hidden.";
    }
}
=======

let isImageVisible = false;
const toggleBtn = document.getElementById("toggleBtn");
const image = document.getElementById("image");
const status = document.getElementById("status");

function toggleImage() {
    isImageVisible = !isImageVisible;

    if (isImageVisible) {
        image.style.display = "block";
        status.textContent = "Image is currently visible.";
    } else {
        image.style.display = "none";
        status.textContent = "Image is currently hidden.";
    }
}
>>>>>>> 050bdde805c800300b9cec1fe3ab351478cb14b5
