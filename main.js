'use strict'
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const menuLink = document.querySelectorAll('.menu__link');

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = "./img/close.svg";
		document.body.classList.toggle('_lick');
	} else {
		navBtnImg.src = "./img/bar_black.svg";
		document.body.classList.toggle('_lick');
	}
};
//close menu after click link





/* scroll */

function scrollTo(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  });
}

var button2 = document.querySelector('#services');
var services = document.querySelector('#section-services');

button2.addEventListener('click', () => {
  scrollTo(services);
});

/* Прокрутка при клике */
/* const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.gogo)) {
			const gotoBlock = document.querySelector(menuLink.dataset.gogo);
			
			if (nav.classList.contains('open')) {
				document.body.classList.remove('_lick');

			}
		}
	}
}

 */


