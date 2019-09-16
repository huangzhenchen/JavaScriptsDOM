// function styleHeaderSiblings(){
//    if(!document.getElementsByTagName) return false;
//     var headers=document.getElementsByTagName("h1");
//     var elem;
//     for(var i=0;i<headers.length;i++){
//         elem=getNextElement(headers[i].nextSibling);
//         elem.style.fontWeight="bold";
//         elem.style.fontSize="1.2em";
//     }
// }

//P168
function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    var headers=document.getElementsByTagName("h1");
    var elem;
    for(var i=0;i<headers.length;i++){
        elem=getNextElement(headers[i].nextSibling);
        // elem.className="intro";
        addClass(elem,"intro");
    }
}

//对函数进行抽象：使他更为通用
//P170  以上的只适合h1元素，现将其改得更为通用
function styleElementSiblings(tag,theclass){
    if(!document.getElementsByTagName) return false;
    var elems=document.getElementsByTagName(tag);
    var elem;
    for(var i=0;i<headers.length;i++){
        elem=getNextElement(elems[i].nextSibling);
        // elem.className="intro";
        addClass(elem,theclass);
    }
}

//利用通用的函数，利用以下语句就可实现原本的效果
// addLoadEvent(function(){
//     styleElementSiblings("h1","intro");
// });


function getNextElement(node){
    if(node.nodeType==1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}

function addClass(element,value){
    if(!element.className){
        element.className=value;
    }else{
        newClassName=element.className;
        newClassName +=" ";
        newClassName +=value;
        element.className=newClassName;
    }
}
addLoadEvent( styleHeaderSiblings);