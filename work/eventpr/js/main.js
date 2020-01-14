function preloader() {	if ($('#preloader').length) {		setTimeout(function() {			$('#preloader').fadeOut('slow', function() {				$('body').removeClass('overflow-hidden').css('padding', '');			});		}, 1000);	}}$(window).on('load', preloader);//---------------------------------------//// Подключаем набор написаных скриптов (requare/developRequare.js)//---------------------------------------//// выполняем их после того, как DOM построится $(document).ready(function() {	 $.reject({  	//	header: 'Your browser is not supported here', // Header Text  	//	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1  	//	paragraph2: 'Please install one of the many optional browsers below to proceed',  	//	closeMessage: 'Close this window at your own demise!' // Message below close window link  		 reject: { 			all: false,			msie: 9,			chrome: 40,			firefox: 30,			safari4: 4		}, 		display: [], // What browsers to display and their order (default set below)		browserShow: true, // Should the browser options be shown?		browserInfo: { // Settings for which browsers to display			chrome: {				// Text below the icon				text: 'Google Chrome',				// URL For icon/text link				url: 'http://www.google.com/chrome/'				// (Optional) Use "allow" to customized when to show this option				// Example: to show chrome only for IE users				// allow: { all: false, msie: true }			},			firefox: {				text: 'Mozilla Firefox',				url: 'http://www.mozilla.com/firefox/'			},			safari: {				text: 'Safari',				url: 'http://www.apple.com/safari/download/'			},			opera: {				text: 'Opera',				url: 'http://www.opera.com/download/'			},			msie: {				text: 'Microsoft Edge',				url: 'http://www.microsoft.com/'			}		},		// Pop-up Window Text		header: 'Did you know that your Internet Browser is out of date?',		paragraph1: 'Your browser is out of date, and may not be compatible with '+					'our website. A list of the most popular web browsers can be '+					'found below.',		paragraph2: 'Just click on the icons to get to the download page',		// Allow closing of window		close: true,		// Message displayed below closing link		closeMessage: 'By closing this window you acknowledge that your experience '+						'on this website may be degraded',		closeLink: 'Close This Window',		closeURL: '#',		// Allows closing of window with esc key		closeESC: true,		// Use cookies to remmember if window was closed previously?		closeCookie: false,		// Cookie settings are only used if closeCookie is true		cookieSettings: {			// Path for the cookie to be saved on			// Should be root domain in most cases			path: '/',			// Expiration Date (in seconds)			// 0 (default) means it ends with the current session			expires: 0		},		// Path where images are located		imagePath: './img/browsers/',		// Background color for overlay		overlayBgColor: '#000',		// Background transparency (0-1)		overlayOpacity: 0.8,		// Fade in time on open ('slow','medium','fast' or integer in ms)		fadeInTime: 'fast',		// Fade out time on close ('slow','medium','fast' or integer in ms)		fadeOutTime: 'fast',		// Google Analytics Link Tracking (Optional)		// Set to true to enable		// Note: Analytics tracking code must be added separately		analytics: false	}); 	//---------------------------------------//	// Подключаем скрипты компонентов страниц ( modules )	//---------------------------------------//	var footer = $('.footer');	function autoFooter() {	    if ($('.footer').length) {	        var wrapper = $('.wrapper');	        var footerHeight = footer.outerHeight();	        footer.css('margin-top', -footerHeight);	        wrapper.css('padding-bottom', footerHeight);	    }	}	setTimeout(autoFooter, 100);	$(window).on('resize', autoFooter);
	function showMenu() {		$('.js-btn-menu').on('click', function() {			$('.js-menu').addClass('active');			$('body').addClass('overflow');		})		$('.js-close-menu').on('click', function() {			$('.js-menu').removeClass('active');			$('body').removeClass('overflow');		})		$('.js-scroll-id').on('click', function() {			$('.js-menu').removeClass('active');			$('body').removeClass('overflow');		})	}	showMenu();	function slowlyScoll() {		$('.js-scroll-id').on('click', function (e) {			e.preventDefault();			var id = $(this).attr('href'),			top = $(id).offset().top;			$('body,html').animate({scrollTop: top}, 1500);		});	}	slowlyScoll();
	function placeholderRight() {		$('.js-input').on('focus', function() {			$(this).closest('.js-input-wrap').find('.js-placeholder').addClass('active');		})		$('.js-input').on('blur', function() {			if($(this).val().length < 1) {				$(this).closest('.js-input-wrap').find('.js-placeholder').removeClass('active');			}		})	}	placeholderRight();
	function tabs() {	  var scheduleMob = false;	  var wrap = $('.js-tabs');	  if (wrap.length) {	    wrap.each(function () {	      var self = $(this),	        tab = self.find('.js-tabs-nav'),	        content = self.find('.js-tabs-content');	      tab.on('click', function (e) {	        e.preventDefault();	        var href = $(this).attr('href');	        tab.removeClass('active');	        $(this).addClass('active');	        content.removeClass('active');	        $(href).addClass('active');	        $('body').addClass('hide');	      })	      $('.js-close-btn').on('click', function(e) {	        $(this).removeClass('active');	        content.removeClass('active');	        $('body').removeClass('hide');	      })	    });	    function init() {	       if (window.innerWidth < 768) {	        if (!scheduleMob) {	          scheduleMob = true;	          $('.js-tabs-nav').removeClass('active');	          $('.js-tabs-content').removeClass('active');	        }	      } else {	        if(scheduleMob) {	          $('.js-tabs-nav').eq(0).trigger('click');	          scheduleMob = false;	        }	      }	    }	    init();	    $(window).on('resize', init)	  }	}	tabs();	//---------------------------------------//	// Подключаем основные скрипты ( develop )	//---------------------------------------//	;(function($) { 	  //select	  function select() {	    var _dropdown;	    var settings = {autoReinitialise: true};	    $('.js-select').styler({	      selectSearch: false,	      onFormStyled: function () {	        _dropdown = $('.jq-selectbox__dropdown');	        _dropdown.find('ul').wrap('<div class="js-scroll" ></div>');	      },	      onSelectOpened: function () {	        var _ul = $(this).find('.jq-selectbox__dropdown ul');	        var height = _ul.height();	        var _customScroll = _dropdown.find('.js-scroll');	        _customScroll.height(height);	        _ul.css('max-height', 'none');	        _customScroll.mCustomScrollbar(settings);	      }	    });	  }	  select();	  //customScroll	  $('.js-scroll').mCustomScrollbar({	    axis:"y" 	  });		  $('[data-fancybox]').fancybox({	      touch: false,	      autoFocus: false	  })	  function phoneMask() {	    $('.js-submit-phone').mask('+7 (000) 000-00-00');	  } 	  phoneMask();	  function formValidate() {	    $('.js-valid-form').each(function(){	      var self = $(this);	      self.validate({	        errorPlacement: function(error,element) {	          return true;	        },	        ignore: [],	        rules: {	          phone: {	            required: true,	            minlength: 18	          },	          phoneSelect: {	            required: true,	          },	          name: {	            required: true,	            minlength: 3	          },	          session: {	            required: true,	          },	          speaker: {	            required: true,	          },	          question: {	            required: true,	            minlength: 3	          },	          email: {	            required: true	          },	          position: {	            required: true,	          },	          company: {	            required: true,	            minlength: 2	          },	        },	        submitHandler: function(form) {	          $.ajax({	            type: self.attr('method'),	            url: self.attr('action'),	            data: $(form).serialize(),	            success: function(response) {	              $.fancybox.close();	              $.fancybox.open($('#popup-success'));	              setTimeout(function() {	                $.fancybox.close();	              }, 4000)	            }	          });	        }	      });	    })	  }	  formValidate();	}($));})