let num = document.querySelectorAll("#num");
let changer = document.getElementById("changer");
let clean = document.getElementById("clean");
let signs = document.querySelectorAll("#sign");
let baz = document.getElementById("baz");
let baste = document.getElementById("baste");
let result = document.getElementById("result");
let equal = document.getElementById("equal");
let number = [];
clean.addEventListener("click", function () {
  number = [];
  result.innerHTML = "";
});
num.forEach((btn) => {
  btn.addEventListener("click", function () {
    number.push(btn.innerHTML);
    result.innerHTML = number.join("");
  });
});
signs.forEach((sign) => {
  sign.addEventListener("click", function () {
    number.push(sign.innerHTML);
    result.innerHTML = number.join("");
  });
});
baz.addEventListener("click", function () {
  number.push(baz.innerHTML);
  result.innerHTML = number.join("");
});
baste.addEventListener("click", function () {
  number.push(baste.innerHTML);
  result.innerHTML = number.join("");
});
changer.addEventListener("click", function () {
  number.unshift("-");
  result.innerHTML = number.join("");
});
equal.addEventListener("click", function () {
  let Quest = number.join("");
  let Answer = eval(Quest);
  result.innerHTML = Answer;
});
