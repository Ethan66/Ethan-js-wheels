//SCSS样式数组
var scssArr={
    Radio:'$maxWidth:1200px;$color:#409eff;$color1:#1f2f3d;$color2:#5e6d82;.e-radio{position:relative;display:inline-block;margin-right:10px;input[type=radio]{position:absolute;top:3px;width:14px;height:14px;opacity:0}label{position:relative;padding-left:22px;i{display:inline-block;width:14px;height:14px;background:transparent;border:1px solid #d8dce5;text-align:center;border-radius:50%;box-sizing:border-box;position:absolute;top:3px;left:0;transition:all .5s;&:before{display:inline-block;content:"";width:4px;height:4px;background:transparent;border-radius:50%;vertical-align:7px;transition:all .5s}}}input:checked+label{color:$color}input:checked+label i{background:$color;border-color:transparent;&:before{background:#fff}}&.e-disabled{input:disabled+label{color:#b4bccc}input:disabled+label i{background:transparent;border-color:#b4bccc}input:checked:disabled+label i{&:before{background:#b4bccc}}}&.e-border{input{left:14px}label{display:block;border:1px solid #ddd;padding:8px 18px 8px 35px;border-radius:4px;i{top:11px;left:13px}}input:checked+label{border-color:$color}}}',
    Checkbox:'$maxWidth:1200px;$color:#409eff;$color1:#1f2f3d;$color2:#5e6d82;.e-checkbox{position:relative;display:inline-block;margin-right:10px;input[type=checkbox]{position:absolute;top:3px;width:14px;height:14px;opacity:0}label{position:relative;padding-left:22px;i{display:inline-block;width:14px;height:14px;background:transparent;border:1px solid #d8dce5;text-align:center;box-sizing:border-box;position:absolute;top:3px;left:0;transition:all .5s;border-radius:2px;&:before{display:inline-block;content:"";width:10px;height:5px;background:transparent;border:1px solid transparent;transform:rotate(-45deg);vertical-align:8px;transition:all .5s}}}input:checked+label{color:$color}input:checked+label i{background:$color;border-color:transparent;&:before{border-left-color:#fff;border-bottom-color:#fff}}&.e-disabled{input:disabled+label{color:#b4bccc!important}input:disabled+label i{background:#edf2fc!important;border-color:#d8dce5!important}input:checked:disabled+label i{&:before{border-left-color:#b4bccc;border-bottom-color:#b4bccc}}}&.e-border{input{left:14px}label{display:block;border:1px solid #ddd;padding:8px 18px 8px 35px;border-radius:4px;i{top:11px;left:13px}}input:checked+label{border-color:$color}}}',
    Input:'$maxWidth:1200px;$color:#409eff;$color1:#1f2f3d;$color2:#5e6d82;.e-input{display:inline-block;input{max-width:300px;padding:10px;border-radius:4px;border:1px solid #d8dce5;outline:0;transition:all .6s;&::-webkit-input-placeholder{color:#b4bccc}&:-moz-placeholder{color:#b4bccc}&::-moz-placeholder{color:#b4bccc}&:-ms-input-placeholder{color:#b4bccc}&:focus{border-color:$color}&:disabled{background:#f5f7fa;border-color:#dfe4ed;color:#b4bccc;cursor:not-allowed}}&.e-icon-left{position:relative;input{padding-left:36px}svg{position:absolute;left:7px;top:7px;width:20px;height:20px;fill:#b4bccc}}&.e-icon.e-icon-after{position:relative;input{padding-right:40px}svg{position:absolute;right:7px;top:7px;width:24px;height:24px;fill:#b4bccc}}}'
}
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
        this.bind()
    }
    RenderCode1.prototype={
        init:function($ct){
            this.$ct=$ct
            this.$ctId=this.$ct.attr("id")
            this.$demoLi=this.$ct.find(".demo>li")
            this.$liArr=$ct.find(".case>ul li")
            this.codeArr=[]
        },
        bind:function(){
            var self=this;
            self.codeArr=self.getCode(self.$liArr)
            this.render()
        },
        getCode:function($liArr){
            var arr=[]
            $liArr.each(function(value,index){
                var code=$(this).html()
                code=code.replace(/[ ]{32}/g,'')
                arr.push(code)
            })
            return arr
        },
        render:function(){
            /*<div class="more">
                <div class="code">
                    <xmp>
                    <p class="e-input">
                    <input type="text" name="i1" placeholder="请输入内容" />
                    </p>
                    </xmp>
                    <textarea class="css">$maxWidth:1200px;$color:#409eff;$color1:#1f2f3d;$color2:#5e6d82;</textarea>
                    <button class="copy">复制SCSS样式</button>
                </div>
                <div class="arrow">
                    <i></i>
                    <span>显示代码</span>
                </div>
            </div>*/
            var self=this;
            self.codeArr.forEach(function(value,index){
                var html='<div class="more"><div class="code">'
                html+='<xmp>'+value+'</xmp>'
                if(index==0){
                    html+='<textarea class="css">'+scssArr[self.$ctId]+'</textarea><button class="copy">复制SCSS样式</button>'
                }
                html+='</div>'
                html+='<div class="arrow"><i></i><span>显示代码</span></div></div>'
                self.$demoLi.eq(index).find(".case").append(html)
            })
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
RenderCode.init($(".model"))

//生成添加按钮
var AddModelBtn=(function(){
    var AddModelBtn1=function($ct){
        this.init($ct)
        this.bind()
    }
    AddModelBtn1.prototype={
        init:function($ct){
            this.$ct=$ct
        },
        bind:function(){
            var self=this;
            self.render()
            self.$ct.on("click","button",function(){
                var id=self.$ct.attr("class")
                $("."+id+"1").show();
                // alert("此功能需要配合服务器，因为要保存添加的数据")
            })
        },
        render:function(){
           /* <button>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-iconjia1"></use>
                </svg>
                添加组件
            </button>*/
           var html='<button><svg class="icon" aria-hidden="true"><use xlink:href="#icon-iconjia1"></use></svg>添加组件</button>'
           this.$ct.append(html)
           /*<div class="pop addModelBtn1 none">
                <div class="wrap">
                    <h2>添加组件</h2>
                    <div class="line">
                        <p><span>组件名称</span><input type="text" placeholder="填写名称" /></p>
                        <p><span>组件描述</span><input type="text" placeholder="组件描述" /></p>
                    </div>
                    <div class="line">
                        <p><span>分类</span><input type="text" placeholder="组件分类" /></p>
                        <p><span>分类描述</span><input type="text" placeholder="分类描述" /></p>
                    </div>
                    <div class="line">
                        <p><span>代码</span><input type="text" /></p>
                    </div>
                    <div class="line">
                        <button>立即添加</button><button class="cancel">取消</button>
                    </div>
                </div>
            </div>*/
           var html1='<div class="pop addModelBtn1 none"><div class="wrap"><h2>添加组件</h2>'
            html1+='<div class="line"><p><span>组件名称</span><input type="text" placeholder="填写名称" /></p><p><span>组件描述</span><input type="text" placeholder="组件描述" /></p></div>'
            html1+='<div class="line"><p><span>分类</span><input type="text" placeholder="组件分类" /></p><p><span>分类描述</span><input type="text" placeholder="分类描述" /></p></div>'
            html1+='<div class="line"><p><span>代码</span><input type="text" /></p></div>'
            html1+='<div class="line"> <button>立即添加</button><button class="cancel">取消</button></div>'
            this.$ct.after(html1)
        }
    }
    return {
        init:function($ct){
            $ct.each(function(index,value){
                new AddModelBtn1($(this))
            })
        }
    }
})()
AddModelBtn.init($(".addModelBtn"))



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

