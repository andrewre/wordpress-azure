(function ($) {
	'use strict';
	
	if (window.dfd_pagination_data == undefined) {
		return false;
	}
	
	$(document).ready(function() {
		
		var page_num = parseInt(dfd_pagination_data.startPage) + 1;
		var max_pages = parseInt(dfd_pagination_data.maxPages);
		var next_link = dfd_pagination_data.nextLink;
		
		var container = dfd_pagination_data.container;
		var $container = $(container);
		var container_has_isotope = false;
		
		var $popup = $('.dfd-lazy-load-pop-up');
		
		if (page_num > max_pages) {
			$popup.addClass('visible');
			setTimeout(function() {
				$popup.removeClass('visible');
			},1000);
		}
		
		var windowWidth, windowHeight, documentHeight, scrollTop, containerHeight, containerOffset, $window = $(window);
		
		var recalcValues = function() {
			windowWidth = $window.width();
			windowHeight = $window.height();
			documentHeight = $('body').height();
			containerHeight = $container.height();
			containerOffset = $container.offset().top;
		};
		
		recalcValues();
		$window.resize(recalcValues);
		
		$window.bind('scroll', function(e) {
			e.preventDefault();
			recalcValues();
			scrollTop = $window.scrollTop();
			
			if (page_num <= max_pages && !$popup.hasClass('visible') && scrollTop < documentHeight && scrollTop > (containerHeight + containerOffset - windowHeight) && !$popup.hasClass('last-page')) {
				$.ajax({
					type: 'GET',
					url: next_link,
					dataType: 'html',
					beforeSend: function() {
						$popup.addClass('visible');
					},
					complete: function(XMLHttpRequest) {
						$popup.removeClass('visible');
						
						if (XMLHttpRequest.status == 200 && XMLHttpRequest.responseText != '') {
							page_num++;
							next_link = next_link.replace(/\/page\/[0-9]?/, '/page/'+ page_num);
							
							if (page_num > max_pages) {
								$popup.addClass('last-page');
							}
							if ($(XMLHttpRequest.responseText).find(container).length > 0) {
								container_has_isotope = (typeof($container.isotope) !== 'undefined');
								$(XMLHttpRequest.responseText).find(container).children().each(function() {
									if (!container_has_isotope) {
										$container.append($(this));
									} else {
										$container.isotope( 'insert', $(this) );
									}
								});
								$('body').trigger('post-load');
							}
						}
					}
				});
			}
		});
	});
}(jQuery));