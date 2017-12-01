//inputNumber.js

define(['jquery'],function($){
    var InputNumber=(function(){
        var InputNumber1=function($ct,num){
            this.init($ct,num)
            this.bind()
        }
        InputNumber1.prototype={
            init:function($ct,num){
                this.$ct=$ct
                this.num=num
                this.$minus=$ct.find(".minus")
                this.$plus=$ct.find(".plus")
                this.$input=$ct.find("input[type=text]")
            },
            bind:function(){
                var self=this
                self.$ct.on("mouseenter",function(){
                    $(this).addClass("active")
                })
                self.$ct.on("mouseleave",function(){
                    $(this).removeClass("active")
                })
                self.$minus.on("click",function(){
                    if(!$(this).attr("disabled")){
                        self.changeValue(self.$input,-1)
                    }
                })
                self.$plus.on("click",function(){
                    if(!$(this).attr("disabled")){
                        self.changeValue(self.$input,1)
                    }
                })
                self.$input.on("input",function(){
                    self.beyondScope($(this))
                })
            },
            changeValue:function($ct,x){
                var value=parseInt($ct.val())+x
                this.$minus.attr("disabled",true)
                this.$plus.attr("disabled",true)
                if(value>1){
                    this.$minus.attr("disabled",false)
                }
                if(value<this.num){
                    this.$plus.attr("disabled",false)
                }
                $ct.val(value)
            },
            beyondScope:function($ct){
                this.$minus.attr("disabled",false)
                this.$plus.attr("disabled",false)
                if($ct.val()>=this.num){
                    this.$plus.attr("disabled",true)
                    $ct.val(this.num)
                }
                if($ct.val()<=1&&$ct.val()!=""){
                    this.$minus.attr("disabled",true)
                    $ct.val(1)
                }
            }
        }
        return {
            init:function($ct,num){
                $ct.each(function(index,value){
                    new InputNumber1($(this),num)
                })
            }
        }
    })()
    var Select=(function(){
        var Select1=function($parent,className,arr){
            this.init($parent,className,arr)
            this.bind()
        }
        Select1.prototype={
            init:function($parent,className,arr){
                this.$parent=$parent
                this.$ct=$parent.find("."+className)
                this.arr=arr
                this.$arrow=this.$ct.find(".arrow")
                this.show=false

            },
            bind:function(){
                var self=this
                self.render(this.arr)
                self.$ct.on("click",function(e){
                    e.stopPropagation()
                    self.show=self.show==false?true:false
                    self.showOrHideUl(self.show)
                })
                $("body").on("click",function(){
                    if(self.show){
                        self.show=false
                        self.showOrHideUl(self.show)
                    }
                })
                self.$ct.on("click","ul li",function(e){
                    if($(this).attr("disabled")){
                        e.stopPropagation()
                        return
                    }
                    var value=$(this).text()
                    self.$ct.find("input").val(value)
                })
            },
            render:function(arr){
                /*
                <ul class="none">
                    <li>黄金糕</li>
                    <li>双皮奶</li>
                    <li>龙须面</li>
                    <li>北京烤鸭</li>
                </ul>
                */
                var html='<ul class="none">'
                html+=arr.map(function(value,index){
                    for(var key in value){
                        if(value[key]){
                            return '<li>'+key+'</li>'
                        }
                        else {
                            return '<li disabled>'+key+'</li>'
                        }
                    }
                }).join("")
                html+='</ul>'
                this.$parent.find("."+this.$ct.attr("class")).append(html)
            },
            showOrHideUl:function(show){
                if(show){
                    this.$ct.addClass("active")
                    this.$ct.find("ul").slideDown().removeClass("none")
                }
                else {
                    this.$ct.removeClass("active")
                    this.$ct.find("ul").slideUp().addClass("none")
                }
            }
        }
        return {
            init: function($parent,className,arr){
                new Select1($parent,className,arr)
            }
        }
    })()
    return {
        InputNumber:InputNumber,
        Select:Select
    }
})

