// DOM Selection
// document.getElementById()

// const judul = document.getElementById('judul');
// judul.style.color = 'blue';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Hamzah Raihan';

// // document.getElementsByTagname()
// const paragraph = document.getElementsByTagName('p');
// for (let i = 0; i < paragraph.length; i++) {
//   paragraph[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // document.getElementsByClassName()
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari javscript';

// document.querySelector();
// const paragraph4 = document.querySelector('#b p');
// paragraph4.style.color = 'green';
// paragraph4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // document.querySelectorAll()
// const paragraph = document.querySelectorAll('p');
// for (let i = 0; i < paragraph.length; i++) {
//   paragraph[i].style.backgroundColor = 'lightblue';
// }

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'lightblue';

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Hamzah Raihan</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';

// setAttribute() = untuk menambahkan atribut
// getAttribute() = untuk mendapatkan atribut
// removeAttribute() = untuk menghapus atribut(id,class,dll)
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'hamzah');

// element.classList.add() = menambah class baru
// element.classList.remove() = menghapus class baru
// element.classList.toggle() = jika ada class maka tidak ditambah, jika tidak ada maka ditambah
// element.classList.item() = untuk mengetahui class dalam sebuah element
// element.classList.contains() = untuk mengetahui class tertentu
// element.classList.replace() = untuk mengganti class tertentu

// const p2 = document.querySelector('.p2');

// p2.classList.toggle('label');

// document.body.classList.toggle('biru-muda');

// manipulasi node
// document.createElement()
const paragraphBaru = document.createElement('p');
const teksBaru = document.createTextNode('paragraf baru');

paragraphBaru.appendChild(teksBaru);

const sectionA = document.getElementById('a');
sectionA.appendChild(paragraphBaru);

const listBaru = document.createElement('li');
const teksList = document.createTextNode('item baru');
listBaru.appendChild(teksList);

const ul = document.querySelector('section#b ul');
// ul.appendChild(listBaru);

const listBaru2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(listBaru, listBaru2);

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textHeader2Baru = document.createTextNode('judul baru');

h2Baru.appendChild(textHeader2Baru);

sectionB.replaceChild(h2Baru, p4);

paragraphBaru.style.backgroundColor = 'lightblue';
