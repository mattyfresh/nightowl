$(document).ready(init);

		
		//All three of the circles

		var $circles = $('#circles-wrapper').find('.circles');


		function init() {

			//function  to handle nav circles

		function leftCircleChange() {

				if($('#slider-ul').css('margin-left') == "0px") {

				$('.circles').removeClass('selected');
				$($circles[2]).addClass('selected');
			} else if ($('#slider-ul').css('margin-left') == "-800px") {

				$('.circles').removeClass('selected');
				$($circles[0]).addClass('selected');

			} else {
				$('.circles').removeClass('selected');
				$($circles[1]).addClass('selected');
			}
		}
		function rightCircleChange() {

				if($('#slider-ul').css('margin-left') == "0px") {

				$('.circles').removeClass('selected');
				$($circles[1]).addClass('selected');
			} else if ($('#slider-ul').css('margin-left') == "-800px") {

				$('.circles').removeClass('selected');
				$($circles[2]).addClass('selected');

			} else {
				$('.circles').removeClass('selected');
				$($circles[0]).addClass('selected');
			}
		}


			//first give selected class styling to first circle

			$('#moveLeft').on('click', function() {

				//wait .5s to let animation finish, animate only when you're not at the last li in the slider

				setTimeout(function() {
					if ($('#slider-ul').css('margin-left') != '0px') {
						
						$('#slider-ul').animate({'margin-left':'+=800px'}, 500);

						leftCircleChange();
						
					} else {
						//if at the last slide, go back to the first
						$('#slider-ul').animate({'margin-left':'-1600px'}, 500);

						leftCircleChange();
						
					}
				}, 500);

				


			});


			$('#moveRight').on('click', function() {


				setTimeout(function() {

				if ($('#slider-ul').css('margin-left') != "-1600px") {
				
					$('#slider-ul').animate({'margin-left':'-=800px'}, 500);

					rightCircleChange();
					
				} else {
					$('#slider-ul').animate({'margin-left':'0px'}, 500);

					rightCircleChange();
					
				}


				}, 500);

				

			});

			//set up the clickable circles to animate to appropriate slide

			$('#circle-one').on('click', function() {

				$('#slider-ul').animate({'margin-left':'0px'}, 500);
				$('.circles').removeClass('selected');
				$(this).addClass('selected');

			});
			
			$('#circle-two').on('click', function() {

				$('#slider-ul').animate({'margin-left':'-800px'}, 500);
				$('.circles').removeClass('selected');
				$(this).addClass('selected');


			});
			$('#circle-three').on('click', function() {

				$('#slider-ul').animate({'margin-left':'-1600px'}, 500);
				$('.circles').removeClass('selected');
				$(this).addClass('selected');


			});
	}

	