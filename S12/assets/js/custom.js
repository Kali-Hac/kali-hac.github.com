
  $(document).on('ready', function() {
	'use strict';

  	//Pre-loader
	$(window).on('load', function() {
	 	$('.loader').fadeOut();
		$('.preloader').delay(250).fadeOut('slow');
		$('body').delay(250).css({'overflow':'visible'});
	 });

	
	//Fixed menu
  	var fixed_top = $(".main-menu");

	$(window).on('scroll', function(){
		
		if( $(this).scrollTop() > 100 ){	
			fixed_top.addClass("menu-bg");
		}
		else{
			fixed_top.removeClass("menu-bg");
		}
		
	});


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a.page-scroll').on('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});


	//Isotope activation js codes
	var $gellary_img = $('.portfolio_items').isotope({
	  itemSelector: '.portfolio_item',
	  percentPosition: true,
	  transitionDuration: '0.5s',
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.portfolio_item',
		gutter: 15
	  },
	  getSortData: {
		name: '.name',
		symbol: '.symbol',
		number: '.number parseInt',
		category: '[data-category]',
		weight: function( itemElem ) {
		  var weight = $( itemElem ).find('.weight').text();
		  return parseFloat( weight.replace( /[\(\)]/g, '') );
		}
	  }
	});

	// filter functions
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
		var number = $(this).find('.number').text();
		return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
		var name = $(this).find('.name').text();
		return name.match( /ium$/ );
	  }
	};

	// bind filter button click
	$('.portfolio-menu').on( 'click', 'li', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $gellary_img.isotope({ filter: filterValue });
	});



	// change is-checked class on buttons
	$('.portfolio-menu').each( function( i, liList ) {
	  var $liList = $( liList );
	  $liList.on( 'click', 'li ', function() {
		$liList.find('.active').removeClass('active');
		$( this ).addClass('active');
	  });
	});	
	
	
	
	//lightcase
	$('a[data-rel^=lightcase]').lightcase();


	//for wow
	new WOW().init();
	

	//Testimonial Slider
	var swiper = new Swiper('.testimonial-slider', {
	    slidesPerView: 1,
	    autoplay: 2000,
	    loop: true,
	    pagination: '.testimonial-pagination',
        paginationClickable: true

	    });

	//Client Slider
	var swiper = new Swiper('.client-slider', {
	    slidesPerView: 5,
	    spaceBetween: 15,
	    autoplay: 2000,
	    loop: true,
	    breakpoints: {
		    // when window width is <= 320px
		    320: {
		      slidesPerView: 1
		    },
		    // when window width is <= 480px
		    480: {
		      slidesPerView: 2
		    },
		    // when window width is <= 767px
		    767: {
		      slidesPerView: 3
		    },
		    // when window width is <= 991px
		    991: {
		      slidesPerView: 4
		    }
		  }
	    });


  });
