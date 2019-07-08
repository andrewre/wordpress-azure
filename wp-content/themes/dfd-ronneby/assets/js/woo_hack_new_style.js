(function($){
	"use strict";
	$(document).ready(function() {
		var singleProdTagBlock = function() {
			var $tagContainer = $('.single-product.woocommerce #layout .product.type-product .product_meta .tagged_as');
			if($tagContainer.length > 0) {
				var $tag = $tagContainer.find('a'),
					htmlEl = '',
					href, rel, text;

				$tag.each(function() {
					href = $(this).attr('href');
					rel = $(this).attr('rel');
					text = $(this).text();
					htmlEl += '<a href="' + href + '" rel="' + rel + '">' + text + '</a>';
				});
				if(!htmlEl == '') {
					$tagContainer.html(htmlEl);
				}
			}
		};
		singleProdTagBlock();
	});
})(jQuery);
