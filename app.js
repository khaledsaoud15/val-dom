const button = document.querySelector(".generate");
const squares = document.querySelector(".squares");
const input = document.querySelector(".input");

const generate = () => {
  let inputValue = input.value;
  let max = 100;
  squares.innerHTML = "";
  if (inputValue > max) {
    squares.innerHTML = `
          <p class="danger">The limit is 100 Square</p>
      `;
  } else {
    for (let i = 1; i <= inputValue; i++) {
      if (i % 2 == 0) {
        squares.innerHTML += `
              <div class="box" style="background:red">${i}</div>
              `;
      } else {
        squares.innerHTML += `
                <div class="box" style="background:green">${i}</div>
                `;
      }
    }
  }
};

button.addEventListener("click", generate);
