function preloader() {
    $('select').each(function () {
      $(this).selectric({
        maxHeight: 200
      });
    });
  }
  customSelect();
  function tabs() {
    var wrap = $('.js-tabs');
    if(wrap.length) {
      wrap.each(function () {
        var self = $(this),
          tab = self.find('.js-tabs-link'),
          content = self.find('.js-tabs-content');
        tab.on('click', function (e) {
          e.preventDefault();
          var href = $(this).attr('href');
          tab.removeClass('active');
          $(this).addClass('active');
          content.removeClass('active');
          $(href).addClass('active');
        })
      });
    }
  }
  tabs();
    autoFooter();