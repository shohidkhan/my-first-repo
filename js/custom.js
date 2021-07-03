

$('body').scrollspy({ target: '#navbarSupportedContent' });

$('#navigation a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });


$('.top_to').click(function(){
    $('html').animate({
        scrollTop:0,
    },1000);
});

$navOffset=$('#navigation').offset().top;
$(window).scroll(function(){
    $scrolling=$(this).scrollTop();
    if($scrolling > $navOffset){
        $('#navigation').addClass('navFixed');
    }else{
        $('#navigation').removeClass('navFixed');
    }
    
    if($scrolling > 300){
        $('.top_to').fadeIn();
    }else{
        $('.top_to').fadeOut();
    }
});

(function(){
    
    $('.banner_slide').slick({
        dots: true,
        arrows:false,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});
    
    
})();
    
    
        $('.venobox').venobox(); 



(function(){
    
    $('.taem_slide').slick({
        dots: false,
        arrows:false,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }

  ]
});
    
    
})();







(function(){
    
    $('.testimonial_slide').slick({
        dots: true,
        arrows:false,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
      {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          dots:true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          dots:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
    
    
})();


(function(){
    
    $('.partner_slide').slick({
        dots: false,
        arrows:true,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        nextArrow:'<i class="fa fa-angle-right right_angle"></i>',
        prevArrow:'<i class="fa fa-angle-left left_angle"></i>',
        
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
    
    
})();

//=======================================//
        //team slide js ends
//=====================================//
 
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});