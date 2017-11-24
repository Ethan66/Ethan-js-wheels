//生成导航

define(['jquery'],function($){
    var data={
        Form:[['active','Radio','单选框'],['','Checkbox','多选框'],['','Input','输入框'],['','InputNumber','计数器'],['','Select','选择器'],['','Switch','开关']],
        Notice:[['','Radio','单选框'],['','Checkbox','多选框'],['','Input','输入框'],['','InputNumber','计数器'],['','Select','选择器'],['','Switch','开关']],
        Navigation:[['','Radio','单选框'],['','Checkbox','多选框'],['','Input','输入框'],['','InputNumber','计数器'],['','Select','选择器'],['','Switch','开关']],
    }
    var Nav=(function(){
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
    return {
        Nav:Nav
    }
})


