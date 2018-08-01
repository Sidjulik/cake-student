window.onload = function () {
	var menuStyle = getComputedStyle (menu);
	openMenu.onclick = function () {
		if(menuStyle.display == "none") {
			menu.classList.add ("active")
		} else {
      menu.classList.remove ("active")
    }
	}
}
window.onload = function () {
  var toggle = document.querySelector('.page-header__toggle');

  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened')
  })
}
