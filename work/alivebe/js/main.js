function preloader() {	if ($('#preloader').length) {		setTimeout(function() {			$('#preloader').fadeOut('slow', function() {				$('body').removeClass('overflow-hidden').css('padding', '');			});		}, 1000);	}}$(window).on('load', preloader);//---------------------------------------//// Подключаем набор написаных скриптов (requare/developRequare.js)//---------------------------------------//// выполняем их после того, как DOM построится $(document).ready(function() {	 $.reject({  	//	header: 'Your browser is not supported here', // Header Text  	//	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1  	//	paragraph2: 'Please install one of the many optional browsers below to proceed',  	//	closeMessage: 'Close this window at your own demise!' // Message below close window link  		 reject: { 			all: false,			msie: 9,			chrome: 40,			firefox: 30,			safari4: 4		}, 		display: [], // What browsers to display and their order (default set below)		browserShow: true, // Should the browser options be shown?		browserInfo: { // Settings for which browsers to display			chrome: {				// Text below the icon				text: 'Google Chrome',				// URL For icon/text link				url: 'http://www.google.com/chrome/'				// (Optional) Use "allow" to customized when to show this option				// Example: to show chrome only for IE users				// allow: { all: false, msie: true }			},			firefox: {				text: 'Mozilla Firefox',				url: 'http://www.mozilla.com/firefox/'			},			safari: {				text: 'Safari',				url: 'http://www.apple.com/safari/download/'			},			opera: {				text: 'Opera',				url: 'http://www.opera.com/download/'			},			msie: {				text: 'Microsoft Edge',				url: 'http://www.microsoft.com/'			}		},		// Pop-up Window Text		header: 'Did you know that your Internet Browser is out of date?',		paragraph1: 'Your browser is out of date, and may not be compatible with '+					'our website. A list of the most popular web browsers can be '+					'found below.',		paragraph2: 'Just click on the icons to get to the download page',		// Allow closing of window		close: true,		// Message displayed below closing link		closeMessage: 'By closing this window you acknowledge that your experience '+						'on this website may be degraded',		closeLink: 'Close This Window',		closeURL: '#',		// Allows closing of window with esc key		closeESC: true,		// Use cookies to remmember if window was closed previously?		closeCookie: false,		// Cookie settings are only used if closeCookie is true		cookieSettings: {			// Path for the cookie to be saved on			// Should be root domain in most cases			path: '/',			// Expiration Date (in seconds)			// 0 (default) means it ends with the current session			expires: 0		},		// Path where images are located		imagePath: './img/browsers/',		// Background color for overlay		overlayBgColor: '#000',		// Background transparency (0-1)		overlayOpacity: 0.8,		// Fade in time on open ('slow','medium','fast' or integer in ms)		fadeInTime: 'fast',		// Fade out time on close ('slow','medium','fast' or integer in ms)		fadeOutTime: 'fast',		// Google Analytics Link Tracking (Optional)		// Set to true to enable		// Note: Analytics tracking code must be added separately		analytics: false	}); 	//---------------------------------------//	// Подключаем скрипты компонентов страниц ( modules )	//---------------------------------------//	function supportMob(){		var flag = false;		function init() {			if (window.innerWidth < 1024) {				if (!flag) {					var $slickSupport = $('.js-descr-slider');					$slickSupport.slick({						slidesToShow: 3,						dots: false,						responsive: [							{								breakpoint: 768,								settings: {									slidesToShow: 2								}							},							{								breakpoint: 600,								settings: {									slidesToShow: 1								}							}						]					});				}				flag = true;			} 			else {				if (flag) {					$('.js-descr-slider').slick('unslick');					flag = false;				}			}		}		if ($('.js-descr-slider').length) {			init();			$(window).on('resize', init);		}	}	supportMob();
	function clubsInfo(){
	  var flag = false;
	  function init() {
	    if (window.innerWidth < 768) {
	      if (!flag) {
	        var $slickSupport = $('.js-clubs-info');
	        $slickSupport.slick({
	          slidesToShow: 3,
	          dots: false,
	          responsive: [
	            {
	              breakpoint: 479,
	              settings: {
	                slidesToShow: 2
	              }
	            }
	          ]
	        });
	      }
	      flag = true;
	    } 
	    else {
	      if (flag) {
	        $('.js-clubs-info').slick('unslick');
	        flag = false;
	      }
	    }
	  }
	  if ($('.js-clubs-info').length) {
	    init();
	    $(window).on('resize', init);
	  }
	}
	clubsInfo();
	function toggleDroppCheck() {		$('.js-dropp-check').on('click', function() {			$(this).toggleClass('active');			$(this).closest('.js-wrapp-category').toggleClass('active');			$(this).closest('.js-wrapp-category').find('.js-toggle-list').slideToggle('.js-toggle-list');		})		$('.js-checked-all').change(function() {			var inpAll = $(this).closest('.js-wrapp-category').find('input[type="checkbox"]');			if ($(this).is(':checked')) {				inpAll.attr('checked', true)			} else {				inpAll.removeAttr('checked')			}		}) 	}	toggleDroppCheck();
	(function () {
	    var footer = $('.js-footer');
	    function autoFooter() {
	        if ($('.js-footer').length) {
	            var wrapper = $('.wrapper');
	            var footerHeight = footer.outerHeight();
	            footer.css('margin-top', -footerHeight);
	            wrapper.css('padding-bottom', footerHeight);
	        }
	    }
	    setTimeout(autoFooter, 100);
	    $(window).on('resize', autoFooter);
	})();
	  function footerDrop() {
	    var wrap = $('.js-footer-menu');
	    if(wrap.length) {
	      var link = $('.js-footer-link');
	      link.on('click', function (e) {
	        e.preventDefault();
	        var parent = $('.js-footer-parent');
	        var drop = $('.js-footer-drop');
	        parent.toggleClass('show');
	        drop.slideToggle(200);
	      })
	    }
	  }
	  footerDrop();
	  function footerSubDrop() {
	      var link = $('.js-sub-link');
	      link.on('click', function (e) {
	        e.preventDefault();
	        var parent = $('.js-sub-parent');
	        var drop = $('.js-sub-drop');
	        parent.toggleClass('show');
	        drop.slideToggle(200);
	      })
	    }
	  footerSubDrop();
	(function() {
	  function dropMenu() {
	    var wrap = $('.js-menu-wrap');
	    if(wrap.length) {
	      wrap.each(function () {
	        var link = $('.js-menu-link');
	        link.on('click', function (e) {
	          e.preventDefault();
	          var self = $(this);
	          var parent = self.closest('.js-menu-parent');
	          var drop = parent.find('.js-menu-drop');
	          var isOpened = parent.hasClass('show');
	          if (isOpened) {
	              parent.removeClass('show');
	              drop.slideUp(200);
	          } else {
	              $('.js-menu-parent').removeClass('show');
	              $('.js-menu-drop').slideUp(200);
	              parent.addClass('show');
	              drop.slideDown(200);
	          }
	        })
	        $(document).on('click', function(e) {
	          if (!$(e.target).closest('.js-menu-parent').length) {
	            $('.js-menu-parent').removeClass('show');
	            $('.js-menu-drop').slideUp(200);
	          }
	        })
	      })
	    }
	  }
	  dropMenu();
	  function headerSearch() {
	    var $open = $('.js-search-btn'),
	        $search = $('.js-header-search'),
	        $close = $('.js-search-close');
	        $open.on('click', function() {
	          $search.addClass('active');
	        })
	        $close.on('click', function() {
	          $search.removeClass('active');
	        })
	  }
	  headerSearch();
	}());
	function profileSlider(){		var flag = false;		function init() {			if (window.innerWidth < 768) {				if (!flag) {					var $slickSupport = $('.js-slider-profile');					$slickSupport.slick({						slidesToShow: 3,						dots: false,						responsive: [							{								breakpoint: 550,								settings: {									slidesToShow: 2								}							}						]					});				}				flag = true;			} 			else {				if (flag) {					$('.js-slider-profile').slick('unslick');					flag = false;				}			}		}		if ($('.js-slider-profile').length) {			init();			$(window).on('resize', init);		}	}	profileSlider();
	function settingsMore() {
	  var wrap = $('.js-social-wrap');
	  if(wrap.length) {
	    var btn = $('.js-social-btn'),
	        content = $('.js-social-content'),
	        text = $('.js-social-text');
	    btn.on('click', function(e) {
	      $(this).closest(wrap).find(content).slideToggle();
	      $(this).toggleClass('show');
	      if($(this).hasClass('show')){
	        text.text('Скрыть');
	      } else {
	        text.text('Показать все');
	      }
	    })
	  }
	}
	settingsMore();
	(function () {
	  var touTitle = $('.tou-s-item__title');
	  if (touTitle.length) {
	    touTitle.each(function (i, el) {
	      var titleElementText = $(el).text();
	      $(el).closest('.tou-s-item').find('.tou-s-item__title-mob').text(titleElementText)
	      //titleElement.clone().appendTo(titleElement.closest('.tou-s-item').find('.tou-s-item__title-mob'))
	    })
	  }
	})();
	function toggleCard() {		$('.js-toggle-card').on('click', function() {			$(this).closest('.js-card').toggleClass('active');		})	}	toggleCard();	//---------------------------------------//	// Подключаем основные скрипты ( develop )	//---------------------------------------//	(function ($) {
	  //select
	  function select() {
	    var _dropdown;
	    var settings = {autoReinitialise: true};
	    $('.js-select').styler({
	      selectSearch: false,
	      onFormStyled: function () {
	        _dropdown = $('.jq-selectbox__dropdown');
	        _dropdown.find('ul').wrap('<div class="js-scroll" ></div>');
	      },
	      onSelectOpened: function () {
	        var _ul = $(this).find('.jq-selectbox__dropdown ul');
	        var height = _ul.height();
	        var _customScroll = _dropdown.find('.js-scroll');
	        _customScroll.height(height);
	        _ul.css('max-height', 'none');
	        _customScroll.mCustomScrollbar(settings);
	      }
	    });
	  }
	  select();
	  //customScroll
	  $('.js-scroll').mCustomScrollbar({
	    axis:"y" 
	  });
	  //tabs
	  $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	    $(this)
	    .addClass('active').siblings().removeClass('active')
	    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });
	  //showPassword
	  function showPassword() {
	    if('.input-pass'.length) {
	      var btn = $('.js-view-btn'),
	      input = $('.js-input-pass');
	      btn.on('click', function() {
	        input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
	      })
	    }
	  }
	  showPassword();
	  //accordeon
	  function accordeon() {
	    var wrap = $('.js-accordeon-wrap');
	    if(wrap.length) {
	      var btn = $('.js-accordeon-btn'),
	      content = $('.js-accordeon-content');
	      btn.on('click', function(e) {
	        $(this).closest(wrap).find(content).slideToggle();
	        $(this).toggleClass('show');
	      })
	    }
	  }
	  accordeon();
	  function showFilterTablet() {
	    $('.js-filter-btn').on('click', function() {
	      $('.js-show-filter').addClass('active');
	      $('.header').addClass('active');
	      $('body').addClass('active');
	    })
	    $('.js-close-filter').on('click', function() {
	      $('.js-show-filter').removeClass('active');
	      $('.header').removeClass('active');
	      $('body').removeClass('active');
	    })
	  }
	  showFilterTablet();
	  function droppCheckbox() {
	    $('.js-dropp-btn').each(function() {
	      var self = this;
	      var $checkbox = $(self).closest('.js-select-checkbox');
	      $(self).on('click', function() {
	        $checkbox.toggleClass('active');
	      })
	      $(document).on('click', function(e){
	        if (!$(e.target).closest($checkbox).length) {
	          $checkbox.removeClass('active');
	        }
	      })
	    })
	  }
	  droppCheckbox();
	  //likes
	  function likes() {
	    if($('.js-like-trigger').length) {
	      var trigger = $('.js-like-trigger');
	      trigger.on('click', function (e) {
	        e.preventDefault();
	        var self = $(this);
	        var text = self.find('.js-like-num');
	        var quantity = +text.text();
	        self.toggleClass('filled');
	        if(self.hasClass('filled')) {
	          text.text(++quantity)
	        } else {
	          text.text(--quantity)
	        }
	      })    
	    }
	  }
	  likes();
	  //inputMask
	  function mask() {
	    if($('.js-mask-input').length) {
	      $('.js-mask-input').inputmask({"mask": "+7 (999) 999-99-99"});
	    }
	  }
	  mask();
	  //switchToggler
	  function switchToggler() {
	    var wrap = $('.js-switch-item');
	    if(wrap.length) {
	      wrap.each(function() {
	        var self = $(this),
	        checkbox = self.find('input[type="checkbox"]');
	        if (checkbox.is(':checked')) {
	          self.removeClass('not-checked')
	        } else {
	          self.addClass('not-checked')
	        }
	        checkbox.on('change', function() {
	          if ($(this).is(':checked')) {
	            self.removeClass('not-checked')
	          } else {
	            self.addClass('not-checked')
	          }
	        })
	      })    
	    }
	  }
	  switchToggler();
	  // plugin fullpage
	  function indexFullPage() {
	    $(document).ready(function() {
	      $('.js-full-page').fullpage({
	        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
	        menu: '.header-main, .footer-main',
	        fixedElements: '.main-popup',
	        touchSensitivity: 5,
	        navigation: true,
	        navigationPosition: 'right',
	        scrollOverflow: true,
	        onLeave: function (anchorLink, index) {
	          if ($(window).innerWidth() > 768) {
	            var activeIndex = index.index,
	              item = $('#fp-nav ul li');
	            if (activeIndex == 0) {
	              item.removeClass('active-item');
	              item.eq(0).addClass('active-item');
	              $('.js-footer-mouse').show();
	            } else if (activeIndex == 1) {
	              $('.js-footer-mouse').hide();
	              item.removeClass('active-item');
	              item.eq(0).addClass('active-item');
	              item.eq(1).addClass('active-item');
	            } else if (activeIndex == 2) {
	              item.removeClass('active-item');
	              item.eq(0).addClass('active-item');
	              item.eq(1).addClass('active-item');
	              item.eq(2).addClass('active-item');
	            } else if (activeIndex == 3) {
	              item.removeClass('active-item');
	              item.eq(0).addClass('active-item');
	              item.eq(1).addClass('active-item');
	              item.eq(2).addClass('active-item');
	              item.eq(3).addClass('active-item');
	            }
	          } else {
	            $('#fp-nav ul li').removeClass('active-item');
	          }     
	        }
	      });
	    });
	  }
	  indexFullPage();
	  // plugin modificationsfullpage
	  function addClassFullpage() {
	    $(window).on('load', function () {
	      $('#fp-nav ul li').eq(0).addClass('active-item');
	    });
	  }
	  addClassFullpage();
	  function indexTabs() {
	    var wrap = $('.js-tabs');
	    wrap.each(function() {
	      var self = $(this),
	        tab = self.find('.js-tab-link'),
	        content = self.find('.js-tab-content');
	      tab.on('click', function(e) {
	        e.preventDefault();
	        var href = $(this).attr('href');
	        tab.removeClass('active');
	        $(this).addClass('active');
	        content.removeClass('active');
	        $(href).addClass('active');
	      })
	    });
	  }
	  indexTabs();
	  function indexPopup() {
	    $('.js-main-popup-btn').on('click', function (e) {
	      e.preventDefault();
	      $.fn.fullpage.setAllowScrolling(false);
	      $('.js-main-popup').addClass('show');
	      $('.js-main-screen-desc').addClass('hide');
	      $('.js-main-reg').trigger('click');
	    });
	    $('.js-header-main').on('click', function (e) {
	      e.preventDefault();
	      $('.js-main-popup').addClass('show');
	      $('.js-main-screen-desc').addClass('hide');
	      $('.js-main-login').trigger('click');
	    });
	    $('.js-main-popup-close').on('click', function () {
	      $.fn.fullpage.setAllowScrolling(true)
	      $('.js-main-popup').removeClass('show');
	      $('.js-main-screen-desc').removeClass('hide');
	    });
	  }
	  indexPopup();
	}($));
})