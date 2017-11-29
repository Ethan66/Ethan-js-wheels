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
    var modelArr={"Radio":{"type":{"name":"Radio 单选框","describe":"在一组备选项中进行单选"},"content":[{"classify":"基础用法","classifyDiscribe":"由于选项默认可见，不宜过多，若选项过多，建议使用+Select+选择器。","code":"<p class=\"e-radio\">\r\n      <input type=\"radio\" id=\"radio1\" name=\"r\" checked=\"\" value=\"1\"><label for=\"radio1\"><i></i>备选项</label>\r\n  </p>\r\n  <p class=\"e-radio\">\r\n      <input type=\"radio\" id=\"radio2\" name=\"r\" value=\"2\"><label for=\"radio2\"><i></i>备选项</label>\r\n  </p>"},{"classify":"禁用状态","classifyDiscribe":"单选框不可用的状态。","code":"<p class=\"e-radio e-disabled\">\r\n      <input type=\"radio\" id=\"radio3\" name=\"r1\" value=\"1\" checked=\"\" disabled=\"\"><label for=\"radio3\"><i></i>备选项</label>\r\n  </p>\r\n  <p class=\"e-radio e-disabled\">\r\n      <input type=\"radio\" id=\"radio4\" name=\"r1\" value=\"2\" disabled=\"\"><label for=\"radio4\"><i></i>备选项</label>\r\n  </p>"},{"classify":"带有边框","classifyDiscribe":"","code":"<p class=\"e-radio e-border\">\r\n      <input type=\"radio\" id=\"radio5\" name=\"r2\" value=\"1\" checked=\"\"><label for=\"radio5\"><i></i>备选项</label>\r\n  </p>\r\n  <p class=\"e-radio e-border\">\r\n      <input type=\"radio\" id=\"radio6\" name=\"r2\" value=\"2\"><label for=\"radio6\"><i></i>备选项</label>\r\n  </p>"}]},"Checkbox":{"type":{"name":"Checkbox 多选框","describe":"一组备选项中进行多选"},"content":[{"classify":"基础用法","classifyDiscribe":"单独使用可以表示两种状态之间的切换，写在标签中的内容为+checkbox+按钮后的介绍。","code":"<p class=\"e-checkbox\">\r\n      <input type=\"checkbox\" id=\"checkbox1\" name=\"c\" checked=\"\" value=\"1\"><label for=\"checkbox1\"><i></i>备选项</label>\r\n  </p>\r\n  <p class=\"e-checkbox\">\r\n      <input type=\"checkbox\" id=\"checkbox2\" name=\"c\" value=\"2\"><label for=\"checkbox2\"><i></i>备选项</label>\r\n  </p>"},{"classify":"禁用状态","classifyDiscribe":"多选框不可用状态。","code":"<p class=\"e-checkbox e-disabled\">\r\n      <input type=\"checkbox\" id=\"checkbox3\" name=\"c2\" disabled=\"\" checked=\"\" value=\"1\"><label for=\"checkbox3\"><i></i>备选项</label>\r\n  </p>\r\n  <p class=\"e-checkbox e-disabled\">\r\n      <input type=\"checkbox\" id=\"checkbox4\" name=\"c2\" disabled=\"\" value=\"2\"><label for=\"checkbox4\"><i></i>备选项</label>\r\n  </p>"},{"classify":"带有边框","classifyDiscribe":"","code":"<p class=\"e-checkbox e-border\">\r\n      <input type=\"checkbox\" id=\"checkbox5\" name=\"c3\" checked=\"\" value=\"1\"><label for=\"checkbox5\"><i></i>备选项</label>\r\n  </p>\r\n  <p class=\"e-checkbox e-border\">\r\n      <input type=\"checkbox\" id=\"checkbox6\" name=\"c3\" value=\"2\"><label for=\"checkbox6\"><i></i>备选项</label>\r\n  </p>"}]},"Input":{"type":{"name":"Input 输入框","describe":"通过鼠标或键盘输入字符"},"content":[{"classify":"基础用法","classifyDiscribe":"","code":"<p class=\"e-input\">\r\n      <input type=\"text\" name=\"i1\" placeholder=\"请输入内容\">\r\n  </p>"},{"classify":"禁用状态","classifyDiscribe":"","code":"<p class=\"e-input\">\r\n      <input type=\"text\" name=\"i2\" placeholder=\"请输入内容\" disabled=\"\">\r\n  </p>"},{"classify":"带icon的输入框","classifyDiscribe":"带有图标标记输入类型","code":"<p class=\"e-input e-icon-left\">\r\n      <input type=\"text\" name=\"i1\" placeholder=\"请填写用户名\">\r\n      <svg class=\"icon\" aria-hidden=\"true\">\r\n          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-user\"></use>\r\n      </svg>\r\n  </p>\r\n  <p class=\"e-input e-icon e-icon-after\">\r\n      <input type=\"text\" name=\"i1\" placeholder=\"请选择日期\">\r\n      <svg class=\"icon\" aria-hidden=\"true\">\r\n          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-biaoge\"></use>\r\n      </svg>\r\n  </p>"}]},"InputNumber":{"type":{"name":"InputNumber 计数器","describe":"仅允许输入标准的数字值，可定义范围"},"content":[{"classify":"基础用法","classifyDiscribe":"","code":"<p class=\"e-inputNumber\">\r\n    <span class=\"minus\"></span><input type=\"text\" value=\"1\" /><span class=\"plus\"></span>\r\n  </p>"}]}}
    return modelArr
})