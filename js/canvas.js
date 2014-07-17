$(document).ready(function(){

    $("#theTarget").skippr({
        transition: 'slide',
        speed: 1000,
        easing: 'easeOutQuart',
        navType: 'block',
        childrenElementType: 'div',
        arrows: false,
        autoPlay: true,
        autoPlayDuration: 3000,
        keyboardOnAlways: true,
        hidePrevious: false
    });

    $(".slider_box").hover(function() {
        $(".slider_inner").addClass("effect")
    });

});


