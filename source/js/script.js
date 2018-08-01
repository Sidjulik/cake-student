var link = document.querySelector(".page-header__toggle");
var popup = document.querySelector(".main-nav");
var toggle = document.querySelector('.page-header__toggle');


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("active");
});

toggle.addEventListener('click', function(e) {
  this.classList.toggle('opened')
});
