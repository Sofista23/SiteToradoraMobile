function aparece(){
    var a=document.getElementsByClassName("menu")
    var b=document.getElementById("cabeca")
    var c=document.getElementById("fechador")
    
    for(var i=0;i<a.length;i++){
        a[i].style.display="inline"
    }
    b.style.height="80px"
    c.style.display="block"
}

function fecha(){
    var a=document.getElementsByClassName("menu")
    var b=document.getElementById("cabeca")
    var c=document.getElementById("fechador")
    
    for(var i=0;i<a.length;i++){
        a[i].style.display="none"
    }
    b.style.height="45px"
    c.style.display="none"
}