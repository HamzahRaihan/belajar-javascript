// * Callback
// * Synchronous callback
// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt('masukkan nama');
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`halo ${nama}`));

// const mhs = [
//   {
//     id: 1,
//     nama: 'hamzah',
//     umur: 21,
//     email: 'hamzah@gmail.com',
//   },
//   {
//     id: 2,
//     nama: 'raihan',
//     umur: 23,
//     email: 'raihan@gmail.com',
//   },
//   {
//     id: 3,
//     nama: 'jack',
//     umur: 31,
//     email: 'jack@gmail.com',
//   },
// ];

// console.log('mulai');
// mhs.forEach((m) => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log('selesai');

// * Asynchronous Callback
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open('get', url);
  xhr.send();
}

console.log('mulai');
getDataMahasiswa(
  'data.json',
  (results) => {
    const mhs = JSON.parse(results);
    mhs.forEach((m) => console.log(m.nama));
  },
  () => {}
);
console.log('selesai');

// * Jquery
console.log('mulai');
$.ajax({
  url: 'data.json',
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    e.responseText;
  },
});
console.log('selesai');
