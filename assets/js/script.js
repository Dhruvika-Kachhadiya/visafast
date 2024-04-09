$('.owl-carousel').owlCarousel({
    loop:true,
    items:2,
    margin:10,
    nav:true,
    dots:false,
    navText:['prev','next'],
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>']
})
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $(document).ready(function(){
    setTimeout(function() {
      $('.pre_loader').fadeOut();
    },3000);
  })

  var btn = $('#top_scroll');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


var counted = 0;
$(window).scroll(function() {

  var oTop = $('#cnt').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

AOS.init();