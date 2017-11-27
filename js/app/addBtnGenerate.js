//生成添加按钮
define([],function(){
    var AddModelBtn=(function(){
        var AddModelBtn1=function($ct){
            this.init($ct)
            this.bind()
        }
        AddModelBtn1.prototype={
            init:function($ct){
                this.$ct=$ct
                this.class=$ct.attr("class")
            },
            bind:function(){
                var self=this;
                self.render()
                self.$ct.on("click","button",function(){
                    $("."+self.class+"1").show();
                    // alert("此功能需要配合服务器，因为要保存添加的数据")
                })
                $("."+self.class+"1").on("click",".add",function(e){
                    e.preventDefault()
                    var str=$(this).parents('form.wrap').serialize()
                    str=decodeURIComponent(str)
                    var obj=self.changeStr(str)
                    self.modifyModelArr(obj)

                    console.log(JSON.stringify(modelArr))
                })
                $("."+self.class+"1").on("click",".cancel",function(e){
                    e.preventDefault()
                    $("."+self.class+"1").hide();
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
                 <form class="wrap">
                 <h2>添加组件</h2>
                 <div class="line">
                 <p><span>组件名称</span><input type="text" name="name" placeholder="填写名称" /></p>
                 <p><span>组件描述</span><input type="text" name="describe" placeholder="组件描述" /></p>
                 </div>
                 <div class="line">
                 <p><span>分类</span><input type="text" name="classify" placeholder="组件分类" /></p>
                 <p><span>分类描述</span><input type="text" name="classifyDiscribe" placeholder="分类描述" /></p>
                 </div>
                 <div class="line">
                 <p><span>代码</span><textarea name="code"></textarea></p>
                 </div>
                 <div class="line">
                 <button class="add">立即添加</button><button class="cancel">取消</button>
                 </div>
                 </form>
                 </div>*/
                var html1='<div class="pop addModelBtn1 none"><form class="wrap"><h2>添加组件</h2>'
                html1+='<div class="line"><p><span>组件名称</span><input type="text" name="name" placeholder="填写名称" /></p><p><span>组件描述</span><input type="text" placeholder="组件描述" name="describe" /></p></div>'
                html1+='<div class="line"><p><span>分类</span><input type="text" name="classify" placeholder="组件分类" /></p><p><span>分类描述</span><input type="text" placeholder="分类描述" name="classifyDiscribe" /></p></div>'
                html1+='<div class="line"><p><span>代码</span><textarea name="code"></textarea></p></div>'
                html1+='<div class="line"> <button class="add">立即添加</button><button class="cancel">取消</button></div></form></div>'
                this.$ct.after(html1)
            },
            changeStr:function(str){
                var arr=str.split("&")
                var obj={type:{},content:{}}
                arr.forEach(function(value,index){
                    var str=value.replace("=","?")
                    var arr1=str.split("?")
                    arr1[1]=arr1[1]==undefined?" ":arr1[1]
                    if(arr1[0]=="code"|| arr1[0]=="name"){
                        arr1[1]=arr1[1].replace(/\+/g," ")
                    }
                    if(arr1[0]=="name"|| arr1[0]=="describe"){
                        obj['type'][arr1[0]]=arr1[1]
                    }
                    else{
                        obj["content"][arr1[0]]=arr1[1]
                    }
                })
                return obj;
            },
            modifyModelArr:function(obj){
                if(!obj['type']['name']){
                    alert("请输入组件名称")
                    return
                }
                var hasExist=0;
                console.log(modelArr)
                for(var i=0;i<modelArr.length;i++){
                    if(obj['type']['name']==modelArr[i]['type']['name']) {
                        hasExist=1;
                        modelArr[i]["content"].push(obj["content"])
                    }
                }
                if(!hasExist){
                    modelArr.push(obj)
                }
                console.log(modelArr)
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
    return {
        AddModelBtn:AddModelBtn
    }
})