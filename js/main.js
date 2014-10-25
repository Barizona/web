var main = function(){
    
    $(".wrapper").css({height: "" + $(window).height() + "px"});
    /*$(".textArea").css({height: "" + $(window).height() / 4 + "px"});*/
    
    menu();
}

var menu = function(){
    
    open = false;
    
    $('#toverstok').click(function(){
        if(open){
            $('.menu').css({width: "250px"}).stop().animate({width: "0px"}, 200, function(){
                $('.menu').css({display: "none"});
            });
            open = false;
        }else{
            $('.menu').css({display: "block", width: "0px"}).stop().animate({width: "250px"});
            open = true;
        }
    });
}



$(document).ready(main);
