let ulang = true;
while (ulang) {
  let chance = 3;
  let computer = Math.floor(Math.random() * 10) + 1;
  let hasil = '';

  while (chance >= 1) {
    alert('Memulai permainan dengan ' + chance + ' kesempatan');
    let player = parseInt(prompt('Tebak angka 1-10'));
    if (player === computer) {
      hasil = 'BENAR';
      alert('Anda ' + hasil + ' angka yang anda tebak adalah ' + computer);
      break;
    } else if (player < computer) {
      hasil = 'RENDAH';
      chance -= 1;
      alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + player + '\ntersisa ' + chance + ' kesempatan lagi.');
    } else if (player > computer) {
      hasil = 'TINGGI';
      chance -= 1;
      alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + player + '\ntersisa ' + chance + ' kesempatan lagi.');
    }

    if (chance === 0) {
      alert('Anda gagal \nangka yang dicari adalah ' + computer);
    }
  }
  ulang = confirm('Ulang Lagi?');
}
alert('Terima kasih');
