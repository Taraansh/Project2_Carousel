const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");

window.onload = function() {
  document.body.style.backgroundImage = `url(${image3.src})`;
};

image1.addEventListener("click", toggleClass);
image2.addEventListener("click", toggleClass);
image3.addEventListener("click", toggleClass);
image4.addEventListener("click", toggleClass);
image5.addEventListener("click", toggleClass);

function toggleClass(event) {
  if (event.target.classList.contains("image-expand")) {
    event.target.classList.add("image-collapse");
    event.target.classList.remove("image-expand");
  } else {
    event.target.classList.add("image-expand");
    event.target.classList.remove("image-collapse");
    const images = [image1, image2, image3, image4, image5];
    images.forEach((image) => {
      if (image !== event.target) {
        image.classList.add("image-collapse");
        image.classList.remove("image-expand");
      }
    });
  }
    const expandedImage = document.querySelector(".image-expand");
    if (expandedImage) {
      document.body.style.backgroundImage = `url(${expandedImage.src})`;
    } else {
      document.body.style.backgroundImage = `url(${image3.src})`;
    }
}
