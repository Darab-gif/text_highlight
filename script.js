/*const firstInput = document.querySelector("#text1").value;
const secondInput = document.querySelector("#text2").value;
const header = document.querySelector("#header");*/

function myApp() {
  var firstInput = document.querySelector(".firstInput").value;
  var secondInput = document.querySelector(".secondInput").value;
  var header = document.querySelector("#headerResult");
  var index = firstInput.search(secondInput);
  console.log(index);
  if (index !== -1) {
    firstInput =
      firstInput.slice(0, index) +
      `<span class='highlight'>  ${firstInput.slice(
        index,
        index + secondInput.length
      )} </span>` +
      firstInput.slice(index + secondInput.length);
    header.innerHTML = firstInput;
  } else {
    alert("Cannot highlight word in the sentence");
  }
}
