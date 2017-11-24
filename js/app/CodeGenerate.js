//生成复制的代码和SCSS样式


define(['jquery','data/scssArr'],function($,scssArr){
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
    return {
        RenderCode:RenderCode
    }
})
