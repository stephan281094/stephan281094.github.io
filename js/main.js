$(document).ready(function () {
    var top = $(window).scrollTop();
    var winHeight = $(window).height();
    
    $(window).scroll(function () {
        top = $(window).scrollTop();
        
        if(top > 0 && $(window).width() > 800){
            $('#cover .test').css({'margin-top': -.7 * top});
        }else{
            $('#cover .test').css({'margin-top': 0});
        }
        
        if(top >= 430){
            $('header').addClass('visible');
        }else{
            $('header').removeClass('visible');
        }
        
        fadeInBlocks();
    });
    
    function fadeInBlocks(){
        $('.fadeInRight, .fadeInLeft').each(function(){
            if($(this).offset().top - winHeight <= top){
                $(this).addClass('animated');
            }
        });
    }
    
    fadeInBlocks();
    
    $('.hamburger').hover(function(){
        $('header').addClass('visible');
    });
    $('#cover, .block').click(function(){
        if(top < 430){
            $('header').removeClass('visible');
        }
    });
});