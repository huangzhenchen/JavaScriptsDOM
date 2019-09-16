//可录入脚本的函数：addLoadEvent(),insertAfter()


function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}


function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}


function preparePlaceholder(){//负责创建一个img元素和一个p元素
    //对象检测，判断是否兼容
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/banner_5.png");
    placeholder.setAttribute("alt","shanghai");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var txt=document.createTextNode("Choose an image");
    description.appendChild(txt);
    var gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,imagegallery);
    insertAfter(description,placeholder);

            /*插入练习*/
            /*  //把p元素和img元素插入到cha7-1.html中
                document.getElementsByTagName("body")[0].appendChild(placeholder);// body.appendChild(placeholder); body.appendChild(description);        ×错误
                document.getElementsByTagName("body")[0].appendChild(description);//因为图片清单恰好是<body>的最后一个元素
                // document.body.appendChild(placeholder);      HTML-DOM写法

                //前插
                var gallery=document.getElementById("imagegallery");
                gallery.parentNode.insertBefore(placeholder,gallery);
                gallery.parentNode.insertBefore(description,gallery);
            */
}

//负责处理事件
function prepareGallery() {
    if (!document.getElementsByTagName || !document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

    var imagegallery = document.getElementById("imagegallery");
    var pic = imagegallery.getElementsByTagName("a");//不是li
    for (var i = 0; i < pic.length; i++) {
        // pic[i].onclick=showPic(this);
        pic[i].onclick = function () {
            // showPic(this);//默认了showPic()会正常返回
            // return false;
            return showPic(this) ? false : true;//如果showPic()返回false，则图片没有更新，于是返回true以允许默认行为发生（窗口打开图片）
        }
        pic[i].onkeypress=pic[i].onclick;
    }
}

//负责把占位符图片切换为目标图片
function showPic(whichpic) {
    //改图片
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    //改文本
    if (document.getElementById("description")) {
        if (whichpic.getAttribute("title")) {
            var text = whichpic.getAttribute("title");
        } else {
            var text = "";
        }//var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";        
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        } //description.childNodes[0].nodeValue=text;// description.firstChild.nodeValue=text;
    }
    return true;
}
// function countBodyChildren() {
//     var body_element = document.getElementsByTagName("body")[0];
//     alert(body_element.nodeType);

// }

//启用以上功能
addLoadEvent(prepareGallery);// window.onload=prepareGallery;
addLoadEvent(preparePlaceholder);







