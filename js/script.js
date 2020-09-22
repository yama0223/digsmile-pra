$(function(){
    var mvHeight = $('.js-mv-inner').outerHeight();
    var shadowHeight = $('.js-mv').outerHeight();

    $(window).on('load scroll', function(){
        if ($(window).scrollTop()  < mvHeight -40) {
            $('.header-logo').removeClass('black');
        }else {
            $('.header-logo').addClass('black');
        }

        if ($(window).scrollTop()  < shadowHeight -50) {
            $('.nav-drawer__icon').children().removeClass('nav-drawer__icon--parts--black');
            $('.nav-drawer__icon').children().addClass('nav-drawer__icon--parts');
        }else {
            $('.nav-drawer__icon').children().removeClass('nav-drawer__icon--parts');
            $('.nav-drawer__icon').children().addClass('nav-drawer__icon--parts--black');
        }
    });

    // ハンバーガーメニュー　自動で閉じる
    $('.nav-drawer__menu a[href]').on('click',function(event){
        $('.nav-drawer__checkbox').trigger('click');
    });
    // スムーススクロール＆位置調整
    var headerHight = 100;
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight;
        $("html,body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});