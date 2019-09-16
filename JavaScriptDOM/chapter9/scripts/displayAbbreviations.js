function displayAbbreviations(){
    //检查兼容性，对象探测语句
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    
    //取得所有缩略词
    var abbr=document.getElementsByTagName("abbr");
    if(abbr.length<1) return false;
    var defs=new Array();
    //遍历这些缩略词
    for(var i=0;i<abbr.length;i++){
        if(abbr[i].childNodes.length<1) continue;//如果当前元素没有子节点，就立刻开始下一次循环（微软有些IE不识别abbr）
        var definition=abbr[i].getAttribute("title");
        var key=abbr[i].lastChild.nodeValue;  //要获取内部文本，注意文本内容也是它的一个文本节点，所以不能写abbr[i].nodeValue
        defs[key]=definition;//第一个元素的下标是W3C，值是World Wide Web Consortium
        
    }
    //创建定义列表
    var dl=document.createElement("dl");
    //遍历定义
    for(key in defs){
        var definition=defs[key];
        //创建定义标题
        var dt=document.createElement("dt");
        var dtkey=document.createTextNode(key);
        dt.appendChild(dtkey);
        //创建定义描述
        var dd=document.createElement("dd");
        var dddefin=document.createTextNode(definition)
        dd.appendChild(dddefin);
        //把它们添加到定义列表
        dl.appendChild(dt);
        dl.appendChild(dd);
    }
    if(dl.childNodes.length<1) return false;
    //创建标题
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //把标题添加 到页面主体
    document.body.appendChild(header);
    //把定义列表添加到页面主体
    document.body.appendChild(dl);
}
addLoadEvent(displayAbbreviations);