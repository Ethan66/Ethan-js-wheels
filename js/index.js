!function(){
    var $arrow=$("#content").find(".arrow")
    var width=$arrow.find("span").width();
    $arrow.css("text-indent",2*width)
}();
$("#content").on("mouseenter",".demo .case",function(){
    if($(this).find(".code").css("display")=="none"){
        $(this).addClass("hover")
        $(this).find(".arrow").animate({'text-indent':0},200)
        $(this).find(".arrow span").animate({opacity:1},200)
    }
});
$("#content").on("mouseleave",".demo .case",function(){
    if($(this).find(".code").css("display")=="none"){
        var width=$("#content").find(".arrow span").width()
        $(this).removeClass("hover")
        $(this).find(".arrow").animate({'text-indent':2*width},200)
        $(this).find(".arrow span").animate({opacity:0},200)
    }
});
$('#content').on("click",".demo .arrow",function(){
    $(this).prev().slideToggle(function(){
        if($(this).css("display")=="none"){
            var width=$("#content").find(".arrow span").width()
            $(this).next(".arrow").animate({'text-indent':2*width},200)
            $(this).next(".arrow").find("span").animate({opacity:0},200)
        }
    })
})
