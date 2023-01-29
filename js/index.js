
// scroll top :
let up = document.querySelector('.up');
console.log(up)

window.onscroll = function(){
    if(window.scrollY > 500){
        up.style.cssText="display:block";
    }
    else{
        up.style.display='none';
    }
    up.onclick = function(){
        window.scrollTo({
            left:0,
            top:0,
            behavior : "smooth"
        })
    }
}