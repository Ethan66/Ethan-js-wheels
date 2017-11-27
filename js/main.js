requirejs.config({
    baseUrl: '../js',
    paths: {
        data: 'data',
        app: 'app',
        jquery:'jquery-1.11.3'
    }
});
//加载模块
requirejs(['jquery', 'data/scssArr','app/NavGenerate','app/CodeGenerate','app/addBtnGenerate'],
    function($, scssArr, NavGenerate,CodeGenerate,addBtnGenerate) {
        NavGenerate.Nav.init($("#nav"))
        CodeGenerate.RenderCode.init($(".model"))
        addBtnGenerate.AddModelBtn.init($('.addModelBtn'))
    });