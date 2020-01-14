function preloader() {	if ($('#preloader').length) {		setTimeout(function() {			$('#preloader').fadeOut('slow', function() {				$('body').removeClass('overflow-hidden').css('padding', '');			});		}, 1000);	}}$(window).on('load', preloader);//---------------------------------------//// Подключаем набор написаных скриптов (requare/developRequare.js)//---------------------------------------//// выполняем их после того, как DOM построится $(document).ready(function() {	 $.reject({  	//	header: 'Your browser is not supported here', // Header Text  	//	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1  	//	paragraph2: 'Please install one of the many optional browsers below to proceed',  	//	closeMessage: 'Close this window at your own demise!' // Message below close window link  		 reject: { 			all: false,			msie: 9,			chrome: 40,			firefox: 30,			safari4: 4		}, 		display: [], // What browsers to display and their order (default set below)		browserShow: true, // Should the browser options be shown?		browserInfo: { // Settings for which browsers to display			chrome: {				// Text below the icon				text: 'Google Chrome',				// URL For icon/text link				url: 'http://www.google.com/chrome/'				// (Optional) Use "allow" to customized when to show this option				// Example: to show chrome only for IE users				// allow: { all: false, msie: true }			},			firefox: {				text: 'Mozilla Firefox',				url: 'http://www.mozilla.com/firefox/'			},			safari: {				text: 'Safari',				url: 'http://www.apple.com/safari/download/'			},			opera: {				text: 'Opera',				url: 'http://www.opera.com/download/'			},			msie: {				text: 'Microsoft Edge',				url: 'http://www.microsoft.com/'			}		},		// Pop-up Window Text		header: 'Did you know that your Internet Browser is out of date?',		paragraph1: 'Your browser is out of date, and may not be compatible with '+					'our website. A list of the most popular web browsers can be '+					'found below.',		paragraph2: 'Just click on the icons to get to the download page',		// Allow closing of window		close: true,		// Message displayed below closing link		closeMessage: 'By closing this window you acknowledge that your experience '+						'on this website may be degraded',		closeLink: 'Close This Window',		closeURL: '#',		// Allows closing of window with esc key		closeESC: true,		// Use cookies to remmember if window was closed previously?		closeCookie: false,		// Cookie settings are only used if closeCookie is true		cookieSettings: {			// Path for the cookie to be saved on			// Should be root domain in most cases			path: '/',			// Expiration Date (in seconds)			// 0 (default) means it ends with the current session			expires: 0		},		// Path where images are located		imagePath: './img/browsers/',		// Background color for overlay		overlayBgColor: '#000',		// Background transparency (0-1)		overlayOpacity: 0.8,		// Fade in time on open ('slow','medium','fast' or integer in ms)		fadeInTime: 'fast',		// Fade out time on close ('slow','medium','fast' or integer in ms)		fadeOutTime: 'fast',		// Google Analytics Link Tracking (Optional)		// Set to true to enable		// Note: Analytics tracking code must be added separately		analytics: false	}); 	//---------------------------------------//	// Подключаем скрипты компонентов страниц ( modules )	//---------------------------------------//	;(function(){
	  var $slider = $('.js-auto-col-slider');
	  if ($slider.length) {
	    var flag = false;
		function scrollDesktop() {
	      if (window.innerWidth < 1024) {
	        if (!flag) {
	          $slider.mCustomScrollbar({
	              axis: 'x'
	          });
	          flag = true;
	        }
	      } else {
	        if (flag) {
	          $slider.mCustomScrollbar('update');
	          $slider.mCustomScrollbar('destroy');
	          flag = false;
	        }
	      }
		}
		scrollDesktop();
		$(window).on('resize', scrollDesktop);
	    $slider.find('a').on('click', function(e) {
	      e.preventDefault();
	      $('.js-auto-picture').attr('src', $(this).data('picture'))
	    });
	  }
	}());
	;(function(){
	  var $slider = $('.js-bestsellers-slider');
	  var flag = false;
	  if ($slider.length) {
	    function init() {
	      if (window.innerWidth < 1024) {
	        if (!flag) {
	          $slider.slick({
	            slidesToShow: 3,
	            slidesToScroll: 1,
	            arrows: true,
	            prevArrow: '<span class="slick-prev"></span>',
	            nextArrow: '<span class="slick-next"></span>',
	            responsive: [
	              {
	                breakpoint: 768,
	                settings: {
	                  slidesToShow: 1
	                }
	              }
	            ]
	          });
	          flag = true;
	        }
	      } else {
	        if (flag) {
	          $slider.slick('destroy');
	          flag = false;
	        }
	      }
	    }
	    init();
	    $(window).on('resize', init);
	  }
	}());
	(function () {
	  var element = $('.js-bonus-item');
	  if (element.length) {
	    element.each(function (i, el) {
	      var $self = $(el);
	      if ($self.hasClass('checked')) {
	        $self.find('input[type="checkbox"]').prop('checked', true);
	      }
	      $self.on('click', function () {
	        var checked = $(this).find('input[type="checkbox"]').prop('checked');
	        $(this).toggleClass('checked');
	        $(this).find('input[type="checkbox"]').prop('checked', !checked);
	      })
	    })
	  }
	})();
	(function () {
	  var timer = $('.js-brand-timer');
	  if (timer.length) {
	    timer.countdown(timer.attr('data-finish'))
	      .on('update.countdown', function (e) {
	        var days = e.offset.totalDays < 10 ? '0' + e.offset.totalDays : '' + e.offset.totalDays;
	        var minutes = e.offset.minutes < 10 ? '0' + e.offset.minutes : '' + e.offset.minutes;
	        var hours = e.offset.hours < 10 ? '0' + e.offset.hours : '' + e.offset.hours;
	        days = days.split('');
	        minutes = minutes.split('');
	        hours = hours.split('');
	        timer.find('.days').html('');
	        timer.find('.hours').html('');
	        timer.find('.minutes').html('');
	        days.forEach(function (el) {
	          timer.find('.days').append('<div class="brand-timer__time-item"><span>' + el + '</span></div>')
	        });
	        hours.forEach(function (el) {
	          timer.find('.hours').append('<div class="brand-timer__time-item"><span>' + el + '</span></div>')
	        });
	        minutes.forEach(function (el) {
	          timer.find('.minutes').append('<div class="brand-timer__time-item"><span>' + el + '</span></div>')
	        });
	      })
	      .on('finish.countdown', function () {
	        //do smth
	      });
	  }
	})();
	$('.js-custom-scroll').mCustomScrollbar({		verticalScroll: true	});
	function toggleTableDescr() {		$('.js-head-btn').on('click', function() {			$(this).closest('.js-wrap').find('.js-inner-table').slideToggle();			$(this).toggleClass('active');		})		$('.js-open-all').on('click', function() {			$(this).closest('.js-compare-wrap').find('.js-inner-table').slideDown();			$('.js-head-btn').addClass('active');		})		$('.js-hide-all').on('click', function() {			$(this).closest('.js-compare-wrap').find('.js-inner-table').slideUp();			$('.js-head-btn').removeClass('active');		})	}	toggleTableDescr();	;(function() {		var flag = false;		function scrollDesktop() {			if (window.innerWidth < 1368) {				if (!flag) {					$('.js-horisontal-scroll').mCustomScrollbar({						axis: 'x'					});					flag = true;				}			} else {				if (flag) {					$('.js-horisontal-scroll').mCustomScrollbar('update');					$('.js-horisontal-scroll').mCustomScrollbar('destroy');					flag = false;				}			}		}		scrollDesktop();		$(window).on('resize', scrollDesktop);	}());	(function () {
	  var config = $('.js-config');
	  if (config.length) {
	    var step = 0;
	    var next = config.find('.js-next');
	    var setStep = function (step) {
	      var item = config.find('.config__caption-item');
	      var content = config.find('.config__content');
	      content.removeClass('active');
	      content.eq(step).addClass('active');
	      item.removeClass('active');
	      for (var i = 0; i < step + 1; i++) {
	        item.eq(i).addClass('active');
	      }
	    };
	    var clear = function () {
	      step = 0;
	      setStep(0)
	    };
	    setStep(step);
	    next.on('click', function (e) {
	      e.preventDefault();
	      setStep(++step);
	    })
	  }
	})();
	;(function(){	  var $slider = $('.js-credit-slider');	  if ($slider.length) {	    $slider.each(function() {	      var self = $(this);	      self.slider({	        range: 'min',	        min: self.data('min'),	        max: self.data('max')	      })	    });	  }	  var $colorSlick = $('.js-color-slider');	  if ($colorSlick.length) {	    $colorSlick.slick({	      vertical: true,	      slidesToShow: 6	    })	  }	}());	function showAllDescr() {		$('.js-btn-descr').on('click', function() {			$('.js-descr-all').css('display', 'inline');			$(this).css('display', 'none');		})	}	showAllDescr();
	(function () {
	  var table = $('.js-fit-table');
	  if (table.length) {
	    var dropTrigger = $('.js-select-trigger');
	    var compare = $('.js-compare-trigger');
	    var compareCounter = 0;
	    compare.on('change', function () {
	      var check = $(this).prop('checked');
	      var parent = $(this).closest('.fit-table__check');      
	      if (check) {
	        compareCounter++;
	        if (compareCounter > 3) {
	          alert('maximum compare are 4 items');
	          $(this).prop('checked', false);
	          compareCounter--;
	        } else {
	          if (compareCounter > 1 && compareCounter < 4) {
	            $('.fit-table__check').removeClass('active');
	            parent.addClass('active');
	          }
	        }        
	      } else {
	        compareCounter--;
	        $('.fit-table__check').removeClass('active');
	      }
	    });
	    dropTrigger.on('click', function () {
	      $(this).toggleClass('active');
	      $(this).closest('tr').next('tr').find('.fit-table__drop').slideToggle();
	    });
	  }
	})();
	function autoFooter() {		var footer = $('footer');		if ($('footer').length) {			var wrapper = $('.wrapper');			var footerHeight = footer.outerHeight();			footer.css('margin-top', -footerHeight);			wrapper.css('padding-bottom', footerHeight);		}	}	setTimeout(autoFooter, 100);	$(window).on('resize', autoFooter);
	;(function() {	  var $nav = $('.js-nav'),	      $btnNav = $('.js-nav-burger');	  var $catalog = $('.js-head-catalog'),	      $btnCat = $('.js-head-catalog-btn');	  function catalog() {    	    $btnCat.on('click', function(e) {	      $catalog.toggleClass('is-open');	      $nav.removeClass('active');	    });	    $(document).on('click', function(e) {	      if (!$(e.target).closest($catalog).length && $catalog.hasClass('is-open')) {	        $catalog.removeClass('is-open');	      }	    })	  }	  catalog();	  var flag = false;	  function mobNav() {	    if (window.innerWidth < 1024) {	      if (!flag) {	        $btnNav.on('click', function(e) {	          $(this).toggleClass('active');	          $nav.toggleClass('active');	        })	        $(document).on('click.mob', function(e) {	          if (!$(e.target).closest($nav).length && !$(e.target).closest($btnNav).length && $nav.hasClass('active')) {	            $nav.removeClass('active');	            $btnNav.removeClass('active');	          }	        })	        flag = true;	      }	    } else {	      if (flag) {	        $btnNav.off('click').removeClass('active');	        $nav.removeClass('active');	        $(document).off('click.mob')	        flag = false;	      }	    }	  }	  mobNav();	  $(window).on('resize', mobNav);	  $(document).on('scroll', function() {	    if ($(document).scrollTop() > 0) {	      $('.header').addClass('fixed');	    } else {	      $('.header').removeClass('fixed');	    }	  })	}());	function playVideo() {		$('.js-play-video').on('click', function() {			$('.js-video-wrap').find('video').get(0).play();			$('.js-video-wrap').addClass('active');		})	}	playVideo();
	$('.js-slider-photo').slick({		infinite: true,		slidesToShow: 3,		slidesToScroll: 1,		prevArrow: $('.js-prev-photo'),		nextArrow: $('.js-next-photo'),		variableWidth: true,		centerMode: true,		responsive: [		{			breakpoint: 768,			settings: {				centerMode: false,				arrows: false			}		}		]	});
	function toggleDescription() {		$('.js-toggle-btn').on('click', function(e) {			e.preventDefault();			$('.js-all-descr').slideDown();			$(this).css('display', 'none');		})	}	toggleDescription();
	;(function(){	  var $slider = $('.js-promo-slider');	  if ($slider.length) {	    $slider.slick({	      slidesToShow: 1,	      slidesToScroll: 1,	      arrows: false,	      dots: true,	      autoplay: 5000	    })	  }	  function counter() {	    var $counter = $('.js-promo-counter'),	        time = 0;	    if ($counter.length) {	      function dhm(t){	        var cd = 24 * 60 * 60 * 1000,	            ch = 60 * 60 * 1000,	            d = Math.floor(t / cd),	            h = Math.floor( (t - d * cd) / ch),	            m = Math.round( (t - d * cd - h * ch) / 60000),	            pad = function(n){ return n < 10 ? '0' + n : n; };	        if( m === 60 ){	          h++;	          m = 0;	        }	        if( h === 24 ){	          d++;	          h = 0;	        }	        return [pad(d), pad(h), pad(m)].join(' : ');	      }	      $counter.each(function() {	        var self = $(this),	            date = new Date(Date.parse(self.data('counter-date'))),	            timeLeft = 0,	            hour = 0,	            min = 0,	            sec = 0,	            day = 0;	        setInterval(function() {	          var curTime = new Date();	          timeLeft = date - curTime;	          sec = Math.round(timeLeft / 1000);	          min = sec / 60;	          hour = min / 60;          	          day = hour / 24;	          self.html(dhm(timeLeft));	        }, 1000);	      });	    }	  }	  counter();	}());	$('.js-slider-review').slick({		infinite: true,		slidesToShow: 1,		slidesToScroll: 1,		prevArrow: $('.js-prev-review'),		nextArrow: $('.js-next-review')	});	$('.js-slider-review-video').slick({		infinite: true,		slidesToShow: 3,		slidesToScroll: 1,		dots: true,		prevArrow: $('.js-prev-review-video'),		nextArrow: $('.js-next-review-video'),		responsive: [		{			breakpoint: 768,			settings: {				slidesToShow: 1,				slidesToScroll: 1,				infinite: true,				dots: false,				arrows: false,				variableWidth: true			}		}		]	});
	(function () {
	  var slider = $('.js-special-offer-slider');
	  var options = {
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    responsive: [
	      {
	        breakpoint: 1200,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 2
	        }
	      },
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }
	    ]
	  };
	  if (slider.length) {
	    slider.slick(options)
	  }
	})();
	//---------------------------------------//	// Подключаем основные скрипты ( develop )	//---------------------------------------//	function heightBox(itemName) {
	  $(itemName).matchHeight({
	    byRow: true,
	    property: 'height',
	    target: null,
	    remove: false
	  });
	}
	setTimeout(function () {
	  heightBox('.js-height');
	}, 100)
	$(window).on('resize', function () {
	  // heightBox('.js-height');
	})
	$('.js-slider-price').each(function () {
	  $(this).slider({
	    min: $(this).data('min'),
	    max: $(this).data('max'),
	    value: $(this).data('value'),
	    step: $(this).data('step'),
	    range: 'max',
	    create: function (event, ui) {
	      var tooltip = $('<div class="tooltip"> </div>');
	      var $this = $(this);
	      var arr = ['от', 'до'];
	      $this.find('.ui-slider-handle').append(tooltip).each(function () {
	        $(this).find('.tooltip').text(String($this.slider('value')).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' Р');
	        $('.js-res-slider').val(String($this.slider('value')).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' Р');
	      })
	    },
	    slide: function (event, ui) {
	      $(ui.handle).find('.tooltip').text(String(ui.value).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' Р');
	      $('.js-res-slider').val(String(ui.value).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' Р');
	    }
	  })
	})
	$('.js-select').each(function () {
	  $(this).selectmenu({
	    appendTo: '.js-select-wrap'
	  });
	})
	$('.js-select').on('selectmenuopen', function (event, ui) {
	  $('.ui-selectmenu-menu .ui-menu').mCustomScrollbar({
	    verticalScroll: true
	  });
	});
	function msieversion() {
	  var ua = window.navigator.userAgent;
	  var msie = ua.indexOf("MSIE ");
	  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
	  {
	    $('.js-check-ie').addClass('ie-mod')
	  }
	  return false;
	}
	msieversion();
	$('[data-fancybox]').fancybox({touch: false});
})