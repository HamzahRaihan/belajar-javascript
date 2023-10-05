// Cara membuat object pada javascript
// 1. Object Literal (tidak efektif untuk objek yang banyak)
let mahasiswa = {
  nama: 'hamzah',
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Selamat makan ${this.name}`);
  },
};
let mahasiswa2 = {
  nama: 'raihan',
  energi: 12,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Selamat makan ${this.name}`);
  },
};

// 2. Function declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.makan += porsi;
//     console.log(`selamat makan ${this.nama} dengan porsi ${porsi}`);
//   };
//   return mahasiswa;
// }

// let hamzah = Mahasiswa('hamzah', 13);

//  * 3. Constructor function
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama} dengan porsi ${porsi}`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`selamat bermain ${this.nama} sampe jam ${jam}`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = methodMahasiswa.makan;
//   this.main = methodMahasiswa.main;
//   this.tidur = methodMahasiswa.tidur
// }

// let hamzah = new Mahasiswa('hamzah', 13);

// * 4. object.create()
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   return mahasiswa;
// }

// let hamzah = Mahasiswa('hamzah', 13);

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.inventory = ['jacket', 'pickaxe'];
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `makan ${porsi} porsi`;
};
Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `makan ${jam} jam`;
};
Mahasiswa.prototype.inventory = function (barang) {
  this.inventory.push(barang);
  return `barang ${barang} ditambahkan`;
};

let hamzah = new Mahasiswa('hamzah', 10);

let array = [1, 2, 3];
console.log(array);
