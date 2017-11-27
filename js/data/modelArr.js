/*//组件对象
 var modelArr=[
 {
 type:{name:'Radio 单选框',describe:'在一组备选项中进行单选'},
 content:[
 {classify:'基础用法',classifyDescribe:'由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。',
 code:' <p class="e-radio">\
 <input type="radio" id="radio1" name="r" checked="" value="1"><label for="radio1"><i></i>备选项</label>\
 </p>\
 <p class="e-radio">\
 <input type="radio" id="radio2" name="r" value="2"><label for="radio2"><i></i>备选项</label>\
 </p>'},
 {classify:'禁用状态',classifyDescribe:'单选框不可用的状态。',
 code:' <p class="e-radio e-disabled">\
 <input type="radio" id="radio3" name="r1" value="1" checked="" disabled=""><label for="radio3"><i></i>备选项</label>\
 </p>\
 <p class="e-radio e-disabled">\
 <input type="radio" id="radio4" name="r1" value="2" disabled=""><label for="radio4"><i></i>备选项</label>\
 </p>'},
 {classify:'禁用状态',classifyDescribe:'单选框不可用的状态。',
 code:' <p class="e-radio e-disabled">\
 <input type="radio" id="radio3" name="r1" value="1" checked="" disabled=""><label for="radio3"><i></i>备选项</label>\
 </p>\
 <p class="e-radio e-disabled">\
 <input type="radio" id="radio4" name="r1" value="2" disabled=""><label for="radio4"><i></i>备选项</label>\
 </p>'},]
 },

 ]*/


define(function(){
    /*//组件对象
    var modelArr=[]*/
    var modelArr={"Radio":{"type":{"name":"Radio 单选框","describe":"在一组备选项中进行单选"},"content":[{"classify":"基础用法","classifyDiscribe":"由于选项默认可见，不宜过多，若选项过多，建议使用+Select+选择器。","code":"<p class=\"e-radio\">\r\n      <input type=\"radio\" id=\"radio1\" name=\"r\" checked=\"\" value=\"1\"><label for=\"radio1\"><i></i>备选项</label>\r\n  </p>\r\n  <p class=\"e-radio\">\r\n      <input type=\"radio\" id=\"radio2\" name=\"r\" value=\"2\"><label for=\"radio2\"><i></i>备选项</label>\r\n  </p>"}]}}
    return modelArr
})