const button = document.querySelector("button");
const q = document.querySelector(".quote");
const text = document.querySelector(".quote h1");

const quotes = [
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  "“A friend is someone who knows all about you and still loves you.”",
  "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
  "“We accept the love we think we deserve.”",
  "“It is better to be hated for what you are than to be loved for what you are not.”",
  "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
  "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”",
  "“Love all, trust a few, do wrong to none.”",
  "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”",
  "“There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.”",
  "“Love looks not with the eyes, but with the mind,And therefore is winged Cupid painted blind.”",
];

const generate = () => {
  let random = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[random];
  q.style.display = "block";
};

button.addEventListener("click", generate);
