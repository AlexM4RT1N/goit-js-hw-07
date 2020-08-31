"use strict";

const ingredList = document.getElementById('ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ingredList.appendChild(li);
})

