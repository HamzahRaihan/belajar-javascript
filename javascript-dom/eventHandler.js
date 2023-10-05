const p3 = document.querySelector('.p3');

function ubahWarna() {
  p2.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
  const ul = document.querySelector('section#b ul');
  const listBaru = document.createElement('li');
  const teksList = document.createTextNode('item baru');

  listBaru.appendChild(teksList);

  ul.appendChild(listBaru);
});

// p3.onclick = function () {
//   p3.style.backgroundColor = 'lightblue';
// };

// p3.onclick = function () {
//   p3.style.backgroundColor = 'red';
// };

p3.addEventListener('click', function () {
  p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('click', function () {
  p3.style.color = 'red';
});

// todo list sederhana
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === '') {
    alert('you must input something');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
    }
  },
  false
);

const buttonMinus = document.querySelector('.minus');
const counter = document.querySelector('.counter');
const buttonPlus = document.querySelector('.plus');
let number = 0;

function counterDisplay() {
  counter.textContent = number === 10 ? 'done' : number;
  counter.textContent = number === 0 ? 'done' : number;
}

function addMinus() {
  if (number <= 0) {
    number--;
    counterDisplay();
  }
}

function addPlus() {
  if (number < 10) {
    number++;
    counterDisplay();
  }
}
