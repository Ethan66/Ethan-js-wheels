define(["jquery",'data/modelArr'],function($,modelObj){
    var ModelHtmlRender=(function(){
        var ModelHtmlRender1=function($ct){
            this.init($ct)
            this.bind()
        }
        ModelHtmlRender1.prototype={
            init:function($ct){
                this.$ct=$ct

            },
            bind:function(){
                this.render(modelObj)
            },
            render:function(obj){
                for(var key in obj){
                    var html='<div id="'+key+'" class="model none">'
                    html+='<div clas="title"><h1>'+obj[key]["type"]["name"]+'</h1>'+'<span>'+obj[key]["type"]["describe"]+'</span></div>'
                    html+='<ul class="demo">'
                    obj[key]["content"].forEach(function(value,index){
                        html+='<li><div class="title2"><h2>'+value["classify"]+'</h2>'+'<span>'+value["classifyDiscribe"]+'</span></div>'
                        html+='<div class="case"><ul><li>'+value["code"]+'</li></ul></div></li>'
                    })
                    html+='</ul></div>'
                }
                this.$ct.append(html)
            }
        }
        return {
            init:function($ct){
                $ct.each(function(index,value){
                    new ModelHtmlRender1($(this))
                })
            }
        }
    })()

    return {
        ModelHmtlRender: ModelHtmlRender
    }
})