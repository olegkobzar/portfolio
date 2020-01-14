function preloader() {	if ($('#preloader').length) {		setTimeout(function() {			$('#preloader').fadeOut('slow', function() {				$('body').removeClass('overflow-hidden').css('padding', '');			});		}, 1000);	}}$(window).on('load', preloader);//---------------------------------------//
// Подключаем набор написаных скриптов (requare/developRequare.js)
//---------------------------------------//
function isMobile() {
  return window.innerWidth < 768
}
function lockScroll(state) {
  if(state) {
    $('body').css('overflow', 'hidden')
  } else {
    $('body').css('overflow', '')
  }
}
function autoFooter() {
  if ($('.wrapper').length) {
    var height = $('.footer').innerHeight();
    $('.wrapper').css('padding-bottom', height).css('margin-bottom', -height);
  }
}
// выполняем их после того, как DOM построится 
$(document).on('ready' ,function() {
	 $.reject({  	//	header: 'Your browser is not supported here', // Header Text  	//	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1  	//	paragraph2: 'Please install one of the many optional browsers below to proceed',  	//	closeMessage: 'Close this window at your own demise!' // Message below close window link  		 reject: { 			all: false,			msie: 9,			chrome: 40,			firefox: 30,			safari4: 4		}, 		display: [], // What browsers to display and their order (default set below)		browserShow: true, // Should the browser options be shown?		browserInfo: { // Settings for which browsers to display			chrome: {				// Text below the icon				text: 'Google Chrome',				// URL For icon/text link				url: 'http://www.google.com/chrome/'				// (Optional) Use "allow" to customized when to show this option				// Example: to show chrome only for IE users				// allow: { all: false, msie: true }			},			firefox: {				text: 'Mozilla Firefox',				url: 'http://www.mozilla.com/firefox/'			},			safari: {				text: 'Safari',				url: 'http://www.apple.com/safari/download/'			},			opera: {				text: 'Opera',				url: 'http://www.opera.com/download/'			},			msie: {				text: 'Microsoft Edge',				url: 'http://www.microsoft.com/'			}		},		// Pop-up Window Text		header: 'Did you know that your Internet Browser is out of date?',		paragraph1: 'Your browser is out of date, and may not be compatible with '+					'our website. A list of the most popular web browsers can be '+					'found below.',		paragraph2: 'Just click on the icons to get to the download page',		// Allow closing of window		close: true,		// Message displayed below closing link		closeMessage: 'By closing this window you acknowledge that your experience '+						'on this website may be degraded',		closeLink: 'Close This Window',		closeURL: '#',		// Allows closing of window with esc key		closeESC: true,		// Use cookies to remmember if window was closed previously?		closeCookie: false,		// Cookie settings are only used if closeCookie is true		cookieSettings: {			// Path for the cookie to be saved on			// Should be root domain in most cases			path: '/',			// Expiration Date (in seconds)			// 0 (default) means it ends with the current session			expires: 0		},		// Path where images are located		imagePath: './img/browsers/',		// Background color for overlay		overlayBgColor: '#000',		// Background transparency (0-1)		overlayOpacity: 0.8,		// Fade in time on open ('slow','medium','fast' or integer in ms)		fadeInTime: 'fast',		// Fade out time on close ('slow','medium','fast' or integer in ms)		fadeOutTime: 'fast',		// Google Analytics Link Tracking (Optional)		// Set to true to enable		// Note: Analytics tracking code must be added separately		analytics: false	}); 	//---------------------------------------//	// Подключаем скрипты компонентов страниц ( modules )	//---------------------------------------//	function sliderAbout() {		$('.js-about-slider').slick({			dots: true,			infinite: true,			slidesToShow: 1,			slidesToScroll: 1,			speed: 500,			fade: true		})		function curentSlider() {			var lengthDots = $('.js-about-slider').find('.slick-dots li').length;			$('.js-about-all').text(lengthDots);			$('.js-about-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {				var activeCount = $('.js-about-slider').find('.slick-dots li').index($('.js-about-slider').find('.slick-dots li.slick-active'));				$('.js-about-count').text(activeCount + 1);			});		}		curentSlider();		$(window).on('resize', curentSlider);	}	sliderAbout();
	function advantagesSlider(){		var flag = false;		function init() {			if (window.innerWidth < 768) {				if (!flag) {					$('.js-adv-slider').slick({						slidesToShow: 2,						slidesToScroll: 2,						dots: true,						responsive: [							{								breakpoint: 550,								settings: {									slidesToShow: 1,									slidesToScroll: 1								}							}						]					});				}				flag = true;			} 			else {				if (flag) {					$('.js-adv-slider').slick('unslick');					flag = false;				}			}			function curentSlider() {				var lengthDots = $('.js-adv-slider').find('.slick-dots li').length;				$('.js-adv-all').text(lengthDots);				$('.js-adv-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {					var activeCount = $('.js-adv-slider').find('.slick-dots li').index($('.js-adv-slider').find('.slick-dots li.slick-active'));					$('.js-adv-count').text(activeCount + 1);				});			}			curentSlider();			$(window).on('resize', curentSlider);		}		if ($('.js-adv-slider').length) {			init();			$(window).on('resize', init);		}	}	advantagesSlider();
	function articleSlider() {
	  $('.js-article-slider').slick({
	    dots: true,
	    slidesToShow: 1,
	    slidesToScroll: 1
	  })
	  function curentSlider() {
	    var lengthDots = $('.js-article-slider').find('.slick-dots li').length;
	    $('.js-article-all').text(lengthDots);
	    $('.js-article-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	      var activeCount = $('.js-article-slider').find('.slick-dots li').index($('.js-article-slider').find('.slick-dots li.slick-active'));
	      $('.js-article-count').text(activeCount + 1);
	    });
	  }
	  curentSlider();
	  $(window).on('resize', curentSlider);
	}
	articleSlider();
	function articleGoodsSlider() {
	  var flag = false;
	  function init() {
	    if (window.innerWidth < 1024) {
	      if (!flag) {
	        $('.js-article-goods-slider').each(function() {
	          $(this).slick({
	            slidesToShow: 3,
	            slidesToScroll: 1,
	            autoplay: true,
	            autoplaySpeed: 5000,
	            dots: true,
	            responsive: [
	            {
	              breakpoint: 768,
	              settings: {
	                slidesToShow: 2,
	                slidesToScroll: 2
	              }
	            }
	            ]
	          });
	        })
	      }
	      flag = true;
	    } 
	    else {
	      if (flag) {
	        $('.js-article-goods-slider').slick('unslick');
	        flag = false;
	      }
	    }
	    function curentSlider() {
	      $('.js-wrap-article-goods').each(function() {
	        var lengthDots = $(this).find('.slick-dots li').length;
	        $(this).find('.js-article-goods-all').text(lengthDots);
	        $(this).find('.js-article-goods-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	          var activeCount = $(this).find('.slick-dots li').index($(this).find('.slick-dots li.slick-active'));
	          $(this).closest('.js-wrap-article-goods').find('.js-article-goods-count').text(activeCount + 1);
	        });
	      })
	    }
	    curentSlider();
	    $(window).on('resize', curentSlider);
	  }
	  if ($('.js-article-goods-slider').length) {
	    init();
	    $(window).on('resize', init);
	  }
	}
	articleGoodsSlider();
	function basketSlider(){		var flag = false;		function init() {			if (window.innerWidth < 1024) {				if (!flag) {					$('.js-basket-slider').each(function() {						$(this).slick({							slidesToShow: 3,							slidesToScroll: 1,							autoplay: true,							autoplaySpeed: 5000,							dots: true,							responsive: [							{								breakpoint: 768,								settings: {									slidesToShow: 2,									slidesToScroll: 2								}							}							]						});					})				}				flag = true;			} 			else {				if (flag) {					$('.js-basket-slider').slick('unslick');					flag = false;				}			}			function curentSlider() {				$('.js-wrap-basket').each(function() {					var lengthDots = $(this).find('.slick-dots li').length;					$(this).find('.js-basket-all').text(lengthDots);					$(this).find('.js-basket-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {						var activeCount = $(this).find('.slick-dots li').index($(this).find('.slick-dots li.slick-active'));						$(this).closest('.js-wrap-basket').find('.js-basket-count').text(activeCount + 1);					});				})			}			curentSlider();			$(window).on('resize', curentSlider);		}		if ($('.js-basket-slider').length) {			init();			$(window).on('resize', init);		}	}	basketSlider();	function sliderBenefit() {		$('.js-benefit-slider').slick({			dots: true,			infinite: true,			slidesToShow: 1,			slidesToScroll: 1,			autoplay: true,			autoplaySpeed: 10000,			responsive: [				{					breakpoint: 768,					settings: {						arrows: false,						dots: false					}				}			]		})	}	sliderBenefit();
	function viewSwitch() {
	  var wrap = $('.js-view-wrap');
	  if(wrap.length) {
	    var btnRow = $('.js-view-btn-row'),
	        btnCol = $('.js-view-btn-col'),
	        content = $('.js-view-content');
	    btnRow.on('click', function(e) {
	      e.preventDefault();
	      $(this).closest(wrap).find(content).slideToggle();
	      btnCol.removeClass('active');
	      content.removeClass('catalog-col');
	      $(this).addClass('active');
	      content.addClass('catalog-row');
	    })
	    btnCol.on('click', function(e) {
	      e.preventDefault();
	      $(this).closest(wrap).find(content).slideToggle();
	      btnRow.removeClass('active');
	      content.removeClass('catalog-row');
	      $(this).addClass('active');
	      content.addClass('catalog-col');
	    })
	  }
	}
	viewSwitch();
	function sliderCatalog() {		$('.js-catalog-slider').slick({			dots: true,			infinite: true,			slidesToShow: 4,			slidesToScroll: 4,			responsive: [				{					breakpoint: 1024,					settings: {						slidesToShow: 3,						slidesToScroll: 3					}				},				{					breakpoint: 768,					settings: {						slidesToShow: 2,						slidesToScroll: 1,						variableWidth: true					}				}			]		})		function curentSlider() {			var lengthDots = $('.js-catalog-slider').find('.slick-dots li').length;			$('.js-catalog-all').text(lengthDots);			$('.js-catalog-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {				var activeCount = $('.js-catalog-slider').find('.slick-dots li').index($('.js-catalog-slider').find('.slick-dots li.slick-active'));				$('.js-catalog-count').text(activeCount + 1);			});		}		curentSlider();		$(window).on('resize', curentSlider);	}	sliderCatalog();
	;(function() {
	  function companyRevSlider() {
	    $('.js-company-rev-slider').slick({
	      dots: true,
	      slidesToShow: 3,
	      slidesToScroll: 1,
	      prevArrow: $('.prev-slide-rev'),
	      nextArrow: $('.next-slide-rev'),
	      responsive: [
	        {
	          breakpoint: 1024,
	          settings: {
	            slidesToShow: 2
	          }
	        },
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 1
	          }
	        }
	      ]
	    })
	    function curentSlider() {
	      var lengthDots = $('.js-company-rev-slider').find('.slick-dots li').length;
	      $('.js-company-rev-all').text(lengthDots);
	      $('.js-company-rev-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        var activeCount = $('.js-company-rev-slider').find('.slick-dots li').index($('.js-company-rev-slider').find('.slick-dots li.slick-active'));
	        $('.js-company-rev-count').text(activeCount + 1);
	      });
	    }
	    curentSlider();
	    $(window).on('resize', curentSlider);
	  }
	  companyRevSlider();
	})();
	function deleteItem() {		$('.js-delete').on('click', function() {			$(this).closest('.js-card').remove();			$('.js-scroll-wrap').mCustomScrollbar('destroy');			scrollCard();		})	}	deleteItem();	function scrollCard() {		$('.js-scroll-wrap').mCustomScrollbar({			horizontalScroll: true,			mouseWheelPixels: 265,			live: 'on',			scrollButtons: {				enable: true,				scrollAmount: 265,				scrollType: "pixels"			}		});	}	scrollCard();	function showFilter() {		$('.js-btn-filter').on('click', function() {			$('.js-show-filter').toggleClass('active');		})	}	showFilter();
	;(function($) {
	  function contactsMap() {
	    var mapBlock = $('#map');
	    if (mapBlock.length) {
	      try {
	        jQuery.getScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', function() {     
	          ymaps.ready(init);
	          var myMap,
	              myPlacemark;
	          function init() {
	            myMap = new ymaps.Map("map", {
	              center: [55.725392, 37.668541],
	              zoom: 16,
	              controls: []
	            });
	            myPlacemark = new ymaps.Placemark([55.725392, 37.668541], {
	            }, {
	              iconLayout: 'default#image',
	              // Своё изображение иконки метки.
	              iconImageHref: 'img/mark.png',
	              // Размеры метки.
	              iconImageSize: [36, 54]
	            });
	            myMap.geoObjects.add(myPlacemark);
	            myMap.behaviors.disable('scrollZoom');
	          }
	        })
	      } catch(e) {
	        console.log(e);
	      }     
	    }
	  }
	  contactsMap();
	}($));
	function dataSlider() {
	  $('.js-data-slider').slick({
	    arrows: true,
	    prevArrow: '<button type="button" class="slick-prev">Позже</button>',
	    nextArrow: '<button type="button" class="slick-next">Раньше</button>',
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    responsive: [
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }
	    ]
	  })
	  function slideDataHeight() {
	    $('.js-height').matchHeight({
	      byRow: true,
	      property: 'height',
	      target: null,
	      remove: false
	    });
	  }
	  slideDataHeight(); 
	  $(window).on('resize', slideDataHeight);
	}
	dataSlider();
	function descrSlider(){		$('.js-descr-slider').each(function() {			$(this).slick({				slidesToShow: 1,				slidesToScroll: 1,				dots: true,				responsive: [					{						breakpoint: 768,						settings: {						}					}				]			});		})		function curentSlider() {			var lengthDots = $('.js-descr-slider').find('.slick-dots li').length;			$('.js-descr-all').text(lengthDots);			$('.js-descr-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {				var activeCount = $('.js-descr-slider').find('.slick-dots li').index($('.js-descr-slider').find('.slick-dots li.slick-active'));				$('.js-descr-count').text(activeCount + 1);			});		}		curentSlider();		$(window).on('resize', curentSlider);	}	descrSlider();	function documentsSlider() {
	  $('.js-doc-slider').slick({
	    dots: true,
	    infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 4,
	    responsive: [
	      {
	        breakpoint: 1024,
	        settings: {
	          slidesToShow: 3,
	          slidesToScroll: 3
	        }
	      },
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	          variableWidth: true
	        }
	      }
	    ]
	  })
	  function curentSlider() {
	    var lengthDots = $('.js-doc-slider').find('.slick-dots li').length;
	    $('.js-doc-all').text(lengthDots);
	    $('.js-doc-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	      var activeCount = $('.js-doc-slider').find('.slick-dots li').index($('.js-doc-slider').find('.slick-dots li.slick-active'));
	      $('.js-doc-count').text(activeCount + 1);
	    });
	  }
	  curentSlider();
	  $(window).on('resize', curentSlider);
	}
	documentsSlider();
	function filterAccordeon() {
	  var wrap = $('.js-filter-wrap');
	  if(wrap.length) {
	    var btn = $('.js-filter-btn'),
	        content = $('.js-filter-content');
	    btn.on('click', function(e) {
	      $(this).closest(wrap).find(content).slideToggle();
	      $(this).toggleClass('show');
	      if($(this).hasClass('show')){
	        $(this).text('Меньше фильтров');
	      }
	      else {
	        $(this).text('Больше фильтров');
	      }
	    })
	  }
	  if(wrap.length) {
	    var btn = $('.js-filter-btn-mob'),
	        content = $('.js-filter-content');
	    btn.on('click', function(e) {
	      $(this).closest(wrap).find(content).slideToggle();
	      $(this).toggleClass('show');
	      if($(this).hasClass('show')){
	        $(this).text('Меньше');
	      }
	      else {
	        $(this).text('Больше');
	      }
	    })
	  }
	}
	filterAccordeon();
	function multipleSelect() {
	  $('.multiple-select').each(function() {
	    var self = this;
	    var $select = $(self).find('.js-multi-select');
	    $select.select2({
	      dropdownParent: $(self),
	      closeOnSelect: false,
	      templateResult: function(state) {
	        if (!$(state.element).data('num')) {
	          return state.text
	        } else {
	          var num = $(state.element).data('num');
	          var $state = $(
	            '<span>' + state.text + '<span class="multiple-select__num">' + num + '</span>' + '</span>'
	          );
	          return $state
	        }
	      }
	    });
	  });
	}
	multipleSelect();
	function multipleSelectLink() {
	  $('.multiple-select').each(function() {
	    var self = this;
	    var $select = $(self).find('.js-multi-select-link');
	    $select.select2({
	      dropdownParent: $(self),
	      closeOnSelect: false,
	      templateResult: function(state) {
	        if (!$(state.element).data('num')) {
	          return state.text
	        } else {
	          var num = $(state.element).data('num');
	          var $state = $(
	            '<span>' + state.text + '<span class="multiple-select__num">' + num + '</span>' + '</span>'
	          );
	          return $state
	        }
	      }
	    });
	    $select.on('select2:open', function() {
	      $('.select2-results').append('<a href="#" class="filter__drop-link">Еще</a>');
	    })
	  });
	}
	multipleSelectLink();
	function filterMobAcc() {
	  var wrap = $('.js-filter-wrap');
	  if(wrap.length) {
	    var btn = $('.js-mob-filter'),
	        content = $('.js-mob-content');
	    btn.on('click', function(e) {
	      $(this).closest(wrap).find(content).slideToggle();
	      $(this).toggleClass('show');
	    })
	  }
	}
	filterMobAcc();
	function scrollFixed() {		$(window).on('scroll', function() {			var scroll = window.pageYOffset || document.documentElement.scrollTop;			var positionFooter = $('.footer').offset();			if (scroll > 500) {				$('.js-fixed-item').addClass('active');			} else {				$('.js-fixed-item').removeClass('active');			}			if (scroll > positionFooter.top - $(window).height()) {				$('.js-fixed-item').removeClass('active');			} 		})	}	scrollFixed();
	;(function() {
	  function masonryGrid() {
	    var $grid = $('.js-grid');
	      $grid.masonry({
	        itemSelector: '.grid-item',
	        columnWidth: '.grid-sizer',
	        percentPosition: true
	      });
	  }
	  masonryGrid();
	  function gridSlider() {
	    $('.js-grid-slider').slick({
	      dots: true,
	      infinite: true,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      speed: 800,
	      autoplaySpeed: 4000,
	      autoplay: true,
	      prevArrow: $('.prev-slide'),
	      nextArrow: $('.next-slide')
	    })
	    function curentSlider() {
	      var lengthDots = $('.js-grid-slider').find('.slick-dots li').length;
	      $('.js-grid-all').text(lengthDots);
	      $('.js-grid-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        var activeCount = $('.js-grid-slider').find('.slick-dots li').index($('.js-grid-slider').find('.slick-dots li.slick-active'));
	        $('.js-grid-count').text(activeCount + 1);
	      });
	    }
	    curentSlider();
	    $(window).on('resize', curentSlider);
	  }
	  gridSlider();
	})();
	(function () {
	  var header = $('.header');
	  var wrapper = $('.wrapper');
	  var scrollDirection = '';
	  var previous = window.scrollY;
	  window.addEventListener('scroll', function () {
	    window.scrollY > previous ? scrollDirection = 'DOWN' : scrollDirection = 'UP';
	    previous = window.scrollY;
	  });
	  if (header.length) {
	    let navList = [];
	    setTimeout(function () {
	      $('.js-header-nav .js-main-nav li').each(function (i, el) {
	        var element = $(el);
	        navList.push({
	          width: element.innerWidth(),
	          dom: element.detach()
	        })
	      });
	      loadNav(navList, true);
	      fixWrapperHeight();
	      scrollHeader();
	    }, 200);
	    $(window).on('resize', function () {
	      loadNav(navList);
	      fixWrapperHeight();
	    });
	    $(window).on('scroll', scrollHeader);
	    hoverNav();
	    toggleMobNav();
	    triggerMobNav();
	  }
	  function fixWrapperHeight() {
	    wrapper.css('padding-top', isMobile() ? 116 : 191);
	  }
	  function scrollHeader() {
	    var scroll = window.pageYOffset || document.documentElement.scrollTop;
	    if (isMobile()) {
	      if (scroll > 120) {
	        if (scrollDirection === 'DOWN') {
	          header.slideUp(200);
	        }
	        if (scrollDirection === 'UP') {
	          header.slideDown(200);
	        }
	      } else {
	        header.slideDown(200);
	      }
	    } else {
	      if (scroll > 90) {
	        header.addClass('fixed');
	      } else {
	        header.removeClass('fixed');
	      }
	    }
	  }
	  function hoverNav() {
	    let hoverTrigger = $('.js-nav-hover');
	    var nav = $('.js-header-nav');
	    hoverTrigger.hover(function () {
	      if (!isMobile()) {
	        if ($('.js-header-nav .js-sub-nav li').length) {
	          nav.addClass('sub-is-shown');
	          $(this).addClass('hover');
	        }
	      }
	    }, null);
	    nav.hover(null, function () {
	      if (!isMobile()) {
	        nav.removeClass('sub-is-shown');
	        hoverTrigger.removeClass('hover');
	      }
	    });
	    hoverTrigger.on('click', function (e) {
	      e.preventDefault();
	      if (isMobile()) {
	        $(this).toggleClass('opened');
	        nav.toggleClass('menu-is-opened');
	        if ($(this).hasClass('opened')) {
	          lockScroll(true);
	        } else {
	          lockScroll(false);
	        }
	      }
	    })
	  }
	  function loadNav(data, onLoad) {
	    var nav = $('.js-header-nav');
	    var main = nav.find('.js-main-nav');
	    var mainLi = main.find('li');
	    var sub = nav.find('.js-sub-nav');
	    var listWidth = main.innerWidth();
	    var allListWidth = 0;
	    var allListWidthBeforeOverflow = 0;
	    if (!isMobile()) {
	      $('.header-nav__list').css('display', 'flex');
	      data.forEach(function (el) {
	        let element = $(el.dom);
	        allListWidth += el.width;
	        if (allListWidth + 30 <= listWidth) {
	          main.append(element)
	        } else {
	          sub.append(element)
	        }
	      });
	      if (onLoad) {
	        setTimeout(function () {
	          mainLi = main.find('li');
	          mainLi.each(function (i, el) {
	            allListWidthBeforeOverflow += $(el).innerWidth();
	          });
	          sub.css('padding-right', listWidth - allListWidthBeforeOverflow + 57 - 15);
	        }, 100)
	      } else {
	        mainLi.each(function (i, el) {
	          allListWidthBeforeOverflow += $(el).innerWidth();
	        });
	        sub.css('padding-right', listWidth - allListWidthBeforeOverflow + 57 - 15);
	      }
	    } else {
	      $('.header-nav__list').css('display', 'none')
	    }
	  }
	  function toggleMobNav() {
	    $('.header-nav__title').on('click', function (e) {
	      if (isMobile()) {
	        var nav = $('.js-header-nav');
	        e.preventDefault();
	        nav.addClass('nav-is-opened');
	        lockScroll(true);
	      }
	    });
	    $('.js-close-mob-nav').on('click', function (e) {
	      if (isMobile()) {
	        var nav = $('.js-header-nav');
	        e.preventDefault();
	        nav.removeClass('nav-is-opened');
	        lockScroll(false);
	      }
	    })
	  }
	  function triggerMobNav() {
	    var mobNavBody = $('.js-mob-nav-body');
	    var mobNavMain = $('.js-mob-nav-list-main');
	    var mobNavItem = $('.js-mob-nav-list-item');
	    var mobNavTitle = $('.js-mob-nav-title');
	    //show sublist
	    mobNavItem.on('click', function () {
	      var text = $(this).find('.header-nav__list-link').eq(0).text();
	      var subList = $(this).find('.header-mob-nav__list');
	      var bodySubList = mobNavBody.find('.sublist');
	      if (subList.length) {
	        var clone = subList.eq(0).clone().addClass('sublist');
	        mobNavTitle.text(text).addClass('is-back');
	        if (bodySubList.length) {
	          bodySubList.detach();
	        }
	        mobNavMain.addClass('hidden');
	        mobNavBody.append(clone);
	        //add click event on new cloned elements
	        clone.find('.js-mob-nav-list-item')
	          .on('click', function () {
	            var text = $(this).find('.header-nav__list-link').eq(0).text();
	            var subList = $(this).find('.header-mob-nav__list');
	            var bodySubList = mobNavBody.find('.sublist');
	            if (subList.length) {
	              mobNavTitle.text(text).addClass('is-back');
	              if (bodySubList.length) {
	                bodySubList.detach();
	              }
	              mobNavMain.addClass('hidden');
	              mobNavBody.append(subList.eq(0).clone().addClass('sublist'))
	            }
	          });
	      }
	    });
	    //close sublist
	    mobNavTitle.on('click', function (e) {
	      e.preventDefault();
	      var defaultText = $(this).attr('data-default');
	      var bodySubList = mobNavBody.find('.sublist');
	      if (bodySubList.length) {
	        bodySubList.detach();
	      }
	      mobNavMain.removeClass('hidden');
	      $(this).removeClass('is-back').text(defaultText);
	    })
	  }
	}());
	function sliderHeading() {		$('.js-heading-slider').slick({			dots: true,			infinite: true,			slidesToShow: 1,			slidesToScroll: 1,			fade: true,			speed: 1000,			autoplaySpeed: 8000,			autoplay: true,			prevArrow: $('.prev-slide'),			nextArrow: $('.next-slide'),			responsive: [				{					breakpoint: 1024,					settings: {						slidesToShow: 1,						slidesToScroll: 1					}				}			]		})		function curentSlider() {			var lengthDots = $('.js-heading-slider').find('.slick-dots li').length;			$('.js-heading-all').text(lengthDots);			$('.js-heading-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {				var activeCount = $('.js-heading-slider').find('.slick-dots li').index($('.js-heading-slider').find('.slick-dots li.slick-active'));				$('.js-heading-count').text(activeCount + 1);			});		}		curentSlider();		$(window).on('resize', curentSlider);	}	sliderHeading();	function infoSlider() {
	  $('.js-info-slider').slick({
	    dots: true,
	    infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    responsive: [
	      {
	        breakpoint: 1024,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 2
	        }
	      },
	      {
	        breakpoint: 640,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      }
	    ]
	  })
	  function curentSlider() {
	    var lengthDots = $('.js-info-slider').find('.slick-dots li').length;
	    $('.js-info-all').text(lengthDots);
	    $('.js-info-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	      var activeCount = $('.js-info-slider').find('.slick-dots li').index($('.js-info-slider').find('.slick-dots li.slick-active'));
	      $('.js-info-count').text(activeCount + 1);
	    });
	  }
	  curentSlider();
	  $(window).on('resize', curentSlider);
	}
	infoSlider();
	$('[data-fancybox]').fancybox({
	      hideScrollbar: true,
	      touch: false,
	      afterLoad: function() {
	        function popupSlider() {
	          $('.js-popup-slider').slick({
	            dots: true,
	            slidesToShow: 3,
	            slidesToScroll: 3,
	            responsive: [
	              {
	                breakpoint: 1024,
	                settings: {
	                  slidesToShow: 2,
	                  slidesToScroll: 1
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
	          })
	          function curentSlider() {
	            var lengthDots = $('.js-popup-slider').find('.slick-dots li').length;
	            $('.js-popup-all').text(lengthDots);
	            $('.js-popup-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	              var activeCount = $('.js-popup-slider').find('.slick-dots li').index($('.js-popup-slider').find('.slick-dots li.slick-active'));
	              $('.js-popup-count').text(activeCount + 1);
	            });
	          }
	          curentSlider();
	          function popupSlideHeight() {
	            $('.js-height').matchHeight({
	              byRow: true,
	              property: 'height',
	              target: null,
	              remove: false
	            });
	          }
	          popupSlideHeight(); 
	          $(window).on('resize', curentSlider, popupSlideHeight);
	        }
	        popupSlider();
	      },
	      afterClose: function() {
	        $('.js-popup-slider').slick('unslick');
	      }
	  });
	function productSlider(){		$('.js-product-slider').each(function() {			$(this).slick({				slidesToShow: 1,				slidesToScroll: 1,				dots: true,				responsive: [					{						breakpoint: 768,						settings: {						}					}				]			});		})		function curentSlider() {			var lengthDots = $('.js-product-slider').find('.slick-dots li').length;			$('.js-product-all').text(lengthDots);			$('.js-product-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {				var activeCount = $('.js-product-slider').find('.slick-dots li').index($('.js-product-slider').find('.slick-dots li.slick-active'));				$('.js-product-count').text(activeCount + 1);			});		}		curentSlider();		$(window).on('resize', curentSlider);	}	productSlider();	function toggleActive() {		$('.js-toggle-active').each(function() {			$(this).on('click', function() {				var textToggle = $(this).data('text');				var textNew = $(this).data('new');				$(this).toggleClass('active');				if ($(this).hasClass('active')) {					$(this).find('.js-toggle-text').text(textNew);				} else {					$(this).find('.js-toggle-text').text(textToggle);				}			})		})	}	toggleActive();
	function passAccordeon() {
	  var wrap = $('.js-acc-wrap');
	  if(wrap.length) {
	    var btn = $('.js-acc-btn'),
	        content = $('.js-acc-content');
	    btn.on('click', function(e) {
	      $(this).closest(wrap).find(content).slideToggle();
	      $(this).toggleClass('active');
	    })
	  }
	}
	passAccordeon();
	function sliderReviews() {		$('.js-reviews-slider').slick({			dots: false,			infinite: false,			slidesToShow: 1,			slidesToScroll: 1,			responsive: [			]		})	}	sliderReviews();
	function stockSlider() {		var flag = false;		function init() {			if (window.innerWidth < 768) {				if (!flag) {					$('.js-stock-slider').slick({						slidesToShow: 2,						slidesToScroll: 2,						dots: true,						responsive: [							{								breakpoint: 550,								settings: {									slidesToShow: 1,									slidesToScroll: 1								}							}						]					});				}				flag = true;			} 			else {				if (flag) {					$('.js-stock-slider').slick('unslick');					flag = false;				}			}			function curentSlider() {				var lengthDots = $('.js-stock-slider').find('.slick-dots li').length;				$('.js-stock-all').text(lengthDots);				$('.js-stock-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {					var activeCount = $('.js-stock-slider').find('.slick-dots li').index($('.js-stock-slider').find('.slick-dots li.slick-active'));					$('.js-stock-count').text(activeCount + 1);				});			}			curentSlider();			$(window).on('resize', curentSlider);		}		if ($('.js-stock-slider').length) {			init();			$(window).on('resize', init);		}	}	stockSlider();
	function themeSlider() {
	  $('.js-themes-slider').slick({
	    dots: true,
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    responsive: [
	      {
	        breakpoint: 1024,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1
	        }
	      },
	      {
	        breakpoint: 640,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }
	    ]
	  })
	  function curentSlider() {
	    var lengthDots = $('.js-themes-slider').find('.slick-dots li').length;
	    $('.js-themes-all').text(lengthDots);
	    $('.js-themes-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	      var activeCount = $('.js-themes-slider').find('.slick-dots li').index($('.js-themes-slider').find('.slick-dots li.slick-active'));
	      $('.js-themes-count').text(activeCount + 1);
	    });
	  }
	  curentSlider();
	  function slideHeight() {
	    $('.js-height').matchHeight({
	      byRow: true,
	      property: 'height',
	      target: null,
	      remove: false
	    });
	  }
	  slideHeight(); 
	  $(window).on('resize', curentSlider, slideHeight);
	}
	themeSlider();
	(function () {
	  var options = {
	    speed: 200
	  };
	  var city = $('.js-tooltip-city');
	  var basket = $('.js-basket-tooltip');
	  var like = $('.js-like-tooltip');
	  var compare = $('.js-compare-tooltip');
	  if (city.length) {
	    var trigger = $('.js-tooltip-city-trigger');
	    var drop = $('.js-tooltip-city-drop');
	    var search = $('.js-tooltip-city-search');
	    var notFound = $('.js-tooltip-city-search-not-found');
	    var item = $('.tooltip-city__result-item');
	    item.on('click', function () {
	      trigger.text($(this).text());
	      drop.hide();
	    });
	    search.on('keyup', function (e) {
	      var parent = $(this).closest(city);
	      var value = e.target.value.toLowerCase();
	      var match = false;     
	      parent.find(item).each(function (i, el) {
	        var text = $(el).text().toLowerCase();
	        if(text.indexOf(value) !== -1 && value) {
	          match = true;
	          $(el).addClass('shown')
	        } else {
	          $(el).removeClass('shown')
	        }        
	      });
	      if(!match) {
	        notFound.show();
	      } else {
	        notFound.hide();
	      }
	    });
	    trigger.on('click', function (e) {
	      e.preventDefault();
	      var parent = $(this).closest(city);
	      parent.find(drop).show();
	      parent.find(search).focus();
	    });
	    $(document).on('click', function (e) {      
	      if($(e.target).closest(city).length) return;
	      drop.hide();
	    })
	  }
	  if(basket.length) {
	    var remove = basket.find('.js-tooltip-remover');
	    testBasketLength(basket);
	    remove.on('click', function (e) {
	      e.preventDefault();
	      let thisItem = $(this).closest('.tooltip__item');     
	      thisItem.detach();
	      testBasketLength(basket);
	    })
	  }
	  if(like.length) {
	    var removeLike = like.find('.js-tooltip-remover');
	    testBasketLength(like);
	    removeLike.on('click', function (e) {
	      e.preventDefault();
	      let thisItem = $(this).closest('.tooltip__item');
	      thisItem.detach();
	      testBasketLength(like);
	    })
	  }
	  if(compare.length) {
	    var removeCompare = compare.find('.js-tooltip-remover');
	    var clearCompare = compare.find('.js-compare-clear');
	    testBasketLength(compare);
	    removeCompare.on('click', function (e) {
	      e.preventDefault();
	      let thisItem = $(this).closest('.tooltip__item');
	      thisItem.detach();
	      testBasketLength(compare);
	    });
	    clearCompare.on('click', function (e) {
	      e.preventDefault();
	      compare.find('.tooltip__item').detach();
	      testBasketLength(compare);
	    })
	  }
	  function testBasketLength(container) {
	    var itemCount = container.find('.tooltip__item').length;
	    var noElem = container.find('.tooltip__no');
	    if(itemCount === 0) {
	      container.addClass('empty');
	      noElem.addClass('shown')
	    } else {
	      container.removeClass('empty');
	      noElem.removeClass('shown')
	    }
	  }
	})();
	//---------------------------------------//	// Подключаем основные скрипты ( develop )	//---------------------------------------//	;(function($) { 
		function inputSize() {
			if ($('.js-input-size').length) {
				$('.js-input-size').find('input, textarea').on('change', function(){
					if (!!$(this).val()) {
						$(this).addClass('change')
					} else {
						$(this).removeClass('change')
					}
				})
			}
		}
		inputSize();
		function inputMask() {
			$('.phone').mask('+7 (999) 999-99-99');
		}
		inputMask();
		function toggleFavorites() {
			$('.js-toggle-favorites').on('click', function(e) {
				e.preventDefault();
				$(this).toggleClass('active');
			})
		}
		toggleFavorites();
		if ($('.js-height').length) {
			$('.js-height').matchHeight({
				byRow: true,
				property: 'height',
				target: null,
				remove: false
			});
		}
		function heightCaption(nameClass) {
			$(nameClass).matchHeight({
				byRow: true,
				property: 'height',
				target: null,
				remove: false
			});
		}
		setTimeout(function() {
			heightCaption('.js-name');
			heightCaption('.js-brand');
			heightCaption('.js-title-name');
			heightCaption('.js-address-descr');
			heightCaption('.js-descr');
			$(window).on('resize', function() {
				heightCaption('.js-name');
				heightCaption('.js-brand');
				heightCaption('.js-title-name');
				heightCaption('.js-address-descr');
				heightCaption('.js-descr');
			})
		}, 200);
		heightCaption('.js-compare-combined');
		heightCaption('.js-compare-name');
		heightCaption('.js-compare-region');
		$('.js-select').each(function() {
	    var parent = $(this).closest('.js-select-wrap');
			$(this).selectmenu({
				appendTo: parent
			});
		});
	  $('.js-custom-scroll').mCustomScrollbar();
	  function formValid() {
	    $('form').each(function() {
	      $(this).validate({
	        errorPlacement: function(error,element) {
	          return true;
	        },
	        submitHandler: function(form) {
	          $(form).ajaxSubmit();
	        }
	      });
	    });
	  }
	  formValid();
	}($));
    autoFooter();
});
$(window).on('resize', function() {
  autoFooter();
});
