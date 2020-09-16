"use strict";

const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");
const [input] = controls.getElementsByTagName("input");

const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));

const createBoxes = (amount,size = 30) => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
    box.style.width = `${size + (i*10)}px`;
    box.style.height = `${size + (i*10)}px`;
    boxes.appendChild(box);
  }
}

const destroyBoxes = () => [...boxes.children].forEach(box => box.remove());

input.addEventListener('input', (e) => input.value = input.value > 100 ? 100 : input.value)

controls.addEventListener('click', (event) => {
  event.target.dataset.action === 'render' ? createBoxes(input.value) : 
  event.target.dataset.action === 'destroy' ? destroyBoxes() : '';
});
