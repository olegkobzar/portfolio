function preloader() {
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
	function toggleDroppCheck() {
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
	function profileSlider(){
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
	function toggleCard() {
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