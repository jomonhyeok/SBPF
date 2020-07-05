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

    $('section.value div.textList ol li').click(function(){
        $('section.value div.textList ol li').removeClass();
        $(this).addClass('active');
        //돌아가는 막대
        $('section.value div.imgBox ul li').removeClass();
        $('section.value div.imgBox ul li').eq($(this).index()).addClass('active');
        //왼쪽 img바꾸기
        $('section.value div div.wrap div.textBox ul li dl').removeClass();
        $('section.value div div.wrap div.textBox ul li').eq($(this).index()).find('dl').addClass('active');
        //오른쪽 단계적으로 나오기
        $('section.value div.wrap div.textBox ul li').removeClass('active');
        $('section.value div.wrap div.textBox ul li').eq($(this).index()).addClass('active');
        //오른쪽 바꾸기
    });

    $('section.goal div.goalButton p').click(function(){
        $('section.goal div.goalButton p').removeClass();
        $(this).addClass('active');
        $('section.goal div.wrap ul li').removeClass();
        $('section.goal div.wrap ul li').eq($(this).index()).addClass('active');
    });

    $(window).scroll(function(){
        var half = $(window).height()/2;
        if($(document).scrollTop() > $('section.value').offset().top - half){
            $('section.value').addClass('active');
        }
        if($(document).scrollTop() > $('section.goal').offset().top - half){
            $('section.goal').addClass('active');
        }
    })
})