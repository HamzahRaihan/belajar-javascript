const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

let previousActive = null;
container.addEventListener('click', function (e) {
  if (e.target.className == 'thumb') {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');

    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);

    e.target.classList.add('active');

    if (previousActive != null) {
      previousActive.classList.remove('active');
      previousActive = e.target;
    } else {
      previousActive = e.target;
    }
  }
});
