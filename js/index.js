//Nav
var toggleBtn=document.querySelector(".toggle-btn");
var navLinkNode=document.querySelector(".nav-links"); 
toggleBtn.addEventListener('click',()=>{
    navLinkNode.classList.toggle("active");
})

//Gallery
var galleyImg=document.getElementById("gallery-img");
var galleyImgIndex=0;
var galleyImgArray=["./assets/1.jpg","./assets/2.jpg","./assets/3.jpg","./assets/4.jpg","./assets/5.jpg"]
setInterval(function(){
    galleyImg.src=galleyImgArray[galleyImgIndex];
    galleyImgIndex++;
    galleyImgIndex%=galleyImgArray.length;
},1800)

//Dark-Light Theme
var is_Dark=false;
var bodyNode=document.querySelector("body");
var toggleTheme= document.getElementById("theme-toggle")
var themeVar=localStorage.getItem("global-theme");
if(themeVar!=null&&themeVar=="dark")
{
    is_Dark=true;
    bodyNode.classList.add("dark");
}
toggleTheme.addEventListener('click',()=>{
    if(is_Dark)
    {
        is_Dark=false;
        localStorage.setItem("global-theme","light")
        bodyNode.classList.remove("dark");
    }
    else
    {
        is_Dark=true;
        localStorage.setItem("global-theme","dark")
        bodyNode.classList.add("dark");
    }
})