$.noConflict();

jQuery(".sub").hide();
jQuery(".gnb>ul>li")
    .mouseenter(
        function () { jQuery('#header').css("background-color", "#123341") },
        function () { jQuery('.sub').stop().slideDown(300); })
    .mouseleave(function () { jQuery('.sub').stop().slideUp(300); });

// 브랜드소개 섹션 //
jQuery(".section").each(function () {
    // 개별적으로 Wheel 이벤트 적용
    jQuery(this).on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;
        var moveTop = null;
        if (delta < 0) {
            if (jQuery(this).next() != undefined) {
                moveTop = jQuery(this).next().offset().top;
            }
        } else {
            if (jQuery(this).prev() != undefined) {
                moveTop = jQuery(this).prev().offset().top;
            }
        }
        jQuery("html,body").stop().animate({
            scrollTop: moveTop + 'px'
        }, {
            duration: 600, complete: function () {
            }
        });
    });
});

// 메뉴 모달팝업 전용

jQuery(function(){
    jQuery('.img1').click(function(){
        jQuery('.pop1').fadeIn(); //fadeIn() 건웅
    });

    jQuery('.img2').click(function(){
        jQuery('.pop2').fadeIn(); //fadeIn() 건웅
    });

    jQuery('.img3').click(function(){
        jQuery('.pop3').fadeIn(); //fadeIn() 건웅
    });

    jQuery('.img4').click(function(){
        jQuery('.pop4').fadeIn(); //fadeIn() 건웅
    });

    jQuery('.img5').click(function(){
        jQuery('.pop5').fadeIn(); //fadeIn() 건웅
    });

    jQuery('.img6').click(function(){
        jQuery('.pop6').fadeIn(); //fadeIn() 건웅
    });

    jQuery('.exit').click(function(){
        jQuery('.popup').hide(); //fadeOut() 건웅
    });
});
