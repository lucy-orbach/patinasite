"use strict";

$(function fadePage(){
	$('html').hide().fadeIn(200);
});


$("footer").click(function(){
	$(this).toggleClass('openUp');
});
