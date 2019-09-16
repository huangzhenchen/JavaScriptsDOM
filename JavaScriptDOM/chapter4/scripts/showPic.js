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
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);

}

addLoadEvent(prepareGallery);
// window.onload=prepareGallery;
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
        // pic[i].onkeypress=pic[i].onclick;
    }
}
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