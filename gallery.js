const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery-image").forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");
        lightboxImg.src = image.src;

    });

});

document.getElementById("close").addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});