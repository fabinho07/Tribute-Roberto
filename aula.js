window.onload = function() {
    document.querySelector(".menu-mobile").addEventListener("click", function(){
       if(document.querySelector("nav ul").style.display == 'flex') {
        document.querySelector("nav ul").style.display = 'none';
       } else{
        document.querySelector("nav ul").style.display = 'flex';
       }
    });
}