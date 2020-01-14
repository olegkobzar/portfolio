function preloader() {
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
	$('.js-custom-scroll').mCustomScrollbar({
	function toggleTableDescr() {
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
	;(function(){
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
	function autoFooter() {
	;(function() {
	$('.js-slider-photo').slick({
	function toggleDescription() {
	;(function(){
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
	//---------------------------------------//
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