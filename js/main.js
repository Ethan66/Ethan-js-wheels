requirejs.config({
    baseUrl: '../js',
    paths: {
        data: 'data',
        app: 'app',
        jquery:'jquery-1.11.3'
    }
});
//加载模块
requirejs(['jquery', 'app/NavGenerate','app/ModelRender','app/CodeGenerate','app/AddBtnGenerate','app/ShowOrHideCode'],
    function($,NavGenerate,ModelRender,CodeGenerate,AddBtnGenerate,ShowOrHideCode) {
        NavGenerate.Nav.init($("#nav"))
        ModelRender.ModelHmtlRender.init($("main #content"))
        CodeGenerate.RenderCode.init($(".model"))
        AddBtnGenerate.AddModelBtn.init($('.addModelBtn'))
        ShowOrHideCode.ShowOrHide.init($("#content .demo .case"))
    });

requirejs(['jquery','app/formModel'],function($,formModel){
    formModel.InputNumber.init($(".e-inputNumber"),10)
    formModel.Select.init($("#content .demo .case ul li:first-child"),$(".e-Select"),["黄金糕","双皮奶","龙须面","北京烤鸭"])
});