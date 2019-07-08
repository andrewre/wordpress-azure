(function ($) {
	"use strict";
	$.fn.changeWords = function (options) {
		var settings = $.extend({
			time: 1500,
			animate: "zoomIn",
			afterChangeAnimate: "zoomIn",
			selector: "span"
		}, options);
		var wordCount = $(settings.selector, this).size();
		var words = $(settings.selector, this);
		words.filter(function () {
			return $(this).attr("data-id") != "1"
		}).css("display", "none");
		var count = 1;
		setInterval(function () {
			++count;
			var wordOrder = count;
			words.filter(function () {
				return $(this).attr("data-id") != wordOrder
			}).removeClass(settings.animate).addClass("dfd-text-animated " + settings.afterChangeAnimate).trigger('reinit-chaffle');
				words.filter(function () {
					return $(this).attr("data-id") != wordOrder
				}).css("display", "none").removeClass();
				words.filter(function () {
					return $(this).attr("data-id") == wordOrder
				}).addClass("dfd-text-animated " + settings.animate).css({"display": "inline-block",'opacity':'1'}).trigger('init-chaffle');
			if (count == wordCount) {
				count = 0;
			}
		}, settings.time);
	}
}(jQuery));
/*---------------------------------
 DOM mutation observer
 -----------------------------------*/
(function ($) {
	'use strict';
	$.fn.observeDOM = function(callback){
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
			eventListenerSupported = window.addEventListener,
			$self = $(this)[0];

		if($self) {
			if( MutationObserver ){
				// define a new observer
				var obs = new MutationObserver(function(mutations){
					if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
						callback();
				});
				// have the observer observe foo for changes in children
				obs.observe( $self, { childList:true });
			} else if( eventListenerSupported ){
				$self.addEventListener('DOMNodeInserted', callback, false);
				$self.addEventListener('DOMNodeRemoved', callback, false);
			}
		}
		return this;
	};
})(jQuery);
/* Equal width */
(function($){
	"use strict";
	/* Pricing table columns width */
	$.fn.dfdEqWidth = function() {
		var $columns = $(this);
		var width = (100 / $columns.length);
		$columns.css('width', width+'%');
		
		return this;
	};
})(jQuery);

(function($){
	"use strict";
	$.fn.products_thumbnails_carousel = function(num, ver) {
		var obj = $(this);
		var responsive_point_one = (num > 1) ? num - 1 : 1;
		var responsive_point_two = (responsive_point_one > 1) ? responsive_point_one - 1 : 1;
		obj.slick({
			infinite: true,
			slidesToShow: num,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			autoplay: true,
			autoplaySpeed: 2000,
			vertical: ver,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 800,
					settings: {
						slidesToShow: responsive_point_one,
						slidesToScroll: 1,
						infinite: true,
						arrows: false,
						dots: false,
						vertical: false
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: responsive_point_two,
						slidesToScroll: 1,
						arrows: false,
						dots: false,
						vertical: false
					}
				}
			]
		});
		
		return this;
	};
})(jQuery);