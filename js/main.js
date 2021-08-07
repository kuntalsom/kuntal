jQuery(document).ready(function($){
	
	$(document).ready(function() {
		$('#nav').onePageNav();
	});
	
	jQuery('.hamburgermenu').click(function($){
		jQuery(this).toggleClass('open');
		jQuery('.nav').toggleClass('open');
	});
	jQuery('.mainmenu li a').click(function($){
		jQuery('.hamburgermenu').removeClass('open');
		jQuery('.nav').removeClass('open');
	});
	
	$(".down-arrow").click(function() {
		$('html,body').animate({
			scrollTop: $(".about").offset().top},
			'slow');
	});
	
	var $grid = $('.grid').isotope({
	itemSelector: '.element-item',
	layoutMode: 'fitRows'
	});
	// filter functions
	var filterFns = {
	ium: function() {
		var name = $(this).find('.name').text();
		return name.match( /ium$/ );
	}
	};
	// bind filter button click
	$('.filters-button-group').on( 'click', 'button', function() {
  		var filterValue = $( this ).attr('data-filter');
  		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		$( this ).addClass('is-checked');
	  });
	});
	
	
	var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       10,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

  

});