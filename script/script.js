$(".sub").hide();
$(".gnb>ul>li")
    .mouseenter(
        function () { $('#header').css("background-color", "#123341") },
        function () { $('.sub').stop().slideDown(300); })
    .mouseleave(function () { $('.sub').stop().slideUp(300); });