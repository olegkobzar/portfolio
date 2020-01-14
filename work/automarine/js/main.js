function preloader() {	if ($('#preloader').length) {		setTimeout(function() {			$('#preloader').fadeOut('slow', function() {				$('body').removeClass('overflow-hidden').css('padding', '');			});		}, 1000);	}}$(window).on('load', preloader);//---------------------------------------//// Подключаем набор написаных скриптов (requare/developRequare.js)//---------------------------------------//// выполняем их после того, как DOM построитсяfunction autoFooter() {  if ($('.wrapper').length) {    var height = $('.footer').height();    $('.wrapper').css('padding-bottom', height).css('margin-bottom', -height);  }}$(document).ready(function() {   $.reject({    //	header: 'Your browser is not supported here', // Header Text    //	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1    //	paragraph2: 'Please install one of the many optional browsers below to proceed',    //	closeMessage: 'Close this window at your own demise!' // Message below close window link    	 reject: {   		all: false,  		msie: 9,  		chrome: 40,  		firefox: 30,  		safari4: 4  	},   	display: [], // What browsers to display and their order (default set below)  	browserShow: true, // Should the browser options be shown?  	browserInfo: { // Settings for which browsers to display  		chrome: {  			// Text below the icon  			text: 'Google Chrome',  			// URL For icon/text link  			url: 'http://www.google.com/chrome/'  			// (Optional) Use "allow" to customized when to show this option  			// Example: to show chrome only for IE users  			// allow: { all: false, msie: true }  		},  		firefox: {  			text: 'Mozilla Firefox',  			url: 'http://www.mozilla.com/firefox/'  		},  		safari: {  			text: 'Safari',  			url: 'http://www.apple.com/safari/download/'  		},  		opera: {  			text: 'Opera',  			url: 'http://www.opera.com/download/'  		},  		msie: {  			text: 'Microsoft Edge',  			url: 'http://www.microsoft.com/'  		}  	},  	// Pop-up Window Text  	header: 'Did you know that your Internet Browser is out of date?',  	paragraph1: 'Your browser is out of date, and may not be compatible with '+  				'our website. A list of the most popular web browsers can be '+  				'found below.',  	paragraph2: 'Just click on the icons to get to the download page',  	// Allow closing of window  	close: true,  	// Message displayed below closing link  	closeMessage: 'By closing this window you acknowledge that your experience '+  					'on this website may be degraded',  	closeLink: 'Close This Window',  	closeURL: '#',  	// Allows closing of window with esc key  	closeESC: true,  	// Use cookies to remmember if window was closed previously?  	closeCookie: false,  	// Cookie settings are only used if closeCookie is true  	cookieSettings: {  		// Path for the cookie to be saved on  		// Should be root domain in most cases  		path: '/',  		// Expiration Date (in seconds)  		// 0 (default) means it ends with the current session  		expires: 0  	},  	// Path where images are located  	imagePath: './img/browsers/',  	// Background color for overlay  	overlayBgColor: '#000',  	// Background transparency (0-1)  	overlayOpacity: 0.8,  	// Fade in time on open ('slow','medium','fast' or integer in ms)  	fadeInTime: 'fast',  	// Fade out time on close ('slow','medium','fast' or integer in ms)  	fadeOutTime: 'fast',  	// Google Analytics Link Tracking (Optional)  	// Set to true to enable  	// Note: Analytics tracking code must be added separately  	analytics: false  });   //---------------------------------------//  // Подключаем скрипты компонентов страниц ( modules )  //---------------------------------------//  function carSlider() {    $('.js-desc-slider').slick({      slidesToShow: 1,      slidesToScroll: 1,      arrows: false,      fade: true,      asNavFor: '.js-desc-nav'    });    $('.js-desc-nav').slick({      slidesToShow: 4,      slidesToScroll: 1,      asNavFor: '.js-desc-slider',      focusOnSelect: true,      responsive: [        {          breakpoint: 768,          settings: {            slidesToShow: 3          }        }      ]    });  }  carSlider();
  function carTpggle() {    $('.js-filter-toggler').on('click', function () {      $('.js-filter-collapse').slideToggle('slow');      $(this).toggleClass('less');      if ($('.js-filter-toggler').hasClass('less')) {        $(this).text('обычный поиск');      } else {        $(this).text('раcширенный поиск');      }    });  }  carTpggle();
  function openMenu() {  	$('.js-open-menu').on('click', function() {  		$('.js-active-menu').addClass('active');  		$('body').addClass('overflow-hidden');  		$(this).addClass('disactive');  		$('.js-close').addClass('active')  	})  	$('.js-close').on('click', function() {  		$('.js-active-menu').removeClass('active');  		$('body').removeClass('overflow-hidden');  		$(this).removeClass('active');  		$('.js-close').removeClass('active');  		$('.js-open-menu').removeClass('disactive');  		$('.js-open-search').removeClass('active');  		$('.js-active-search').removeClass('active');  	})  	$('.js-open-search').on('click', function() {  		$('.js-active-search').addClass('active');  		$('body').addClass('overflow-hidden');  		$('.js-close').addClass('active')  		$('.js-open-menu').addClass('disactive');  		$('.js-active-menu').removeClass('active');  	})  }  openMenu();  function openSubmenu() {  	$('.js-accordeon').on('click', function() {  		$(this).next().slideToggle(300);  		$(this).toggleClass('active');  	})  }  openSubmenu();
  function sliderMobileWorking() {    var flag = false;    function init() {      if (window.innerWidth < 768) {        if (!flag) {          $('.js-slider-mobile-working').slick({            infinite: false,            slidesToShow: 2,            responsive: [              {                breakpoint: 545,                settings: {                  slidesToShow: 1                }              }            ]          });          flag = true;        }      } else {        if (flag) {          $('.js-slider-mobile-working').slick('unslick');          flag = false;        }      }    }    if ($('.js-slider-mobile-working').length) {      init();      $(window).on('resize', init);    }  }  sliderMobileWorking();
  function infoSlider() {    var $status = $('.js-slide-counter');    var $contentSlider = $('.js-info-slider');    $contentSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {      var i = (currentSlide ? currentSlide : 0) + 1;      $status.html('<span class="info__counter-number info__counter-number--active">' + i + ' / </span>' + '<span class="info__counter-number">' + slick.slideCount + '</span>');      if ( i == +'1') {        $('.js-slide-prev').addClass('slide-disabled');      } else {        $('.js-slide-prev').removeClass('slide-disabled');      }      if ( i == +'10') {        $('.js-slide-next').addClass('slide-disabled');      } else {        $('.js-slide-next').removeClass('slide-disabled');      }    });    $contentSlider.slick({      arrows: "false",      slidesToShow: 1,      infinite: false    });    $('.js-slide-prev').on('click', function () {      $contentSlider.slick("slickPrev");    });    $('.js-slide-next').on('click', function () {      $contentSlider.slick("slickNext");    });  }  infoSlider();
  function brandsSlider() {  	var flag = false;  	function init() {  		if (window.innerWidth < 1023) {  			if (!flag) {  				$('.js-brands-slider').slick({  					slidesToShow: 4,  					slidesToScroll: 1,  					responsive: [  						{  							breakpoint: 767,  							settings: {  								slidesToShow: 3,  								slidesToScroll: 1  							}  						},  						{  							breakpoint: 479,  							settings: {  								slidesToShow: 2,  								slidesToScroll: 1  							}  						}  					]  				});  				flag = true;  			}  		} else {  			if (flag) {  				$('.js-brands-slider').slick('unslick');  				flag = false;  			}  		}  	}  	if ($('.js-brands-slider').length) {  		init();  		$(window).on('resize', init);  	}  }  brandsSlider();
  function sliderMobilePopular() {    var flag = false;    function init() {      if (window.innerWidth < 768) {        if (!flag) {          $('.js-slider-mobile-popular').slick({            infinite: false,            slidesToShow: 2,            responsive: [              {                breakpoint: 545,                settings: {                  slidesToShow: 1                }              }            ]          });          flag = true;        }      } else {        if (flag) {          $('.js-slider-mobile-popular').slick('unslick');          flag = false;        }      }    }    if ($('.js-slider-mobile-popular').length) {      init();      $(window).on('resize', init);    }  }  sliderMobilePopular();  ;  (function($) {  	function sliderQuestions(){      var questionSlider = $('.js-questions-slider-wrap');      if(questionSlider.length) {        questionSlider.each(function() {        	var $slider = $(this).find('.js-questions-slider');      		var currentQuestionSlide = $(this).find('.js-questions-dots-is');          var allDotsSlide = $(this).find('.js-questions-dots-all');  				allDotsSlide.text($(this).find('.js-get-slides-number').length);          $slider.slick ({              slidesToShow: 1,              slidesToScroll: 1,              dots: false,              infinite: false,              nextArrow: '<div class="slick-arrow-counter slick-arrow-counter--next"><div class="arrow-right"></div></div>',              prevArrow: '<div class="slick-arrow-counter slick-arrow-counter--prev"><div class="arrow-left"></div></div>'          })          .on('beforeChange', function (event, slick, currentSlide, nextSlide) {            currentQuestionSlide.text(nextSlide + 1);          });      	});      }  	}  	sliderQuestions();  }($));  ;  (function($) {  	function sliderReviews() {      var reviewSlider = $('.js-reviews-slider-wrap');      if(reviewSlider.length) {        reviewSlider.each(function() {        	var $slider = $(this).find('.js-reviews-slider');      		var currentReviewSlide = $(this).find('.js-reviews-dots-is');          var allDotsSlide = $(this).find('.js-reviews-dots-all');  				allDotsSlide.text($(this).find('.js-get-slides-number').length);          $slider.slick ({              slidesToShow: 1,              slidesToScroll: 1,              dots: false,              infinite: false          })          .on('beforeChange', function (event, slick, currentSlide, nextSlide) {            currentReviewSlide.text(nextSlide + 1);          });      	});      }  	}  	sliderReviews();  }($));  function video() {  	var $videoWrap = $('.js-video-wrap');  	if ($videoWrap.length) {  		var $overlay = $('.js-video-overlay'),  				$item = $('.js-video-item'),  				$play = $('.js-video-play'),  				$close = $('.js-video-close');  			$($play).on('click', function(e) {  				e.preventDefault();  				$($overlay).addClass('active');  				$('body').addClass('overflow-hidden');  			});  			$($close).on('click', function(e) {  				e.preventDefault();  				$($overlay).removeClass('active');  				$('body').removeClass('overflow-hidden');    			var stopVideo = function(player) {    			  var vidSrc = player.prop('src');    			  player.prop('src', '');     			  player.prop('src', vidSrc);    			};    			stopVideo($('iframe'));  			});  			$overlay.on('click', function(e) {  				$(this).removeClass('active');  				$('body').removeClass('overflow-hidden');    			var stopVideo = function(player) {    			  var vidSrc = player.prop('src');    			  player.prop('src', '');     			  player.prop('src', vidSrc);    			};    			stopVideo($('iframe'));  			});  	}  }  video();  //---------------------------------------//  // Подключаем основные скрипты ( develop )  //---------------------------------------//  ;(function ($) {    function customSelect() {      $('.js-select').each(function () {        var $this = $(this), numberOfOptions = $(this).children('option').length;        $this.addClass('select-hidden');        $this.wrap('<div class="select"></div>');        $this.after('<div class="select-styled"></div>');        var $styledSelect = $this.next('div.select-styled');        $styledSelect.text($this.children('option').eq(0).text());        var $list = $('<ul />', {          'class': 'select-options'        }).insertAfter($styledSelect);        for (var i = 0; i < numberOfOptions; i++) {          $('<li />', {            text: $this.children('option').eq(i).text(),            rel: $this.children('option').eq(i).val()          }).appendTo($list);        }        var $listItems = $list.children('li');        $styledSelect.click(function (e) {          e.stopPropagation();          $('div.select-styled.active').not(this).each(function () {            $(this).removeClass('active').next('ul.select-options').hide();          });          $(this).toggleClass('active').next('ul.select-options').toggle();        });        $listItems.click(function (e) {          e.stopPropagation();          $styledSelect.text($(this).text()).removeClass('active');          $this.val($(this).attr('rel'));          $list.hide();        });        $(document).click(function () {          $styledSelect.removeClass('active');          $list.hide();        });      });    }    customSelect();    function tabs() {      var $wrap = $('.js-tabs-wrap');      if ($wrap.length) {        $wrap.each(function () {          var $that = $(this),              $tab = $that.find('.js-tab'),              $content = $that.find('.js-tab-content');          $tab.on('click', function (e) {            e.preventDefault();            var self = $(this),                index = self.index();            self.addClass('active').siblings().removeClass('active');            $content.eq(index).addClass('active').siblings().removeClass('active');          });        });      }    }    tabs();    function sliderQuestions() {      var status = $('.js-slide-counter');      var contentSlider = $('.js-main-slider');      contentSlider.each(function () {        var currentSlide = $(this).find('.heading__counter-number--active');        var allDotsSlide = $(this).find('.heading__counter-number');        allDotsSlide.text($(this).find('.heading__counter-number').length);        contentSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {          $('.js-progresbar').stop().css('width', '0%').animate({width: '100%'}, 8000);          var i = (currentSlide ? currentSlide : 0) + 1;          status.html('<span class="heading__counter-number heading__counter-number--active">' + i + '</span>' + '<span>/</span>' + '<span class="heading__counter-number">' + slick.slideCount + '</span>')        });        $(this).slick({          arrows: false,          infinite: true,          slidesToShow: 1,          draggable: true,          adaptiveHeight: false,          mobileFirst: true,          pauseOnDotsHover: false,          autoplay: true,          autoplaySpeed: 8000,          speed: 500,          fade: true,          cssEase: 'linear'        });        $('.js-slide-prev').on('click', function () {          contentSlider.slick("slickPrev");        });        $('.js-slide-next').on('click', function () {          contentSlider.slick("slickNext");        });      });    }    sliderQuestions();    function customScroll() {      $(window).on("load",function(){        $(".js-custom-scroll").mCustomScrollbar({          axis: "x"        });      });    }    customScroll();    function popupSlider() {      $("[data-fancybox]").fancybox({        beforeShow: function () {          $('.js-popup-slider').slick({            slidesToShow: 1,            slidesToScroll: 1,            arrows: false,            fade: true,            asNavFor: '.js-popup-nav'          });          $('.js-popup-nav').slick({            slidesToShow: 4,            slidesToScroll: 1,            asNavFor: '.js-popup-slider',            focusOnSelect: true,            responsive: [              {                breakpoint: 1060,                settings: {                  slidesToShow: 3                }              }            ]          });        },        afterClose: function () {          $('.js-popup-slider').slick('unslick');          $('.js-popup-nav').slick('unslick');        }      });    }    popupSlider();  }($));  autoFooter();})$(window).on('resize', function() {  autoFooter();})