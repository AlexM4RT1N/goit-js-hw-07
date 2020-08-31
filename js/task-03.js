"use strict";

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.getElementById('gallery');

gallery.style.listStyle = 'none';
gallery.style.display = 'flex';
gallery.style.alignItems = 'center';
gallery.style.flexDirection = 'column';

images.forEach(item => gallery.insertAdjacentHTML('beforeend',`<li><img width='400' src='${item.url}' alt='${item.alt}'/></li>`));

[...gallery.children].forEach((item,i,arr) => item.style.marginBottom = i+1 === arr.length ? '0' : '20px');
