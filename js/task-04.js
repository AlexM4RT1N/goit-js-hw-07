"use strict";

const counter = document.getElementById('counter');

const value = document.getElementById('value');


const decrement = () => {
  const counterValue = +document.getElementById('value').outerText;
  value.innerText = counterValue-1;
}

const increment = () => {
  const counterValue = +document.getElementById('value').outerText;  
  value.innerText = counterValue+1;
}

counter.addEventListener('click', () => event.target.dataset.action === 'increment' ? increment() : decrement());