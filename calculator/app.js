let input = document.querySelector(".cals-num");
let numbers = document.querySelectorAll(".number");
let ops = document.querySelectorAll(".ops");
let del = document.querySelector(".del");
let reset = document.querySelector(".reset");

const Solve = () => {
  let res = input.value;
  if (res == "") {
    return "";
  }
  let y = eval(res);
  input.value = y;
  return y;
};

const calc = (val) => {
  input.value += val;
  return val;
};

const deleting = () => {
  input.value = "";
};

reset.addEventListener("click", deleting);

const Remove = () => {
  input.value = input.value.slice(0, -1);
};

del.addEventListener("click", Remove);
