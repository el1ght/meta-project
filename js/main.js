(()=>{for(var e=document.images,t=e.length,o=0,a=document.getElementById("page-preloader"),n=document.getElementById("load_perc"),r=0;r<t;r++)image_clone=new Image,image_clone.onload=s,image_clone.onerror=s,image_clone.src=e[r].src;function s(){o++,n.innerHTML=(100/t*o<<0)+"%",o>=t&&setTimeout((function(){a.classList.contains("done")||a.classList.add("done")}),1e3)}TweenMax.to("#t",.3,{"stroke-dashoffset":-16,ease:Linear.easeNone,repeat:-1,yoyo:!1,repeatDelay:0}),TweenMax.to("#g",.2,{"stroke-dashoffset":-16,ease:Linear.easeNone,repeat:-1,yoyo:!1,repeatDelay:0}),TweenMax.to("#r",.4,{"stroke-dashoffset":-21,ease:Linear.easeNone,repeat:-1,yoyo:!1,repeatDelay:0}),TweenMax.to("#l",.5,{"stroke-dashoffset":-18,ease:Linear.easeNone,repeat:-1,yoyo:!1,repeatDelay:0}),TweenMax.to("#p",.2,{"stroke-dashoffset":-17,ease:Linear.easeNone,repeat:-1,yoyo:!1,repeatDelay:0}),TweenMax.to("#x",.1,{"stroke-dashoffset":-18,ease:Linear.easeNone,repeat:-1,yoyo:!1,repeatDelay:0}),VanillaTilt.init(document.querySelectorAll(".first-layer"),{max:10,speed:200,reverse:!0});var i=document.querySelector(".menu__icon");if(i){var l=document.querySelector(".nav");i.addEventListener("click",(function(e){document.body.classList.toggle("_lock"),i.classList.toggle("_active"),l.classList.toggle("_active")}))}new Swiper(".swiper-container",{loop:!0,direction:"vertical",spaceBetween:30,centeredSlides:!0,speed:500,autoplay:{delay:2e3},pagination:{el:".swiper-pagination",type:"progressbar"}}),new Swiper(".swiper-container-2",{loop:!0,direction:"vertical",spaceBetween:30,centeredSlides:!0,speed:500,autoplay:{delay:2e3},pagination:{el:".swiper-pagination-2",type:"progressbar"}});var c=document.querySelector(".intro"),d=c.querySelector("video"),g=document.getElementsByClassName("content"),y=document.getElementsByClassName("content2"),p=(document.querySelector("section"),document.getElementsByClassName("content"),new ScrollMagic.Controller),m=new ScrollMagic.Scene({duration:7e3,triggerElement:c,triggerHook:0}).setPin(c).addTo(p),u=TweenMax.fromTo(g,3,{y:0},{y:-2e3}),w=(new ScrollMagic.Scene({duration:7e3,triggerElement:c,triggerHook:0}).setTween(u).addTo(p),TweenMax.fromTo(y,.5,{y:-7e3},{y:0})),f=(new ScrollMagic.Scene({duration:7e3,triggerElement:c,triggerHook:0}).setTween(w).addTo(p),0),T=0;m.on("update",(function(e){f=e.scrollPos/1e3})),setInterval((function(){T+=.2*(f-T),d.currentTime=T}),70),AOS.init()})();