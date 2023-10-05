// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open('get', 'http://www.omdbapi.com/?i=tt3896198&apikey=1bcfb505&s=avengers');
// xhr.send();

// function getMovieData(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open('get', url);
//   xhr.send();
// }

// getMovieData(
//   'http://www.omdbapi.com/?i=tt3896198&apikey=1bcfb505&s=avengers',
//   (results) => {
//     const movies = JSON.parse(results);
//     console.log(movies);
//   },
//   () => {}
// );

// * Jquery
// $.ajax({
//   url: 'http://www.omdbapi.com/?i=tt3896198&apikey=1bcfb505&s=avengers',
//   success: (movies) => console.log(movies),
// });

// Fetch data
// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=1bcfb505&s=avengers')
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// * Promise
// ! Object yang memrepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// ! janji (terpenuhi / ingkar)
// ! states(fulfilled / rejected / pending)
// ! callback(resolve / reject / finally)
// ! aksi(then / catch)

// * Contoh
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('janji telah ditepati');
//   } else {
//     reject('janji tidak ditepati');
//   }
// });

// janji1.then((response) => console.log('ok ' + response)).catch((response) => console.log('not ok ' + response));

// * Contoh 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve('telah ditepati');
    }, 2000);
  } else {
    setTimeout(() => {
      reject('tidak ditepati');
    }, 2000);
  }
});

console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
janji2
  .finally(() => console.log('selesai'))
  .then((response) => console.log(response))
  .catch((response) => console.log(response));
console.log('selesai');

// * Promise.all()
const movies = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        nama: 'Avengers',
        sutradara: 'Hamzah',
        pemeran: 'Geming',
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: 'Purwakarta',
        temp: 30,
        kondisi: 'Cerah',
      },
    ]);
  }, 500);
});

// movies.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([movies, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [movies, cuaca] = response;
    console.log(cuaca);
    console.log(movies);
  });
