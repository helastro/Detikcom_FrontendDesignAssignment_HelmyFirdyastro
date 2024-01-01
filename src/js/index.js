const imgButtons = document.querySelectorAll(".imgSelect a");
let imgId = 1;

imgButtons.forEach((imgItems) => {
  imgItems.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItems.dataset.id;
    changeImage();
    updateActiveItem();
  });
});

function updateActiveItem() {
  imgButtons.forEach((imgItems) => {
    const itemId = imgItems.dataset.id;
    if (itemId === imgId) {
      imgItems.parentElement.classList.add("active");
    } else {
      imgItems.parentElement.classList.remove("active");
    }
  });
}

function changeImage() {
  const displayWidth = document.querySelector(".imgShowcase img:first-child").clientWidth;
  const imgShowcase = document.querySelector(".imgShowcase");

  imgShowcase.style.transition = "none";

  imgShowcase.style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;

  imgButtons.forEach((imgItems) => {
    const itemId = imgItems.dataset.id;
    const imgElement = imgItems.querySelector("img");

    if (itemId === imgId) {
      imgElement.style.filter = "grayscale(0%)";
    } else {
      imgElement.style.filter = "grayscale(100%)";
    }
  });

  setTimeout(() => {
    imgShowcase.style.transition = "";
  }, 0);
}

window.addEventListener("resize", () => {
  changeImage();
  updateActiveItem();
});

const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

leftArrow.addEventListener("click", () => {
  if (imgId > 1) {
    imgId--;
    changeImage();
    updateActiveItem();
  }
});

rightArrow.addEventListener("click", () => {
  const totalImages = imgButtons.length;
  if (imgId < totalImages) {
    imgId++;
    changeImage();
    updateActiveItem();
  }
});
