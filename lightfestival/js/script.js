$(document).ready(function(){


    //팝업
    $('.popup-btn').click(function(){
        $('.popup-view').show();
    });
    $('.popup-close').click(function(){
        $('.popup-view').hide();
    });


    //메뉴
    $('.menu > ul > li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown(500);
    });
    $('.menu > ul > li').mouseout(function(){
        $(this).find('.subMenu').stop().slideUp(500);
    });

    //슬라이더
    $('#slider a:gt(0)').hide();
    setInterval(function(){
        $('#slider a:first-child').fadeOut(1200).next('a').fadeIn(1200).end().appendTo('#slider');},3000
    );
        
    //탭메뉴
    const tabBtn = $(".infoMenu > a");
    const tabCont = $(".infoCont > div")
    tabCont.hide().eq(0).show();

    tabBtn.click(function () {
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
});