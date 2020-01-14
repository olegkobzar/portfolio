function preloader() {	if ($('#preloader').length) {		setTimeout(function() {			$('#preloader').fadeOut('slow', function() {				$('body').removeClass('overflow-hidden').css('padding', '');			});		}, 500);	}}$(window).on('load', preloader);//---------------------------------------//// Подключаем набор написаных скриптов (requare/developRequare.js)//---------------------------------------//// выполняем их после того, как DOM построится $(document).ready(function() {	 $.reject({  	//	header: 'Your browser is not supported here', // Header Text  	//	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1  	//	paragraph2: 'Please install one of the many optional browsers below to proceed',  	//	closeMessage: 'Close this window at your own demise!' // Message below close window link  		 reject: { 			all: false,			msie: 9,			chrome: 40,			firefox: 30,			safari4: 4		}, 		display: [], // What browsers to display and their order (default set below)		browserShow: true, // Should the browser options be shown?		browserInfo: { // Settings for which browsers to display			chrome: {				// Text below the icon				text: 'Google Chrome',				// URL For icon/text link				url: 'http://www.google.com/chrome/'				// (Optional) Use "allow" to customized when to show this option				// Example: to show chrome only for IE users				// allow: { all: false, msie: true }			},			firefox: {				text: 'Mozilla Firefox',				url: 'http://www.mozilla.com/firefox/'			},			safari: {				text: 'Safari',				url: 'http://www.apple.com/safari/download/'			},			opera: {				text: 'Opera',				url: 'http://www.opera.com/download/'			},			msie: {				text: 'Microsoft Edge',				url: 'http://www.microsoft.com/'			}		},		// Pop-up Window Text		header: 'Did you know that your Internet Browser is out of date?',		paragraph1: 'Your browser is out of date, and may not be compatible with '+					'our website. A list of the most popular web browsers can be '+					'found below.',		paragraph2: 'Just click on the icons to get to the download page',		// Allow closing of window		close: true,		// Message displayed below closing link		closeMessage: 'By closing this window you acknowledge that your experience '+						'on this website may be degraded',		closeLink: 'Close This Window',		closeURL: '#',		// Allows closing of window with esc key		closeESC: true,		// Use cookies to remmember if window was closed previously?		closeCookie: false,		// Cookie settings are only used if closeCookie is true		cookieSettings: {			// Path for the cookie to be saved on			// Should be root domain in most cases			path: '/',			// Expiration Date (in seconds)			// 0 (default) means it ends with the current session			expires: 0		},		// Path where images are located		imagePath: './img/browsers/',		// Background color for overlay		overlayBgColor: '#000',		// Background transparency (0-1)		overlayOpacity: 0.8,		// Fade in time on open ('slow','medium','fast' or integer in ms)		fadeInTime: 'fast',		// Fade out time on close ('slow','medium','fast' or integer in ms)		fadeOutTime: 'fast',		// Google Analytics Link Tracking (Optional)		// Set to true to enable		// Note: Analytics tracking code must be added separately		analytics: false	}); 	//---------------------------------------//	// Подключаем скрипты компонентов страниц ( modules )	//---------------------------------------//	function accordeonAboutCompany() {	  var wrap = $('.js-about-wrap');	  if (wrap.length) {	    wrap.each(function () {	      var self = $(this),	        btn = self.find('.js-about-btn');	      $(window).scroll(function () {	        var scroll = $(this).scrollTop(),	          scrollBlock = self.offset().top;	        if ($('.about-company').hasClass('effect')) {	          if (scroll <= scrollBlock) {	            setTimeout(function() {	              $('.js-about-item:first-child').find('.js-about-btn').trigger('click');              	            }, 1000);	            $('.about-company').removeClass('effect')	          }	        }	      });	      btn.on('click', function () {	        var that = $(this),	            index = that.closest('.js-about-item').index();	        self.find('.js-about-gallery-item').removeClass('active');	        self.find('.js-about-item').removeClass('active');	        that.closest('.js-about-item').addClass('active');	        self.find('.js-about-gallery-item').eq(index).addClass('active');	        self.find('.js-about-collapse').slideUp('400');	        that.closest('.js-about-item').find('.js-about-collapse').slideDown('400');	      });	    });	  }	}	accordeonAboutCompany();	function drawingPicture() {	  function init() {	    var windowWidth = $(window).innerWidth(),	      containerWidth = $('.container').innerWidth(),	      calcWidth = (windowWidth - containerWidth) / 2 + 30;	    if(window.innerWidth > 767) {	      $('.js-about-gallery-right').find('.js-about-gallery-item').css({	        'margin-right': -calcWidth	      })	      $('.js-about-gallery-left').find('.js-about-gallery-item').css({	        'margin-left': -calcWidth	      })      	    } else {	      $('.js-about-gallery-right').find('.js-about-gallery-item').css({	        'margin-right': '0'	      })	      $('.js-about-gallery-left').find('.js-about-gallery-item').css({	        'margin-left': '0'	      }) 	    }	  }	  init();	  $(window).on('resize', function () {	    init();	  });	}	drawingPicture();	function contactsMap() {		var mapBlock = $('#mapContact');		if (mapBlock.length) {			try {				jQuery.getScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', function() {								ymaps.ready(init);					var myMapContact, myMapRegion, myPlacemark;					function init() {						// region						var myMap = new ymaps.Map('region', {							center: [55.659823, 37.560009],							zoom: 17,							controls: []						}, {							searchControlProvider: 'yandex#search'						});						myMap.behaviors.disable('scrollZoom');						function checkStateOne () {							var shownObjects,							byShape = new ymaps.GeoQueryResult();							if ($('#schoolCheck').prop('checked')) {								byShape = myObjects.search('options.iconImageHref = "pic/marker-school.png"');							}							if ($('#kindergardenCheck').prop('checked')) {								byShape = myObjects.search('options.iconImageHref = "pic/marker-kindergarden.png"').add(byShape);							}							if ($('#bankCheck').prop('checked')) {								byShape = myObjects.search('options.iconImageHref = "pic/marker-bank.png"').add(byShape);							}							if ($('#basketCheck').prop('checked')) {								byShape = myObjects.search('options.iconImageHref = "pic/marker-basket.png"').add(byShape);							}							if ($('#gymCheck').prop('checked')) {								byShape = myObjects.search('options.iconImageHref = "pic/marker-gym.png"').add(byShape);							}							shownObjects = byShape.addToMap(myMap);							myObjects.remove(shownObjects).removeFromMap(myMap);						}						$('.checkbox-region input').on('change', function() {							checkStateOne();						})						window.myObjects = ymaps.geoQuery({							type: "FeatureCollection",							features: [								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.659341, 37.556917]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-school.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.659644, 37.561831]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-school.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.658570, 37.563665]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-school.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.659262, 37.554975]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-kindergarden.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.658686, 37.560994]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-kindergarden.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.659268, 37.565039]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-kindergarden.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.661200, 37.565478]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-kindergarden.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.660205, 37.560060]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-kindergarden.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.660345, 37.558505]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-bank.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.659308, 37.558601]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-bank.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.659538, 37.563719]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-bank.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.660781, 37.555533]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-basket.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.658410, 37.557571]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-basket.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.660278, 37.563140]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-basket.png',										iconImageSize: [92, 92]									}								},								{										type: "Feature",									geometry: {										type: 'Point',										coordinates: [55.659890, 37.566337]									},									options: {										iconLayout: 'default#image',										iconImageHref: 'pic/marker-basket.png',										iconImageSize: [92, 92]									}								}							]						}).addToMap(myMap);						// 						// contact						myMapContact = new ymaps.Map("mapContact", {							center: [55.659823, 37.560009],							zoom: 17,							controls: ['zoomControl']						});						myPlacemark = new ymaps.Placemark([55.659823, 37.560009], {						}, {							iconLayout: 'default#imageWithContent',							iconImageHref: 'pic/marker-1.png',							iconImageSize: [124, 124]						});						myMapContact.geoObjects.add(myPlacemark);						myMapContact.behaviors.disable('scrollZoom');						//					}				})	} catch(e) {		console.log(e);	}				}	}	contactsMap();
	$('.js-credit-slider').slick({		infinite: true,		slidesToShow: 3,		slidesToScroll: 1,		responsive: [			{				breakpoint: 1220,				settings: {					slidesToShow: 2				}			},			{				breakpoint: 800,				settings: {					slidesToShow: 1				}			}		]	});
	function gallerySlider() {	  $('.js-gallery-slider').slick({	    dots: true,	    appendDots: $('.js-gallery-dots')	  });	}	gallerySlider();	function curentGallerySlider() {	  var lengthDots = $('.js-gallery-dots').find('.slick-dots li').length;	  $('.js-gallery-total').text('0' + lengthDots);	  $('.js-gallery-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {	    var activeCount = $('.js-gallery-dots').find('.slick-dots li').index($('.js-gallery-dots').find('.slick-dots li.slick-active'));	    $('.js-gallery-active').text('0' + (activeCount + 1));	  });	}	curentGallerySlider();	function loadIframe() {	  $('.js-iframe-load').on('click', function() {	    $('.js-iframe').attr('src', 'virtual-tour-rozmarin.html');	  })	}	loadIframe();	function styleBox() {		var windowWidth = $(window).width(),		containerWidth = $('.container').width()		styleWidth = (windowWidth - containerWidth) / 2;		$('.js-nav').css('padding-left', styleWidth)	}	styleBox();	$(window).on('resize', styleBox);	function showMenu() {		$('.js-menu-btn').on('click', function() {			$('.js-nav').addClass('active');		})		$('.js-close').on('click', function() {			$('.js-nav').removeClass('active');		})		$('.js-scroll').on('click', function() {			$('.js-nav').removeClass('active');		})		$(document).on('click', function(e) {			if(!$(e.target).closest('.js-nav').length && !$(e.target).closest('.js-menu-btn').length )  {				$('.js-nav').removeClass('active');			}		})	}	showMenu();	function scrollId() {		$('.js-scroll').on('click', function (e) {			e.preventDefault();			var id  = $(this).attr('href'),				top = $(id).offset().top;			$('body,html').animate({scrollTop: top}, 1500);		});	}	scrollId();
	$('.js-heading-slider').on('init', function(ev, el) {		$('.js-heading-slider').find('video').get(0).play();	});	$('.js-heading-slider').slick({		infinite: true,		slidesToShow: 1,		slidesToScroll: 1,		arrows: false,		dots: true,		autoplay: true,		autoplaySpeed: 10000,		pauseOnHover: false,		responsive: [		{			breakpoint: 768,			settings: {				dots: false			}		}		]	});	function curentSlider() {		var lengthDots = $('.js-heading-slider').find('.slick-dots li').length;		$('.js-heading-all').text('0' + lengthDots);		$('.js-heading-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {			var activeCount = $('.js-heading-slider').find('.slick-dots li').index($('.js-heading-slider').find('.slick-dots li.slick-active'));			$('.js-heading-count').text('0' + (activeCount + 1));		});	}	curentSlider();	function dotsPosition() {		var windowWidth = $(window).width(),		containerWidth = $('.container').width()		styleWidth = (windowWidth - containerWidth) / 2;		$('.js-heading-slider .slick-dots').css('right', styleWidth + 110)		$('.js-overview').css('left', styleWidth);		$('.js-count').css('right', styleWidth)	}	dotsPosition();	$(window).on('resize', dotsPosition);
	function sliderPrice() {		var flag = false;		function init() {			if (window.innerWidth <= 767) {				if (!flag) {					$('.js-slider-content').slick({						infinite: false,						slidesToShow: 2,						slidesToScroll: 1,						responsive: [							{								breakpoint: 540,								settings: {									slidesToShow: 1,									slidesToScroll: 1								}							}						]					});					var filtered = false;					$('.price__head-tab').on('click', function() {						var filtername = $(this).attr('id');						$(this).addClass('active').siblings().removeClass('active');						if (filtered === false) {							$('.js-slider-content').slick('slickUnfilter');							$('.js-slider-content').slick('slickFilter', '.filter-' + filtername);						} else {							$('.js-slider-content').slick('slickUnfilter');							$('.js-slider-content').slick('slickFilter', '.filter-' + filtername);							$('.js-slider-content').slickGoTo(0);							filtered = false;						}					});					flag = true;				}			} else {				if (flag) {					$('.js-slider-content').slick('unslick');					flag = false;				}			}		}		init();		$(window).on('resize', init);	}	sliderPrice();	function filerPrice() {		var container = document.querySelector('.js-filter');		var flag = false;		function init() {			if (window.innerWidth >= 768) {				if (!flag) {					var mixer = mixitup(container);					flag = true;				}			} else {				if (flag) {					mixer.destroy();					flag = false;				}			}		}		init();		$(window).on('resize', init);	}	filerPrice();
	//---------------------------------------//	// Подключаем основные скрипты ( develop )	//---------------------------------------//	function tabs() {		var $wrap = $('.js-tabs-wrap');		if ($wrap.length) {			$wrap.each(function () {				var $that = $(this),				$tab = $that.find('.js-tab'),				$content = $that.find('.js-tab-content');				$tab.on('click', function (e) {					e.preventDefault();					var self = $(this),					index = self.index();					self.addClass('active').siblings().removeClass('active');					$content.eq(index).addClass('active').siblings().removeClass('active');				});			});		}	}	tabs();	function formRange() {		var totalValue, firstValue, yearsValue, percentValue;		$('.js-form-slide-price').slider({			min: $('.js-form-slide-price').data('min'),			max: $('.js-form-slide-price').data('max'),			value: $('.js-form-slide-price').data('value'),			step: $('.js-form-slide-price').data('step'),			create: function(event, ui) {				totalValue = $(this).slider('value');				var resThisSlider = $('.js-value-price').val(String($(this).slider('value')).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));				var dataForFirst = $('.js-form-slide-first').data('min', $(this).slider('value') * 0.15);				$('.js-min-first').text(String($(this).slider('value') * 0.15).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));				$('.js-max-first').text(String($(this).slider('value')).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));			},			slide: function(event, ui) {				totalValue = ui.value;				$('.js-value-price').val(String(ui.value).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));				var result = (totalValue - totalValue * 0.15) * ( (percentValue / 12) / (1 - Math.pow( (1 + percentValue / 12), -(12 * yearsValue) ) ) )				$('.js-result-value').text(result.toFixed(0).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));				$('.js-form-slide-first').slider('option', 'min', ui.value * 0.15);				$('.js-form-slide-first').slider('option', 'max', ui.value);				$('.js-form-slide-first').slider('value', ui.value * 0.15);				$('.js-min-first').text(String(ui.value * 0.15).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));				$('.js-max-first').text(String(ui.value).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));				$('.js-value-first').val(String(ui.value * 0.15).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));			}		});		$('.js-form-slide-first').slider({			min: $('.js-form-slide-first').data('min'),			max: $('.js-form-slide-first').data('max'),			value: $('.js-form-slide-first').data('value'),			step: $('.js-form-slide-first').data('step'),			create: function(event, ui) {				firstValue = $(this).slider('value');				$('.js-value-first').val(String($(this).slider('value')).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));			},			slide: function(event, ui) {				firstValue = ui.value;				$('.js-value-first').val(String(ui.value).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));				var result = (totalValue - firstValue) * ( (percentValue / 12) / (1 - Math.pow( (1 + percentValue / 12), -(12 * yearsValue) ) ) )				$('.js-result-value').text(result.toFixed(0).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));			}		});		$('.js-form-slide-year').slider({			min: $('.js-form-slide-year').data('min'),			max: $('.js-form-slide-year').data('max'),			value: $('.js-form-slide-year').data('value'),			step: $('.js-form-slide-year').data('step'),			create: function(event, ui) {				yearsValue = $(this).slider('value');				$('.js-value-year').val($(this).slider('value'));			},			slide: function(event, ui) {				yearsValue = ui.value;				$('.js-value-year').val(ui.value);				var result = (totalValue - firstValue) * ( (percentValue / 12) / (1 - Math.pow( (1 + percentValue / 12), -(12 * yearsValue) ) ) )				$('.js-result-value').text(result.toFixed(0).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));			}		});		$('.js-value-price').on('input', function() {			totalValue = $('.js-value-price').val();		})		$('.js-value-first').on('input', function() {			firstValue = $('.js-value-first').val();		})		$('.js-value-year').on('input', function() {			yearsValue = $('.js-value-year').val();		})		$('.credit__btn').on('click', function() {			percentValue = $(this).data('percent');			var result = (totalValue - firstValue) * ( (percentValue / 12) / (1 - Math.pow( (1 + percentValue / 12), -(12 * yearsValue) ) ) )			$('.js-result-value').text(result.toFixed(0).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));		})		$('.credit__bottom-btn').on('click', function() {			percentValue = $(this).data('percent');			var result = (totalValue - firstValue) * ( (percentValue / 12) / (1 - Math.pow( (1 + percentValue / 12), -(12 * yearsValue) ) ) )			$('.js-result-value').text(result.toFixed(0).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));		})	}	formRange();	function fancyboxOptions() {		$('[data-fancybox]').fancybox({			touch: false,			beforeClose : function( instance, current ) {				$('select').selectmenu('close');			}		})	}	fancyboxOptions();	function customSelecMenu() {		$('select').each(function() {			$(this).selectmenu();		});	}	customSelecMenu();	function nextPopupRoom() {		var wrap = $('.js-slider-content');		if(wrap.length) {			wrap.each(function() {				var that = $(this),					item = that.find('.price__item'),					index;				function getInfo() {					item.on('click', function() {						var self = $(this),						itemPrice = self.closest('.price__item');						var titleCard = $(this).data('title'),							priceValue = $(this).find('.js-value').data('price'),							imgCard = $(this).find('img').attr('src'),							priceCard = $(this).find('.js-value').text(),							squareCard = $(this).find('.js-square').text(),							priceOneCard = ((parseInt(priceValue) / parseInt(squareCard)).toFixed(0)).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');						$('.js-img-popup').attr('src', imgCard);						$('.js-title-popup').text(titleCard);						$('.js-square-popup').text(squareCard);						$('.js-price-one-popup').text(priceOneCard);						$('.js-price-popup').text(priceCard);						index = itemPrice.index();						if(index === 0) {							$('.popup__btn--left').addClass('hide');						} else {							$('.popup__btn--left').removeClass('hide');						}						return index;					});				}				getInfo();				$('.popup__btn--right').on('click', function(e) {					e.preventDefault();					// $.fancybox.close();					setTimeout(function () {						var getAttrNext = (item.eq(index + 1)).attr('style');						if ( getAttrNext === 'display: none;' ) {						} else {							item.eq(index + 1).trigger('click');						}					}, 1);					if(index === 0) {						$('.popup__btn--left').addClass('hide');					} else {						$('.popup__btn--left').removeClass('hide');					}				});				$('.popup__btn--left').on('click', function(e) {					e.preventDefault();					// $.fancybox.close();					setTimeout(function () {						var getAttrPrev = (item.eq(index - 1)).attr('style');						if ( getAttrPrev === 'display: none;' ) {						} else {							item.eq(index - 1).trigger('click');						}					}, 1);					if(index === 0) {						$('.popup__btn--left').addClass('hide');					} else {						$('.popup__btn--left').removeClass('hide');					}				});			});    		}	}	nextPopupRoom();	$(document).ready(function() {		new WOW().init();	})	function calcCredit() {	}	calcCredit();})