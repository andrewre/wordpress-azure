(function($) {
    "use strict";
    $.fn.equalHeightsDestroy = function() {
        $(this).css({
            'height': 'auto',
            'min-height': '0px'
        });
        return this;
    };
    $.fn.equalHeights = function(options) {
        var settings = $.extend({
            container: null
        }, options);
        var currentTallest = 0;
        var outerTallest = 0;
        var $this = $(this);
        $this.css({
            'height': 'auto',
            'min-height': '0px'
        }).each(function() {
            var $el = $(this);
            if ($el.height() > currentTallest) {
                currentTallest = $el.height();
                outerTallest = $el.outerHeight();
            }
        }).css({
            'height': outerTallest,
            'min-height': outerTallest
        });
        if (settings.container != null) {
            $this.parents(settings.container).css({
                'height': outerTallest,
                'min-height': outerTallest
            });
        }
        return this;
    };
})(jQuery);
(function($) {
	"use strict";
	var dfd_dash = window.dfd_dash || {};
	
	window.dfd_dash = dfd_dash;
	
	dfd_dash.eqHeights = function() {
		var init = function() {
			$('.dfd-dashboard-section > .inner').equalHeights();
		};
		
		$(window).on('load resize', init);
	};
	
	dfd_dash.activateTheme = function() {
		var action = 'action=dfd_register_theme',
			switchView = function() {
				$('body').on('click', '.dfd-get-activation-form', function(e) {
					e.preventDefault();
					$(this)
						.removeClass('dfd-get-activation-form')
						.addClass('dfd-submit-activation')
							.parents('.content')
							.find('.front').hide()
							.next('.back').show();
				});
			},
			submitActivation = function() {
				$('body').on('click', '.dfd-submit-activation:not(.running)', function(e) {
					e.preventDefault();
						
					
					var $input = $('#dfd-ronneby-purchase-code'),
						code = $input.val(),
						$button = $(this),
						redirectUrl = $button.attr('data-redirect');
						
					$button.addClass('running');
					
					$input
						.parent().removeClass('validation-error')
							.find('.empty-field').hide()
								.next('.wrong-code').hide();
							
					$(window).trigger('resize');
							
					if(code == '') {
						$input
							.addClass('dfd-shake')
								.parent().addClass('validation-error')
									.find('.empty-field').show();
								
						$(window).trigger('resize');
						
						setTimeout(function() {
							$input.removeClass('dfd-shake');
						}, 1500);
						
						$button.removeClass('running');
						
						return false;
					}
					
					action += '&nonce=' + ajax_var.nonce + '&code=' + code;
					
					$.ajax({
						type: "post",
						url: ajax_var.url,
						data: action,
						complete: function(XMLHttpRequest) {
							if(XMLHttpRequest.status == 200 && XMLHttpRequest.responseText != '') {
								if(XMLHttpRequest.responseText == '0') {
									if(redirectUrl) {
										location.href = redirectUrl;
									} else {
										location.reload(true);
									}
								} else if(XMLHttpRequest.responseText == 'invalid-code') {
									$input
										.addClass('dfd-shake')
											.parent().addClass('validation-error')
												.find('.wrong-code').show();
											
									$(window).trigger('resize');
									
									setTimeout(function() {
										$input.removeClass('dfd-shake');
									}, 1500);
								}
							}
						}
					});
					
					$button.removeClass('running');
					
					return false;
				});
			},
			init = function() {
				switchView();
				submitActivation();
			};
			
			return init();
	};
	
	dfd_dash.deactivateTheme = function() {
		$('body').on('click', '.dfd-deactivate-theme:not(.running)', function(e) {
			e.preventDefault();
			
			$(this).addClass('running');
			
			$.ajax({
				type: "post",
				url: ajax_var.url,
				data: 'action=dfd_deactivate_theme&nonce=' + ajax_var.nonce,
				complete: function(XMLHttpRequest) {
					if(XMLHttpRequest.status == 200 && XMLHttpRequest.responseText == '0') {
						location.reload(true);
					}
				}
			});
			
			$(this).removeClass('running');

			return false;
		});
	};
	
	dfd_dash.deactivateManually = function() {
		$('body').on('click', '#dfd-manual-deactivate-popup-button, .dfd-menual-deactivate-close', function(e) {
			e.preventDefault();
			
			$('#dfd-manual-deactivate-popup').toggleClass('active');
			
			return false;
		});
		
		$('body').on('click', '.dfd-deactivate-theme-manually:not(.running)', function(e) {
			e.preventDefault();
			
			var $self = $(this),
				$codeInput = $self.siblings('.dfd-deactivate-puchase-code'),
				purchaseCode = $codeInput.val();
				
			$codeInput.removeClass('error');
				
			if(!purchaseCode) {
				$codeInput.addClass('error');
				
				return false;
			}
			
			$self.addClass('running');
			
			$.ajax({
				type: "post",
				url: ajax_var.url,
				data: 'action=dfd_deactivate_theme_manually&code='+ purchaseCode +'&nonce=' + ajax_var.nonce,
				complete: function(XMLHttpRequest) {
					if(XMLHttpRequest.status == 200 && XMLHttpRequest.responseText == '0') {
						location.reload(true);
					}
				}
			});
			
			$self.removeClass('running');

			return false;
		});
	};
	
	dfd_dash.updateTheme = function() {
		
	};
	
	dfd_dash.installDemo = function() {
		$('body').on('click', '.dfd-remove-popup', function(e) {
			e.preventDefault();
			var $popup = $('#dfd-theme-activation-required-popup');
			
			if($popup.length > 0) {
				$popup.removeClass('active');

				setTimeout(function() {
					$popup.remove();
				}, 300);
			}
		});
		$('.dfd-activation-required:not(.running)').on('click', function(e) {
			e.preventDefault();
			
			$(this).addClass('running');

			$.ajax({
				type: "post",
				url: ajax_var.url,
				data: 'action=dfd_registration_alert&nonce=' + ajax_var.nonce,
				complete: function(XMLHttpRequest) {
					if(XMLHttpRequest.status == 200 && XMLHttpRequest.responseText != '') {
						$('body').append(XMLHttpRequest.responseText);
						$('#dfd-theme-activation-required-popup').addClass('active');
					}
				}
			});
			
			$(this).removeClass('running');

			return false;
		});
	};
	
	dfd_dash.init = function() {
		dfd_dash.eqHeights();
		dfd_dash.activateTheme();
		dfd_dash.deactivateTheme();
		dfd_dash.deactivateManually();
		dfd_dash.updateTheme();
		dfd_dash.installDemo();
	};
	
	dfd_dash.init();
})(jQuery);