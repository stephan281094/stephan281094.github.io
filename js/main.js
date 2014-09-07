var app = angular.module('app', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'projects.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html'
        })
}]);

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
    
    $('header .item').click(function(){
        $('header .item').removeClass('active');
        $(this).addClass('active');
    });
    
    // If Hash blabla
    //
    //
    //
    
    //
    //
    //
    
    $('.hamburger').hover(function(){
        $('header').addClass('visible');
    });
    $('#cover, .block').click(function(){
        if(top < 430){
            $('header').removeClass('visible');
        }
    });
});