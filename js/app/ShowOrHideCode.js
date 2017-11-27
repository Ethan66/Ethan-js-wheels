//显示、隐藏代码
define(['jquery'],function($){
    var ShowOrHideCode=(function(){
        var showOrHideCode1=function($ct){
            this.init($ct)
            this.bind()
        }
        showOrHideCode1.prototype={
            init:function($ct){
                this.$ct=$ct
                this.$code=$ct.find(".code")
                var $arrow=this.$arrow=$ct.find('.arrow')
                var $arrSpan=this.$arrSpan=$arrow.find('span')
                var spanWidth=this.spanWidth=$arrSpan.width()
                $arrow.css("text-indent",2*56)
            },
            bind:function(){
                var self=this;
                self.$ct.on("mouseenter",function(){
                    if(self.$code.css("display")=="none"){
                        $(this).addClass("hover")
                        self.$arrow.animate({'text-indent':0},200)
                        self.$arrSpan.animate({opacity:1},200)
                    }
                })
                self.$ct.on("mouseleave",function(){
                    if(self.$code.css("display")=="none"){
                        $(this).removeClass("hover")
                        self.$arrow.animate({'text-indent':2*56},200)
                        self.$arrSpan.animate({opacity:0},200)
                    }
                })
                self.$arrow.on("click",function(){
                    self.$code.slideToggle(function(){
                        if($(this).css("display")=="none"){
                            self.$arrow.find("i").removeClass("up")
                            self.$arrow.animate({'text-indent':2*56},200)
                            self.$arrSpan.animate({opacity:0},200)
                        }
                        else{
                            self.$arrow.find("i").addClass("up").next("span").text("隐藏代码")
                        }
                    })
                })
                self.$code.on("click",".copy",function(){
                    self.copyCss(self.$code.find(".css")[0])
                })
            },
            copyCss:function(ct){
                ct.select(); // 选择对象
                document.execCommand("Copy"); // 执行浏览器复制命令
                alert("已复制好，可贴粘。");
            }
        }
        return {
            init:function($ct){
                $ct.each(function(index,value){
                    new showOrHideCode1($(this))
                })
            }
        }
    })()
    return {
        ShowOrHide:ShowOrHideCode
    }
})
