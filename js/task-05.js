"use strict";

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener('focus', (event) => {
  window.addEventListener("keyup", outName);
});

function outName({key}) {
  const name = nameInput.value;
  nameOutput.textContent = `${name}`;
}

