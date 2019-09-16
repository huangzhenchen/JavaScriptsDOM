function getNewContent(){
    var request=getHTTPObject();
    if(request){
        request.open("GET","example.txt",true);
        request.onreadystatechange=function(){//处理响应（服务器给XMLHttpRequest对象送回响应）
            if(request.readyState == 4){
                alert("response received");
                var para =document.createElement("p");
                var txt =document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert('Sorry, your browswe doesnot support XMLHttpRequest');
    }
    alert("function done");
}
addLoadEvent(getNewContent);