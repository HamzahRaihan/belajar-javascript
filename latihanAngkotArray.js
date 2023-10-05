let penumpang = [];

// let tambahPenumpang = function (nama, penumpang) {
//   if (penumpang.length == 0) {
//     penumpang.push(nama);
//     return penumpang;
//   } else {
//     let checkPenumpang = penumpang.find(function (e) {
//       if (e == nama) {
//         return true;
//       }
//     });
//     let checkIndexPenumpang = penumpang.findIndex(function (e) {
//       return e == undefined;
//     });
//     if (checkPenumpang == nama) {
//       console.log(`${nama} sudah ada di dalam angkot`);
//       return penumpang;
//     } else if (checkIndexPenumpang < 0 && checkPenumpang == undefined) {
//       penumpang.push(nama);
//       return penumpang;
//     } else {
//       penumpang[checkIndexPenumpang] = nama;
//       return penumpang;
//     }
//   }
// };

let tambahPenumpang = function (nama, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(nama);
    return nama;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == nama) {
        console.log(`${nama} sudah ada di angkot`);
        return penumpang;
      } else if (penumpang[i] == undefined) {
        penumpang[i] = nama;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(nama);
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (nama, penumpang) {
  if (penumpang.length == 0) {
    console.log('tidak ada penumpang');
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == nama) {
        penumpang[i] = undefined;
        return penumpang;
      } else {
        console.log(`${nama} tidak ada di angkot`);
        return penumpang;
      }
    }
  }
};
