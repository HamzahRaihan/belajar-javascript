const mahasiswa = {
  mhs: { nama: 'hamzah raihan', nrp: '2010631250052', email: 'hamzah@gmail.com', jurusan: 'sistem informasi' },
  mhs2: { nama: 'joki' },
};

function mahasiswaBaru(nama, npm, email) {
  this.nama = nama;
  this.npm = npm;
  this.email = email;
}

const mhs2 = new mahasiswaBaru('hamzah', 2010, 'hamzah@gmail.com');

let angkot = 'angkot';
function cariAngkot() {
  return (angkot = 'angkot2');
}
console.log(cariAngkot());

let smartphone = {
  nama: 'oppo',
  kamera: '180mp',
};

const fitur = 'kamera';

// console.log(smartphone[nama]);
let angka = 11;
if (angka % 2) {
  console.log('ganjil');
} else {
  console.log('genap');
}

const str1 = 'hello';
const str2 = 'world';

console.log(str1.toUpperCase());

const address = () => {
  const country = 'indo';
  const province = 'jakarta';
  const city = 'jakarta sel';
};

const hasil = '9' + 1;
console.log(hasil);
