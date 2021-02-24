function  ajax(options){
    //默认值
    var defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {
			'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function () {},
        error: function () {}
    }
    Object.assign(defaults,options);
    //创建ajax对象
    var xhr = new XMLHttpRequest();
    //拼接
    var params = '';
    for(var k in defaults.data) {
        params += k + '=' + defaults.data[k]+'&';
        params = params.substr(0,params.length - 1);
    }
    //判断请求
    if(defaults.type == 'get') {
        defaults.url = defaults.url + '?' + params;
    }
    //配置ajax请求
    xhr.open(defaults.type,defaults.url);
    //请求为post
    if(defaults.type == 'post') {
        var contentType = defaults.header['Content-Type']
        //设置类型
        xhr.setRequestHeader('Content-Type',contentType);
        if(contentType == 'application/json') {
            xhr.send(JSON.stringify(defaults.data))
        }else {
            xhr.send(params);
        }
    }else {
        xhr.send();
    }
    //监听onload事件
    xhr.onload = function(){
        //获取数据
        var contentType = xhr.getResponseHeader('Content-Type');
        //服务器返回的数据
        var responseText = xhr.responseText;
        //
        if(contentType.includes('application/json')){
            //转化为json对象
            responseText = JSON.parse(responseText); 
            
        }
         if(xhr.status == 200) {
             //成功
            defaults.success(xhr.responseText,xhr);
         }else {
             //失败
             defaults.error(xhr.responseText,xhr)
         }
    }

}