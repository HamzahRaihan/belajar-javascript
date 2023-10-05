// Execution context, hoisting, & scope

// console.log(nama)
// var nama = 'hamzah';

// * Creation phase pada global context
// nama let = undefined
// nama function = fn()
// disebut sebagai hoisting
// window = global object
// this = window

// execution phase

// var nama = 'hamzah';
// var umur = 22;

// console.log(sayHello());

// function sayHello() {
//   return `halo ${nama}, kamu ${umur} tahun`;
// }

// * function membuat local execution context yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = 'hamzah';
var username = 'hamzah_raihan';

function cetakUrl(username) {
  var url = `https://instagram.com/`;
  return url + username;
}

console.log(cetakUrl(username));

function cetakNama() {
  return nama;
}
console.log(cetakNama());
