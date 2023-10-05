// Destructuring variable / assignment

// Destructuring Array
// const perkenalan = ['halo', 'nama', 'saya', 'Hamzha Raihan'];

// const [salam, satu, dua, nama] = perkenalan;
// skip items
// const [salam, , , nama] = perkenalan;

// console.log(salam);

// swap items
// let a = 1;
// let b = 2;
// console.log(a, b);

// [a, b] = [b, a];
// console.log(a, b);

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: 'hamzah',
//   umur: 21,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object

// ({ nama, umur } = {
//   nama: 'hamzah',
//   umur: 21,
// });

// console.log(nama);

//  Assign variable baru
// const mhs = {
//   nama: 'hamzah',
//   umur: 21,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);

// memberikan default value
// const mhs = {
//   nama: 'hamzah',
//   umur: 21,
//   email: 'hamzah@gmail.com',
// };

// const { nama: n, umur: u, email: e = 'email' } = mhs;
// console.log(e);

// rest parameter
// const mhs = {
//   nama: 'hamzah',
//   umur: 21,
//   email: 'hamzah@gmail.com',
// };

// const { nama, ...values } = mhs;
// console.log(values);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhsObj = {
//   mhs: {
//     id: 123,
//     nama: 'hamzah',
//     umur: 21,
//     email: 'hamzah@gmail.com',
//   },
//   mhs2: {
//     id: 231,
//     nama: 'hamzah',
//     umur: 21,
//     email: 'hamzah@gmail.com',
//   },
// };

// const { ...object } = mhsObj;
// console.log(object);

// function getIdMhs({ id }) {
//   return id;
// }

// const hero = {
//   nama: 'hamzah',
//   weapon: 'gunblade',
//   skill: {
//     ultimate: 'destruction blade',
//     skill1: 'wind slash',
//   },
// };

// const getHero = ({ nama, weapon, skill: { ultimate, skill1 } }) => `my name is ${nama}, senjataku adalah ${weapon}, i got skill of ${skill1} and ${ultimate},`;

// const heroPerson = getHero(hero);
// console.log(heroPerson);

// console.log(getIdMhs(mhsObj.mhs));

// Destructuring Function
// function kalkulus(a, b) {
//   return [a + b, a * b, a / b, a - b];
// }

// const [tambah, kali, bagi = 'tidak ada', kurang] = kalkulus(2, 3);
// console.log(tambah, kali, bagi, kurang);

function kalkulasi(a, b) {
  return { tambah: a + b, kurang: a - b, kali: a * b, bagi: a / b };
}

// const { bagi, kurang, kali, tambah } = kalkulasi(1, 2);
// console.log(bagi);

// Destruction function arguments

const mhs1 = {
  nama: 'hamzah',
  umur: 21,
  nilai: {
    tugas: 80,
    uas: 70,
    uts: 90,
  },
};

// function cetakMhs(mhs) {
//   return `halo ${mhs.nama}, umur saya ${mhs.umur}`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uas, uts } }) {
  return `halo ${nama}, umur saya ${umur}, nilai tugas saya ${tugas}, uas ${uas}, uts ${uts}`;
}

// const element = cetakMhs(mhs1);

const newDiv = document.createElement('div');
newDiv.textContent = cetakMhs(mhs1);
newDiv.setAttribute('class', 'new-div');
document.body.appendChild(newDiv);
// document.body.innerHTML = element;

console.log(cetakMhs(mhs1));

// const hero = {
//   nama: 'hamzah',
//   weapon: 'gunblade',
//   skill: {
//     ultimate: 'destruction blade',
//     skill1: 'wind slash',
//   },
// };

// function getHero(hero) {
//   return `my name is ${hero.nama}, my weapons is ${hero.weapon}, my skils are ${hero.skill.ultimate}, and ${hero.skill.skill1}`;
// }

// const element = `<div>${hero.nama} </div>`;

// const introHero = getHero(hero);

// document.body.innerHTML = introHero;

// console.log(getHero(hero));
