// JavaScript Document

var $body = $('body');
var $btnMobileMenu = $('.mobile-menu');

// click event handler for the mobile menu button
$btnMobileMenu.click(function(){
	
	// toggle the show-mobile-menu class
	// on the body element
	$body.toggleClass('show-mobile-menu');
	
}); // end click event handler for the mobile menu button