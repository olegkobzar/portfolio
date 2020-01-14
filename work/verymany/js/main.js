function preloader() {	if ($('#preloader').length) {		setTimeout(function() {			$('#preloader').fadeOut('slow', function() {				$('body').removeClass('overflow-hidden').css('padding', '');			});		}, 1000);	}}$(window).on('load', preloader);//---------------------------------------//// Подключаем набор написаных скриптов (requare/developRequare.js)//---------------------------------------//function autoFooter() {  if ($('.wrapper').length) {    var height = $('.footer').innerHeight();    $('.wrapper').css('padding-bottom', height).css('margin-bottom', -height);  }}// выполняем их после того, как DOM построится $(document).ready(function() {   $.reject({    //	header: 'Your browser is not supported here', // Header Text    //	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1    //	paragraph2: 'Please install one of the many optional browsers below to proceed',    //	closeMessage: 'Close this window at your own demise!' // Message below close window link    	 reject: {   		all: false,  		msie: 9,  		chrome: 40,  		firefox: 30,  		safari4: 4  	},   	display: [], // What browsers to display and their order (default set below)  	browserShow: true, // Should the browser options be shown?  	browserInfo: { // Settings for which browsers to display  		chrome: {  			// Text below the icon  			text: 'Google Chrome',  			// URL For icon/text link  			url: 'http://www.google.com/chrome/'  			// (Optional) Use "allow" to customized when to show this option  			// Example: to show chrome only for IE users  			// allow: { all: false, msie: true }  		},  		firefox: {  			text: 'Mozilla Firefox',  			url: 'http://www.mozilla.com/firefox/'  		},  		safari: {  			text: 'Safari',  			url: 'http://www.apple.com/safari/download/'  		},  		opera: {  			text: 'Opera',  			url: 'http://www.opera.com/download/'  		},  		msie: {  			text: 'Microsoft Edge',  			url: 'http://www.microsoft.com/'  		}  	},  	// Pop-up Window Text  	header: 'Did you know that your Internet Browser is out of date?',  	paragraph1: 'Your browser is out of date, and may not be compatible with '+  				'our website. A list of the most popular web browsers can be '+  				'found below.',  	paragraph2: 'Just click on the icons to get to the download page',  	// Allow closing of window  	close: true,  	// Message displayed below closing link  	closeMessage: 'By closing this window you acknowledge that your experience '+  					'on this website may be degraded',  	closeLink: 'Close This Window',  	closeURL: '#',  	// Allows closing of window with esc key  	closeESC: true,  	// Use cookies to remmember if window was closed previously?  	closeCookie: false,  	// Cookie settings are only used if closeCookie is true  	cookieSettings: {  		// Path for the cookie to be saved on  		// Should be root domain in most cases  		path: '/',  		// Expiration Date (in seconds)  		// 0 (default) means it ends with the current session  		expires: 0  	},  	// Path where images are located  	imagePath: './img/browsers/',  	// Background color for overlay  	overlayBgColor: '#000',  	// Background transparency (0-1)  	overlayOpacity: 0.8,  	// Fade in time on open ('slow','medium','fast' or integer in ms)  	fadeInTime: 'fast',  	// Fade out time on close ('slow','medium','fast' or integer in ms)  	fadeOutTime: 'fast',  	// Google Analytics Link Tracking (Optional)  	// Set to true to enable  	// Note: Analytics tracking code must be added separately  	analytics: false  });   //---------------------------------------//  // Подключаем скрипты компонентов страниц ( modules )  //---------------------------------------//  function toggleMenu() {  	$('.js-toggle-btn').on('click', function() {  		$('.js-nav').toggleClass('active');  		$(this).toggleClass('active');  	})  	$(document).on('click', function(e) {  		if(!$(e.target).closest('.js-nav').length && !$(e.target).closest('.js-toggle-btn').length )  {  			$('.js-nav').removeClass('active');  			$('.js-toggle-btn').removeClass('active');  		}  	})  }  toggleMenu();  //---------------------------------------//  // Подключаем основные скрипты ( develop )  //---------------------------------------//  function customSelect() {
    $('select').each(function () {
      $(this).selectric({
        maxHeight: 200
      });
    });
  }
  customSelect();
  function tabs() {
    var wrap = $('.js-tabs');
    if(wrap.length) {
      wrap.each(function () {
        var self = $(this),
          tab = self.find('.js-tabs-link'),
          content = self.find('.js-tabs-content');
        tab.on('click', function (e) {
          e.preventDefault();
          var href = $(this).attr('href');
          tab.removeClass('active');
          $(this).addClass('active');
          content.removeClass('active');
          $(href).addClass('active');
        })
      });
    }
  }
  tabs();
    autoFooter();})$(window).on('resize', function() {  autoFooter();})