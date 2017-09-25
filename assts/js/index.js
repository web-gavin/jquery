/*左边菜单栏*/
$(function() {
    $('.sidebar').find('li').click(function () {
        $(".navba-item-left .detail").hide();
        if ($(this).children('ul').is(':hidden') && $('#logos').is(':visible')) {
            $('.sidebar .sidebar-inner>ul>li>ul>li:first-child').hide();
            $(this).siblings().children('ul').slideUp(200);
            $(this).children('ul').slideDown(200);
            $(this).children().children('span:last-child').html('&#xe61a').attr('id','d1');
            $(this).siblings().children().children('span:last-child').html('&#xe602;').attr('id','d2');
        } else if ($('#logos').is(':visible')){
            $(this).children('ul').slideUp(200);
            $(this).children().children('span:last-child').html('&#xe602').attr('id','d2');
        }

        return false;
    });
    $('#logo').click(function () {
        if ($('#logos').is(':hidden')){
            $('body').removeClass();
            $('#d1').parent().siblings().show();
            $('.navbr-item-right span').html('&#xe649');
        }else {
            $('body').toggleClass('indexs');
            $('#d1').parent().siblings().hide();
            $('.navbr-item-right span').html('&#xe648');
        }
        return false;
    });
    $('li').hover(function(){
        if($('#logos').is(':hidden')){
            $(this).children('ul').show();
        }else {
            return false;
        }
    },function(){
        if($('#logos').is(':hidden')){
            $(this).children('ul').hide();
        }
        else {
            return false
        }
    });
    $(".sidebar .sidebar-inner ul>li>ul>li>a").click(function(){
        var arr = $(this).attr("href");
        if(arr !== ""){
            $("iframe").attr("src",arr);
        }

        return false;
    });
    $('.navba-item-left>a').click(function(){
        if($(' .navba-item-left .detail').is(':hidden')){
            $('.navba-item-left .detail').show();
        }else {
            $('.navba-item-left .detail').hide();
        }
        return false;
    });
});




