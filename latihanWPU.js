let angkotJalan = 6;
let angkotGaJalan = 7;
let angkotLembur = 5;
let noAngkot = 1;
let totalAngkot = 10;

for (noAngkot = 1; noAngkot <= totalAngkot; noAngkot++) {
  if (noAngkot <= angkotJalan && noAngkot !== 5) {
    console.log(`nomor angkot yang jalan nomor ${noAngkot}`);
  } else if (noAngkot === angkotLembur || noAngkot === 8 || noAngkot === 10) {
    console.log(`nomor angkot yang lembur nomor ${noAngkot}`);
  } else {
    console.log(`angkot yang ga jalan nomor ${noAngkot}`);
  }
}
