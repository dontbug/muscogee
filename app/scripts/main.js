// Window height
function adjustHeight() {
	var windowHeightObject = $('.slider-box');
	var windowHeight = $(window).height();

	windowHeightObject.css('height', windowHeight);
	//console.log(windowHeight);
}
adjustHeight();


$(document).ready(function () {

	var firstSlider = $("#firstSlider");

	firstSlider.owlCarousel({
		navigation : true,
		slideSpeed : 500,
		paginationSpeed : 400,
		singleItem:true,
		afterAction: function(){

			// Social remove class
			$('.first-aspect').removeClass('active');
			// Right content SlideUp
			$('.slider-right-box').slideUp(1);

			this
				.$owlItems
				.removeClass('active');


			//add class active
			this
				.$owlItems //owl internal $ object containing items
				.eq(this.currentItem)
				.addClass('active');

			// Right content slideDown
			function rightBoxSlide() {
				$('.slider-right-box').slideDown(1000, function() {
					$('.social').addClass('active');
					$('.first-aspect').addClass('active');
				});
			}
			setTimeout(rightBoxSlide, 300);

		}

	});



	var secondSlider = $("#secondSlider");

	secondSlider.owlCarousel({
		navigation : true,
		slideSpeed : 500,
		paginationSpeed : 400,
		singleItem:true,
		afterAction: function(){

			// Social remove class
			$('.second-aspect').removeClass('active');
			$('.solid-lines').removeClass('to-right');
			// Right content SlideUp
			//$('.slider-right-box').slideUp(1);

			this
				.$owlItems
				.removeClass('active');


			//add class active
			this
				.$owlItems //owl internal $ object containing items
				.eq(this.currentItem)
				.addClass('active');

			function solidLines() {
				$('.second-aspect').addClass('active');
				function slLnToRight() {
					$('.solid-lines').addClass('to-right');
					function slLnToLeft() {
						$('.solid-lines').removeClass('to-right');
					}
					setTimeout(slLnToLeft, 3000);
				}
				setTimeout(slLnToRight, 4000);
			}
			setTimeout(solidLines, 300);
		}
	});

});
