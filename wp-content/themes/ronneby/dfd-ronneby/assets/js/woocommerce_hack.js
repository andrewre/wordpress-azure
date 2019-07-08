var add_to_cart_button;

(function($){
	"use strict";
	
	var dfd_WC = window.dfd_WC || {};
	
	window.dfd_WC = dfd_WC;
	
	dfd_WC.window = $(window);
	dfd_WC.document = $(document);
	dfd_WC.windowWidth = dfd_WC.window.width();
	
	var supports_html5_storage = ( 'sessionStorage' in window && window.sessionStorage !== null );
	if (supports_html5_storage) { sessionStorage.clear(); }
		
	/* Plus-minus buttons customization */
	var initArrows = function() {
		$('.single-product form.cart .quantity, .shop_table .quantity, .woocommerce-grouped-product-list-item__quantity .quantity').each(function(){
			var inputNumber, min, max, $self = $(this);
			if($self.length > 0) {
				$self.prepend('<i class="dfd-icon-down_2 minus">').append('<i class="dfd-icon-up_2 plus">');
				$self.find('.minus').unbind('click').bind('click', function() {
					inputNumber = $(this).siblings('.qty');
					min = inputNumber.attr('min');
					max = inputNumber.attr('max');
					var beforeVal = +inputNumber.val();
					var newVal = (beforeVal > min || !min) ? +beforeVal - 1 : min;
					inputNumber.val(newVal);
					$(this).parent().siblings('.single_add_to_cart_button').attr('data-quantity', newVal);
					if($('.coupon .dfd-submit-wrap .button').length > 0) {
						$('.coupon .dfd-submit-wrap .button').prop("disabled", false);
					}
				});
				$self.find('.plus').unbind('click').bind('click', function() {
					inputNumber = $(this).siblings('.qty');
					min = inputNumber.attr('min');
					max = inputNumber.attr('max');
					var beforeVal = +inputNumber.val();
					var newVal = (beforeVal < max || !max) ? +beforeVal + 1 : max;
					inputNumber.val(newVal);
					$(this).parent().siblings('.single_add_to_cart_button').attr('data-quantity', newVal);
					if($('.coupon .dfd-submit-wrap .button').length > 0) {
						$('.coupon .dfd-submit-wrap .button').prop("disabled", false);
					}
				});
			}
			$self.find('.qty').on('input propertychange',function() {
				$('.single_add_to_cart_button').attr('data-quantity', $(this).val());
			});
			if($('.wcmp-quick-view-wrapper').length > 0)
				$('.wcmp-quick-view-wrapper form.cart .single_add_to_cart_button').removeClass('product_type_simple');
		});
	};
	
	$(document).ready(function(){
		var wooInitDropkick = function() {
			if($('body').hasClass('single-product')) {
				if ($('.ul-dropdown-toggle').length>0) {
					$('.ul-dropdown-toggle').dropkick({mobile: true});
				}
				if ($('.variations .value select').length>0) {
					$('.variations .value select').dropkick({mobile: true});
				}
			}
			if($('body.woocommerce-cart .cart-wrap .shipping select').length > 0) {
				$('body.woocommerce-cart .cart-wrap .shipping select:not(#calc_shipping_country):not(#calc_shipping_state)').dropkick();
			}
		};
		if(!$('html').hasClass('dfd-ie-detected')) {
			wooInitDropkick();
			$('.cart-collaterals > .cover').observeDOM(function() {
				wooInitDropkick();
			});
			$('.variations .value select').observeDOM(function() {
				if ($('.variations .value select').length>0)
					$('.variations .value select').dropkick('refresh');
			});

			$('.variations_form').on('click touchend', '.dfd-reset-vars', function(e) {
				$('table.variations select').dropkick('reset', true);
			});
		}
		
		$('body').on('adding_to_cart', function(trigger, button) {
			add_to_cart_button = button;
		});
		
		$('body').on('added_to_cart', function (trigger) {
			if (add_to_cart_button != undefined) {
				var $woo_entry_thumb = $(add_to_cart_button).parents('li.product').find('div.woo-entry-thumb');
				var $added_to_cart_notice = $('<div class="added-to-cart-notice moon-checkmark">Added to cart</div>');
				
				if ($woo_entry_thumb.length > 0) {
					$woo_entry_thumb.append($added_to_cart_notice);
					$added_to_cart_notice.stop().animate({opacity: 1}, 800).delay( 1800 ).animate({opacity: 0}, 800, function() {$(this).remove()});
				}
				add_to_cart_button = null;
			}
		});
		
		initArrows();
		
		var $toggleVariationsButton = $('.single-product .variations_form .variations_button');
		$('body').on('hide_variation', function () {
			if($toggleVariationsButton.length > 0) {
				$toggleVariationsButton.slideUp(200);
			}
		});
		$('body').on('show_variation', function () {
			if($toggleVariationsButton.length > 0) {
				$toggleVariationsButton.slideDown(200);
			}
		});
	});
	
	var products_li_eq_height = function() {
		$('.products.row').each(function() {
			$(this).find('.product').equalHeights();
		});
	};
	
	$(window).load(products_li_eq_height);
	$(window).on('load resize', products_li_eq_height);
	
	var wrap = $('body.single-product .product .woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image:first-child');
	var wrapLeft, wrapTop, wrapWidth, wrapHeight, largeImage, largeImageWidth, largeImageheight, ratioX, ratioY, largeImageSrc, largeAlt;
	var generateLargeImage = function() {
		largeImageSrc = wrap.find('.wp-post-image').data('large_image');
		largeAlt = wrap.find('.wp-post-image').attr('alt');
		if(largeAlt == '') {
			largeAlt = 'Large image';
		}
		wrap.find('> a').append('<img src="' + largeImageSrc + '" alt="' + largeAlt + '" class="dfd-large-image" />');
	};
	
	var calculateVars = function() {
		setTimeout(function() {
			wrapLeft =  wrap.offset().left;
			wrapTop =  wrap.offset().top;
			wrapWidth =  wrap.width();
			wrapHeight =  wrap.height();
			largeImage = wrap.find('img.dfd-large-image');
			largeImageWidth = largeImage.width();
			largeImageheight = largeImage.height();
			ratioX = largeImageWidth / wrapWidth - 1;
			ratioY = largeImageheight / wrapHeight - 1;
		},100);
	};
	var magnifierMove = function() {
		wrap.mousemove(function(e) {
			if(largeImage) {
				var coordLeft = (e.pageX - wrapLeft) * ratioX;
				if(coordLeft < 0) coordLeft = 0;
				if(coordLeft > largeImageWidth) coordLeft = largeImageWidth;
				var coordTop = (e.pageY - wrapTop) * ratioY;
				if(coordTop < 0) coordTop = 0;
				if(coordTop > largeImageheight) coordTop = largeImageheight;
				largeImage.css({
					'left' : -coordLeft,
					'top' : -coordTop
				});
			}
		});
	};
	
	if(wrap.length > 0) {
		dfd_WC.document.on('ready', magnifierMove);
		dfd_WC.window.on("resize load scroll", calculateVars);
	}

	dfd_WC.initEqHeight = function() {
		var init = function() {
			var $productContainer = $('.single-product.woocommerce #layout .product.type-product'),
				w = dfd_WC.windowWidth;
			
			if(!$productContainer.length) {
				return;
			}
			
			if (w > 800) {
				$productContainer.find('.equalize-me').equalHeights();
			} else {
				$productContainer.find('.equalize-me').equalHeightsDestroy();
			}
		};
		dfd_WC.window.on('load resize', init);
		dfd_WC.window.one('scroll', init);
	};
	
	dfd_WC.initStickInParent = function() {
		if (Modernizr.touch === false && !$('html').is('.lt-ie10, .lt-ie9, .lt-ie8') && dfd_WC.windowWidth > 800) {
			var offset = 0;
			if( ($('#header-container:not(.header-style-5)').length > 0) && ($('#header-container:not(.header-style-8)').length > 0) && ($('#header-container:not(.header-style-11)').length > 0) ) {
				offset += 60;
			}
			if($('#wpadminbar').length > 0) {
				offset += $('#wpadminbar').outerHeight();
			}
			if($('.dfd-frame-line.line-bottom').length > 0) {
				offset += $('.dfd-frame-line.line-bottom').outerHeight();
			}
			$('.woocommerce.single-product #main-content .product .dfd-single-share-fixed .rrssb-buttons').stick_in_parent({
				parent: '#main-content .product',
				sticky_class: 'sticky',
				offset_top: offset,
				bottoming: true,
				inner_scrolling: false
			});
			$('.dfd-single-product-desc-wrap .summary').stick_in_parent({
				sticky_class: 'sticky',
				offset_top: offset + 20,
				bottoming: true,
				inner_scrolling: false
			});
		}
	};
	
	dfd_WC.changeProdImageVariable = function() {
		var $productContainer = $('.single-product.woocommerce #layout .product.type-product'),
			$trigerImages = $productContainer.find('.images');
		
		$trigerImages.on('woocommerce_gallery_reset_slide_position', function() {
			var $src = $productContainer.find('.woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image a').attr('href');
			$productContainer.find('.dfd-large-image').attr('src', $src);
			dfd_WC.window.resize();
		});
	};

	dfd_WC.singleProdThumbCaroucel = function() {
		if($('.single-product.woocommerce #layout .product.type-product .dfd-single-product-thumbnails-wrap').length > 0) {
			var $productContainer = $('.single-product.woocommerce #layout .product.type-product'),
				$container = $productContainer.find('.single-product-thumbnails'),
				$horisontal = false,
				$html,
				$i = 0,
				$dataThumbFirst;

			if($productContainer.find('.dfd-single-product-media-wrap').hasClass('thumbs-left')) {
				$horisontal = true;
			}

			$dataThumbFirst = $productContainer.find('.woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image').data('thumb');

			$productContainer.find('.woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image a').attr('data-rel', 'prettyPhoto[woo_single_gal]').attr('data-thumb', $dataThumbFirst).addClass('prettyPhoto');

			$productContainer.find('.dfd-single-product-thumbnails-wrap').append('<div class="hide"></div>');

			$container.find('.woocommerce-product-gallery__image').each(function() {
				$i++;
				if( $i === 1 ) {
					return;
				}

				var $self = $(this),
					$img = $self.find('img'),
					$fullImg = $img.data('src'),
					$thumbImg = $img.attr('src');

				$html = '<a href="' + $fullImg + '" data-thumb="' + $thumbImg + '" data-rel="prettyPhoto[woo_single_gal]"></a>';
				$productContainer.find('.hide').append($html);
			});

			$('body').trigger('post-load');

			$container.products_thumbnails_carousel(4, $horisontal);
			$container.find('.woocommerce-product-gallery__image a').each(function() {
				var $this = $(this);
				$this.click(function(e) {
					setTimeout(function() {
						dfd_WC.initEqHeight();
						dfd_WC.window.resize();
					},100);
					e.preventDefault();
					var url = $this.attr('href');
					var urlFull = $this.find('img').attr('data-large_image');

					$this.parent().parents('.images').find('.woocommerce-product-gallery__wrapper img.wp-post-image').attr('src', url).attr('srcset', url);
					$productContainer.find('.woocommerce-product-gallery__wrapper img.dfd-large-image').attr('src', urlFull);
				});
			});
		}
	};
	
	dfd_WC.initWooThumbsCarousel = function() {
		var init = function() {
			var $carousel = $('.woo-entry-thumb-carousel');
			if(!$carousel.hasClass('slick-initialized')) {
				var speed = $carousel.data('speed') ? $carousel.data('speed') : 800;
				$carousel.slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					fade: true,
					autoplay: true,
					autoplaySpeed: speed,
					pauseOnHover: false
				});
			}
		};
		init();
	};
	
	$('.variations_form').on('hide_variation show_variation', function() {
		setTimeout(function() {
			dfd_WC.window.trigger('resize');
		}, 500);
	});
	
	$('body').on('post-load', function() {
		dfd_WC.initWooThumbsCarousel();
	});
	
	dfd_WC.window.on('resize', function() {
		setTimeout(function() {
			$(document.body).trigger('sticky_kit:recalc');
		}, 300);
	});
	
	dfd_WC.window.load(function() {
		dfd_WC.initStickInParent();
	});
	
	dfd_WC.document.ready(function() {
		generateLargeImage();
		dfd_WC.changeProdImageVariable();
		dfd_WC.singleProdThumbCaroucel();
		dfd_WC.initWooThumbsCarousel();
	});
	
	dfd_WC.init = function() {
		dfd_WC.initEqHeight();
	};
	
	dfd_WC.init();
	
	$(document.body).on('updated_wc_div cart_page_refreshed',function() {
		initArrows();
		dfd_WC.initWooThumbsCarousel();
		$( document ).trigger('change input');
	});
	
})(jQuery);
