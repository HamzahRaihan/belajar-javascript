// const tampilNama = (nama) => {
//   return `halo ${nama}`;
// };

// console.log('hamzah');

// let mahasiswa = ['hamzah', 'raihan', 'ikhsanul', 'fikri'];

// const jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// This pada arrow function

// constructor function
// const Mahasiswa = function () {
//   this.nama = 'hamzah';
//   this.umur = 21;
//   this.sayHello = function () {
//     console.log(`hello ${this.nama}, umur kamu ${this.umur}`);
//   };
// };

// const hamzah = new Mahasiswa();

// const Mahasiswa = function () {
//   this.nama = 'hamzah';
//   this.umur = 21;
//   this.sayHello = () => {
//     console.log(`hello ${this.nama}, umur kamu ${this.umur}`);
//   };
// };

// const hamzah = new Mahasiswa();

// const mh1 = {
//   nama: 'hamzah',
//   umur: 21,
//   sayHello: () => {
//     console.log(`hello ${this.nama}, umur kamu ${this.umur}`);
//     console.log(this);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = 'hamzah';
//   this.umur = 21;
//   this.sayHello = function () {
//     console.log(`hello ${this.nama}, umur kamu ${this.umur}`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const hamzah = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let size = 'size';
  let caption = 'caption';

  if (this.classList.contains(size)) {
    [size, caption] = [caption, size];
  }

  this.classList.toggle(size);
  setTimeout(() => {
    this.classList.toggle(caption);
    console.log(this);
  }, 650);
});

function repeatLog(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeatLog(10, console.log);
repeatLog(3, alert);
