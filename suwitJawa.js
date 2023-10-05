// pilihan player
var tanya = true;
while (tanya) {
  var player = prompt('pilih : gajah, semut, orang');

  // pilihan komputer
  // generate bilangan random
  var computer = Math.random();

  if (computer < 0.34) {
    computer = 'gajah';
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = 'semut';
  } else {
    computer = 'orang';
  }
  console.log(computer);

  var hasil = '';
  // rules

  if (player == computer) {
    hasil = 'hasil seri';
  } else if (player == 'gajah') {
    //   if (computer == 'orang') {
    //     hasil = 'menang!';
    //   } else {
    //     hasil = 'kalah!';
    //   }
    hasil = computer == 'orang' ? 'menang!' : 'kalah!';
  } else if (player == 'orang') {
    hasil = computer == 'gajah' ? 'kalah!' : 'menang!';
  } else if (player == 'semut') {
    hasil = computer == 'orang' ? 'kalah!' : 'menang!';
  } else {
    hasil = 'memasukkan pilihan yang salah';
  }

  // tampilkan hasil
  alert(`kamu memilih ${player} dan komputer memilih ${computer}\n maka hasilnya : kamu ${hasil}`);

  tanya = confirm('lagi?');
}

alert('terima kasih sudah bermain');
