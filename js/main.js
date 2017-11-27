requirejs.config({
    baseUrl: '../js',
    paths: {
        data: 'data',
        app: 'app',
        jquery:'jquery-1.11.3'
    }
});
//加载模块
requirejs(['jquery', 'data/scssArr','app/NavGenerate','app/CodeGenerate','app/AddBtnGenerate'],
    function($, scssArr, NavGenerate,CodeGenerate,AddBtnGenerate) {
        NavGenerate.Nav.init($("#nav"))
        CodeGenerate.RenderCode.init($(".model"))
        AddBtnGenerate.AddModelBtn.init($('.addModelBtn'))
    });