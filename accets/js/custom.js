		// owl-carousel JS
		var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:4,
		    loop:true,
		    margin:10,
		    autoplay:true,
		    autoplayTimeout:2000,
		    autoplayHoverPause:true
		});
		$('.play').on('click',function(){
		    owl.trigger('play.owl.autoplay',[1000])
		})
		$('.stop').on('click',function(){
		    owl.trigger('stop.owl.autoplay')
		});

		// scrollToTop

		const scrollTop = document.querySelector('#scrollToTop');

		window.addEventListener('scroll', scrolltopfun);

		function scrolltopfun(){
			if ( window.pageYOffset > 600 ){
				scrollTop.style.display = 'block';
			}else{
				scrollTop.style.display = 'none';
			}
		}

		scrollTop.addEventListener('click', backToTop);

		function backToTop(){
			window.scrollTo(0, 'smoth');
		}
