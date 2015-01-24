



var technologies = {
    {
        img: "img/tech/rails.png",
        title: "Ruby On Rails",
        text: "Dit is een server-side framework. Met deze technologie kunnen we de beste service aan een grote snelheid leveren."
    }
}


var Q_bullet = function(){
    $('.develop_kolom ul li').append('<img src="../img/bullet.svg" id="bullet"/>');
    
    $('.design_kolom ul li').prepend('<img src="../img/bullet.svg" id="bullet"/>');
}

var show_tech_info = function(){
    $('.kwaliteiten div ul li').click(function(){
    
    });
}


var main = function(){
    headsizer();
    Q_bullet();
}


var headsizer = function(){
    splashheight = $(window).height() - ($('header').height() + $('nav').height());
    $('.introduction').css({paddingTop: (splashheight / 2) - $('nav').height()});
    $('.splash').css({height: splashheight});
}

$(window).resize(headsizer);

$(document).ready(main);
