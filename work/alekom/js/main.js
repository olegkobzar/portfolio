function preloader() {	if ($('#preloader').length) {		setTimeout(function() {			$('#preloader').fadeOut('slow', function() {				$('body').removeClass('overflow-hidden').css('padding', '');			});		}, 1000);	}}$(window).on('load', preloader);//---------------------------------------//// Подключаем набор написаных скриптов (requare/developRequare.js)//---------------------------------------//function autoFooter() {  if ($('.wrapper').length) {    var height = $('.footer').innerHeight();    $('.wrapper').css('padding-bottom', height).css('margin-bottom', -height);  }}// выполняем их после того, как DOM построится $(document).ready(function() {	 $.reject({  	//	header: 'Your browser is not supported here', // Header Text  	//	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1  	//	paragraph2: 'Please install one of the many optional browsers below to proceed',  	//	closeMessage: 'Close this window at your own demise!' // Message below close window link  		 reject: { 			all: false,			msie: 9,			chrome: 40,			firefox: 30,			safari4: 4		}, 		display: [], // What browsers to display and their order (default set below)		browserShow: true, // Should the browser options be shown?		browserInfo: { // Settings for which browsers to display			chrome: {				// Text below the icon				text: 'Google Chrome',				// URL For icon/text link				url: 'http://www.google.com/chrome/'				// (Optional) Use "allow" to customized when to show this option				// Example: to show chrome only for IE users				// allow: { all: false, msie: true }			},			firefox: {				text: 'Mozilla Firefox',				url: 'http://www.mozilla.com/firefox/'			},			safari: {				text: 'Safari',				url: 'http://www.apple.com/safari/download/'			},			opera: {				text: 'Opera',				url: 'http://www.opera.com/download/'			},			msie: {				text: 'Microsoft Edge',				url: 'http://www.microsoft.com/'			}		},		// Pop-up Window Text		header: 'Did you know that your Internet Browser is out of date?',		paragraph1: 'Your browser is out of date, and may not be compatible with '+					'our website. A list of the most popular web browsers can be '+					'found below.',		paragraph2: 'Just click on the icons to get to the download page',		// Allow closing of window		close: true,		// Message displayed below closing link		closeMessage: 'By closing this window you acknowledge that your experience '+						'on this website may be degraded',		closeLink: 'Close This Window',		closeURL: '#',		// Allows closing of window with esc key		closeESC: true,		// Use cookies to remmember if window was closed previously?		closeCookie: false,		// Cookie settings are only used if closeCookie is true		cookieSettings: {			// Path for the cookie to be saved on			// Should be root domain in most cases			path: '/',			// Expiration Date (in seconds)			// 0 (default) means it ends with the current session			expires: 0		},		// Path where images are located		imagePath: './img/browsers/',		// Background color for overlay		overlayBgColor: '#000',		// Background transparency (0-1)		overlayOpacity: 0.8,		// Fade in time on open ('slow','medium','fast' or integer in ms)		fadeInTime: 'fast',		// Fade out time on close ('slow','medium','fast' or integer in ms)		fadeOutTime: 'fast',		// Google Analytics Link Tracking (Optional)		// Set to true to enable		// Note: Analytics tracking code must be added separately		analytics: false	}); 	//---------------------------------------//	// Подключаем скрипты компонентов страниц ( modules )	//---------------------------------------//	;(function($) {		function contactsMap() {			var mapBlock = $('#map');			if (mapBlock.length) {				try {					jQuery.getScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', function() {									ymaps.ready(init);						var myMap,								myPlacemark;						function init() {							myMap = new ymaps.Map("map", {								center: [54.735005, 20.502531],								zoom: 16,								controls: []							});	      			MyBalloonLayout = ymaps.templateLayoutFactory.createClass(	      			    '<div class="popover top">' +	      			        '<div class="arrow"></div>' +	      			        '<div class="popover-inner">' +	      			        '$[[options.contentLayout observeSize maxWidth=235 maxHeight=350]]' +	      			        '</div>' +	      			        '</div>', {	      			        onSublayoutSizeChange: function () {	      			            MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);	      			            if(!this._isElement(this._$element)) {	      			                return;	      			            }	      			            this.applyElementOffset();	      			            this.events.fire('shapechange');	      			        },	      			        applyElementOffset: function () {	      			            this._$element.css({	      			                left: -(this._$element[0].offsetWidth / 2),	      			                top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)	      			            });	      			        },	      			        _isElement: function (element) {	      			            return element && element[0] && element.find('.arrow')[0];	      			        }	      			    }),	      			MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(	      			    '<div class="popover-txt">$[properties.balloonHeader]</div>' +	      			        '<div class="popover-txt">$[properties.balloonContent]</div>'	      			),	      			myPlacemark = window.myPlacemark = new ymaps.Placemark(myMap.getCenter(), {	      			    balloonHeader: 'г. Калининград,',	      			    balloonContent: 'ул. Марата, 2'	      			}, {	      			    balloonShadow: false,	      			    balloonLayout: MyBalloonLayout,	      			    balloonContentLayout: MyBalloonContentLayout,	      			    balloonPanelMaxMapArea: 0,	      			    closeButton: false	      			});	    				myMap.geoObjects.add(myPlacemark);	    				myMap.behaviors.disable('scrollZoom');	    				myPlacemark.balloon.open();						}					})			  } catch(e) {					console.log(e);			  }						}		}		contactsMap();	}($));
	function descAccordeon() {	  var wrap = $('.js-tab-content');	  if(wrap.length) {	    var btn = $('.js-acc-btn'),	        content = $('.js-acc-content');	    btn.on('click', function(e) {	      $(this).closest(wrap).find(content).slideToggle();	      $(this).toggleClass('active');	    })	  }	}	descAccordeon();
	function toggleCategory() {		$('.js-category-btn').on('click', function() {			$(this).next().slideToggle();			$(this).toggleClass('active');			$(this).closest('.goods__aside-category--open').toggleClass('active');		})		$('.js-subcategory-btn').on('click', function() {			$(this).next().slideToggle();			$(this).toggleClass('active');		})	}	toggleCategory();	function showAside() {		$('.js-btn-aside').on('click', function() {			$('.js-aside').toggleClass('active');			$(this).toggleClass('active');		})	}	showAside();
	$(window).scroll(function() {		var block = $('.header');		if($(window).scrollTop() > 210) {			block.addClass('fixed');			$('.wrapper').css('padding-top', 210);		} else {			block.removeClass('fixed'); 			$('.wrapper').css('padding-top', 0);		}	});	function showSearchInput() {		$('.js-btn-search').on('click', function() {			$(this).toggleClass('active');			$('.js-search-input').toggleClass('active');		})	}	showSearchInput();	function widthSubmenu() {		var widthWrap = $('.header__list').width();		$('.js-submenu').width(widthWrap);	}	widthSubmenu();	$(window).on('resize', widthSubmenu);	function showMobileMenu() {		$('.js-btn-menu').on('click', function() {			$(this).toggleClass('active');			$('body').toggleClass('active');			$('.js-menu-bott').toggleClass('active');			$('.header').toggleClass('active');			$('.wrapp').toggleClass('active');		})		$(document).on('click', function(e){			if (!$(e.target).closest('.js-menu-bott').length && !$(e.target).closest('.js-btn-menu').length) {				$('.js-btn-menu').removeClass('active');				$('body').removeClass('active');				$('.js-menu-bott').removeClass('active');				$('.header').removeClass('active');				$('.wrapp').removeClass('active');			}		})		$('.wrapp').on('click', function(e){			if (!$(e.target).closest('.js-menu-bott').length && !$(e.target).closest('.js-btn-menu').length) {				$('.js-btn-menu').removeClass('active');				$('body').removeClass('active');				$('.js-menu-bott').removeClass('active');				$('.header').removeClass('active');				$('.wrapp').removeClass('active');			}		})	}	showMobileMenu();	function showCategory() {		$('.js-show-category').on('click', function() {			$(this).next().slideToggle();			$(this).toggleClass('active');		})	}	// showCategory();	var flag = false;	function profileSlider(){		if (window.innerWidth < 1024) {			if (!flag) {				$('.js-show-category').on('click', function(e) {					e.preventDefault();					$(this).next().slideToggle();					$(this).closest('.header__col--big').toggleClass('active');					$(this).toggleClass('active');				})				$('.js-show-category-two').on('click', function(e) {					e.preventDefault();					$(this).next().slideToggle();					$(this).toggleClass('active');				})				$('.js-services-btn').on('click', function(e) {					e.preventDefault();					$(this).next().slideToggle();					$(this).toggleClass('border');				})				flag = true;			}		} else {			if (flag) {				$('.js-show-category').off('click');				$('.js-show-category-two').off('click');				$('.js-services-btn').off('click');				$('.js-show-category').removeClass('active');				$('.header__col--big').removeClass('active');				$('.header__category').removeAttr('style');				$('.header__category-two').removeAttr('style');				$('.js-services-btn').next().removeAttr('style');				$('.header__category-list').removeAttr('style');				flag = false;			}		}	}	profileSlider();	$(window).on('resize', profileSlider);
	function dealerSlider() {		$('.js-dealer-slider').slick({			slidesToShow: 3,			arrow: true, 			autoplay: true,			responsive: [				{					breakpoint: 1023,					settings: {						slidesToShow: 2					}				},				{					breakpoint: 768,					settings: {						slidesToShow: 1					}				}			]		});	}	dealerSlider();
	function newsHeight() {		if ($('.js-equal-height').length) {	    $('.js-equal-height').matchHeight({	      byRow: true,	      property: 'height',	      target: null,	      remove: false	    });	  }	}	newsHeight();
	function partnerSlider() {		var wrap = $('.partners__wrap');		if(wrap.length) {			var slickSlider = $('.js-partners-slider');			slickSlider.slick({				slidesToShow: 5,				arrow: true, 				autoplay: true,				responsive: [					{						breakpoint: 1023,						settings: {							slidesToShow: 3						}					},					{						breakpoint: 640,						settings: {							slidesToShow: 2						}					},					{						breakpoint: 479,						settings: {							slidesToShow: 1						}					}				]			});		}	}	partnerSlider();
	function productSlider() {		$('.js-product-slider-main').slick({			slidesToShow: 1,			slidesToScroll: 1,			arrows: false,			asNavFor: '.js-product-slider-nav'		});		$('.js-product-slider-nav').slick({			slidesToShow: 4,			slidesToScroll: 1,			asNavFor: '.js-product-slider-main',			focusOnSelect: true,			vertical: true,			verticalSwiping: true,			responsive: [				{					breakpoint: 625,					settings: {						vertical: false,						verticalSwiping: false					}				},				{					breakpoint: 480,					settings: {						slidesToShow: 3,						vertical: false,						verticalSwiping: false					}				},				{					breakpoint: 380,					settings: {						slidesToShow: 2,						vertical: false,						verticalSwiping: false					}				}			]		});	}	productSlider();	function smoothScrolling() {		$('.js-product-btn').on('click', function() {			if ($(document).width() < 1024) {				$('html, body').animate({scrollTop: $('.js-equipment-selection').offset().top - 80}, 500);			} else {				$('html, body').animate({scrollTop: $('.js-equipment-selection').offset().top}, 500);			}		});	}	smoothScrolling();	$(window).on('resize', smoothScrolling);
	function serviseHeight() {		if ($('.js-servise-height').length) {	    $('.js-servise-height').matchHeight({	      byRow: true,	      property: 'height',	      target: null,	      remove: false	    });	  }	}	serviseHeight();	//---------------------------------------//	// Подключаем основные скрипты ( develop )	//---------------------------------------//	function validateForm() {		$('.phone').mask('+7 (999) 999-99-99');		// $("#popup__form").validate({		// 	rules: {		// 		firstname: {		// 			required: true,		// 			minlength: 4		// 		},		// 		phone: {		// 			required: true,		// 			minlength: 8		// 		},		// 		message: {		// 			// required: true		// 		}		// 	},		// 	messages: {		// 		firstname: "Пожалуйста, заполните поле",		// 		phone: "Пожалуйста, заполните поле",		// 	}		// });	}	validateForm();	if ($('.js-height').length) {	  $('.js-height').matchHeight({	    byRow: true,	    property: 'height',	    target: null,	    remove: false	  });	}	function fancy() {	  $("a[href$='.png'], a[href$='.jpg'], a[data-src$='.png'], a[data-src$='.jpg']").fancybox({	      thumbs: {	          autoStart: true	      }	  });	}	fancy();	function tabs() {	  var $wrap = $('.js-tabs-wrap');	  if ($wrap.length) {	    $wrap.each(function () {	      var $that = $(this),	          $tab = $that.find('.js-tab-link'),	          $content = $that.find('.js-tab-content');	      $tab.on('click', function (e) {	        e.preventDefault();	        var self = $(this),	            index = self.index();	        self.addClass('active').siblings().removeClass('active');	        $content.eq(index).addClass('active').siblings().removeClass('active');	      });	    });	  }	}	tabs();    autoFooter();})$(window).on('resize', function() {  autoFooter();})