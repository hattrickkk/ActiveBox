// document.addEventListener("DOMContentLoaded", function(){
// 	document.querySelector('input[type=button]').onclick = function() {
// 		console.log(new Date())
// 	}
// })

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$(".header__burger, .header__menu").toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu__link').click(function (event) {
		$(".header__burger, .header__menu").toggleClass('active');
		$('body').toggleClass('lock');
	});
});

new Swiper('.swiper', {

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	centeredSlides: true,
	initialSlide: 1,
	loop: true,
	autoplay: true,
	speed: 500,
	autoHeight: true,
});