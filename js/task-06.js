"use strict";

const validationInput = document.getElementById("validation-input");

validationInput.addEventListener('blur', (event) => {
  validationInput.style.border = 
  validationInput.value.length < validationInput.getAttribute('data-length') ?
   '3px solid red' : '3px solid green';
});