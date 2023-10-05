// * rest parameter

function myFunc(a, b, ...myArgs) {
  return `a = ${a}, b = ${b} myArgs = ${myArgs}`;
}

// * Spread operator
function mySpread() {
  return [...arguments];
}
// console.log(mySpread(1, 2, 3, 4, 5));

// * Jumlahkan menggunakan rest parameter
function kalkulasi(...angka) {
  //   let total = 0;
  //   for (const a of angka) {
  //     total += a;
  //   }
  //   return total;
  return angka.reduce((a, b) => a + b);
}
console.log(kalkulasi(1, 2, 3, 4, 5));

// * Array destructuring
const kelompok1 = ['hamzah', 'raihan', 'coki', 'rangga'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

// * object destructring
const team = {
  pm: 'hamzah',
  frontend: 'raihan',
  frontend: 'dodo',
  backend: 'coki',
  ui: 'rangga',
  devOps: 'muli',
};

const { pm, ...myTeam } = team;
console.log(myTeam);

// * filtering
function filterBy(type, ...values) {
  return values.filter((n) => typeof n === type);
}
console.log(filterBy('string', 1, 2, 3, 'hamzah', false, 10, true, 'raihan'));
