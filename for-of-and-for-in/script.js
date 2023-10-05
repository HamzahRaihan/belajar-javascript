// * for of
// const mhs = ['hamzah', 'raihan', 'erik'];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   let nama = `kamu adalah ${m}`;
//   console.log(nama);
// }

// * Looping Stings
// const nama = 'hamzah';

// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ['hamzah', 'raihan', 'erik'];

// mhs.forEach((m, i) => {
//   console.log(`${m} adalah ke ${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah ke ${i + 1}`);
// }

// * NodeList
// const nama = document.querySelectorAll('.nama');
// console.log(nama);

// nama.forEach((m) => {
//   console.log(m.textContent);
// });

// for (n of nama) {
//   console.log(n.textContent);
// }

// * Arguments
// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// let func = jumlahkanAngka(1, 2, 3, 4, 5);
// console.log(func);

// * for in
const mhs = {
  nama: 'hamzah',
  umur: 21,
};

for (m in mhs) {
  console.log(mhs[m]);
}
