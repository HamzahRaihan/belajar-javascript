let ulang = true;
while (ulang) {
  let player = prompt('pilih : kertas, gunting, batu');

  let computer = Math.random();

  if (computer < 0.34) {
    computer = 'kertas';
  } else if (computer >= 0.34 && 0.67) {
    computer = 'batu';
  } else {
    computer = 'gunting';
  }

  let hasil = '';

  if (computer == player) {
    hasil = 'draw';
  } else if (player == 'kertas') {
    hasil = computer == 'batu' ? 'menang' : 'kalah';
  } else if (player == 'batu') {
    hasil = computer == 'kertas' ? 'kalah' : 'menang';
  } else if (player == 'gunting') {
    hasil = computer == 'batu' ? 'kalah' : 'menang';
  } else {
    hasil = 'kamu salah memilih';
  }

  alert(`kamu memilih ${player} dan komputer memilih ${computer} hasilnya ${hasil}`);

  ulang = confirm('main lagi?');
}

alert('terima kasih sudah bermain');
