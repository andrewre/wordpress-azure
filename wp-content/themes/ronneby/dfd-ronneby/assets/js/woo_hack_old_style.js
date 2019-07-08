var add_to_cart_button;

(function($){
	"use strict";
	$(document).ready(function() {
		$('body').on('added_to_cart', function (trigger) {
			if (add_to_cart_button != undefined) {
				var $viewCartText = add_to_cart_button.siblings('.added_to_cart').text();
					add_to_cart_button.siblings('.added_to_cart').text('').append('<span class="cover"><span class="front"><i class="dfd-icon-trolley_check"></i><span>' + $viewCartText + '</span></span><span class="back"><i class="dfd-icon-trolley_check"></i><span>' + $viewCartText + '</span></span></span>');
				add_to_cart_button = null;
			}
		});
		var placeholderCommentform = function() {
			var form = $('.single-product #commentform'),
				nameContainer = form.find('.comment-form-author'),
				mailContainer = form.find('.comment-form-email'),
				textareaContainer = form.find('.comment-form-comment'),
				labelName = nameContainer.find('label'),
				labelMail = mailContainer.find('label'),
				labelTextarea = textareaContainer.find('label'),
				labelNameText = labelName.text(),
				labelMailText = labelMail.text(),
				labelTextareaText = labelTextarea.text();

			if(nameContainer.length > 0) {
				nameContainer.find('input').attr('placeholder', labelNameText);
				labelName.remove();
			}
			if(mailContainer.length > 0) {
				mailContainer.find('input').attr('placeholder', labelMailText);
				labelMail.remove();
			}
			if(textareaContainer.length > 0) {
				textareaContainer.find('textarea').attr('placeholder', labelTextareaText);
				labelTextarea.remove();
			}
		};
		placeholderCommentform();
	});
})(jQuery);
