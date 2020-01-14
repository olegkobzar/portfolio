function preloader() {	if ($('#preloader').length) {		setTimeout(function() {			$('#preloader').fadeOut('slow', function() {				$('body').removeClass('overflow-hidden').css('padding', '');			});		}, 1000);	}}$(window).on('load', preloader);//---------------------------------------//// Подключаем набор написаных скриптов (requare/developRequare.js)//---------------------------------------//// выполняем их после того, как DOM построится $(document).ready(function() {	 $.reject({  	//	header: 'Your browser is not supported here', // Header Text  	//	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1  	//	paragraph2: 'Please install one of the many optional browsers below to proceed',  	//	closeMessage: 'Close this window at your own demise!' // Message below close window link  		 reject: { 			all: false,			msie: 9,			chrome: 40,			firefox: 30,			safari4: 4		}, 		display: [], // What browsers to display and their order (default set below)		browserShow: true, // Should the browser options be shown?		browserInfo: { // Settings for which browsers to display			chrome: {				// Text below the icon				text: 'Google Chrome',				// URL For icon/text link				url: 'http://www.google.com/chrome/'				// (Optional) Use "allow" to customized when to show this option				// Example: to show chrome only for IE users				// allow: { all: false, msie: true }			},			firefox: {				text: 'Mozilla Firefox',				url: 'http://www.mozilla.com/firefox/'			},			safari: {				text: 'Safari',				url: 'http://www.apple.com/safari/download/'			},			opera: {				text: 'Opera',				url: 'http://www.opera.com/download/'			},			msie: {				text: 'Microsoft Edge',				url: 'http://www.microsoft.com/'			}		},		// Pop-up Window Text		header: 'Did you know that your Internet Browser is out of date?',		paragraph1: 'Your browser is out of date, and may not be compatible with '+					'our website. A list of the most popular web browsers can be '+					'found below.',		paragraph2: 'Just click on the icons to get to the download page',		// Allow closing of window		close: true,		// Message displayed below closing link		closeMessage: 'By closing this window you acknowledge that your experience '+						'on this website may be degraded',		closeLink: 'Close This Window',		closeURL: '#',		// Allows closing of window with esc key		closeESC: true,		// Use cookies to remmember if window was closed previously?		closeCookie: false,		// Cookie settings are only used if closeCookie is true		cookieSettings: {			// Path for the cookie to be saved on			// Should be root domain in most cases			path: '/',			// Expiration Date (in seconds)			// 0 (default) means it ends with the current session			expires: 0		},		// Path where images are located		imagePath: './img/browsers/',		// Background color for overlay		overlayBgColor: '#000',		// Background transparency (0-1)		overlayOpacity: 0.8,		// Fade in time on open ('slow','medium','fast' or integer in ms)		fadeInTime: 'fast',		// Fade out time on close ('slow','medium','fast' or integer in ms)		fadeOutTime: 'fast',		// Google Analytics Link Tracking (Optional)		// Set to true to enable		// Note: Analytics tracking code must be added separately		analytics: false	}); 	//---------------------------------------//	// Подключаем скрипты компонентов страниц ( modules )	//---------------------------------------//	;(function(){	  var $slider = $('.js-classes-slider');	  if ($slider.length) {	    $slider.slick({	      slidesToShow: 5,	      variableWidth: true,	      centerMode: true,	      arrows: true,	      dots: true,	      prevArrow: '<span class="slick-prev"></span>',	      nextArrow: '<span class="slick-next"></span>'	    })	  }	}());
	$('.js-slider-foot').slick({		infinite: true,		slidesToShow: 1,		slidesToScroll: 1,		arrows: false,		dots: true,		autoplay: true,		autoplaySpeed: 5000	});
	;(function() {		console.log('header')	}())
	;(function(){	  var array = ['Астрахань','Абакан','Анапа','Азов','Ангарск',	    'Барнаул','Белгород','Батайск','Брянск','Бор',	    'Воронеж','Вологда','Волгоград','Владивосток','Владимир',	    'Гатчина','Георгиевск','Грозный','Губкин','Гуково',	    'Дзержинск','Дмитров','Долгопрудный','Домодедово','Дубна',	    'Евпатория','Ейск','Екатеринбург','Елец','Ессентуки',	    'Железногорск','Жигулевск','Жуковский',	    'Заречный','Зеленогорск','Зеленодольск','Златоуст',	    'Иваново','Ижевск','Иркутск','Ишим','Ишимбай',	    'Йошкар-Ола',	    'Казань','Калининград','Калуга','Когалым','Кострома',	    'Лениногорск','Лесосибирск','Липецк','Лиски','Люберцы',	    'Магадан','Магнитогорск','Махачкала','Москва','Мурманск',	    'Нефтеюганск','Нижневартовск','Новосибирск','Норильск','Ноябрьск',	    'Октябрьский','Омск','Орел','Оренбург','Орск',	    'Пенза','Пермь','Петрозаводск','Прокопьевск','Псков',	    'Ревда','Ржев','Рубцовск','Рыбинск','Рязань',	    'Самара','Севастополь','Смоленск','Сочи','Ставрополь',	    'Тобольск','Тверь','Томск','Тула','Тюмень',	    'Узловая','Ульяновск','Уссурийск','Уфа',	    'Феодосия','Фрязино',	    'Хабаровск','Ханты-Мансийск','Хасавюрт','Химки',	    'Чебоксары','Челябинск','Череповец','Черкесск','Черногорск',	    'Шадринск','Шали','Шахты','Шуя',	    'Щекино','Щелково',	    'Электросталь','Элиста','Энгельс',	    'Южно-Сахалинск','Юрга',	    'Якутск','Ялта','Ярославль'	  ];	  var arrayRes = [];	  var $cityLink = $('.js-city-link');	  var $input = $('.js-city-search-input');	  var $result = $('.js-search-result');	  var $selectLink = $('.js-city-select-link');	  var $selected = $('.js-city-selected')	  if ($cityLink.length) {	    function filter(value) {	      var regex = new RegExp(value, 'gi');	      arrayRes = [];	      if (value.length) {	        arrayRes = array.filter(function(item) {	          return regex.test(item)	        })	      }    	    }	    function clickHandler(e) {	      e.preventDefault();	      var self = $(this);	      self.closest('ul').find($cityLink).removeClass('active');	      self.addClass('active');      	      var index = self.closest('li').index();   	      $result.hide();	      $('.js-city-content').removeClass('active').eq(index).addClass('active');	    }	    function selecteCity(e) {	      e.preventDefault();	      var city = $(this).html();	      $('.js-city-select-link').removeClass('active');	      $(this).addClass('active');	      $selected.html(city);	      $input.val('');	      $.fancybox.close();	    }	    $cityLink.on('click', clickHandler);	    $selectLink.on('click', selecteCity);	    $('.js-city-content-back').on('click', function(e) {	      e.preventDefault();	      $(this).closest('.js-city-content').removeClass('active');	      $(this).closest($result).hide();	    })	    $input.on('keyup', function(e) {	      console.log(arrayRes)	      filter($(this).val());	      arrayRes = jQuery.map(arrayRes, function(item) {	        return '<li class="popup__city-list-item"><a href="./" class="popup__city-link js-city-select-link">' + item + '</a></li>'	      });	      $result.find('ul').html(arrayRes.join('')).find('a').on('click', selecteCity);	      if (arrayRes.length) {	        $result.show();	        $('.js-city-content').removeClass('active');	        $cityLink.removeClass('active');	      } else {	        $result.hide();	      }	    })	  }	}());	//---------------------------------------//	// Подключаем основные скрипты ( develop )	//---------------------------------------//	;(function($) { 		$('[data-fancybox]').fancybox({	      autoFocus: false,	      touch: false	    })	    if ($('.js-custom-scroll').length) {	      $('.js-custom-scroll').mCustomScrollbar({	        scrollbarPosition: 'outside'	      });	    }	}($));})