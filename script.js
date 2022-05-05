function myApp() {
  const firstInput = document.querySelector(".firstInput").value;
  const secondInput = document.querySelector(".secondInput").value;
  const keywordRegex = new RegExp(secondInput, "gi");
  const matchedKeywords = firstInput.match(keywordRegex);

  console.log({ matchedKeywords });
  if (!matchedKeywords) alert("Cannot highlight word in the sentence");
  else if (matchedKeywords.length >= 3)
    alert("Too many occurences to be highlighted");
  else {
    const highlightedWords = firstInput.replace(
      keywordRegex,
      `<span class='highlight'>${secondInput}</span>`
    );
    document.querySelector("#headerResult").innerHTML = highlightedWords;
  }
}

//The onkeyup attribute functionality
function myChange() {
  const inputChange = document.querySelector(".firstInput").value;
  const headerEvent = document.getElementById("headerResult");

  headerEvent.innerHTML = inputChange;
}
