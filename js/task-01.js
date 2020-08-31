"use strict";

const categories = document.getElementById('categories');

console.log(`В списке ${categories.childElementCount} категории.`);

[...categories.children].forEach(item => {
  const [title] = item.getElementsByTagName('h2');
  const [list] = item.getElementsByTagName('ul');
  console.log(`  Категория: ${title.outerText}
  Количество элементов: ${list.childElementCount}`);
})

