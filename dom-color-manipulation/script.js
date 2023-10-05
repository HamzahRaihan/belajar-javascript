const body = document.body;
const darkButton = document.getElementById('darkmode');
// function darkMode() {
//   body.classList.toggle('dark');
// }

let dark = true;
darkButton.addEventListener('click', function () {
  body.classList.toggle('dark');
  darkButton.innerHTML = dark ? 'light mode' : 'dark mode';
  dark = !dark;
});

const randomColor = document.createElement('button');
const textButton = document.createTextNode('Random Color');
randomColor.appendChild(textButton);
randomColor.setAttribute('type', 'button');
darkButton.after(randomColor);

// function randomizeColor() {
//   const r = Math.random() * 255 + 1;
//   console.log(r);
//   document.body.style.backgroundColor = 'rgb(0,0,0)';
// }

randomColor.addEventListener('click', function () {
  const red = Math.round(Math.random() * 255 + 1);
  const green = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
});

const colorSlider = document.querySelectorAll('input[type=range]');

for (let i = 0; i < colorSlider.length; i++) {
  colorSlider[i].addEventListener('input', function () {
    const red = colorSlider[0].value;
    const green = colorSlider[1].value;
    const blue = colorSlider[2].value;
    const color = `rgb(${red},${green},${blue}`;
    document.body.style.backgroundColor = color;
  });
}
// const redSlider = document.querySelector('input[name=red-slider]');
// const greenSlider = document.querySelector('input[name=green-slider]');
// const blueSlider = document.querySelector('input[name=blue-slider]');

// colorSlider.addEventListener('input', function () {
//   const red = redSlider.value;
//   const green = greenSlider.value;
//   document.body.style.backgroundColor = `rgb(${red},${green},100)`;
// });

// greenSlider.addEventListener('input', function () {
//   const red = redSlider.value;
//   const green = greenSlider.value;
//   document.body.style.backgroundColor = `rgb(${red},${green},100)`;
// });

document.body.addEventListener('mousemove', function (event) {
  // event.clientX
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  const color = `rgb(${xPos}, ${yPos}, 100)`;
  document.body.style.backgroundColor = color;
});
