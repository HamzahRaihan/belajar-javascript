const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka 3
// for

// const newAngka = [];

// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// for (const num of angka) {
//   if (num >= 3) {
//     newAngka.push(num);
//   }
// }

// angka.forEach(function (num) {
//   if (num >= 3) {
//     newAngka.push(num);
//   }
// });

// filter
// const newAngka = angka.filter((num) => {
//   return num >= 3;
// });

// Map
// kalikan semua angka dengan 2
// const newAngka = angka.map((num) => num * 2);

// reduce
// jumlahkan seluruh elemen pada array

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);

// Chaining
// Cari angka > 5
// kalikan 5
// jumlahkan

// const hasil = angka
//   .filter((num) => num > 5)
//   .map((num) => num * 3)
//   .reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(hasil);

const listVideo = Array.from(document.querySelectorAll(`[data-duration]`));
const filteredVideo = listVideo.filter((vid) => vid.textContent.includes('JAVASCRIPT LANJUTAN')).length;

let filtered = listVideo
  .filter((vid) => vid.textContent.includes('JAVASCRIPT LANJUTAN'))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(':').map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, detik) => detik + total);

const hour = Math.round(filtered / 3600);
filtered = filtered - hour * 3600;

const minute = Math.round(filtered / 60);

const second = filtered - minute * 60;

const video = document.querySelector('.jumlah-video');
video.textContent = `${filteredVideo} Video`;

const videoDuration = document.querySelector('.total-durasi');
videoDuration.textContent = `${hour} Jam ${minute} Menit ${second} Detik`;
