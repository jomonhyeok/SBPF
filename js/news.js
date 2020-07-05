$(document).ready(function(){ 
    $('header ol li').click(function(){
        $('header ol li').removeClass();
        $(this).addClass('active');
    });//header의 탭기능
    $('header nav label').click(function(){
        $('header div.menu nav ul > li').removeClass();
        $('header div.menu nav ul li h3').removeClass('active');
        $('header div.menu nav ul li h3').addClass('active');
    });//메뉴 클릭했을때 하위 메뉴 다 닫히기
    $('header nav ul li h3 i').click(function(){
        if($('header div.menu nav ul > li').eq($(this).parent().parent().index()).hasClass('active')){
            $('header div.menu nav ul > li').removeClass();
        }else{
            $('header div.menu nav ul > li').removeClass();
            $('header div.menu nav ul > li').eq($(this).parent().parent().index()).addClass('active');
        }
    });//하위 메뉴 보이기
    if( $(window).width()< 768){
        $('section.news i').removeClass('large');
    }
    $('section.news i').click(function(){
        $('section.news i').removeClass('active');
        $(this).addClass('active'); //click 색깔 바뀌기
    });

    $('section.news i:nth-of-type(1)').click(function(){
        $('section.news ul').removeClass();
        $('section.news ul').addClass('list');
    });
    $('section.news i:nth-of-type(2)').click(function(){
        $('section.news ul').removeClass();
        $('section.news ul').addClass('box');
    });

})