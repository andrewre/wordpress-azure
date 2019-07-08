;
var screen_medium = 800;
(function ($, window, undefined) {
    'use strict';

    $(document).ready(function () {
		$.fn.placeholder ? $('input, textarea').placeholder() : null;
    });

    // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
    if (Modernizr.touch && !window.location.hash) {
        $(window).load(function () {
            setTimeout(function () {
                window.scrollTo(0, 1);
            }, 0);
        });
    }
	
})(jQuery, this);

if (!window.requestAnimationFrame) {

	window.requestAnimationFrame = (function () {

		return window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {

				window.setTimeout(callback, 1000 / 60);

			};

	})();
}

/*---------------------------------
 Correct OS & Browser Check
 -----------------------------------*/

var ua = navigator.userAgent,
    checker = {
        os: {
            iphone: ua.match(/iPhone/),
            ipod: ua.match(/iPod/),
            ipad: ua.match(/iPad/),
            blackberry: ua.match(/BlackBerry/),
            android: ua.match(/(Android|Linux armv6l|Linux armv7l)/),
            linux: ua.match(/Linux/),
            win: ua.match(/Windows/),
            mac: ua.match(/Macintosh/)
        },
        ua: {
            ie: ua.match(/MSIE/),
            ie6: ua.match(/MSIE 6.0/),
            ie7: ua.match(/MSIE 7.0/),
            ie8: ua.match(/MSIE 8.0/),
            ie9: ua.match(/MSIE 9.0/),
            ie10: ua.match(/MSIE 10.0/),
            opera: ua.match(/Opera/),
            firefox: ua.match(/Firefox/),
            chrome: ua.match(/Chrome/),
            safari: ua.match(/(Safari|BlackBerry)/)
        }
    };

(function($) {
	"use strict";
	var dfd_ronneby = window.dfd_ronneby || {};
	
	window.dfd_ronneby = dfd_ronneby;
	
	dfd_ronneby.window = $(window);
	dfd_ronneby.document = $(document);
	dfd_ronneby.windowHeight = dfd_ronneby.window.height();
	dfd_ronneby.windowWidth = dfd_ronneby.window.width();
	dfd_ronneby.scrollbarWidth = 0;
	dfd_ronneby.windowScrollTop = 0;
	dfd_ronneby.sameOrigin = true;
	dfd_ronneby.isSafari = false;
	
	var Modernizr = window.Modernizr;
	
	dfd_ronneby.initSizing = function() {
		var ua = window.navigator.userAgent;
		var ie_version;

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			ie_version =  parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
			$('html').addClass('dfd-ie-detected ie-'+ie_version);
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
			// IE 11 => return version number
			var rv = ua.indexOf('rv:');
			ie_version =  parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
			$('html').addClass('dfd-ie-detected ie-'+ie_version);
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
		   // IE 12 => return version number
		   ie_version =  parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
			$('html').addClass('dfd-ie-detected ie-'+ie_version);
		}
		
		dfd_ronneby.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		
		try {
			dfd_ronneby.sameOrigin = window.parent.location.host == window.location.host;
		} catch (e) {
			dfd_ronneby.sameOrigin = false;
		}
		
		var recalcWindowOffset = function() {
			dfd_ronneby.windowScrollTop = dfd_ronneby.window.scrollTop();
		};

		dfd_ronneby.document.ready(function() {
			var div = document.createElement('div');

			div.style.overflowY = 'scroll';
			div.style.width =  '50px';
			div.style.height = '50px';

			div.style.visibility = 'hidden';

			document.body.appendChild(div);
			dfd_ronneby.scrollbarWidth = div.offsetWidth - div.clientWidth;
			document.body.removeChild(div);

		});

		var recalcWindowInitHeight = function() {
			dfd_ronneby.windowHeight = dfd_ronneby.window.height();
			dfd_ronneby.windowWidth = dfd_ronneby.window.width() + dfd_ronneby.scrollbarWidth;

			recalcWindowOffset();
		};

		recalcWindowInitHeight();

		recalcWindowOffset();
		
		dfd_ronneby.window
				.on("resize load", recalcWindowInitHeight)
				.on("scroll", recalcWindowOffset);
		
		dfd_ronneby.window.on("load", function() {
			$('body').trigger('reinit-waypoint');
			if(window.top != window.self && $('body').hasClass('single-my-product')) {
				$('#header-container, #footer-wrap, #wpadminbar').hide();
			}
		});
		var timer, el = $('body'),
			flag = false;
		
		dfd_ronneby.window.on('scroll', function() {
			if(!Modernizr.touch) {
				if (!flag) {
					flag = true;
					el.addClass('scrolling');
				}
				clearTimeout(timer);
				timer = setTimeout(function() {
					el.removeClass('scrolling');
					flag = false;
				}, 200);
			}
		});
	};
	
	dfd_ronneby.initfluidvids = function() {
		var init = function() {
			fluidvids.init({selector: 'iframe:not(.dfd-bg-frame)', players: ['www.youtube.com', 'player.vimeo.com']})
		};
		
		dfd_ronneby.document.on('ready', init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initShortcodes = function() {
		var init = function() {
			initPriceList();
			sbDfdTab();
			initImageLayersModule();
			initCountdown();
			initServices();
			initMilestone();
			initHotspot();
			initProgressBar();
			initPieCharts();
			initAnimText();
			initFacts();
			initRowDelimiterBg();
			initContactForm();
			initChaffle();
			initImageModule();
			initDropkick();
			initNewsSlick();
			initNewsIsotope();
			initAudioplayer();
			initFacts();
			initDelimiterShortcode();
			initImageCarousel();
			initClientLogo();
			initDfdTimeline();
		},
		initPriceList = function() {
			var init = function() {
				$('.dfd-price-wrap .dfd-price-block').each(function() {
					var $self = $(this);

					if(!$self.find('.dfd-price-cover')) return;

					var $container = $self.find('.dfd-price-cover'),
						$thumb = $self.find('.thumb-wrap'),
						titleWidth = 0,
						priceWidth = 0,
						titleFont = 0,
						titleLine = 0,
						delimBottom = 0,
						elTextHeight = $self.find('.text-wrap').height(),
						elThumbHeight = $thumb.height();

					if(elTextHeight < elThumbHeight) {
						$self.find('.text-wrap').addClass('small-img');
						$self.css("height", elThumbHeight + "px");
					}

					if($container.find('.price-title')) {
						titleWidth = $container.find('.price-title').width();
							// Height of delimiter	
						titleFont = parseFloat($container.find('.price-title').css('font-size'));
						titleLine = parseFloat($container.find('.price-title').css('line-height'));
						delimBottom = (titleLine - titleFont) / 2;
					};
					if($container.find('>.amount')) {
						priceWidth = $container.find('.amount').width();
					}
					if($("body").hasClass("rtl")) {
						$container.find('.price-delimeter').css({
							'right': titleWidth,
							'left': priceWidth,
							'bottom': delimBottom,
							'padding-left': priceWidth + 20
						});
					}else {
						$container.find('.price-delimeter').css({
							'left': titleWidth,
							'right': priceWidth,
							'bottom': delimBottom
						});
						$container.find('.price-title').css({
							'padding-right': priceWidth + 20
						});
					};
					$container.find('.price-delimeter').css({
						'left': titleWidth,
						'right': priceWidth,
						'bottom': delimBottom
					});
				});
			};
			init();

			dfd_ronneby.window.on('load resize', init);

			$('body').on('tabs-reinited', function() {
				setTimeout(function() {
					init();
				},200);
			});
		},
		sbDfdTab = function() {
			$(".dfd_tabs_block .dfd_tta_tabs").find(".vc_tta-tabs-list").on("click", ".vc_tta-tab:not(.vc_active)", function(){
				$('body').trigger('tabs-reinited');

				$(this).siblings().removeClass("vc_active");
				$(this).addClass("vc_active");

				var id = $(this).find("a").attr("href");

				var main_block = $(this).parent().parent().parent();

				var next_active_tab = main_block.find(id),
					next_active_tabHeight = next_active_tab.height();

				setTimeout(function(){
					main_block.find(".vc_tta-panels .vc_tta-panel").removeClass("vc_active");
					main_block.find(".vc_tta-panel-body").attr("style", "");
					next_active_tab.addClass("vc_active");
					if(dfd_ronneby.windowWidth > 767) {
						next_active_tab.parent().css({height: next_active_tabHeight});
					}
				},150);
			});
				/*max width 767*/
			$('.dfd_tabs_block .dfd_tta_tabs').find('.vc_tta-panel').on('click touchend', '.vc_tta-panel-title a', function() {
				$('body').trigger('tabs-reinited');

				var main_block = $(this).parent().parent().parent();

				main_block.siblings().removeClass("vc_active");
				main_block.addClass("vc_active");
			});
			var init = function() {
				$('.dfd_tabs_block').each(function() {
					var tabContainer = $(this).find('.dfd_tta_tabs'),
						activeTab = tabContainer.find('.vc_tta-panels-container .vc_tta-panels .vc_tta-panel.vc_active');

					if(dfd_ronneby.windowWidth > 767) {
						activeTab.parent().css({'height': activeTab.find('.vc_tta-panel-body').height()});
					} else {
						activeTab.parent().css({'height': 'auto'});
					}
				});
			};
			$('body').on('click','.dfd_tabs_block .dfd_tta_tabs .vc_tta-tabs-list a',function() {
				var selector = $(this).data('vc-target'),
					$container = $(selector),
					$panel = $container.find('.vc_tta-panel-body');

				$container.parent().css({'height': $panel.height()});
			});

			dfd_ronneby.window.on('load resize', function() {
				init();
			});
			$('body').on('post-load', init);
		},
		initImageLayersModule = function() {
			$('.dfd-image-layers-wrap').each(function() {
				var $container = $(this),
					layerWidth = 0,
					initImageLayers = function() {
						if(typeof $.fn.equalHeights != 'undefined') {
							$container.find('.dfd-layer-container').equalHeights();
						}

						if(typeof $.fn.waypoint != 'undefined') {
							$container.waypoint(function () {
								$container.addClass('layer-animate');
							}, {triggerOnce: true, offset: '70%'});
						}
					},
					imageSizing = function() {
						$container.find('.dfd-layer-item').each(function(){
							var $el = $(this);

							if($el.width() > layerWidth) {
								layerWidth = $el.width();
							}
						});

						$container.css({'width': layerWidth});
					};

				dfd_ronneby.window.on('load', function() {
					imageSizing();
					initImageLayers();
				});

				dfd_ronneby.window.on('resize', initImageLayers);

				$('body').on('post-load', function() {
					imageSizing();
					initImageLayers();
				});
			});
		},
		initCountdown = function() {
			$('.dfd-countdown-wrap').each(function() {
				var $self = $(this),
					date = $self.data('date'),
					onfinishHtml = $self.data('finish-text'),
					html = $self.find('.dfd-countdown-html').html();

				$self.find('.dfd-countdown-html').remove();

				$self.countdown(date).on('update.countdown', function (event) {
					$(this).html(event.strftime(html));
					/*$(this).countdown('stop');*/
				}).on('finish.countdown', function () {
					$(this).html('<h3>' + onfinishHtml + '</h3>');
				});
			});
		},
		initServices = function() {
			var init = function() {
				$('.dfd-service-module-wrap').each(function(){
					$(this).find('.dfd-equalize-height').equalHeights();
				});
				
				if(dfd_ronneby.isSafari) {
					$('.dfd-service-module-wrap').addClass('dfd-services-safari');
				}
			};
			dfd_ronneby.window.on('load resize', init);
		},
		initMilestone = function() {
			var init = function() {
				$('.dfd-milestone-wrap').each(function(){
					$(this).find('.dfd-equalize-height').equalHeights();
				});
			};
			init();
			setTimeout(function() {
				init();
			}, 100);
			dfd_ronneby.window.on('resize', init);
		},
		initHotspot = function() {
			var initOffsets = function() {
				$('.dfd-hotspot-shortcode').each(function() {
					$(this).find('.HotspotPlugin_Hotspot').each(function(index) {
						var $self = $(this);
						if(!Modernizr.touch && dfd_ronneby.windowWidth > 800) {
							if(!$self.hasClass('animation-done')) {
								$self.css('opacity', '0');
							}
							$self.waypoint(function () {
								if(!$self.hasClass('animation-done')) {
									$self.addClass('animation-done')
										.velocity('transition.slideUpBigIn',{
											display: 'block',
											opacity: '1',
											delay: index * 200,
											complete: function(el) {
												$(el).css({
													'-webkit-transform': 'none',
													'-moz-transform': 'none',
													'-o-transform': 'none',
													'transform': 'none'
												});
											}
										});
								}
							}, {offset: '95%'});
						}
					});
				});
				$('.dfd-hotspot-shortcode .HotspotPlugin_Hotspot').each(function(index) {
					var $self = $(this),
						$tooltip = $self.find('> div'),
						selfWidth = $tooltip.outerWidth(),
						selfOffset = $tooltip.offset();

					$tooltip.removeClass('dfd-hotspot-left').removeClass('dfd-hotspot-right');

					if(selfOffset.left <= 0 && selfOffset.left + selfWidth > dfd_ronneby.windowWidth) {
						$tooltip.addClass('dfd-hotspot-outsite');
					} else if(selfOffset.left <= 0) {
						$tooltip.addClass('dfd-hotspot-left');
					} else if(selfOffset.left + selfWidth > dfd_ronneby.windowWidth) {
						$tooltip.addClass('dfd-hotspot-right');
					}
				});
			};
			$('.dfd-hotspot-shortcode').each(function() {
				var $self = $(this),
					hotspotClass = $self.data('hotspot-class') ? $self.data('hotspot-class') : 'HotspotPlugin_Hotspot',
					hotspotContent = $self.data('hotspot-content') ? $self.data('hotspot-content') : '',
					action = $self.data('action') ? $self.data('action') : 'hover';

				if(hotspotContent != '' && !$self.find('.dfd-hotspot-image-cover').hasClass('dfd-htospot-inited')) {
					$self.find('.dfd-hotspot-image-cover').addClass('dfd-htospot-inited').hotspot({
						hotspotClass: hotspotClass,
						interactivity: action,
						data: decodeURIComponent(hotspotContent)
					});
				}
			});
			$('body').on('dfd-hotspot-inited', initOffsets);
			initOffsets();
			dfd_ronneby.window.on('resize', initOffsets);
		},
		initProgressBar = function() {
			if ('undefined' !== typeof($.fn.waypoint)) {
				$('.dfd-progressbar').each(function () {
					var current = $(this);
					$(this).waypoint(function () {
						var bar = current.find('.meter'),
							val = bar.data('percentage-value');

						setTimeout(function () {
							bar.css({"width": val + '%'});
						}, 100);
					}, {offset: '85%'});
				});
			}
		},
		initPieCharts = function() {
			$('.dfd-piecharts').each(function() {
				var $current_chart = $(this);
				$current_chart.on('on-waypoin', function () {
					if (!$current_chart.hasClass('animated')) {
						var $animation = {duration: 1700};
						var count_html = $current_chart.find('.piecharts-number');
						if ($current_chart.hasClass('circle-off-animation')){
							$animation = {duration: 0};
						}
						if(false == $animation){
							count_html.html(count_html.data('max') +  '<span>'+count_html.data('units')+'</span>');
							$current_chart.addClass('animated');
						}
						$current_chart.circleProgress({
								startAngle: -Math.PI / 4 * 2,
								emptyFill: $current_chart.data('emptyfill'),
								animation: $animation
							}
						).on('circle-animation-progress', function (event, progress) {
							count_html.html(parseInt((count_html.data('max')) * progress) + '<span>'+count_html.data('units')+'</span>'
							);
						}).on('circle-animation-end', function (event) {
							$current_chart.addClass('animated');
						});
					}
				});
			});
		},
		initAnimText = function() {
			$('.animated-test-module .call-on-waypoint').each(function() {
				var $block = $(this);

				$block.on('on-waypoin', function () {
					if($block.hasClass('onit') === false) {
						setTimeout(function() {
							$block.addClass('onit');
						}, 500);
					}
				});
			});
		},
		initFacts = function() {
			$('.fact-number .number.call-on-waypoint:not(.circle)').each(function() {
				var $number = $(this);
				var start = $number.attr('data-start');
				var end = $number.attr('data-end');
				var speed = parseInt($number.attr('data-speed'));

				$number.on('on-waypoin', function () {	
					$({value: start}).animate({value: end}, {
							duration: speed,
							easing: 'linear',
							step: function() {
								$number.text(Math.floor(this.value)).trigger('change');
							},
							complete: function() {
								$number.text(Math.floor(this.value)).trigger('change');
							}
						});
				});
			});
			$('.fact-number .number.circle.call-on-waypoint').each(function() {
				if (dfd_ronneby.windowWidth <= screen_medium) return false;

				var $number = $(this);
				var start = $number.attr('data-start');
				var end = $number.attr('data-end');
				var speed = parseInt($number.attr('data-speed'));

				var $input = $number.find($number.attr('data-knob'));
				$input.val(Math.ceil(start)).trigger('change');

				$number.on('on-waypoin', function () { 
					$({value: start}).animate({value: end}, {
						duration: speed,
						easing: 'swing',
						step: function() {
							$input.val(Math.ceil(this.value)).trigger('change');
							$number.text(Math.floor(this.value)).trigger('change');
						},
						complete: function() {
							$input.val(Math.ceil(this.value)).trigger('change');
							$number.text(Math.floor(this.value)).trigger('change');
						}
					});
				});
			});
		},
		initRowDelimiterBg = function() {
			$('.vc-row-delimiter-top-left, .vc-row-delimiter-top-right, .vc-row-delimiter-bottom-left, .vc-row-delimiter-bottom-right').each(function() {
				var $delimiters = $(this),
					bg_color = $delimiters.parents('.vc-row-wrapper').css('background-color');
				if($delimiters.parents('.vc-row-wrapper').find('.dfd-row-bg-wrap').length > 0)
					bg_color = $delimiters.parents('.vc-row-wrapper').find('.dfd-row-bg-wrap').css('background-color');

				$delimiters.css('background-color', bg_color);
			});
		},
		initContactForm = function() {
			$('form.wpcf7-form input:not([type="submit"])').focus(function(e){
				$(this).parent('span').addClass('active').siblings().addClass('active');
			}).blur(function() {
				if(!$(this).parents('.dfd-contact-form-style-5').length || ($(this).parents('.dfd-contact-form-style-5').length && $(this).val() == '')) {
					$(this).parent('span').removeClass('active').siblings().removeClass('active');
				}
			});
		},
		initChaffle = function() {
			$('.chaffle').chaffle();
		},
		initDropkick = function() {
			$('form.wpcf7-form select, .widget select, .arhives404 select, .woocommerce-ordering select').dropkick({mobile: true});
		},
		initNewsIsotope = function() {
			$('.dfd-blog-module.blog_masonry').each(function() {
				var $self = $(this);
				if(!$self.hasClass('initialized')) {
					$self.addClass('initialized');
					var $container = $('.posts-list', $self);
					var $items = $('.post', $container);

					var columns = 3;
					var columnsWidth;

					var masonry_layout_mode = $self.data('masonry-layout');

					if(!masonry_layout_mode) {
						masonry_layout_mode = 'masonry';
					}

					var setColumns = function () {
						$items = $('.post', $container);
						var width = $container.width();


						switch(true) {
							case (width > 1380): columns = 4; break;
							case (width > 980): columns = 3; break;
							case (width > 640): columns = 2; break;
							default: columns = 1;
						}
						columnsWidth = Math.floor($container.width() / columns);

						$items.width(columnsWidth);
					};

					var runIsotope = function() {
						setColumns();

						$container.isotope({
							layoutMode: masonry_layout_mode,
							/*masonry: {
								columnWidth: columnsWidth,
							},*/
							itemSelector : '.post', 
							resizable : true
						});

						$('body').bind('isotope-add-item', function(e, item) {
							$(item).imagesLoaded(function() {
								$container.isotope('insert', $(item));
							});
						});
					};

					runIsotope();
					$container.imagesLoaded(runIsotope);
					dfd_ronneby.window.resize(runIsotope);
					$('body').on('post-load', function() {
						setTimeout(function() {
							runIsotope();
						}, 1000);
					});

					$self.find('.sort-panel .filter a').click(function () { 
						var selector = $(this).attr('data-filter');

						$(this).parent().parent().find('> li.active').removeClass('active');
						$(this).parent().addClass('active');

						$container.isotope( { 
							filter : selector 
						});

						return false;
					});
				}
			});
		},
		initFacts = function() {
			$('.facts-number').each(function () {
				var $self =  $(this);
				if(!$self.hasClass('facts-inited')) {
					var $anim = $self.data('animation');
					if(!$self.hasClass('disable-animation')) {
						if ('count' == $anim){
							var odometer = new Odometer({el: $self[0], animation: 'count' });
						} else {
							var odometer = new Odometer({el: $self[0]});
						}

						$(this).on('on-waypoin', function () {
							odometer.update($(this).data('max'));
						});
					}
				}
			});
		},
		initAudioplayer = function() {
			$('.post.format-audio').each(function() {
				var $self = $(this);
				
				if(!$self.find('div.audioplayer').length && $self.find('audio.audio').length) {
					$self.find('audio.audio:not(.wp-audio-shortcode)').audioPlayer({
						strPlay: '',
						strPause: '',
						strVolume: ''
					});
				}
			});
			$('body').trigger('audioplayer-inited');
		},
		initNewsSlick = function() {
			$('.dfd-scrolling-news-wrap').each(function() {
				var $self = $(this);
				if($self.hasClass('initialized')) {
					return;
				}
				$self.addClass('initialized');
				var slides_top = $self.data('slides-top'),
					slides_bottom = $self.data('slides-bottom'),
					$top_carousel = $('.dfd-news-top', $self),
					$bottom_carousel = $('.dfd-news-bottom', $self);
				$top_carousel.slick({
					infinite: false,
					slidesToShow: slides_top,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: false,
					cssEase: 'ease-in',
					speed: 1500,
					responsive: [
						{
							breakpoint: 960,
							settings: {
								slidesToShow: 1,
								infinite: false,
								arrows: false
							}
						}
					]
				});
				$bottom_carousel.slick({
					infinite: false,
					slidesToShow: slides_bottom,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: false,
					cssEase: 'ease-out',
					speed: 1200,
					responsive: [
						{
							breakpoint: 960,
							settings: {
								slidesToShow: 2,
								infinite: false,
								arrows: false
							}
						}
					]
				});
				$top_carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
					if(currentSlide > nextSlide) {
						$bottom_carousel.eq(0).slick('slickPrev');
					} else {
						$bottom_carousel.eq(0).slick('slickNext');
					}
				});
				$bottom_carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
					if(currentSlide > nextSlide) {
						$top_carousel.eq(0).slick('slickPrev');
					} else {
						$top_carousel.eq(0).slick('slickNext');
					}
				});
				$self.find('>.slider-controls .slider-control.prev').click(function(e) {
					e.preventDefault();
					$top_carousel.eq(0).slick('slickPrev');
				});
				$self.find('>.slider-controls .slider-control.next').click(function(e) {
					e.preventDefault();
					$top_carousel.eq(0).slick('slickNext');
				});
				var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel';
				$self.find('.dfd-scrolling-news-container').bind(mousewheelevt, function(e){
					var ev = window.event || e;
					ev = ev.originalEvent ? ev.originalEvent : ev;
					var delta = ev.detail ? ev.detail*(-40) : ev.wheelDelta;
					if(delta > 0 && $top_carousel.find('.slick-slide.slick-active').first().prev('.slick-slide').length > 0) {
						ev.preventDefault();
						$top_carousel.eq(0).slick('slickPrev');
					} else if(delta < 0 && $top_carousel.find('.slick-slide.slick-active').last().next('.slick-slide').length > 0) {
						ev.preventDefault();
						$top_carousel.eq(0).slick('slickNext');
					}
				});
			});
		},
		initImageModule = function() {
			if($('#layout').hasClass('one-page-scroll')) {
				$('.dfd-single-image-module .dfd-one-page-nav').each(function() {
					var $self = $(this),
						dir = $self.data('dir'),
						$carousel = $('#layout.one-page-scroll');

					$self.click(function(e) {
						e.preventDefault();
						if(dir == 'slickNext') {
							$carousel.fullpage.moveSectionDown();
						} else if (dir == 'slickPrev') {
							$carousel.fullpage.moveSectionUp();
						}
					});
				});
			}
			if (('devicePixelRatio' in window) && (window.devicePixelRatio > 1)) {
				$('.dfd-single-image-module img').each(function() {
					var $self = $(this),
						retina_img_src = $self.attr('data-retina-img');

					$self.attr('src', retina_img_src);
				});
			}
		},
		initDelimiterShortcode = function() {
			$(".dfd-delimier-wrapper.dfd-delimiter-with-arrow .inner-wrapper-icon").on("click", function(){
				$(".body-back-to-top").trigger("click");
			});
		},
		initClientLogo = function () {
			var init = function () {
				$('.dfd-client-logo-wrap').each(function () {
					var $wrap = $(this),
						$windowWidth = $(window).width(),
						$scrollbarWidth = 0,
						x = $wrap.data('count');
					if (typeof $.fn.equalHeights != 'undefined') {
						$('.dfd-item-offset .thumb-wrap', $wrap).equalHeights();
					}
					if ($wrap.hasClass('style-1') || $wrap.hasClass('style-2')) {
						$('.dfd-client-logo-item', $wrap).each(function () {
							var $self = $(this),
								height = 0,
								titleHeight = 0,
								top = 0;

							if ($self.find('.thumb-wrap')) {
								height += $self.find('.thumb-wrap').outerHeight();
							}

							if ($self.find('.title-wrap')) {
								titleHeight = $self.find('.title-wrap').outerHeight();
								height += titleHeight;
								if ($self.parents('.dfd-client-logo-wrap').hasClass('style-1')) {
									top = titleHeight;
								}
							}

							if ($self.find('.description')) {
								height += $self.find('.description').outerHeight();
							}

							if ($self.find('.dfd-shadow-wrap')) {
								$self.find('.dfd-shadow-wrap').height(height + 100).css('top', '-' + top + 'px');
							}
						});
					}
					if ($wrap.hasClass('enable-delimiter') && $windowWidth - $scrollbarWidth > 800) {
						$('.columns-with-border:nth-child(-n+' + x + ')', $wrap).addClass('no-top-border');
						$('.columns-with-border:nth-child(' + x + 'n+1)', $wrap).addClass('no-left-border');
					}
				});
			};

			init();

			$(window).on('resize', init);
		},
		initDfdTimeline = function() {
			var init = function() {
				var countCol;
				
				$('.timeline').each(function() {
					var $self = $(this),
						col,
						columns = $self.data('columns'),
						desktop = $self.data('columns-desktop'),
						tablet = $self.data('columns-tablet'),
						mobile = $self.data('columns-mobile');
					
					countCol = function() {
						if(dfd_ronneby.windowWidth > 1023 && dfd_ronneby.windowWidth < 1280) {
							col = desktop;
						} else if(dfd_ronneby.windowWidth > 799 && dfd_ronneby.windowWidth < 1024) {
							col = tablet;
						} else if(dfd_ronneby.windowWidth < 800) {
							col = mobile;
						} else {
							col = columns;
						}
					};
					
					countCol();
					
					$self.timeline({
						forceVerticalMode: 700,
						mode: 'horizontal',
						verticalStartPosition: 'left',
						visibleItems: col,
						forceVerticalMode: 1
					});
					
				});
			};
			setTimeout(function() {
				init();
			},200);
			$(window).on('resize', init);
		},
		initImageCarousel = function() {
			var init = function() {
				$('.dfd-logo-carousel-wrap').each(function() {
					var $wrap = $(this),
					$windowWidth = $(window).width(),
					$scrollbarWidth = 0,
						slides_to_show = $wrap.data('slide') && $wrap.data('slide') != '' ? $wrap.data('slide') : 1,
						slides_to_scroll = $wrap.data('scroll') && $wrap.data('scroll') ? $wrap.data('scroll') : 1,
						enable_dots = false,
						auto_slideshow = false,
						slideshow_speed = $wrap.data('speed') && $wrap.data('speed') != '' ? $wrap.data('speed') : 3000,
						breakpoint_first = slides_to_show > 3 ? 3 : slides_to_show,
						breakpoint_second = slides_to_show > 2 ? 2 : slides_to_show,
						x = $wrap.data('count');

					if($wrap.data('dots') && $wrap.data('dots') == '1') {
						enable_dots = true;
					}	

					if($wrap.data('autoplay') && $wrap.data('autoplay') == '1') {
						auto_slideshow = true;
					}	

					if($wrap.hasClass('style-3')) {
						var elContainer = $wrap.find('.dfd-item-offset'),
							elThumb = elContainer.find('.thumb-wrap'),
							elThumbImg = elThumb.find('img'),
							descContainer = elThumb.find('.desc-text'),
							descContainerOverflow = descContainer.find('.text-overflow'),
							itemHeight = elThumbImg.height(),
							descHeight = descContainerOverflow.height();

						elContainer.each(function() {
							if(elThumbImg.height() > itemHeight) {
								itemHeight = elThumbImg.height();
							}
								if(descContainerOverflow.height() > descHeight) {
									descHeight = descContainerOverflow.height();
								}
						});
						if(descHeight > itemHeight) {
							descContainer.css('height', itemHeight + 'px');
						} else {
							descContainer.css('height', 'auto');
						}
						elThumb.css('height', itemHeight + 'px');
					} else {
						$('.dfd-equalize-height', $wrap).equalHeights();
					}

					if($wrap.hasClass('enable-delimiter') && $windowWidth - $scrollbarWidth > 800) {
						$('.columns-with-border:nth-child(-n+'+x+')', $wrap).addClass('no-top-border');
						$('.columns-with-border:nth-child('+x+'n+1)', $wrap).addClass('no-left-border');
					}

					if($wrap.hasClass('dfd-slide-images') && $wrap.find('.slick-initialized').length < 1) {
						$wrap.find('.dfd-logo-carousel-list').slick({
							infinite: true,
							slidesToShow: slides_to_show,
							slidesToScroll: slides_to_scroll,
							arrows: false,
							dots: enable_dots,
							autoplay: auto_slideshow,
							dotsClass: 'dfd-slick-dots',
							autoplaySpeed: slideshow_speed,
							customPaging: function(slider, i) {
								return '<span data-role="none" role="button" aria-required="false" tabindex="0"></span>';
							},
							responsive: [
								{
									breakpoint: 1280,
									settings: {
										slidesToShow: breakpoint_first,
										infinite: true,
										arrows: false,
										dots: enable_dots
									}
								},
								{
									breakpoint: 800,
									settings: {
										slidesToShow: breakpoint_second,
										infinite: true,
										arrows: false,
										dots: enable_dots
									}
								},
								{
									breakpoint: 460,
									settings: {
										slidesToShow: 1,
										infinite: true,
										arrows: false,
										dots: false
									}
								}
							]
						});
					}
				});
			};

			init();

			$(window).on('load resize', function() {
				init();
				setTimeout(function() {
					init();
				},200);
			});
		};
		
		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initHoverDir = function() {
		var init = function() {
			$('.project.portfolio-hover-style-1 .entry-thumb, .dfd-gallery-single-item.portfolio-hover-style-1 .entry-thumb').each( function() {
				$(this).hoverdir();
			});
		};
		dfd_ronneby.window.load(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.anchorSmoothScroll = function() {
		dfd_ronneby.document.ready(function() {
			var $link = $('a.menu-link');
			$link.each(function() {
				var $self = $(this);
				var href = $self.attr('href');
				if(href && href.indexOf('#') !== -1 && href != '#' && href.indexOf('#/') === -1) {
					href = href.substring(href.indexOf("#"));
					if($(href).length > 0) {
						var highlightCurrent = function() {
							/*var targetheight = $(href).outerHeight(true);*/
							var targetOffset = $(href).offset().top;
							if((dfd_ronneby.window.scrollTop() + $('body').offset().top) >= targetOffset /*&& dfd_ronneby.window.scrollTop() < (targetOffset + targetheight)*/) {
								/*setTimeout(function() {*/
									$self.parent().addClass('current-menu-ancestor current-menu-item').siblings().removeClass('current-menu-ancestor current-menu-item');
									if($self.parents('.header-style-3').length > 0 && $self.parents('#top_left_mega_menu').length > 0) {
										$self.parents('.header-style-3').find('#top_right_mega_menu').find('.mega-menu-item').removeClass('current-menu-ancestor current-menu-item');
									}
									if($self.parents('.header-style-3').length > 0 && $self.parents('#top_right_mega_menu').length > 0) {
										$self.parents('.header-style-3').find('#top_left_mega_menu').find('.mega-menu-item').removeClass('current-menu-ancestor current-menu-item');
									}
									if($self.parents('.header-style-4').length > 0 && $self.parents('#top_left_mega_menu').length > 0) {
										$self.parents('.header-style-4').find('#top_right_mega_menu').find('.mega-menu-item').removeClass('current-menu-ancestor current-menu-item');
									}
									if($self.parents('.header-style-4').length > 0 && $self.parents('#top_right_mega_menu').length > 0) {
										$self.parents('.header-style-4').find('#top_left_mega_menu').find('.mega-menu-item').removeClass('current-menu-ancestor current-menu-item');
									}
								/*}, 100);*/
							}
						};
						highlightCurrent();
						dfd_ronneby.window.on('load resize scroll', highlightCurrent);
						$self.on('click touchend', function(e) {
							e.preventDefault();
							dfd_ronneby.window.scrollTo(href, {duration:'slow'});
							highlightCurrent();
						});
					}
				}
			});
		});
	};
	
	dfd_ronneby.initTopInnerPage = function() {
		dfd_ronneby.document.ready(function() {
			var $top_panel_inner = $('#top-panel-inner');
			$('a.top-inner-page').on('click', function(e){
				e.preventDefault();
				$top_panel_inner.addClass('open');
			});
			$('a.top-inner-page-close').on('click', function(e){
				e.preventDefault();
				$top_panel_inner.removeClass('open');
			});
			$('.top-inner-page-close').each(function(){
				var $self = $(this);
				$self.hover(function() {
					$self.addClass('hovered');
				},function() {
					$self.removeClass('hovered').addClass('lost-hover');
					setTimeout(function() {
						$self.removeClass('lost-hover');
					}, 300);
				});
			});
		});
	};
	
	dfd_ronneby.initSideArea = function() {
		dfd_ronneby.document.on('click touchend', '.side-area-controller', function (e) {
			e.preventDefault();

			if($('.side-area-controller').hasClass('active')) {
				$('.side-area-controller').removeClass('active');
			} else {
				$('.side-area-controller').addClass('active');
			}

			$('#side-area').toggleClass('opened');
			$('html,body').toggleClass('side-area-opened');

			if (typeof $.initSlider === 'function') {
				setTimeout(function() {
					$.initSlider();
				}, 500);
			}
		});
	};
	
	dfd_ronneby.initPostsCarousel = function() {
		var init = function() {
			$('.dfd-blog-posts-module .dfd-blog-carousel, .dfd-portfolio-module .dfd-portfolio-carousel, .dfd-gallery-module .dfd-gallery-carousel').each(function() {
				var $carousel = $(this);
				
				if($carousel.hasClass('slick-initialized')) {
					return;
				}
				
				var enable_slideshow = $carousel.data('enable_slideshow'),
					slideshow_speed = $carousel.data('slideshow_speed'),
					columns = $carousel.data('columns'),
					breakpoint;

				if(!enable_slideshow) enable_slideshow = false;

				if(!slideshow_speed) slideshow_speed = 5000;

				if(!columns) columns = 3;

				breakpoint = (columns > 2) ? 2 : columns;

				$carousel.slick({
					infinite: false,
					slidesToShow: columns,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: enable_slideshow,
					autoplaySpeed: slideshow_speed,
					responsive: [
						{
							breakpoint: 1279,
							settings: {
								slidesToShow: breakpoint,
								infinite: true,
								arrows: false,
								dots: false
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								arrows: false,
								dots: false
							}
						}
					]
				});
				$carousel.siblings('.slider-controls').find('.next').click(function(e) {
					e.preventDefault();

					$carousel.slickNext();
				});

				$carousel.siblings('.slider-controls').find('.prev').click(function(e) {
					e.preventDefault();

					$carousel.slickPrev();
				});
				$carousel.find('div').on('mousedown select',(function(e){
					e.preventDefault();
				}));
			});
		};
		
		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initPostsModule = function() {
		var init = function() {
			$('.dfd-blog-posts-module.excerpts-overlay').each(function() {
				var exerpt = $(this).find('.entry-content.enable-dropcap-excerpt p'),
					text,
					first;
				
				if(exerpt.length > 0) {
					text = exerpt.html();
					first = $('<span class="exerpt-dropcap">'+text.charAt(0)+'</span>');
				
					exerpt.html(text.substring(1)).prepend(first);
				}
			});
		};
		
		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.frontentEditorReinitScripts = function() {
		if(dfd_ronneby.sameOrigin && typeof parent.vc != 'undefined' && typeof parent.vc.events != 'undefined') {
			parent.vc.events.on('shortcodeView:ready', function() {
				$('body').trigger('post-load');
				setTimeout(function() {
					$('body').trigger('resort-isotope');
				}, 1000);
			});
		}
	};
	
	dfd_ronneby.initGallery = function() {
		var init = function() {
			$('.dfd-gallery-post-slider').each(function() {
				var $carousel = $(this);
				if(!$carousel.hasClass('slick-initialized')) {
					var $window = dfd_ronneby.window,
						total_slides,
						slideshow_speed = 5000,
						$bar = $carousel.siblings('.dfd-gallery-bar'),
						carouselWidth;
					var getSize = function() {
						carouselWidth = $carousel.width();
					};
					getSize();
					$window.on('load resize', getSize);
					var startAnimation = function() {
						$bar.css('width',0);
						$bar.animate({
							width: carouselWidth
						}, slideshow_speed, 'linear').parent()
						.hover(
							function(){
								$bar.stop(true,false);
						}, function(){
							var cur = parseInt($bar.css('width'));
							$bar.animate({ 'width' : carouselWidth }, slideshow_speed*((carouselWidth-cur)/carouselWidth), 'linear');
						});
					};
					$carousel.on('init reInit afterChange', function (event, slick, currentSlide) {
						startAnimation();
						var prev_slide_index, next_slide_index, current;
						var $prev_counter = $carousel.next('.slider-controls').find('.prev .count');
						var $next_counter = $carousel.next('.slider-controls').find('.next .count');
						total_slides = slick.slideCount;
						current = (currentSlide ? currentSlide : 0) + 1;
						prev_slide_index = (current - 1 < 1) ? total_slides : current - 1;
						next_slide_index = (current + 1 > total_slides) ? 1 : current + 1;
						$prev_counter.text(prev_slide_index + '/' + total_slides);
						$next_counter.text(next_slide_index + '/'+ total_slides);
					});
					$carousel.slick({
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
						dots: false,
						autoplay: true,
						autoplaySpeed: slideshow_speed
					});
					$carousel.siblings('.slider-controls').find('.next').click(function(e) {
						e.preventDefault();

						$carousel.eq(0).slick('slickNext');
					});

					$carousel.siblings('.slider-controls').find('.prev').click(function(e) {
						e.preventDefault();

						$carousel.eq(0).slick('slickPrev');
					});
					$carousel.find('div').on('mousedown select',(function(e){
						e.preventDefault();
					}));
				}
			});
		};
		
		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initBuddyPress = function() {
		var init = function() {
			$('#whats-new-submit').prepend('<i class="crdash-check_alt"></i>');

			$('#subnav a').prepend('');

			if ($('#group-admins').length > 0) {
				$('#item-header-content > span').wrapAll('<div id="item-actions-wrap"></div>');
				$('#item-header-content > #item-actions-wrap').insertAfter($('#group-admins'));
				$('#item-actions > h3').insertBefore('#item-actions-wrap > .highlight');
				$('#item-header-content').hide();
			}

			$('#activity-stream li').each(function() {
				var $this = $(this);
				$('> div', $this).wrapAll('<div class="activitys-wrap"></div>');

				$('.activity-meta a', $this).removeClass('button');
				$('.activity-meta a.acomment-reply', $this).prepend('<i class="crdash-square_chat_alt"></i>');
				$('.activity-meta a.fav', $this).prepend('<i class="crdash-heart"></i>');
				$('.activity-meta a.delete-activity', $this).prepend('<i class="crdash-trash_can"></i>');

				$('.activity-content .activity-meta', $this).insertAfter($('.activitys-wrap', $this));
			});

			$('#members_search, #groups_search').unwrap('label');

			$('#bp-login-widget-form').find('label').each(function() {
				var id = $(this).attr('for');
				var input = $('#'+id);
				var labelHtml = $(this).clone();
				var inputHtml = $('#'+id).clone();
				if(input.length) {
					$(this).remove();
					input.remove();
					$('#bp-login-widget-form .forgetmenot').before('<p class="'+id+'"/>');
					$('#bp-login-widget-form').find('.'+id).append(labelHtml).append(inputHtml);
				}
			});
		};
		
		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initHeaderHorizontalScroll = function() {
		var y = 0;
	
		dfd_ronneby.window.scroll(function() {
			if($(this).scrollLeft() != 0 && $('body').hasClass('dfd-custom-padding-html')) {
				$('#header-container').css({left: $(this).scrollLeft() + $('body').css('margin') * -1});
			} else if($(this).scrollLeft() != 0 && !$('body').hasClass('dfd-custom-padding-html')) {
				$('#header-container').css({left: $(this).scrollLeft() * -1});
			}
		});
	};
	
	dfd_ronneby.initSortPanelHideElems = function() {
		var init = function () {
			$('.sort-panel').each(function() {
				var $container = $(this).parent().parent(),
					$filter_item = $(this).find('a');

				$filter_item.each(function() {
					var $this = $(this);
					var filter = ($this.data('filter') != undefined) ? $this.data('filter') : false;
					if (filter === false) {
						return true;
					}
					var filter_match = $container.find(filter).length;

					if (filter_match == 0) {
						$this.parent('li').hide();
					} else if (filter_match > 0 && $this.parent('li').is(':hidden')) {
						$this.parent('li').show();
					}
				});
			});
		};

		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initPrettyPhoto = function() {
		var initSharrre = function() {
			if('rrssbInit' in window) {
				window.rrssbInit();
			}
		},
		initPrettyPhoto = function() {
			var deeplinkVal = $('body').hasClass('dfd-pp-deeplinks') ? true : false,
				url = window.location.href,
				imageUrl = $('body').find('img').first().attr('src'),
				directiry = $('body').data('directory'),
				sharePretty = $('body').data('share-pretty'),
				nextPretty = $('body').data('next-pretty'),
				prevPretty = $('body').data('prev-pretty');
			$("a[data-rel^='prettyPhoto'], a.zoom-link, a.thumbnail, a[class^='prettyPhoto'], a[rel^='prettyPhoto']").prettyPhoto({
				hook: 'data-rel',
				show_title: true,
				deeplinking:deeplinkVal,
				markup: '<div class="pp_pic_holder"> \
							<div class="ppt">&nbsp;</div> \
							<a class="pp_close" href="#">×</a> \
							<div class="pp_top"> \
								<div class="pp_left"></div> \
								<div class="pp_middle"></div> \
								<div class="pp_right"></div> \
							</div> \
							<div class="pp_content_container"> \
								<div class="pp_left"> \
								<div class="pp_right"> \
									<div class="pp_content"> \
										<div class="pp_loaderIcon"></div> \
										<div class="pp_fade"> \
											<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
											<div class="pp_hoverContainer"> \
												<a class="pp_next" href="#"><span><span>'+nextPretty+'</span></span></a> \
												<a class="pp_previous" href="#"><span><span>'+prevPretty+'</span></span></a> \
											</div> \
											<div id="pp_full_res"></div> \
											<div class="pp_details"> \
												<div class="pp_nav"> \
													<a href="#" class="pp_arrow_previous">Previous</a> \
													<p class="currentTextHolder">0/0</p> \
													<a href="#" class="pp_arrow_next">Next</a> \
												</div> \
												<div class="pp_social">{pp_social}</div> \
												<p class="pp_description"></p> \
											</div> \
										</div> \
									</div> \
								</div> \
								</div> \
							</div> \
							<div class="pp_bottom"> \
								<div class="pp_left"></div> \
								<div class="pp_middle"></div> \
								<div class="pp_right"></div> \
							</div> \
						</div> \
						<div class="pp_overlay"></div>',
				gallery_markup: '<div class="pp_gallery mobile-hide"> \
									<a href="#" class="pp_arrow_previous">Previous</a> \
									<div> \
										<ul> \
											{gallery} \
										</ul> \
									</div> \
									<a href="#" class="pp_arrow_next">Next</a> \
								</div>',
				changepicturecallback: function() {
						initSharrre();
						var imgUrl = $('#fullResImage').attr('src');
						$('.pp_social .dfd-share-buttons').find('> li > a').each(function() {
							var src = $(this).attr('href');
							$(this).attr('href', src + imgUrl);
						});
					},
				social_tools: '<div class="dfd-share-cover dfd-share-animated">'+
								'<div class="dfd-blog-share-popup-wrap" data-text="Share" data-title="Share" data-url="'+url+'">'+
									'<div class="box">'+
										'<div class="dfd-share-icons">'+
											'<ul class="entry-share-popup rrssb-buttons dfd-share-buttons" data-share="1">'+
												'<li class="rrssb-facebook facebook soc_icon-facebook">'+
													'<a href="https://www.facebook.com/sharer/sharer.php?u=" data-share-button="facebook" class="popup entry-share-link-facebook"></a>'+
												'</li>'+
												'<li class="rrssb-linkedin linkedin soc_icon-linkedin">'+
													'<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=" class="popup"></a>'+
												'</li>'+
												'<li class="rrssb-pinterest pinterest soc_icon-pinterest">'+
													'<a href="http://pinterest.com/pin/create/button/?url=" class="popup"></a>'+
												'</li>'+
												'<li class="rrssb-twitter twitter soc_icon-twitter-3">'+
													'<a href="https://twitter.com/intent/tweet?text=" data-share-button="twitter" class="popup entry-share-link-twitter"></a>'+
												'</li>'+
											'</ul>'+
										'</div>'+
										'<div class="dfd-share-title box-name">'+sharePretty+'</div>'+
									'</div>'+
								'</div>'+
							'</div>'
			});
		};
		
		dfd_ronneby.document.ready(function() {
			initSharrre();
			initPrettyPhoto();
		});
		$('body').on('post-load', function() {
			initSharrre();
			initPrettyPhoto();
		});
	};
	
	dfd_ronneby.initTaxonomyIsotope = function() {
		var $window = dfd_ronneby.window;
	
		var init = function() {
			$('.dfd-new-isotope').each(function() {
				var $container = $(this);
				
				if(!$container.hasClass('dfd-new-isotope-inited')) {
					var layout_style = $container.data('layout-style'),
						columns_wide = $container.data('columns'),
						itemClass = $container.data('item'),
						$items = $('.'+itemClass),
						columns_normal, columns_medium, columns_small, columns_mobile;

					if(!layout_style) layout_style = 'masonry';
					if(!columns_wide) columns_wide = 5;
					columns_normal = (columns_wide > 4) ? 4 : columns_wide;
					columns_medium = (columns_wide > 3) ? 3 : columns_wide;
					columns_small = (columns_wide > 2) ? 2 : columns_wide;
					columns_mobile = (columns_wide > 1) ? 1 : columns_wide;

					var columns = 3;
					var columnsWidth;

					var setColumns = function () {
						$items = $('> .'+itemClass, $container);
						var width = $container.width();

						switch(true) {
							case (width > 1280): columns = columns_wide; break;
							case (width > 1024): columns = columns_normal; break;
							case (width > 800): columns = columns_medium; break;
							case (width > 460): columns = columns_small; break;
							default: columns = columns_mobile;
						}

						columnsWidth = Math.floor(width / columns);
						$items.width(columnsWidth);
					};

					var runIsotope = function() {
						setColumns();

						$container.isotope({
							layoutMode: layout_style,
							masonry: {
								columnWidth: columnsWidth
							},
							itemSelector : '.'+itemClass, 
							resizable : true
						});

						$('body').bind('isotope-add-item', function(e, item) {
							$(item).width(columnsWidth);
							$(item).imagesLoaded(function() {
								$container.isotope('insert', $(item));
							});
						});
					};

					runIsotope();
					$container.imagesLoaded(runIsotope);

					$container.parent().parent().find('.sort-panel .filter a').click(function () {
						var selector = $(this).attr('data-filter');

						$(this).parent().parent().find('> li.active').removeClass('active');
						$(this).parent().addClass('active');

						$container.isotope({
							filter : selector
						});

						return false;
					});

					$window.on('resize',runIsotope);

					$('body').on('post-load', function() {
						setTimeout(function() {
							runIsotope();
						}, 1000);
					});

					$container.one('layoutComplete', function() {
						setTimeout(function() {
							dfd_ronneby.window.trigger('resize');
						}, 1000);
					});

					$container.addClass('dfd-new-isotope-inited');
				}
			});
		};

		dfd_ronneby.document.ready(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initSpacer = function() {
		var init = function() {
			$('.dfd-spacer-module').each(function() {
				var $self = $(this),
					wWidth = dfd_ronneby.windowWidth,
					units = $self.data('units'),
					screen_wide_resolution = $self.data('wide_resolution'),
					screen_wide_spacer_size = $self.data('wide_size'),
					screen_normal_resolution = $self.data('normal_resolution'),
					screen_normal_spacer_size = $self.data('normal_size'),
					screen_tablet_resolution = $self.data('tablet_resolution'),
					screen_tablet_spacer_size = $self.data('tablet_size'),
					screen_mobile_resolution = $self.data('mobile_resolution'),
					screen_mobile_spacer_size = $self.data('mobile_size');
				if(units == '%') {
					screen_normal_spacer_size = screen_wide_spacer_size * screen_normal_spacer_size / 100;
					screen_tablet_spacer_size = screen_wide_spacer_size * screen_tablet_spacer_size / 100;
					screen_mobile_spacer_size = screen_wide_spacer_size * screen_mobile_spacer_size / 100;
				}
				
				if(dfd_ronneby.isSafari) {
					wWidth = dfd_ronneby.windowWidth - dfd_ronneby.scrollbarWidth;
				}

				if(wWidth >= screen_wide_resolution) {
					$self.css('height',screen_wide_spacer_size);
				} else if(wWidth >= screen_normal_resolution && wWidth < screen_wide_resolution) {
					$self.css('height',screen_normal_spacer_size);
				} else if(wWidth >= screen_tablet_resolution && wWidth < screen_normal_resolution) {
					$self.css('height',screen_tablet_spacer_size);
				} else if(wWidth >=screen_mobile_resolution  && wWidth <   screen_tablet_resolution) {
					$self.css('height',screen_mobile_spacer_size);
				} else if(screen_mobile_resolution >= wWidth) {
					$self.css('height',screen_mobile_spacer_size);
				}
				$('body').trigger('reinit-waypoint');
			});
		};

		dfd_ronneby.window.on('load resize', init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initShortcodesLoadResize = function() {
		var init = function() {
//			initMobileBgImage();
			initPriceList();
			initFullHeightRow();
			initFixedFooter();
		},
		initPriceList = function() {
			$('.dfd-woocomposer_list .dfd-woo-product-list >li').each(function() {
				var $self = $(this);
				if(!$self.find('.dfd-list-menu-mode')) return;
				var $container = $self.find('.dfd-list-menu-mode:first-child');
				var titleWidth = 0;
				var priceWidth = 0;
				if($container.find('.box-name')) {
					titleWidth = $container.find('.box-name').width();
				}
				if($container.find('>.amount')) {
					priceWidth = $container.find('>.amount').width();
				}
				$container.find('.woo-delim').css({
					'left': titleWidth,
					'right': priceWidth
				});
			});
		},
		initMobileBgImage = function() {
			$('.dfd-row-bg-image').each(function() {
				var $self = $(this),
					defaultImage = '',
					mobileImage = '',
					resolution = 799,
					windowWidth = dfd_ronneby.windowWidth;

				if($self.data('bg-img')) {
					defaultImage = $self.data('bg-img');
				}

				if($self.data('responsive-image')) {
					mobileImage = $self.data('responsive-image');
				}

				if($self.data('responsive-resolution')) {
					resolution = $self.data('responsive-resolution');
				}

				if(defaultImage != '' && mobileImage != '') {
					if(typeof windowWidth != 'undefined' && windowWidth <= resolution && mobileImage) {
						$self.css('background-image','url('+mobileImage+')');
					} else {
						$self.css('background-image','url('+defaultImage+')');
					}
				}
			});
		},
		initFullHeightRow = function () {
			$('.dfd-row-full-height:first').each( function () {
				var offset,
					fullHeight,
					$self = $(this),
					windowHeight = dfd_ronneby.windowHeight,
					windowWidth = dfd_ronneby.windowWidth;
				
				setTimeout(function() {
					offset = $self.offset().top;
					if($('.dfd-frame-line.line-bottom')) {
						offset += $('.dfd-frame-line.line-bottom').height();
					}
					if ( offset < windowHeight ) {
							fullHeight = windowHeight - offset - 1;
							$self.css( 'min-height', fullHeight + 'px' );
							if(windowWidth < 1025 && windowWidth > 1022) {
								$self.css( 'max-height', fullHeight + 'px' );
							}
					}
				}, 100);
			});
		},
		initFixedFooter = function() {
			if(!$('#layout').hasClass('one-page-scroll') && $('#main-wrap').hasClass('dfd-parallax-footer')) {
				var margin =  (dfd_ronneby.windowWidth > 780) ? $('#footer-wrap').outerHeight(true) : 0;
				if($('body > .boxed_layout').length > 0) {
					$('body > .boxed_layout').css('margin-bottom', margin);
				} else {
					$('#main-wrap').css('margin-bottom', margin);
				}
			}
		};
		
		dfd_ronneby.window.on("load resize", init);
		$('body').on('post-load', init);
		dfd_ronneby.window.on("resize", initMobileBgImage);
		$('body').on('post-load', initMobileBgImage);
	};
	
	dfd_ronneby.initBackground = function() {
		var init = function() {
			initParallax();
			initMultiParallax();
			initAnimatedBg();
			initCanvasBg();
			initVideoBg();
		},
		initParallax = function() {
			if (!$('html').is('.lt-ie10, .lt-ie9, .lt-ie8')) {
				$('.upb_row_bg, .dfd-row-parallax, .dfd-column-parallax, .dfd-fade-on-scroll, .dfd-row-bg-image.dfd_vertical_parallax, .dfd-row-bg-image.dfd_horizontal_parallax, .dfd-multi-parallax-layer').each(function() {
					// Store some variables based on where we are
					var $self = $(this), offsetCoords, topOffset, selfHeight;

					var recalcInitValues = function() {
						offsetCoords = $self.offset();
						selfHeight = $self.height();
						topOffset = offsetCoords.top;
					};

					recalcInitValues();

					dfd_ronneby.window.on("resize load", recalcInitValues);

					var speed = parseFloat($self.data('parallax_sense')) / 100;
					var maxMinValue = parseFloat($self.data('parallax_limit'));
					var statPos = '0';
					var mobileEnable = ($self.data('mobile_enable') && $self.data('mobile_enable') == '1') ? true : false;
					// When the window is scrolled...
					
					if(
						$self.hasClass('upb_row_bg') ||
						$self.hasClass('dfd_vertical_parallax') ||
						$self.hasClass('dfd-multi-parallax-layer')
					) {
						var actualImage = new Image();
						if($self.hasClass('upb_row_bg')) {
							actualImage.src = $self.css('backgroundImage').replace(/"/g,'').replace(/url\(|\)$/ig, '');
						} else {
							actualImage.src = $self.attr('data-bg-img').replace(/"/g,'').replace(/url\(|\)$/ig, '');
						}
						actualImage.onload = function() {
							$self.css({
								'width': actualImage.width,
								'height': actualImage.height
							});
						};
					}

					dfd_ronneby.window.on("load scroll", function() {
						if(!mobileEnable && Modernizr.touch && dfd_ronneby.windowWidth < 800) return;
						// If this section is in view
						// Scroll the background at var speed
						// the yPos is a negative value because we're scrolling it UP!
						var diff = (topOffset - dfd_ronneby.windowScrollTop) / 3,
							diffPos = -(diff * 2 * speed),
							starPosition = '50% 50%';
						// If this element has a Y offset then add it on
						if ($self.data('parallax_offset')) {
							if($self.hasClass('dfd_vertical_parallax') || $self.hasClass('dfd_horizontal_parallax')) {
								if($self.hasClass('dfd_vertical_parallax')) {
									starPosition = '50% calc(50% + '+$self.data('parallax_offset')+'px)';
								} else if($self.hasClass('dfd_horizontal_parallax')) {
									starPosition = 'calc(50% + '+$self.data('parallax_offset')+'px) 50%';
								}
								$self.css('backgroundPosition', starPosition);
							}
						}
						// Put together our final background position
						var coords;
						if($self.hasClass('vcpb-vz-jquery')) {
							coords = '50% ' + diffPos + 'px';
						}
						if($self.hasClass('dfd_vertical_parallax')) {
							coords = statPos + ', ' + diffPos + 'px';
						}

						if($self.hasClass('vcpb-hz-jquery')) {
							coords = diffPos + 'px' + ' 50%';
						}
						if($self.hasClass('dfd_horizontal_parallax')) {
							coords = diffPos + 'px,' + statPos;
						}

						if($self.hasClass('dfd-multi-parallax-layer')) {
							var increment = +$self.attr('data-index');
							var dirMulti = $self.data('direction-multi') ? $self.data('direction-multi') : 'vertical';
							var multiPost = -(diff * speed * increment);
							if(dirMulti == 'vertical') {
								coords = statPos + ', ' + multiPost + 'px';
							} else {
								coords = multiPost + 'px,' + ' ' + statPos;
							}
						}

						if($self.hasClass('dfd-row-parallax')) {
							var yPos = -(diff * speed);

							if(yPos > maxMinValue) yPos = maxMinValue;
							if(yPos < -maxMinValue) yPos = -maxMinValue;

							// Move the module
							$self.find('>.row').css({
								'-webkit-transform': 'matrix(1,0,0,1,0,'+yPos+')',
								'-moz-transform': 'matrix(1,0,0,1,0,'+yPos+')',
								'-0-transform': 'matrix(1,0,0,1,0,'+yPos+')',
								'transform': 'matrix(1,0,0,1,0,'+yPos+')'
							});
						}
						if(($self.hasClass('dfd-column-parallax'))) {
							var w = dfd_ronneby.windowWidth;
							var colParalDestroy = $self.data('parallax-destroy');
							if (colParalDestroy != undefined && w <= colParalDestroy ) {
								$self.css ({
									'':''
								});
							} else {
								// Move the column
								var yPos = -(diff * speed);

								if(yPos > maxMinValue) yPos = maxMinValue;
								if(yPos < -maxMinValue) yPos = -maxMinValue;

								window.requestAnimationFrame(function() {
									$self.css({
										'-webkit-transform': 'matrix(1,0,0,1,0,'+yPos+')',
										'-moz-transform': 'matrix(1,0,0,1,0,'+yPos+')',
										'-0-transform': 'matrix(1,0,0,1,0,'+yPos+')',
										'transform': 'matrix(1,0,0,1,0,'+yPos+')'
									});
								});
							}
						}
						if (
								$self.hasClass('dfd-fade-on-scroll') &&
								((dfd_ronneby.windowScrollTop ) > (topOffset)) &&
								((topOffset + selfHeight) > dfd_ronneby.windowScrollTop)
						) {
							var height = $self.height();

							// Fade the row
							window.requestAnimationFrame(function() {
								$self.css({
									opacity: (1 + 1/(height/(topOffset - dfd_ronneby.windowScrollTop)))
								});
							});
						}
						if (
								((dfd_ronneby.windowScrollTop + dfd_ronneby.windowHeight) > (topOffset)) &&
								((topOffset + selfHeight) > dfd_ronneby.windowScrollTop) &&
								(
									$self.hasClass('dfd_vertical_parallax') ||
									$self.hasClass('dfd_horizontal_parallax') ||
									$self.hasClass('dfd-multi-parallax-layer')
								)
						) {
							// Move the background
							window.requestAnimationFrame(function() {
								$self.css({
									'-webkit-transform': 'translate3d('+coords+',0)',
									'-moz-transform': 'translate3d('+coords+',0)',
									'-0-transform': 'translate3d('+coords+',0)',
									'transform': 'translate3d('+coords+',0)'
								});
							});
						}
						if (
								((dfd_ronneby.windowScrollTop + dfd_ronneby.windowHeight) > (topOffset)) &&
								((topOffset + selfHeight) > dfd_ronneby.windowScrollTop) &&
								$self.hasClass('upb_row_bg')
						) {
							// Move the background
							window.requestAnimationFrame(function() {
								$self.css({backgroundPosition: coords});
							});
						}
						recalcInitValues();

					}); // window scroll
				});
			}
		},
		initMultiParallax = function() {
			$('.dfd-row-bg-wrap.dfd-row-bg-image.dfd_mousemove_parallax').each(function() {
				var $self = $(this),
					mobileEnabled = ($self.data('mobile_enable') && $self.data('mobile_enable') == '1') ? true : false;

				if(!mobileEnabled && Modernizr.touch && dfd_ronneby.windowWidth < 800) return;
				
				$self.parent().css({'z-index': 'initial'});
				$('.dfd-interactive-parallax-item', $self).parallax({mouseport: $self.parent()});
			});
		},
		initAnimatedBg = function() {
			$('.dfd-row-bg-image.dfd_animated_bg').each(function() {
				var $self = $(this),
					dir = $self.data('direction'),
					speed = 100 - $self.data('parallax_sense'),
					coords = 0,
					mobileEnabled = ($self.data('mobile_enable') && $self.data('mobile_enable') == '1') ? true : false,
					width = $self.parent().outerWidth(),
					height = $self.parent().outerHeight();
					
				if(!mobileEnabled && Modernizr.touch && dfd_ronneby.windowWidth < 800) {
					return;
				}

				var actualImage = new Image();
				actualImage.src = $self.attr('data-bg-img').replace(/"/g,'').replace(/url\(|\)$/ig, '');

				if(!$self.hasClass('bg-initialized')) {
					$self.addClass('bg-initialized');
					actualImage.onload = function() {
						if(dir == 'left' || dir == 'right') {
							$self.css('width', actualImage.width + width);
						} else if(dir == 'top' || dir == 'bottom') {
							$self.css('height', actualImage.height + height);
						}

						setInterval(function() {
							if(dir == 'left' || dir == 'bottom') {
								coords -= 1;
							} else {
								coords += 1;
							}

							if(
								(coords < -actualImage.width && dir == 'left') || 
								(coords < -actualImage.height && dir == 'bottom')
							) {
								coords = 0;
							}

							if( (coords > 0 && dir == 'right') ) {
								coords = -actualImage.width;
							}

							if( (coords > 0 && dir == 'top') ) {
								coords = -actualImage.height;
							}
							if(dir == 'left' || dir == 'right') {
								$self.css({
									'-webkit-transform': 'translate3d('+coords +'px, 0, 0)',
									'-moz-transform': 'translate3d('+coords +'px, 0, 0)',
									'-o-transform': 'translate3d('+coords +'px, 0, 0)',
									'-ms-transform': 'translate3d('+coords +'px, 0, 0)',
									'transform': 'translate3d('+coords +'px, 0, 0)'
								});
							} else {
								$self.css({
									'-webkit-transform': 'translate3d(0, '+ coords + 'px, 0)',
									'-moz-transform': 'translate3d(0, '+ coords + 'px, 0)',
									'-o-transform': 'translate3d(0, '+ coords + 'px, 0)',
									'-ms-transform': 'translate3d(0, '+ coords + 'px, 0)',
									'transform': 'translate3d(0, '+ coords + 'px, 0)'
								});
							}
						}, speed);
					};
				}
			});
		},
		initCanvasBg = function() {
			
			$('.dfd-row-bg-canvas').each(function(){
				var $self = $(this);
				
				if(dfd_ronneby.windowWidth < 1100) {
					return false;
				}
				var canvas_id = $self.data('canvas-id');
				var canvas_style = $self.data('canvas-style');
				var canvas_color = $self.data('canvas-color');
				var apply_to = $self.data('canvas-size');

				if(canvas_color == '') {
					canvas_color = '#ffffff';
				}

				if(canvas_style == 'style_1') {
					$self.append('<canvas id="canvas-'+ canvas_id +'" />');
				}

				var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
				var wrapper = (apply_to != 'window') ? $('#'+canvas_id).parents('.vc-row-wrapper') : dfd_ronneby.window;

				if(canvas_style == 'style_1') {
					(function() {
						initHeader('canvas-'+canvas_id);
						initAnimation();
						addListeners();
						function initHeader(id) {
							width = wrapper.width();
							height = wrapper.height();
							target = {x: width/2, y: height/2};

							largeHeader = document.getElementById(id);
							largeHeader.style.height = height+'px';

							canvas = document.getElementById(id);
							canvas.width = width;
							canvas.height = height;
							ctx = canvas.getContext('2d');

							// create points
							points = [];
							for(var x = 0; x < width; x = x + width/20) {
								for(var y = 0; y < height; y = y + height/20) {
									var px = x + Math.random()*width/20;
									var py = y + Math.random()*height/20;
									var p = {x: px, originX: px, y: py, originY: py };
									points.push(p);
								}
							}

							// for each point find the 5 closest points
							for(var i = 0; i < points.length; i++) {
								var closest = [];
								var p1 = points[i];
								for(var j = 0; j < points.length; j++) {
									var p2 = points[j]
									if(!(p1 == p2)) {
										var placed = false;
										for(var k = 0; k < 5; k++) {
											if(!placed) {
												if(closest[k] == undefined) {
													closest[k] = p2;
													placed = true;
												}
											}
										}

										for(var k = 0; k < 5; k++) {
											if(!placed) {
												if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
													closest[k] = p2;	
													placed = true;
												}
											}
										}
									}
								}
								p1.closest = closest;
							}

							// assign a circle to each point
							for(var i in points) {
								var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
								points[i].circle = c;
							}
						}

						// Event handling
						function addListeners() {
							if(!('ontouchstart' in window)) {
								window.addEventListener('mousemove', mouseMove);
							}
							window.addEventListener('resize', resize);
						}

						function mouseMove(e) {
							var posx = 0;
							var posy = 0;
							var offset_left = $('#'+canvas_id).offset().left;
							var offset_top = $('#'+canvas_id).offset().top;
							if (e.pageX || e.pageY) {
								posx = e.pageX;
								posy = e.pageY;
							} else if (e.clientX || e.clientY)    {
								posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
								posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
							}
							target.x = posx - offset_left;
							target.y = posy - offset_top;
						}

						function resize() {
							width = wrapper.width();
							height = wrapper.height();
							largeHeader.style.height = height+'px';
							canvas.width = width;
							canvas.height = height;
						}

						// animation
						function initAnimation() {
							animate();
							for(var i in points) {
								shiftPoint(points[i]);
							}
						}

						function animate() {
							if(animateHeader) {
								ctx.clearRect(0,0,width,height);
								for(var i in points) {
									// detect points in range
									if(Math.abs(getDistance(target, points[i])) < 4000) {
										points[i].active = 0.3;
										points[i].circle.active = 0.6;
									} else if(Math.abs(getDistance(target, points[i])) < 20000) {
										points[i].active = 0.1;
										points[i].circle.active = 0.3;
									} else if(Math.abs(getDistance(target, points[i])) < 40000) {
										points[i].active = 0.02;
										points[i].circle.active = 0.1;
									} else {
										points[i].active = 0;
										points[i].circle.active = 0;
									}

									drawLines(points[i]);
									points[i].circle.draw();
								}
							}
							requestAnimationFrame(animate);
						}

						function shiftPoint(p) {
							TweenLite.to(p, 1+1*Math.random(), {
								x:p.originX-50+Math.random()*100,
								y: p.originY-50+Math.random()*100,
								ease:Circ.easeInOut,
								onComplete: function() {
									shiftPoint(p);
								}
							});
						}

						// Canvas manipulation
						function drawLines(p) {
							if(!p.active) {
								return;
							}
							for(var i in p.closest) {
								ctx.beginPath();
								ctx.moveTo(p.x, p.y);
								ctx.lineTo(p.closest[i].x, p.closest[i].y);
								ctx.strokeStyle = 'rgba(255,255,255,'+ p.active+')';
								ctx.stroke();
							}
						}

						function Circle(pos,rad,color) {
							var _this = this;

							// constructor
							(function() {
								_this.pos = pos || null;
								_this.radius = rad || null;
								_this.color = color || null;
							})();

							this.draw = function() {
								if(!_this.active) {
									return;
								}
								ctx.beginPath();
								ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
								ctx.fillStyle = 'rgba(255,255,255,'+ _this.active+')';
								ctx.fill();
							};
						}

						// Util
						function getDistance(p1, p2) {
							return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
						}
					})();
				} else if(canvas_style == 'style_2') {
					$('#'+canvas_id).particleground({
						dotColor: canvas_color,
						lineColor: canvas_color
					});
				} else if(canvas_style == 'style_3') {
					(function() {
						var mouseX = 0, mouseY = 0,

						windowHalfX = window.innerWidth / 2,
						windowHalfY = window.innerHeight / 2,

						SEPARATION = 200,
						AMOUNTX = 1,
						AMOUNTY = 1,

						camera, scene, renderer;

						init();
						animate();

						function init() {
							var container, separation = 1000, amountX = 50, amountY = 50, color = 0xffffff,
							particles, particle;
							container = document.getElementById(canvas_id);
							camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
							camera.position.z = 100;
							scene = new THREE.Scene();
							renderer = new THREE.CanvasRenderer({ alpha: true });
							renderer.setPixelRatio( window.devicePixelRatio );
							renderer.setClearColor( 0x000000, 0 );   // canvas background color
							renderer.setSize( wrapper.width(), wrapper.height() );
							container.appendChild( renderer.domElement );

							var PI2 = Math.PI * 2;
							var material = new THREE.SpriteCanvasMaterial( {
								color: color,
								opacity: 0.5,
								program: function ( context ) {
									context.beginPath();
									context.arc( 0, 0, 0.5, 0, PI2, true );
									context.fill();
								}
							} );
							var geometry = new THREE.Geometry();
							/*
							 *   Number of particles
							 */
							for ( var i = 0; i < 150; i ++ ) {

								particle = new THREE.Sprite( material );
								particle.position.x = Math.random() * 2 - 1;
								particle.position.y = Math.random() * 2 - 1;
								particle.position.z = Math.random() * 2 - 1;
								particle.position.normalize();
								particle.position.multiplyScalar( Math.random() * 10 + 600 );
								particle.scale.x = particle.scale.y = 5;
								scene.add( particle );
								geometry.vertices.push( particle.position );
							}
							/*
							 *   Lines
							 */
							var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: color, opacity: 0.2 } ) );
							scene.add( line );
							document.addEventListener( 'mousemove', onDocumentMouseMove, false );
							document.addEventListener( 'touchstart', onDocumentTouchStart, false );
							window.addEventListener( 'resize', onWindowResize, false );

						}

						function onWindowResize() {
							windowHalfX = wrapper.width() / 2;
							windowHalfY = wrapper.height() / 2;
							camera.aspect = wrapper.width() / wrapper.height();
							camera.updateProjectionMatrix();
							renderer.setSize( wrapper.width(), wrapper.height() );
						}

						function onDocumentMouseMove(event) {
							mouseX = (event.clientX - windowHalfX) * 0.05;
							mouseY = (event.clientY - windowHalfY) * 0.2;
						}

						function onDocumentTouchStart( event ) {

							if ( event.touches.length > 1 ) {

								event.preventDefault();

								mouseX = (event.touches[ 0 ].pageX - windowHalfX) * 0.7;
								mouseY = (event.touches[ 0 ].pageY - windowHalfY) * 0.7;

							}

						}

						function onDocumentTouchMove( event ) {

							if ( event.touches.length == 1 ) {

								event.preventDefault();

								mouseX = event.touches[ 0 ].pageX - windowHalfX;
								mouseY = event.touches[ 0 ].pageY - windowHalfY;

							}

						}

						function animate() {

							requestAnimationFrame( animate );

							render();

						}

						function render() {

							camera.position.x += ( mouseX - camera.position.x ) * 0.1;
							camera.position.y += ( - mouseY + 200 - camera.position.y ) * 0.05;
							camera.lookAt( scene.position );

							renderer.render( scene, camera );

						}
					})();

				} else if(canvas_style == 'style_4') {
					$('#'+canvas_id).particlegroundOld({
						dotColor: canvas_color,
						lineColor: canvas_color
					});
				}
			});
		},
		initVideoBg = function() {
			$('.dfd-video-bg video, .dfd-video-bg .dfd-bg-frame').each(function() {
				var $self = $(this),
					ratio = 1.778,
					pWidth,
					pHeight,
					selfWidth,
					selfHeight,
					setSizes = function() {
						pWidth = $self.parents('.vc-row-wrapper.wpb_row').length > 0 ? $self.parents('.vc-row-wrapper.wpb_row').width() : $self.parent().width();
						pHeight = $self.parents('.vc-row-wrapper.wpb_row').length > 0 ? $self.parents('.vc-row-wrapper.wpb_row').height() : $self.parent('').height();
						if(pWidth / ratio < pHeight) {
							selfWidth = Math.ceil(pHeight * ratio);
							selfHeight = pHeight;
							$self.css({
								'width': selfWidth,
								'height': selfHeight
							});
						} else {
							selfWidth = pWidth;
							selfHeight = Math.ceil(pWidth / ratio);
							$self.css({
								'width': selfWidth,
								'height': selfHeight
							});
						}
					};
				
				$self.parents('.dfd-video-bg').siblings('.dfd-video-controller').unbind('click').on('click', function(e) {
					e.preventDefault();
					var $button = $(this);
					if($button.hasClass('dfd-socicon-ic_pause_48px')) {
						$self.get(0).pause();
						$button.removeClass('dfd-socicon-ic_pause_48px').addClass('dfd-socicon-icon-play');
					} else {
						$self.get(0).play();
						$button.removeClass('dfd-socicon-icon-play').addClass('dfd-socicon-ic_pause_48px');
					}
				});
				$self.parents('.dfd-video-bg').siblings('.dfd-sound-controller').unbind('click').on('click', function(e) {
					e.preventDefault();
					var $button = $(this);
					if($button.hasClass('dfd-socicon-unmute')) {
						$self.prop('muted',false);
						$button.removeClass('dfd-socicon-unmute').addClass('dfd-socicon-mute');
					} else {
						$self.prop('muted',true);
						$button.removeClass('dfd-socicon-mute').addClass('dfd-socicon-unmute');
					}
				});
				setSizes();
				dfd_ronneby.window.on('resize', function() {
					setSizes();
				});
				$('body').on('post-load', setSizes);
				dfd_ronneby.window.on('load', function() {
					if($self.is('video') && $self.get(0).paused) {
						$self.get(0).play();
					}
				});
			});
			if($('.dfd-youtube-bg').length > 0) {
				var tag = document.createElement('script');

				tag.src = "//www.youtube.com/iframe_api";
				var firstScriptTag = document.getElementsByTagName('script')[0];
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

				var players = {};

				window.onYouTubeIframeAPIReady = function() {
					$('.dfd-youtube-bg iframe').each(function() {
						var $self = $(this),
							id = $self.attr('id');

						if($self.data('muted') && $self.data('muted') == '1') {
							players[id] = new YT.Player(id, {
								events: {
									"onReady": onPlayerReady
								}
							});
						} else {
							players[id] = new YT.Player(id, {
								events: {
									"onReady": onPlayerReadyLoud
								}
							});
						}
					});
				};
			}
			function onPlayerReady(e) {
				e.target.mute();
				e.target.playVideo();
			}
			function onPlayerReadyLoud(e) {
				e.target.playVideo();
			}
			if($('.dfd-vimeo-bg').length > 0) {
				$('.dfd-vimeo-bg iframe').each(function() {
					var $self = $(this);

					if (window.addEventListener) {
						window.addEventListener('message', onMessageReceived, false);
					} else {
						window.attachEvent('onmessage', onMessageReceived, false);
					}

					function onMessageReceived(e) {
						var data = JSON.parse(e.data);

						switch (data.event) {
							case 'ready':
								$self[0].contentWindow.postMessage('{"method":"play", "value":1}','*');
								if($self.data('muted') && $self.data('muted') == '1') {
									$self[0].contentWindow.postMessage('{"method":"setVolume", "value":0}','*');
								}
								break;
						}
					}
				});
			}
		};
		
		dfd_ronneby.document.ready(function() {
			// Cache the Y offset and the speed of each sprite
			$('[data-type]').each(function() {
				$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
				$(this).data('Xposition', $(this).attr('data-Xposition'));
				$(this).data('parallax_sense', $(this).attr('data-parallax_sense'));
			});
			
			init();
		});
		dfd_ronneby.window.load(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.initStunHeaderParallax = function() {
		dfd_ronneby.window.on('load resize scroll', function() {
			var scrolledY = dfd_ronneby.windowScrollTop,
				$self = $('.stuning-header-inner .page-title-inner'),
				height = $self.parent().height(),
				coord = scrolledY*.333;

			window.requestAnimationFrame(function() {
				$self.css({
					'-webkit-transform': 'translate3d(0,'+coord+'px,0)',
					'-moz-transform': 'translate3d(0,'+coord+'px,0)',
					'-o-transform': 'translate3d(0,'+coord+'px,0)',
					'transform': 'translate3d(0,'+coord+'px,0)',
					'opacity': (1 - (scrolledY/height))
				});
			});
		});
	};
	
	dfd_ronneby.initEqHeight = function() {
		var init = function() {
			var w = dfd_ronneby.windowWidth;
			$('.features_module-eq-height .row').each(function(){
				if (w>800) {
					$(this).find('.columns').equalHeights();
				} else {
					$(this).find('.columns').equalHeightsDestroy();
				}
			});
			$('.module-eq-height .row').each(function(){
				if (w>800) {
					$(this).find('.columns').equalHeights();
				} else {
					$(this).find('.columns').equalHeightsDestroy();
				}
			});
			$('.features_tiles_module .row').each(function(){
				$(this).find('.columns').equalHeights();
			});
			$('.dfd-equal-height-children').each(function(){
				if (w>800 && !$(this).hasClass('dfd-destroy-wide')) {
					if ($(this).find('#left-sidebar.dfd-eq-height').length > 0 || $(this).find('#right-sidebar.dfd-eq-height').length > 0) {
						var $self = $(this);
						setTimeout(function() {
							$self.find('.dfd-eq-height').equalHeights();}, 1000);
					} else {
						$(this).find('.dfd-eq-height').equalHeights();
					}
					$(this).find('.dfd-eq-height').equalHeights();
				} else if ($(this).hasClass('dfd-mobile-keep-height')) {
					$(this).find('.dfd-eq-height').equalHeights();
				} else if (w>1024 && $(this).hasClass('dfd-destroy-wide')) {
					$(this).find('.dfd-eq-height').equalHeights();
				} else {
					$(this).find('.dfd-eq-height').equalHeightsDestroy();
				}
			});
			$('.vc-row-wrapper.equal-height-columns').each(function(){
				var $container = $(this);
				var resolution = $container.data('resolution') ? $container.data('resolution') : 800;
				var $columns = $container.find('>.row >.columns');
				if($(this).hasClass('mobile-destroy-equal-heights')) {
					if (w>resolution) {
						$columns.equalHeights();
					} else {
						$columns.equalHeightsDestroy();
					}
				} else {
					$(this).find('>.row >.columns').equalHeights();
				}
				$columns.each(function() {
					if($(this).find('.vc-row-wrapper').length > 0) {
						$(this).addClass('dfd-bg-inside');
					}
				});
			});

			$('.dfd-equal-height-wrapper').each(function(){
				if($(this).hasClass('dfd-mobile-destroy-equal-heights')) {
					if (w>800) {
						$(this).find('>div').equalHeights();
					} else {
						$(this).find('>div').equalHeightsDestroy();
					}
				} else {
					$(this).find('>div').equalHeights();
				}
			});
		};

		dfd_ronneby.window.on('load resize', init);
		dfd_ronneby.window.one('scroll', init);

		if($('#left-sidebar').length > 0 || $('#right-sidebar').length > 0) {
			$('#grid-folio, .works-list, #grid-posts, .dfd-blog, .dfd-portfolio, .dfd-gallery').observeDOM(function(){
				init();
			});
		}
		if($('.dfd-equal-height-children').length > 0) {
			$('.dfd-equal-height-children').parent().observeDOM(function(){ 
				init();
			});
		}

		dfd_ronneby.document.ready(function() {
			init();
			$('.vc-row-wrapper.equal-height-columns.aligh-content-verticaly').each(function(){
				var $container = $(this);
				var $columns = $container.find('>.row >.columns');
				$columns.each(function() {
					if($(this).find('.vc-row-wrapper').length > 0) {
						$(this).find('.vc-row-wrapper').wrapInner('<div class="dfd-vertical-aligned"></div>');
					} else {
						$(this).wrapInner('<div class="dfd-vertical-aligned"></div>');
					}
				});
			});
		});
	};
	
	dfd_ronneby.initStickInParent = function() {
		dfd_ronneby.window.on('load resize', function() {
			if (Modernizr.touch === false && !$('html').is('.lt-ie10, .lt-ie9, .lt-ie8') && dfd_ronneby.windowWidth > 800) {
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
				$('.folio-info.desc-left > .row, .folio-info.desc-right > .row').stick_in_parent({
					parent: 'div.project-wrap',
					sticky_class: 'sticky',
					offset_top: offset + 20,
					bottoming: true,
					inner_scrolling: false
				});
				$('.single-folio .dfd-single-share-fixed .rrssb-buttons').stick_in_parent({
					parent: '.row.project',
					sticky_class: 'sticky',
					offset_top: offset,
					bottoming: true,
					inner_scrolling: false
				});
				$('.dfd-single-gallery .dfd-single-share-fixed .rrssb-buttons').stick_in_parent({
					parent: '#layout.dfd-single-gallery .blog-section',
					sticky_class: 'sticky',
					offset_top: offset,
					bottoming: true,
					inner_scrolling: false
				});
				$('#layout.single-post .dfd-single-share-fixed .rrssb-buttons').stick_in_parent({
					parent: '#layout.single-post .blog-section',
					sticky_class: 'sticky',
					offset_top: offset,
					bottoming: true,
					inner_scrolling: false
				});
			}
		});
	};
	
	dfd_ronneby.hideBeforeAnimation = function() {
		$('.cr-animate-gen, [data-animate="1"]').each(function () {
			var $self = $(this),
				$item;

			if ($self.data('animate-item')) {
				$item = $self.find($self.data('animate-item'));
				$item.css('opacity','0');
			} else {
				$self.css('opacity','0');
			}
		});
	};
	
	dfd_ronneby.initAnimation = function() {
		var init = function () {
			var offset = '85%';

			$('.cr-animate-gen, [data-animate="1"]').each(function () {
					var $curr = $(this);
					var $item;
					var $animation;
					$animation = $curr.data('animate-type');

					if ($curr.data('animate-item')) {
						$item = $curr.find($curr.data('animate-item'));
						$item.each(function() {
							var $self = $(this);
							$self.waypoint(function () {
								if(!$self.hasClass('animation-done')) {
									$self.addClass('animation-done');
										$self.velocity($animation, {stagger: 150, drag: true, display:'auto'});
								}
							}, {offset: offset});
						});
					} else {
						$curr.waypoint(function () {
							if(!$curr.hasClass('animation-done')) {
								$curr.addClass('animation-done');
								$curr.velocity($animation,{display:'auto'});
							}
						}, {offset: offset});
					}
			});
			$('.call-on-waypoint').each(function () {
				var $this = $(this);

				$this.waypoint(function () {
					$this.trigger('on-waypoin');
				}, {triggerOnce: true, offset: offset});
			});
		};

		dfd_ronneby.window.load(init);
		$('body').on('post-load', init);
	};
	
	dfd_ronneby.imagesLazyLoad = function() {
		var init = function() {
			$('.dfd-img-lazy-load').each(function () {
				var $self = $(this),
					offset = $('body').data('lazy-load-offset') ? $('body').data('lazy-load-offset') : '140%';
				$self.waypoint(function () {
					if(!$self.hasClass('image-loaded')) {
						var $data_src = $self.find('img').attr('data-src');
						if(('devicePixelRatio' in window) && (window.devicePixelRatio > 1) && $self.find('img').attr('data-retina-img')) {
							$data_src = $self.find('img').attr('data-retina-img');
						}
						$self.addClass('image-loaded');
						$self
							//.css('background','none')
							.find('img').attr('src', $data_src).css('opacity','1');
					}
				}, {offset: offset});
			});
			$('.dfd-bg-lazy-load').each(function () {
				var $self = $(this),
					offset = $('body').data('lazy-load-offset') ? $('body').data('lazy-load-offset') : '140%',
					resolution = 799;
				$self.waypoint(function () {
					if(!$self.hasClass('image-loaded')) {
						var $data_src = $self.attr('data-bg-img');
						if(('devicePixelRatio' in window) && (window.devicePixelRatio > 1) && $self.attr('data-retina-bg-img')) {
							$data_src = $self.attr('data-retina-bg-img');
						}
						if($self.data('responsive-resolution')) {
							resolution = $self.data('responsive-resolution');
						}
						if($self.data('responsive-image') && dfd_ronneby.windowWidth <= resolution) {
							$data_src = $self.attr('data-responsive-image');
						}
						$self.addClass('image-loaded');
						$self.css('backgroundImage', 'url('+$data_src+')');
					}
				}, {offset: offset});
			});
		};
		
		dfd_ronneby.window.load(init);
		$('body').on('post-load', function() {
			setTimeout(function() {
				init();
			},1000);
		});
	};
	
	dfd_ronneby.initMobileMenu = function() {
		if($('#header-container').hasClass('header-style-3') || $('#header-container').hasClass('header-style-4')) {
			var $mobileMenu = $('<ul />');
			$('ul.menu-clonable-for-mobiles').each(function() {
				var $sub_menu = $(this).children().clone();
				$mobileMenu = $mobileMenu.append($sub_menu);
			});
		} else {
			var $mobileMenu = $('ul.menu-clonable-for-mobiles').clone();
		}
		$mobileMenu
				.removeAttr('id')
				.find('ul, li, a').addBack()
				.removeAttr('id');
		$mobileMenu
				.find('ul')
				.removeAttr('style');
	
		$mobileMenu
				.attr('class', 'sidr-dropdown-menu')
			.find('ul')
				.attr('class', 'sidr-class-sub-menu');
		
		$mobileMenu.find('.sub-nav > ul').each(function(){
			$(this).unwrap();
		});
		
		$mobileMenu.find('li').each(function(){
			var $self = $(this);
			if($self.find('ul').length > 0) {
				$self.find('> a').append('<i class="sidr-dropdown-toggler" />');
			}
		});
	
		var $menuButton = $('#mobile-menu');
		
		$('.sidr-inner').append($mobileMenu);
		$menuButton.sidr({
			displace: false,
			onOpen: function() {
				$('body').toggleClass('sidr-opened');
				$menuButton.addClass('opened');
			},
			onClose: function() {
				$('body').toggleClass('sidr-opened');
				$menuButton.removeClass('opened');
			}
		});
		
		$('.sidr-dropdown-toggler').unbind('click').bind('touchend click', function(e) {
			e.preventDefault();
			$(this).parent('a').toggleClass('active').siblings('ul').slideToggle(500);
		});
		$menuButton.unbind('click').bind('touchend click', function(e) {
			e.preventDefault();
			var $self = $(this);
			if(!$self.hasClass('opened')) {
				$.sidr('open');
			} else {
				$.sidr('close');
			}
		});
		$('.dfd-sidr-close').unbind('click').bind('touchend click', function(e) {
			e.preventDefault();
			$.sidr('close');
		});
	};
	
	dfd_ronneby.initRetinaLogo = function() {
		if (('devicePixelRatio' in window) && (window.devicePixelRatio > 1)) {
			$('.logo-for-panel img').each(function(){
				var $logo = $(this);
				var retina_src = $logo.attr('data-retina');

				if (!retina_src || retina_src.legth===0) {
					return;
				}

				var w = $logo.attr('data-retina_w');
				var h = $logo.attr('data-retina_h');

				var max = {w: 164, h: 164};

				$logo.attr('src', retina_src);

				if (w<max.w && h<max.h) {
					$logo.css({
						width: Math.round(w/2) + 'px',
						height: Math.round(h/2) + 'px'
					});
				}
			});
		}
	};
	
	dfd_ronneby.initHeaderEvents = function() {
		var init = function() {
			var $header_container = $("#header-container");
			var disable_body_hover = function() {
				$header_container.addClass('dfd-disable-transition');

				setTimeout(function(){
					$header_container.removeClass('dfd-disable-transition');
				}, 400);
			};

			var initAnim = function($el, triggerClass, initClass) {
				if($el && $el.length > 0) {
					if($el.is('#header-container') && $('body').data('header-responsive-width') && (dfd_ronneby.windowWidth) < $('body').data('header-responsive-width')) {
						return;
					}
					$el.addClass(initClass);
					if(dfd_ronneby.window.scrollTop() > 0) {
						$el.addClass(triggerClass);
						dfd_ronneby.window.trigger('reinit-waypoint');
					} else {
						$el.removeClass(triggerClass);
					}
				}
			};

			$header_container = $('#header-container');

			var header_width, hcH, header_wrap_height, header_logo_height, header_bottom_height;

			var $header_wrap = $header_container.find('.header-wrap'),
				$stuning_header = $('#stuning-header'),
				$menu_fixer = $('#menu-fixer');

			var header_el_sizing = function() {
				header_width = $('#main-wrap').width();

				$header_container.find('.dfd-top-row').width(header_width);
				/* menu fixer */

				hcH = ($header_container.find('.dfd-top-row').length) ? $header_container.find('.dfd-top-row').outerHeight() : $header_container.find('#header').outerHeight();

				if ($stuning_header.length > 0) {
					if (
						$menu_fixer.length === 0
						&& (!$header_container.hasClass('dfd-header-layout-fixed')
						|| $header_container.hasClass('dfd-keep-menu-fixer'))
					) {
						$menu_fixer = $('<div id="menu-fixer"></div>');
					}
					$stuning_header.prepend($menu_fixer);
				} else {
					if (
						$header_container.hasClass('dfd-header-layout-fixed') || $('#main-wrap').hasClass('dfd-one-page-scroll-layout') || $header_container.hasClass('menu-position-bottom')
					) {
						if ($menu_fixer.length > 0) {
							$menu_fixer.remove();
						}
					} else {
						if ($menu_fixer.length === 0) {
							$menu_fixer = $('<div id="menu-fixer"></div>');
							$($menu_fixer).insertAfter('#header-container');
						}
					}
				}
				if ($menu_fixer.length > 0) {
					$menu_fixer.height(hcH);
				}
			};

			dfd_ronneby.window.on('load resize', function() {
				header_el_sizing();
				sideHeaderSetter();
			});

			if(
				$header_container.hasClass('dfd-enable-headroom') && !$('#layout').hasClass('one-page-scroll')
			) {
				dfd_ronneby.window.on('load resize scroll', function() {
					initAnim($header_container, 'small', 'animated--header');
				});
			}

			if(
				$('#top-panel-inner').hasClass('dfd-panel-animated')
			) {
				var $top_panel_inner = $('#top-panel-inner .top-panel-inner-wrapper');
				var set_top_panel = function() {
					var height = dfd_ronneby.window.height() - ($('body').css('margin').replace('px', '') * 2);
					$top_panel_inner.outerHeight(height);
				};
				set_top_panel();
				$top_panel_inner.wrapInner('<div class="dfd-vertical-aligned" />');
				$('.top-inner-page').remove();
				//top_panel_animation.init();
				dfd_ronneby.window.on('load reinit-waypoint', function() {
					if(typeof Waypoint != "undefined") {
						setTimeout(function() {
							Waypoint.refreshAll();
						}, 1200);
					}
				});
				dfd_ronneby.window.on('load scroll', function() {
					initAnim($('body'), 'moved', 'animated--body');
				});
				dfd_ronneby.window.on('load resize', set_top_panel);
			}


			/*---------------------------------
				Mega Menu (if enabled)
			-----------------------------------*/
			if (typeof $.initSlider === 'function') {
				setTimeout(function() {
					$.initSlider();
				}, 500);
			}
			if (typeof $.runMegaMenu === 'function') {
				$.runMegaMenu();
			}

			/*---------------------------------
				Drop-down
			-----------------------------------*/
			$('.sel-dropdown').unbind('hover').hover(function(){
				$(this).addClass("hovered");
			}, function(){
				$(this).removeClass("hovered");
			});

			$('.click-dropdown > a').unbind('click touchstart').bind('click touchstart', function(e){
				var $self = $(this).parent();
				e.preventDefault();
				if(!$self.hasClass('active')) {
					$self.addClass('active').siblings('.click-dropdown').removeClass('active');
				} else {
					$self.removeClass('active');
				}
			});

			/*---------------------------------
				Menu animation
			-----------------------------------*/
			$(".nav-item.has-submenu > a").on('click', function() {
				var $self = $(this);
				if ($self.attr('href') != '#' && $self.attr('href') != '' && $self.hasClass('open')) {
					window.location.href = $self.attr('href');
				}

				return false;
			});

			initSearchForm();

			initHeaderSixth();

			initOpenMenu();

			$('#dfd-side-header-activation-button').unbind('click').bind('click touchend', function(e) {
				e.preventDefault();
				$(this).parents('#header-container').toggleClass('active');
			});
			$('body').on('click touchend', '#dfd-menu-button', function(e) {
				e.preventDefault();
				var $self = $(this),
					$menuWrapper = $self.parents('.header-col-right');

				if($menuWrapper.hasClass('active')) {
					$menuWrapper.removeClass('active visible-overflow');
				} else {
					$menuWrapper.addClass('active');
					setTimeout(function() {
						$menuWrapper.addClass('visible-overflow');
					}, 700);
				}
			});

			dfd_ronneby.initRetinaLogo();

			/*---------------------------------
			 Bind Mobile Menu
			 -----------------------------------*/
			dfd_ronneby.initMobileMenu();
		},
		initOpenMenu = function() {
			var button = $('.dfd-menu-button');
			var headerContainer = $('#header-container');
			button.unbind('click').on('click touchend', function(e) {
				e.preventDefault();
				headerContainer.toggleClass('opened');
			});
		},
		initHeaderSixth = function() {
			var container = $('#header-container.header-style-6 .onclick-menu-wrap');
			var button = $('.dfd-click-menu-activation-button a', container);
			var menu = $('nav.onclick-menu', container);
			button.unbind('click').on('click touchend', function(e) {
				e.preventDefault();
				if ($(this).hasClass('opened')) {
					button.removeClass('opened');
				} else {
					button.addClass('opened');
				}
				menu.slideToggle(250);
			});
		},
//		header_items_timeout = function(el_first, el_second) {
//			var box_timer;
//			$(el_first).hover(function() {
//				if (box_timer != undefined) {
//					clearTimeout(box_timer);
//				}
//				$(el_second, $(this)).css('max-height', dfd_ronneby.windowHeight - $('#header > .header-wrap').height() - 40).fadeIn(300);
//			}, function() {
//				var $this = $(this);
//				box_timer = setTimeout(function() {
//					$(el_second, $this).fadeOut(300);
//				},0);
//			});
//		},
		initSearchForm = function() {
			"use strict";
			var button = $('.header-search-switcher');
			var form = $('.form-search-section');
			button.unbind('click').on('click touchend', function() {
				form.fadeToggle(500, function() {
					if (form.is(':visible')) {
						button.addClass("active");
					} else {
						button.removeClass("active");
					}
				});
				form.toggleClass('shift-form');
				return false;
			});
		},
		sideHeaderSetter = function() {
			var header = $('#header-container');
			if(header.hasClass('header-style-5') && $('.boxed_layout').length > 0) {
				var bodyWrapper = $('.boxed_layout');
				var bodyWrapperOffset = bodyWrapper.offset().left;
				if(header.hasClass('left')) {
					header.find('#header').css('left', bodyWrapperOffset);
				}
				if(header.hasClass('right')) {
					header.find('#header').css('right', bodyWrapperOffset);
				}
			}
		};
		
		dfd_ronneby.document.ready(init);
	};
	
	dfd_ronneby.initExtraElements = function() {
		dfd_ronneby.document.ready(function() {
			$('.widget_dfd_author').each(function() {
				$('.widget.soc-icons.dfd-soc-icons-hover-style-13 a', $(this)).dfdEqWidth();
			});

			dfd_ronneby.window.on("resize", function () {
				var $tiled_menu = $('.mega-menu, .sub-nav', '#header');
				if (dfd_ronneby.windowWidth >= screen_medium) {
					$tiled_menu.each(function(){
						if (!$(this).is(':visible')) {
							$(this).removeAttr('style');
						}
					});
				}
			});
			$(".widget_crum_cat_arch").each(function() {
				var $self = $(this),
					$target = $self.find(".dk_toggle");

				$target.on("click touchend", function() {
					$self.find(".dk_container").removeClass("dk_open");
					$(this).parent(".dk_container").toggleClass("dk_open");
				});
				dfd_ronneby.document.mouseup(function (e) {
					if (!$target.is(e.target) && $target.has(e.target).length === 0) {
						$self.find(".dk_container").removeClass("dk_open");
					}
				});
			});

			$('#footer .widget_nav_menu >ul >li').equalHeights();

			/*---------------------------------
			 Scroll To Top
			 -----------------------------------*/
			var $back_to_top = $('.body-back-to-top');
			dfd_ronneby.window.on('scroll', function() {
				if ($back_to_top.length>0) {
					if(dfd_ronneby.windowScrollTop > 80) {
						$back_to_top.addClass('active');
					} else {
						$back_to_top.removeClass('active');
					}
				}
			});

			var duration = 800;
			$('.back-to-top, .body-back-to-top').click(function (e) {
				e.preventDefault();
				$('html, body').animate({scrollTop: 0}, duration);
				return false;
			});
			
			$('.widget_akismet_widget strong').wrapInner('<span />');
			
			var $container = $('.pagination');
			if($container.hasClass('dfd-pagination-style-3') || $container.hasClass('dfd-pagination-style-4')) {
				var $current = $('.page-numbers ', $container).find('.current');
				$current.parent().addClass('current-parent');
				$current.parent().prev().addClass('before-current');
				$current.parent().next().addClass('after-current');
			}
			var $share_container = $('.entry-share-popup, .entry-share-no-popup, .entry-share-popup-folio, .dfd-single-share-fixed');

			if($($share_container).length  > 0) {
				$('.entry-share-clickable > a').each(function(){
					var $closebutton = $(this).parent().parent().siblings('.entry-share-clickable-close').find('>a');
					var $popup = $(this).parent().parent().siblings('.entry-share-popup-folio');

					$(this).click(function(){
						$popup.show().animate({top: '0'}, 200, function () {
							$closebutton.show();
						});

						return false;
					});

					$closebutton.click(function() {
						$popup.animate({top: '100%'}, 200, function() {
							$closebutton.hide();
						});
						setTimeout(function() {
							$popup.hide();
						},200);

						return false;
					});
				});

				$('.dfd-share-popup').unbind('click').bind('click touchend', function(e) {
					e.preventDefault();
					var $self = $(this);
					$self.siblings('.entry-share-popup').toggle('slow');
				});
			}
		});
	};
	
	dfd_ronneby.widgetTabs = function() {
		dfd_ronneby.document.ready(function() {
			$('.widget_crum_widget_tabs .tabs a').click(function() {
				var href = $(this).attr('href');
				if(!$(this).parent().hasClass('active')) {
					$(this).parent().addClass('active').siblings('dd').removeClass('active').parents('.tabs')
						.siblings('.tabs-content').find('li'+href+'Tab').addClass('active').siblings('li').removeClass('active');
				}
			});
		});
	};
	
	dfd_ronneby.loginFormHeader = function() {
		if($('#header .login-header').length <= 0) {
			return false;
		}
		var loginContainer = $('#header .login-header'),
			loginButton = loginContainer.find('a[data-reveal-id]'),
			loginBg = loginContainer.find('.reveal-modal-bg');
		loginButton.on('click', function(e) {
			e.preventDefault();
			loginContainer.find('#loginModal').addClass('open').fadeIn(300);
			loginBg.fadeIn(300);
		});
		loginBg.on('click', function(e) {
			e.preventDefault();
			loginContainer.find('#loginModal').removeClass('open').fadeOut(300);
			$(this).fadeOut(300);
		});
	};
	
	dfd_ronneby.init = function() {
		dfd_ronneby.hideBeforeAnimation();
		dfd_ronneby.initSizing();
		dfd_ronneby.initHeaderEvents();
		dfd_ronneby.frontentEditorReinitScripts();
		dfd_ronneby.initBackground();
		dfd_ronneby.initfluidvids();
		dfd_ronneby.initShortcodes();
		dfd_ronneby.initHoverDir();
		dfd_ronneby.anchorSmoothScroll();
		dfd_ronneby.initTopInnerPage();
		dfd_ronneby.initSideArea();
		dfd_ronneby.initPostsCarousel();
		dfd_ronneby.initPostsModule();
		dfd_ronneby.initGallery();
		dfd_ronneby.initBuddyPress();
		dfd_ronneby.initHeaderHorizontalScroll();
		dfd_ronneby.initSortPanelHideElems();
		dfd_ronneby.initPrettyPhoto();
		dfd_ronneby.initTaxonomyIsotope();
		dfd_ronneby.initSpacer();
		dfd_ronneby.initShortcodesLoadResize();
		dfd_ronneby.initStunHeaderParallax();
		dfd_ronneby.initEqHeight();
		dfd_ronneby.initStickInParent();
		dfd_ronneby.initAnimation();
		dfd_ronneby.imagesLazyLoad();
		dfd_ronneby.initExtraElements();
		dfd_ronneby.widgetTabs();
		dfd_ronneby.loginFormHeader();
	};
	
	dfd_ronneby.init();
})(jQuery);