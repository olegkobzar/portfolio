
function preloader() {
	if ($('#preloader').length) {
		setTimeout(function() {
			$('#preloader').fadeOut('slow', function() {
				$('body').removeClass('overflow-hidden').css('padding', '');
			});
		}, 1000);
	}
	
}

$(window).on('load', preloader);



//---------------------------------------//
// Подключаем набор написаных скриптов (requare/developRequare.js)
//---------------------------------------//

// выполняем их после того, как DOM построится 
$(document).ready(function() {
	 $.reject({  
		
		 
	//	header: 'Your browser is not supported here', // Header Text  
	//	paragraph1: 'You are currently using an unsupported browser', // Paragraph 1  
	//	paragraph2: 'Please install one of the many optional browsers below to proceed',  
	//	closeMessage: 'Close this window at your own demise!' // Message below close window link  
		 reject: { 
			all: false,
			msie: 9,
			chrome: 40,
			firefox: 30,
			safari4: 4
		}, 
		display: [], // What browsers to display and their order (default set below)
		browserShow: true, // Should the browser options be shown?
		browserInfo: { // Settings for which browsers to display
			chrome: {
				// Text below the icon
				text: 'Google Chrome',
				// URL For icon/text link
				url: 'http://www.google.com/chrome/'
				// (Optional) Use "allow" to customized when to show this option
				// Example: to show chrome only for IE users
				// allow: { all: false, msie: true }
			},
			firefox: {
				text: 'Mozilla Firefox',
				url: 'http://www.mozilla.com/firefox/'
			},
			safari: {
				text: 'Safari',
				url: 'http://www.apple.com/safari/download/'
			},
			opera: {
				text: 'Opera',
				url: 'http://www.opera.com/download/'
			},
			msie: {
				text: 'Microsoft Edge',
				url: 'http://www.microsoft.com/'
			}
		},
	
		// Pop-up Window Text
		header: 'Did you know that your Internet Browser is out of date?',
	
		paragraph1: 'Your browser is out of date, and may not be compatible with '+
					'our website. A list of the most popular web browsers can be '+
					'found below.',
	
		paragraph2: 'Just click on the icons to get to the download page',
	
		// Allow closing of window
		close: true,
	
		// Message displayed below closing link
		closeMessage: 'By closing this window you acknowledge that your experience '+
						'on this website may be degraded',
		closeLink: 'Close This Window',
		closeURL: '#',
	
		// Allows closing of window with esc key
		closeESC: true,
	
		// Use cookies to remmember if window was closed previously?
		closeCookie: false,
		// Cookie settings are only used if closeCookie is true
		cookieSettings: {
			// Path for the cookie to be saved on
			// Should be root domain in most cases
			path: '/',
			// Expiration Date (in seconds)
			// 0 (default) means it ends with the current session
			expires: 0
		},
	
		// Path where images are located
		imagePath: './img/browsers/',
		// Background color for overlay
		overlayBgColor: '#000',
		// Background transparency (0-1)
		overlayOpacity: 0.8,
	
		// Fade in time on open ('slow','medium','fast' or integer in ms)
		fadeInTime: 'fast',
		// Fade out time on close ('slow','medium','fast' or integer in ms)
		fadeOutTime: 'fast',
	
		// Google Analytics Link Tracking (Optional)
		// Set to true to enable
		// Note: Analytics tracking code must be added separately
		analytics: false
	}); 
	
	
	//---------------------------------------//
	// Подключаем скрипты компонентов страниц ( modules )
	//---------------------------------------//
	
	function showContentTable() {
	
		$('.js-acc-head').on('click', function() {
	
			$(this).closest('.js-acc-item').find('.js-acc-content').slideToggle();
	
			$(this).toggleClass('active');
	
		})
	
	}
	
	
	
	showContentTable();
	
	
	function gMap() {
	
		var map;
	
	
	
		var myOptions = {
	
			zoom: 16,
	
			center: new google.maps.LatLng(54.751275, 20.501512),
	
			mapTypeId: google.maps.MapTypeId.ROADMAP
	
		}
	
	
	
		map = new google.maps.Map(document.getElementById("map"),
	
			myOptions);
	
	
	
		var infowindow = new google.maps.InfoWindow({
	
			content: '<span class="map-head">г.Калининград,</span> <span class="map-head">ул.Горького - 174, 27</span>',
	
		});
	
	
	
		var uluru = {lat: 54.751275, lng: 20.501512};
	
	
	
		var marker = new google.maps.Marker(
	
			{
	
				position: uluru, 
	
				icon: 'pic/location.svg', 
	
				map: map,
	
				animation: google.maps.Animation.DROP
	
			});
	
	
	
		marker.addListener('click',function(){
	
			infowindow.open(map, marker);
	
		});
	
	
	
		var styledMapType=new google.maps.StyledMapType(
	
			[
	
			{
	
				"elementType": "geometry",
	
				"stylers": [
	
				{
	
					"color": "#333333"
	
				}
	
				]
	
			},
	
			{
	
				"elementType": "labels.icon",
	
				"stylers": [
	
				{
	
					"visibility": "off"
	
				}
	
				]
	
			},
	
			{
	
				"elementType": "labels.text.fill",
	
				"stylers": [
	
				{
	
					"color": "#757575"
	
				}
	
				]
	
			},
	
			{
	
				"elementType": "labels.text.stroke",
	
				"stylers": [
	
				{
	
					"color": "#212121"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "administrative",
	
				"elementType": "geometry",
	
				"stylers": [
	
				{
	
					"color": "#757575"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "administrative.country",
	
				"elementType": "labels.text.fill",
	
				"stylers": [
	
				{
	
					"color": "#9e9e9e"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "administrative.land_parcel",
	
				"stylers": [
	
				{
	
					"visibility": "off"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "administrative.locality",
	
				"elementType": "labels.text.fill",
	
				"stylers": [
	
				{
	
					"color": "#bdbdbd"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "poi",
	
				"elementType": "labels.text.fill",
	
				"stylers": [
	
				{
	
					"color": "#757575"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "poi.park",
	
				"elementType": "geometry",
	
				"stylers": [
	
				{
	
					"color": "#353535"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "poi.park",
	
				"elementType": "labels.text.fill",
	
				"stylers": [
	
				{
	
					"color": "#616161"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "poi.park",
	
				"elementType": "labels.text.stroke",
	
				"stylers": [
	
				{
	
					"color": "#1b1b1b"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "road",
	
				"elementType": "geometry.fill",
	
				"stylers": [
	
				{
	
					"color": "#282828"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "road",
	
				"elementType": "labels.text.fill",
	
				"stylers": [
	
				{
	
					"color": "#8a8a8a"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "road.arterial",
	
				"elementType": "geometry",
	
				"stylers": [
	
				{
	
					"color": "#575757"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "road.highway",
	
				"elementType": "geometry",
	
				"stylers": [
	
				{
	
					"color": "#3c3c3c"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "road.highway.controlled_access",
	
				"elementType": "geometry",
	
				"stylers": [
	
				{
	
					"color": "#4e4e4e"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "road.local",
	
				"elementType": "labels.text.fill",
	
				"stylers": [
	
				{
	
					"color": "#616161"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "transit",
	
				"elementType": "labels.text.fill",
	
				"stylers": [
	
				{
	
					"color": "#757575"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "water",
	
				"elementType": "geometry",
	
				"stylers": [
	
				{
	
					"color": "#2b2b2b"
	
				}
	
				]
	
			},
	
			{
	
				"featureType": "water",
	
				"elementType": "labels.text.fill",
	
				"stylers": [
	
				{
	
					"color": "#3d3d3d"
	
				}
	
				]
	
			}
	
			],
	
			{name:'Styled Map'}
	
			);
	
		map.mapTypes.set('styled_map', styledMapType);
	
		map.setMapTypeId('styled_map');
	
	}
	
	
	
	
	
	if (document.getElementById("map")) {
	
		gMap();
	
	}
	
	
	;(function() {
	
	
	
	//  opening / closing mobile menu
	
	  
	
		function togglerNav() {
	
	      
	
	    $('.js-nav-btn').on('click', function() {
	
	
	
	      $(this).toggleClass('active');
	
	
	
	      $('.js-nav-collapse').toggleClass('show');
	
	
	
	      $('body').toggleClass('hidden');
	
	
	
	    });
	
	    
	
	    $(document).on('click', function(e){
	
	      if (!$(e.target).closest('.js-nav-btn').length && !$(e.target).closest('.js-nav-collapse').length) {
	
	        $('.js-nav-btn').removeClass('active');
	
	        $('.js-nav-collapse').removeClass('show');
	
	        $('body').removeClass('hidden');
	
	        $('.header__nav-link').removeClass('active');
	
	      }
	
	    })
	
	    
	
	  }
	
	  
	
	  togglerNav();
	
	  
	
	  function mobileSubMenu() {
	
	    
	
	    var subnav = $(this).closest('.header__nav-item').find('.header__subnav'),
	
	        category = $(this).closest('.header__subnav-col').find('.header__subnav-list');
	
	      
	
	    $('.header__nav-link').on('click', function() {
	
	
	
	      if (subnav) {
	
	        $(this).closest('.header__nav-item').find('.header__subnav').slideToggle('slow');
	
	        $(this).closest('.header__nav-item').find('.header__nav-link').toggleClass('active');
	
	      }
	
	      
	
	    });
	
	    
	
	    $('.header__subnav-title').on('click', function() {
	
	      if ($(window).innerWidth() < 1023) {
	
	      
	
	        if (category) {
	
	
	
	          $(this).closest('.header__subnav-col').find('.header__subnav-list').slideToggle('slow');
	
	          $(this).closest('.header__subnav-col').find('.header__subnav-title').toggleClass('active');
	
	
	
	        }    
	
	      }
	
	      
	
	    });
	
	  }
	
	  
	
	  mobileSubMenu();
	
	  
	
	  $(window).on('resize', function() {
	
	    
	
	    if ($(window).innerWidth() > 1024) {
	
	      $('.header__subnav').removeAttr('style');
	
	      $('.header__subnav-list').removeAttr('style');
	
	    }
	
	    
	
	  });
	
	
	
	}())
	
	
	function objectSlider() {
	
		$('.js-object-slider-main').slick({
	
			slidesToShow: 1,
	
			slidesToScroll: 1,
	
			arrows: false,
	
			fade: true,
	
			asNavFor: '.js-object-slider-nav'
	
		});
	
		
	
		$('.js-object-slider-nav').slick({
	
			slidesToShow: 4,
	
			slidesToScroll: 1,
	
			asNavFor: '.js-object-slider-main',
	
			focusOnSelect: true,
	
	
	
			responsive: [
	
				{
	
					breakpoint: 1024,
	
					settings: {
	
						slidesToShow: 3
	
					}
	
				},
	
				{
	
					breakpoint: 768,
	
					settings: {
	
						slidesToShow: 4
	
					}
	
				},
	
				{
	
					breakpoint: 581,
	
					settings: {
	
						slidesToShow: 4
	
					}
	
				},
	
				{
	
					breakpoint: 480,
	
					settings: {
	
						slidesToShow: 3
	
					}
	
				}
	
			]
	
		});
	
	}
	
	objectSlider();
	
	
	
	
	function partnerSlider() {
	
		var wrap = $('.partners__holder');
	
	
	
		if(wrap.length) {
	
			var slickSlider = $('.js-partners-slider');
	
	
	
			slickSlider.slick({
	
				slidesToShow: 5,
	
				arrow: true, 
	
				autoplay: true,
	
				responsive: [
	
					{
	
						breakpoint: 1280,
	
						settings: {
	
							slidesToShow: 4
	
						}
	
					},
	
					{
	
						breakpoint: 1023,
	
						settings: {
	
							slidesToShow: 3
	
						}
	
					},
	
					{
	
						breakpoint: 640,
	
						settings: {
	
							slidesToShow: 2
	
						}
	
					},
	
					{
	
						breakpoint: 479,
	
						settings: {
	
							slidesToShow: 1
	
						}
	
					}
	
				]
	
			});
	
		}
	
	}
	
	
	
	partnerSlider();
	
	
	function projectMainSlider() {
	
		$('.js-project-slider').slick({
	
			slidesToShow: 1,
	
			slidesToScroll: 1,
	
			infinite: false,
	
	    autoplay: true,
	
				responsive: [
	
					{
	
						breakpoint: 480,
	
						settings: {
	
							swipe: false
	
						}
	
					}
	
				]
	
		});
	
	
	
		function projectSlider() {
	
			$('.js-project-slider-main').slick({
	
				slidesToShow: 1,
	
				slidesToScroll: 1,
	
				arrows: false,
	
				fade: true,
	
				asNavFor: '.js-project-slider-nav'
	
			});
	
			
	
			$('.js-project-slider-nav').slick({
	
				slidesToShow: 4,
	
				slidesToScroll: 1,
	
				asNavFor: '.js-project-slider-main',
	
				focusOnSelect: true,
	
				responsive: [
	
					{
	
						breakpoint: 1024,
	
						settings: {
	
							slidesToShow: 3
	
						}
	
					},
	
					{
	
						breakpoint: 768,
	
						settings: {
	
							slidesToShow: 4
	
						}
	
					},
	
					{
	
						breakpoint: 581,
	
						settings: {
	
							slidesToShow: 3
	
						}
	
					},
	
					{
	
						breakpoint: 480,
	
						settings: {
	
							slidesToShow: 4,
	
							arrows: false
	
						}
	
					},
	
					{
	
						breakpoint: 381,
	
						settings: {
	
							slidesToShow: 3,
	
							arrows: false
	
						}
	
					}
	
				]
	
			});
	
		}
	
		projectSlider();
	
	}
	
	
	
	projectMainSlider();
	
	
	function mainSlider() {
	
		var wrap = $('.slider__holder');
	
	
	
		if(wrap.length) {
	
			var slickSlider = $('.js-slider');
	
	
	
			slickSlider.slick({
	
				slidesToShow: 1,
	
				arrow: true, 
	
				autoplay: true
	
			});
	
		}
	
	}
	
	
	
	mainSlider();
	
	
	function stageSlider() {
	
		var wrap = $('.stage__holder');
	
	
	
		if(wrap.length) {
	
			var slickSlider = $('.js-stage-slider');
	
	
	
			slickSlider.slick({
	
				slidesToShow: 4,
	
				arrow: true, 
	
				autoplay: true,
	
				infinite: false,
	
				responsive: [
	
					{
	
						breakpoint: 1023,
	
						settings: {
	
							slidesToShow: 3
	
						}
	
					},
	
					{
	
						breakpoint: 640,
	
						settings: {
	
							slidesToShow: 2
	
						}
	
					},
	
					{
	
						breakpoint: 479,
	
						settings: {
	
							slidesToShow: 1
	
						}
	
					}
	
				]
	
			});
	
		}
	
	}
	
	
	
	stageSlider();
	
	
	
	
	
	
	//---------------------------------------//
	// Подключаем основные скрипты ( develop )
	//---------------------------------------//
	
	;
	
	(function ($) {
	
	
	
	  function customSelect() {
	
	    var _dropdown;
	
	    var settings = {
	
	      autoReinitialise: true
	
	    };
	
	    $('select').styler({
	
	      selectSearch: false,
	
	      onFormStyled: function () {
	
	        _dropdown = $('.jq-selectbox__dropdown');
	
	        _dropdown.find('ul').wrap('<div class="scroll-pane" ></div>');
	
	      },
	
	      onSelectOpened: function () {
	
	        var _ul = $(this).find('.jq-selectbox__dropdown ul');
	
	        var height = _ul.height();
	
	        var _srollPane = _dropdown.find('.scroll-pane');
	
	        _srollPane.height(height);
	
	        _ul.css('max-height', 'none');
	
	        _srollPane.jScrollPane();
	
	      }
	
	    });
	
	
	
	  }
	
	  customSelect();
	
	  
	
	  function autoHeight(className) {
	
	    $(className).matchHeight({
	
	      byRow: true,
	
	      property: 'height',
	
	      target: null,
	
	      remove: false
	
	    });
	
	  }
	
	
	
	
	
	  autoHeight('.js-height-item');
	
	  autoHeight('.js-height');
	
	  autoHeight('.js-height-title');
	
	
	
	  $('.phone').mask('+7 (999) - 999 - 99 - 99');
	
	
	
	  function fancy() {
	
	    $("a[href$='.png'], a[href$='.jpg'], a[data-src$='.png'], a[data-src$='.jpg']").fancybox({
	
	      touch: false,
	
	      thumbs: {
	
	        autoStart: true
	
	      }
	
	    });
	
	  }
	
	  
	
	  fancy();
	
	
	
	  function scrollId() {
	
	    $('.js-scroll').on('click', function (e) {
	
	      e.preventDefault();
	
	      var id  = $(this).attr('href'),
	
	          top = $(id).offset().top;
	
	      $('body, html').animate({scrollTop: top}, 1500);
	
	    });
	
	  }
	
	
	
	  scrollId();
	
	
	
	}($));
	
	
	
	
})