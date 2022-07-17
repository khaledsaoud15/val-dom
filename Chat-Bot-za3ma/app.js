const input = document.querySelector("#text");
const button = document.querySelector(".input button");
const response = document.querySelector(".output p");
const container = document.querySelector(".container");
const system = document.querySelector(".system");

const texts = [
  "Good Morning",
  "How Are You Today?",
  "Feeling Lovely Thank you",
  " ",
  "Where are you?",
  "by",
];

const bot = () => {
  if (input.value.trim() == texts[0]) {
    response.textContent = "Good Morning Sir";
  } else {
    if (input.value.trim() == texts[1]) {
      response.textContent = "Feeling Good How About You";
    } else {
      if (input.value.trim() == texts[2]) {
        response.textContent = "Thats Good To Hear";
      } else {
        if (input.value.trim() == texts[3]) {
          response.textContent = "I am a Chat Bot Here to serve you";
        } else {
          if (input.value.trim() == texts[4]) {
            response.textContent = "In Your Computer";
          } else {
            if (input.value.trim() == texts[5]) {
              response.textContent = "See ya";
              container.style.display = "none";

              setTimeout(() => {
                system.style.display = "flex";
                document.body.style.background = "#000";
              }, 2000);
            } else {
              response.textContent =
                "It seems that i couldnt understand the question";
            }
          }
        }
      }
    }
  }
  if (input.value === "") {
    response.textContent = "?";
  }
  return (input.value = "");
};

button.addEventListener("click", bot);
