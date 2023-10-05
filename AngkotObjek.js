function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log('belum ada penumpang');
      return false;
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

let angkot1 = new Angkot('hamzah', ['apa', 'itu'], [], 0);

// form
// const buttonSubmit = document.getElementById('submit-form').value;
// const showResult = document.getElementById('result').value;

// function handleGetFormData() {
//   const nameValue = document.getElementById('name').value;
//   console.log(nameValue);
//   const statusForm = document.getElementById('status');
//   console.log(statusForm);
//   const zipCode = document.getElementById('zip-code');
//   console.log(zipCode);
// }

// function isNumber(string) {
//   return !isNaN(string);
// }

// statusForm.addEventListener('click', (e) => {
//   const isChecked = statusForm.checked;

//   if (isChecked) {
//     console.log('Checkbox is checked');
//     buttonSubmit.addEventListener('click', (e) => {
//       e.preventDefault();
//       const zipCodeVal = zipCode.value;

//       showResult.innerHTML = nameValue.value;
//       if (isNumber(zipCodeVal)) {
//         console.log('Zip code is a number:', zipCodeVal);
//         // Lakukan tindakan jika zip code adalah angka
//       } else {
//         console.log('Zip code is not a number:', zipCodeVal);
//         // Lakukan tindakan jika zip code bukan angka
//       }
//       console.log(nameValue.value);
//     });
//   } else {
//     console.log('Checkbox is not checked');
//   }
// });

const btnSubmit = document.getElementById('submit-form');
console.log(btnSubmit);
const showResult = document.getElementById('result');

function handleGetFormData() {
  const name = document.getElementById('name').value;
  console.log(name);
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const checkbox = document.getElementById('status').checked;

  const formData = {
    name,
    city,
    email,
    zipCode,
    checkbox,
  };

  return formData;
}

function isNumber(string) {
  return !isNaN(string);
}

function checkboxIsChecked(formData) {
  const isChecked = formData.checkbox;
  return isChecked ? true : false;
}

function validateFormData(formData) {
  if (formData.name !== '' && formData.city !== '' && formData.email !== '' && isNumber(formData.zipCode) && checkboxIsChecked(formData)) {
    console.log('form terisi');
    return true;
  } else {
    console.log('tidak terisi');
    return false;
  }
}

const form = document.getElementById('form');
form.addEventListener('submit', submit);
function submit(e) {
  e.preventDefault();

  const data = handleGetFormData();
  const warning = document.getElementById('warning');
  if (validateFormData(data) === false) {
    warning.textContent = 'Periksa form anda sekali lagi';
  } else {
    warning.remove();
  }
}
