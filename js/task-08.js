"use strict";

const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");
const [input] = controls.getElementsByTagName("input");

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const createBoxes = (amount,size = 30) => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
    box.style.width = `${size + (i*10)}px`;
    box.style.height = `${size + (i*10)}px`;
    boxes.appendChild(box);
  }
}

const destroyBoxes = () => {
  [...boxes.children].forEach(box => box.remove());  
}

controls.addEventListener('click', (event) => {
  const amount = input.value;
  event.target.dataset.action === 'render' ? createBoxes(amount) : 
  event.target.dataset.action === 'destroy' ? destroyBoxes() : '';
});
