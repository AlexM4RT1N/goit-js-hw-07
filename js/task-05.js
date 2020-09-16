"use strict";

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener('focus', (event) => {
  nameInput.addEventListener("input", outName);
});

function outName({key}) {
  if (nameInput.value) nameOutput.textContent = `${nameInput.value}`;
  else nameOutput.textContent = `незнакомец`;
}

