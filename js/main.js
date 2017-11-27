requirejs.config({
    baseUrl: '../js',
    paths: {
        data: 'data',
        app: 'app',
        jquery:'jquery-1.11.3'
    }
});
//加载模块
requirejs(['jquery', 'app/NavGenerate','app/CodeGenerate','app/AddBtnGenerate','app/ShowOrHideCode'],
    function($,NavGenerate,CodeGenerate,AddBtnGenerate,ShowOrHideCode) {
        NavGenerate.Nav.init($("#nav"))
        CodeGenerate.RenderCode.init($(".model"))
        AddBtnGenerate.AddModelBtn.init($('.addModelBtn'))
        ShowOrHideCode.ShowOrHide.init($("#content .demo .case"))
    });