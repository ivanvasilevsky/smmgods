$(document).ready(function() {
	$('.keys__left-img').magnificPopup({
		type: 'image',

		removalDelay: 300,
		mainClass: 'mfp-fade-size',
  });

	$('.keys__right-item').magnificPopup({
		type: 'image',

 		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
});