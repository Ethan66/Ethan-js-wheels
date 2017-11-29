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
    return {
        InputNumber:InputNumber
    }
})
