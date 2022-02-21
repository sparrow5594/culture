$(document).ready(function(){

    $(window).scroll(function(event) {
        let y = $(this).scrollTop();
        if (y > 124) {
            $('.header-bottom').css({'position': 'fixed'});
            $('.header-top').css({'display': 'none'});
            $('.ballon').css({'visibility': 'hidden'});

        } else{
            $('.header-bottom').css({'position': 'relative'});
            $('.header-top').css({'display': 'block'});
            $('.ballon').css({'visibility': 'visible'});
        }
    });

    var left_swiper = new Swiper('.left-swiper', {
        loop : true ,
        speed: 500,
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        effect: "fade",
        navigation: {
            prevEl: ".left-prev",
            nextEl: ".left-next",
        },
        pagination: {
            el: '.left-pagination',
            type: 'fraction'
        }
    });

    var center_swiper = new Swiper('.center-swiper', {
        loop : true ,
        speed: 1000,
        
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        effect: 'fade',
        navigation: {
            prevEl: '.center-prev',
            nextEl: '.center-next',
        }
    });

    var right_swiper = new Swiper('.right-swiper', {
        loop : true,
        loopAdditionalSlides: 5,
        speed: 1000,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }        
    });

    let random = Math.floor(Math.random() * $('.section4-area > div').length);
        $('.section4-area > div').hide().eq(random).show();

    let modal = $('.modal');
    let modal_close = $('.modal-close');

    $(document).click(function(e){
        if(modal.has(e.target).length == 0){
            modal.hide();
        }
    })

    modal_close.click(function(){
        modal.hide();
    });
});