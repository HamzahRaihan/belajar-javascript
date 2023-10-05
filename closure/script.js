// function init() {
//   // let nama = 'hamzah';
//   return function tampilNama(nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();

// panggilNama('hamzah');

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama} selamat ${waktu}, semoga harimu menyenangkan`);
  };
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

selamatPagi('hamzah');

console.dir(selamatMalam);

let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
};

let a = add();

console.log(a());
console.log(a());
console.log(a());
