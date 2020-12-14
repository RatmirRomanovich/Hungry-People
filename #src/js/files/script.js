
let slider_about = new Swiper('.swiper-container', {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	slidesPerView: 1,
	speed: 800,
	centeredSlides: true,
	loop: true,
	preloadImages: false,
	lazy: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
