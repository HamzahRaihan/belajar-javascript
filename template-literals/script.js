// const nama = 'hamzah';
// const umur = 22;
// console.log(`nama ${nama} umur ${umur}`);

// const x = 11;
// console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`);

// HTML fragment
// const mhs = {
//   nama: 'Hamzah',
//   umur: 21,
// };

// const element = `<div class="mhs">
//     <h2>${nama}</h2>
//     <span>${umur}</span>
// </div>`;

// Looping
// const mhs = [
//   {
//     nama: 'hamzah',
//     umur: 23,
//   },
//   {
//     nama: 'dodi',
//     umur: 23,
//   },
//   {
//     nama: 'andre',
//     umur: 23,
//   },
// ];

// const element = `<div class="mhs">
//   ${mhs
//     .map(
//       (m) => `
//   <ul>
//   <li>${m.nama}</li>
//   <li>${m.umur}</li>
//   </ul>
//   `
//     )
//     .join('')}
// </div>`;

// const lagu = [
//   { judul: 'in the end', band: 'linkin park', feat: 'snoop dogg' },
//   { judul: 'Nowhere to run', band: 'linkin park' },
// ];

// const element = `<div>
// ${lagu
//   .map(
//     (l) => `<ul>
// <li>${l.judul}</li>
// <li>${l.band} ${l.feat ? `feat ${l.feat}` : ``} </li>
// </ul>`
//   )
//   .join('')}
// </div>`;

// const mhs = {
//   nama: 'Hamzah',
//   semester: 7,
//   matakuliah: ['Pemrograman web', 'Kalkulus', 'Pemrograman Mobile'],
// };

// function cetakMataKuliah(matakuliah) {
//   return `<ul>
//     ${matakuliah.map((mk) => `<li>${mk} </li>`).join('')}
//   </ul>`;
// }

// const element = `<div>
//   <h2>${mhs.nama}</h2>
//   <span>Semester ${mhs.semester}</span>
//   <h4>Mata Kuliah</h4>

//   ${cetakMataKuliah(mhs.matakuliah)}

// </div>`;

// document.body.innerHTML = element;

// Tagged Template Literals

const nama = 'hamzah';
const umur = 21;
const email = 'hamzah@gmail.com';

function hightlight(strings, ...values) {
  // let result = '';
  // strings.forEach((str, i) => {
  //   result += `${str}${values[i] || ''}`;
  // });
  // return result;

  return strings.reduce((result, str, i) => `${result}${str}<span class='hl'>${values[i] || ''} </span> `, '');
}

const str = hightlight`halo nama saya ${nama} umur saya ${umur}, email saya ${email}`;
console.log(str);

document.body.innerHTML = str;
