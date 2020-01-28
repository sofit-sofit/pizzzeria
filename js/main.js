$(function(){

    $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();

    });

    // $('.orders__basket-button').on('click', function(){
    //     $('.orders__basket-btn size20, .orders__basket-btn size30, .orders__basket-btn size40,').slideToggle(' #47BF4C');

    // });

    
    
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        infinite: true,
        adaptiveHeight: true,
    });

    $('.top-menu__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1031,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 621,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
        ]
    
      });

      $(".top-menu__inner, .works__inner, .reviews__inner").on('afterChange', function(event, slick, currentSlide){
        $(".top-menu__total-slide,.works__total-slide, .reviews__total-slide").text(currentSlide + 1);
     });

    

    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1061,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 806,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 530,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
        
     
    });

    $('.reviews__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
    
    });



    $(".reviews__star").rateYo({
        starWidth: "22px",
        rating: 3.6,
        ratedFill: "#FFE55C",
        spacing: "3px"
      });


      $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('input').styler();

   


});