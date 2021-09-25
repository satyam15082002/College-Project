var toggleBtn=document.querySelector(".toggle-btn");
var navLinkNode=document.querySelector(".nav-links"); 
toggleBtn.addEventListener('click',()=>{
    navLinkNode.classList.toggle("active");
})
var galleyImg=document.getElementById("gallery-img");
var galleyImgIndex=0;
var galleyImgArray=["./assets/1.jpg","./assets/2.jpg","./assets/3.jpg","./assets/4.jpg","./assets/5.jpg"]
setInterval(function(){
    galleyImg.src=galleyImgArray[galleyImgIndex];
    galleyImgIndex++;
    galleyImgIndex%=galleyImgArray.length;
},1800)