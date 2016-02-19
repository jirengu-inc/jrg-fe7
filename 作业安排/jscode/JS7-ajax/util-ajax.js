


function ajax(opts) {
    //  做参数兼容
    opts.success = opts.success || function(){};
    opts.error = opts.error || function(){};
    opts.type = opts.type || 'get';
    opts.dataType = opts.dataType || 'json';
    opts.data = opts.data || {};

    //把 data里的数据序列化成 key=value&key2=value2 的形式
    //
    var dataStr = '';
    for (var key in opts.data) {
        dataStr += key + '=' + opts.data[key] + '&';
    }
    dataStr = dataStr.substr(0, dataStr.length - 1);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            if(xmlhttp.status === 200){
                //如数据类型是 text, 则不解析
                if(opts.dataType === 'text'){
                    opts.success(xmlhttp.responseText);
                }
                if(opts.dataType === 'json'){
                    var json = JSON.parse(xmlhttp.responseText);
                    opts.success(json);                 
                }
        
            }else{
                opts.error();
            }

        }
    };

    if (opts.type.toLowerCase() === 'post') {
        xmlhttp.open(opts.type, opts.url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(dataStr);
    }
    if (opts.type.toLowerCase() === 'get') {
        xmlhttp.open(opts.type, opts.url + '?' + dataStr, true);
        xmlhttp.send();
    }
}