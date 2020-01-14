function preloader() {	if ($('#preloader').length) {		setTimeout(function() {			$('#preloader').fadeOut('slow', function() {				$('body').removeClass('overflow-hidden').css('padding', '');			});		}, 1000);	}}$(window).on('load', preloader);//---------------------------------------//// Подключаем набор написаных скриптов (requare/developRequare.js)//---------------------------------------//// выполняем их после того, как DOM построится $(document).ready(function() {	 $.reject({  	//	header: 'Your browser is not supported here', // Header Text  	//	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1  	//	paragraph2: 'Please install one of the many optional browsers below to proceed',  	//	closeMessage: 'Close this window at your own demise!' // Message below close window link  		 reject: { 			all: false,			msie: 9,			chrome: 40,			firefox: 30,			safari4: 4		}, 		display: [], // What browsers to display and their order (default set below)		browserShow: true, // Should the browser options be shown?		browserInfo: { // Settings for which browsers to display			chrome: {				// Text below the icon				text: 'Google Chrome',				// URL For icon/text link				url: 'http://www.google.com/chrome/'				// (Optional) Use "allow" to customized when to show this option				// Example: to show chrome only for IE users				// allow: { all: false, msie: true }			},			firefox: {				text: 'Mozilla Firefox',				url: 'http://www.mozilla.com/firefox/'			},			safari: {				text: 'Safari',				url: 'http://www.apple.com/safari/download/'			},			opera: {				text: 'Opera',				url: 'http://www.opera.com/download/'			},			msie: {				text: 'Microsoft Edge',				url: 'http://www.microsoft.com/'			}		},		// Pop-up Window Text		header: 'Ваш браузер страрел, установите последнюю версию для корректного отображения сайта',		paragraph1: '',		paragraph2: '',		// Allow closing of window		close: false,		// Message displayed below closing link		closeMessage: 'By closing this window you acknowledge that your experience '+						'on this website may be degraded',		closeLink: 'Close This Window',		closeURL: '#',		// Allows closing of window with esc key		closeESC: true,		// Use cookies to remmember if window was closed previously?		closeCookie: false,		// Cookie settings are only used if closeCookie is true		cookieSettings: {			// Path for the cookie to be saved on			// Should be root domain in most cases			path: '/',			// Expiration Date (in seconds)			// 0 (default) means it ends with the current session			expires: 0		},		// Path where images are located		imagePath: './img/browsers/',		// Background color for overlay		overlayBgColor: '#000',		// Background transparency (0-1)		overlayOpacity: 0.8,		// Fade in time on open ('slow','medium','fast' or integer in ms)		fadeInTime: 'fast',		// Fade out time on close ('slow','medium','fast' or integer in ms)		fadeOutTime: 'fast',		// Google Analytics Link Tracking (Optional)		// Set to true to enable		// Note: Analytics tracking code must be added separately		analytics: false	}); 	//---------------------------------------//	// Подключаем скрипты компонентов страниц ( modules )	//---------------------------------------//	function sliderCert() {		var flag = false;		function init() {			if (window.innerWidth < 479) {				if (!flag) {					$('.js-slider-cert').slick({						slidesToShow: 1,						slidesToScroll: 1,						infinite: false,						dots: false,						arrows: false,						variableWidth: true					});					flag = true;				}			} else {				if (flag) {					$('.js-slider-cert').slick('unslick');					flag = false;				}			}		}		if ($('.js-slider-cert').length) {			init();			$(window).on('resize', function() {				init();			});		}	}	sliderCert();
	function sliderArticle() {		var flag = false;		function init() {			if (window.innerWidth < 768) {				if (!flag) {					$('.js-slider-article').slick({						slidesToShow: 2,						slidesToScroll: 1,						infinite: false,						dots: true,						arrows: false,						responsive: [							{								breakpoint: 560,								settings: {									slidesToShow: 1								}							}						]					});					flag = true;				}			} else {				if (flag) {					$('.js-slider-article').slick('unslick');					flag = false;				}			}		}		if ($('.js-slider-article').length) {			init();			$(window).on('resize', function() {				init();			});		}	}	sliderArticle();
	function contactsMap() {		var mapBlock = $('#map');		if (mapBlock.length) {			try {				jQuery.getScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=0b6e7b40-00d2-42b6-b735-12236e2cfba7', function() {								var $map = $('#map');					ymaps.ready(function () {						var myMap = new ymaps.Map('map', {							center: [55.865512, 37.593428],							zoom: 14,							controls: ['zoomControl']						})						myPlacemark = new ymaps.Placemark();						window.myObjects = ymaps.geoQuery({							type: "FeatureCollection",							features: [							{									type: "Feature",								geometry: {									type: 'Point',									coordinates: [55.865512, 37.593428]								},								options: {									iconLayout: 'default#imageWithContent',									iconImageHref: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtpc29sYXRpb246aXNvbGF0ZTt9LmNscy0ye2ZpbGw6I2QyZDRkZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvY2F0aW9uPC90aXRsZT48ZyBpZD0iRm9ybWFfMSIgZGF0YS1uYW1lPSJGb3JtYSAxIiBjbGFzcz0iY2xzLTEiPjxnIGlkPSJGb3JtYV8xLTIiIGRhdGEtbmFtZT0iRm9ybWEgMSI+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNOCwwQTguMSw4LjEsMCwwLDAsMS4xOSwxMi4zNEw3LjU0LDIyLjY4YTAuNjYsMC42NiwwLDAsMCwuNTcuMzJoMGEwLjY3LDAuNjcsMCwwLDAsLjU3LTAuMzNsNi4xOS0xMC40NEE4LjE0LDguMTQsMCwwLDAsMTYsOC4wOSw4LjA1LDguMDUsMCwwLDAsOCwwWm01LjczLDExLjU0TDguMSwyMWwtNS43Ny05LjRBNi43NSw2Ljc1LDAsMCwxLDgsMS4zNCw2Ljc1LDYuNzUsMCwwLDEsMTMuNzMsMTEuNTRaTTgsNGE0LDQsMCwxLDAsNCw0QTQsNCwwLDAsMCw4LDRabTAsNi43NWEyLjcsMi43LDAsMSwxLDIuNjctMi43QTIuNjksMi42OSwwLDAsMSw4LDEwLjc5WiIvPjwvZz48L2c+PC9zdmc+',									iconImageSize: [40, 50],									iconImageOffset: [-3, -42]								}							}							]						}).addToMap(myMap);						myMap.geoObjects.add(myPlacemark);						myMap.behaviors.disable('scrollZoom');					});				})			} catch(e) {				console.log(e);			}					}	}	contactsMap();
	function showSubMenu() {		$('.js-nav-catalog').on('mouseenter', function() {			$(this).find('.js-sub-menu').slideDown(300);		})		$('.js-nav-catalog').on('mouseleave', function() {			$(this).find('.js-sub-menu').slideUp(300);		})	}	showSubMenu();	function showNav() {		$('.js-btn-nav').on('click', function() {			$(this).toggleClass('active');			$('.js-mobile-menu').slideToggle(300);		})	}	showNav();	$(window).on('resize', function() {		if(window.innerWidth > 767) {			$('.js-mobile-menu').removeAttr('style');		}	});
	$('.js-heading-slider').slick({		infinite: true,		slidesToShow: 1,		slidesToScroll: 1,		autoplay: true,		autoplaySpeed: 10000,		dots: true,		arrows: false,		responsive: [			{				breakpoint: 768,				settings: {					adaptiveHeight: true				}			}		]	})
	function sliderNews() {		var flag = false;		function init() {			if (window.innerWidth < 768) {				if (!flag) {					$('.js-slider-news').slick({						slidesToShow: 2,						slidesToScroll: 1,						infinite: false,						dots: true,						arrows: false,						responsive: [							{								breakpoint: 560,								settings: {									slidesToShow: 1								}							}						]					});					flag = true;				}			} else {				if (flag) {					$('.js-slider-news').slick('unslick');					flag = false;				}			}		}		if ($('.js-slider-news').length) {			init();			$(window).on('resize', function() {				init();			});		}	}	sliderNews();
	function sliderProduct() {		var flag = false;		function init() {			if (window.innerWidth < 1024) {				if (!flag) {					$('.js-slider-catalog').slick({						slidesToShow: 1,						slidesToScroll: 1,						infinite: true,						dots: false,						arrows: false,						variableWidth: true					});					flag = true;				}			} else {				if (flag) {					$('.js-slider-catalog').slick('unslick');					flag = false;				}			}		}		if ($('.js-slider-catalog').length) {			init();			$(window).on('resize', function() {				init();			});		}	}	sliderProduct();	//---------------------------------------//	// Подключаем основные скрипты ( develop )	//---------------------------------------//	$('.js-height').matchHeight();		$('[data-fancybox]').fancybox({		autoFocus: false	})	$('.js-select').selectmenu({		appendTo: $('.js-select-wrap')	});})