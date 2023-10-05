// const obj = {
//   nama: 'hamzah',
//   umur: '23',
// };

// const { ...values } = obj;
// console.log(values);

// const funObj = ({ nama, umur }) => {
//   return `halo ${nama}, umur ${umur}`;
// };

// console.log(funObj(obj));

// * menggabungkan Array
// const mhs = ['hamzah', 'raihan'];
// const dosen = ['ade', 'nono'];
// const orang = [...mhs, 'aji', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// * mengcopy nilai pada array
// const mhs = ['hamzah', 'raihan'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'kojak';
// console.log(mhs);
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// console.log(liMhs[0].textContent);

// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }

// const mhs = [...liMhs].map((m) => m.textContent);

const nama = document.querySelector('.nama');

const huruf = [...nama.textContent].map((n) => `<span>${n}</span>`).join('');
nama.innerHTML = huruf;
