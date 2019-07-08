/*!
 * Lettering.JS 0.6.1
 *
 * Copyright 2010, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Thanks to Paul Irish - http://paulirish.com - for the feedback.
 *
 * Date: Mon Sep 20 17:14:00 2010 -0600
 */

(function(b){function c(a,e,c,d){e=a.text().split(e);var f="";e.length&&(b(e).each(function(a,b){f+='<span class="'+c+(a+1)+'">'+b+"</span>"+d}),a.empty().append(f))}var d={init:function(){return this.each(function(){c(b(this),"","char","")})},words:function(){return this.each(function(){c(b(this)," ","word"," ")})},lines:function(){return this.each(function(){c(b(this).children("br").replaceWith("eefec303079ad17405c889e092e105b0").end(),"eefec303079ad17405c889e092e105b0","line","")})}};b.fn.lettering=function(a){if(a&&d[a])return d[a].apply(this,[].slice.call(arguments,1));if("letters"===a||!a)return d.init.apply(this,[].slice.call(arguments,0));b.error("Method "+a+" does not exist on jQuery.lettering");return this}})(jQuery);