//生成导航
var Nav=(function(){
    var data={
        Form:[['active','Radio','单选框'],['','Checkbox','多选框'],['','Input','输入框'],['','InputNumber','计数器'],['','Select','选择器'],['','Switch','开关']],
        Notice:[['','Radio','单选框'],['','Checkbox','多选框'],['','Input','输入框'],['','InputNumber','计数器'],['','Select','选择器'],['','Switch','开关']],
        Navigation:[['','Radio','单选框'],['','Checkbox','多选框'],['','Input','输入框'],['','InputNumber','计数器'],['','Select','选择器'],['','Switch','开关']],
    }
    var Nav1=function($ct){
        this.init($ct)
        this.bind()
    }
    Nav1.prototype={
        init:function($ct){
            this.$ct=$ct      //nav
            this.$preActive=null   //记录上一个显示的组件，当点击下一个时关闭这一个再显示下一个
            this.render()

        },
        bind:function(){
            var self=this
            this.$ct.on("click",'dd a',function(){
                if(self.$preActive){
                    self.$preActive.addClass("none")
                }
                self.$ct.find(".active").removeClass("active")
                $(this).parent("dd").addClass("active")
                var id=$(this).attr("data-url")
                console.log(id)
                $("#"+id).removeClass("none")
                self.$preActive=$("#"+id)
            })
        },
        render:function(){
            /*<dl>
                <dt>Form</dt>
                <dd class="active"><a href="#" data-url="Radio">Radio<span>单选框</span></a></dd>
                <dd><a href="#" data-url="Checkbox">Checkbox<span>多选框</span></a></dd>
                <dd><a href="#" data-url="Input">Input<span>输入框</span></a></dd>
                <dd><a href="#" data-url="InputNumber">InputNumber<span>计数器</span></a></dd>
                <dd><a href="#" data-url="Select">Select<span>选择器</span></a></dd>
                <dd><a href="#" data-url="Switch">Switch<span>开关</span></a></dd>
            </dl>*/
            var html=''
            for(var key in data){
                var self=this
                var str='<dl><dt>'+key+'</dt>'
                data[key].forEach(function(value,index){
                    if(value[0]){
                        str+='<dd class="'+value[0]+'">'
                        $("#"+value[1]).removeClass("none")
                        self.$preActive=$("#"+value[1])
                    }
                    else{
                        str+='<dd>'
                    }
                    str+='<a href="#'+value[1]+'" data-url="'+value[1]+'">'+value[1]+'<span>'+value[2]+'</span></a></dd>'
                })
                str+='</dl>'
                html+=str
            }
            this.$ct.append(html)
        },
    }
    return {
        init:function($ct){
            $ct.each(function(index,value){
                new Nav1($(this))
            })
        }
    }
})()
Nav.init($("#nav"))


//生成复制的代码和SCSS样式
var RenderCode=(function(){
    var RenderCode1=function($ct){
        this.init($ct)
        // this.bind()
    }
    RenderCode1.prototype={
        init:function($ct){
            this.$ct=$ct
            this.li=$ct.find("li").html()
            console.log(this.li)
        }
    }
    return {
        init:function($ct){
            $ct.each(function(idnex,value){
                new RenderCode1($(this))
            })
        }
    }
})()
RenderCode.init($(".demo .case"))



//显示、隐藏代码
/*!function(){
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
 else{
 $(this).next(".arrow").find("i").addClass("up").next("span").text("隐藏代码")
 }
 })
 })*/
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
            $arrow.css("text-indent",2*spanWidth)
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
                    self.$arrow.animate({'text-indent':2*self.spanWidth},200)
                    self.$arrSpan.animate({opacity:0},200)
                }
            })
            self.$arrow.on("click",function(){
                self.$code.slideToggle(function(){
                    if($(this).css("display")=="none"){
                        self.$arrow.find("i").removeClass("up")
                        self.$arrow.animate({'text-indent':2*self.spanWidth},200)
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
ShowOrHideCode.init($("#content .demo .case"))

