// dom traversal

const card = document.querySelectorAll('.card');
const exit = document.querySelectorAll('.close');

// for (let i = 0; i < exit.length; i++) {
//   exit[i].addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//   });
// }

// exit.addEventListener('click', function () {
//   card.classList.add('hide-card');
// });

// exit.forEach(function (list) {
//   list.addEventListener('click', function (e) {
//     e.target.parentElement.classList.add('hide-card');
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// exit.forEach(function (list) {
//   list.addEventListener('click', function () {
//     list.parentElement.classList.add('hide-card');
//   });
// });

// DOM Traversal Method
// parent node = node
// parent element = element
// nextSibling = node
// nextElementSibling = element
// previousSibling = node
// previousElementSibling = element

// const nama = document.querySelector('.nama');
// console.log(nama.previousElementSibling);

// exit.forEach(function (list) {
//   list.addEventListener('click', function () {
//     list.parentElement.classList.add('hide-card');
//   });
// });

// card.forEach(function (cards) {
//   cards.addEventListener('click', function () {
//     alert('ok');
//   });
// });

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
  }
  console.log(e.target);
});
