const input = document.querySelector("input");
const container = document.querySelector(".container");
const button = document.querySelector("button");
const imageCntr = document.querySelector(".imageCntr");
const arrowBack = document.querySelector(".arrow");
const img = document.querySelector(".img");

const images = [
  "lion",
  "cat",
  "dog",
  "kaneki",
  "zoro",
  "luffy",
  "vegeta",
  "cheetah",
  "elephant",
];

const generate = () => {
  if (input.value == "") {
    return "";
  }
  images.forEach((image) => {
    if (input.value.toLowerCase() == image) {
      img.src = `images/${input.value}.jpg`;
    }
  });

  container.style.display = "none";
  imageCntr.style.display = "flex";
  return (input.value = "");
};

const goBack = () => {
  imageCntr.style.display = "none";
  container.style.display = "flex";
};

button.addEventListener("click", generate);
arrowBack.addEventListener("click", goBack);
