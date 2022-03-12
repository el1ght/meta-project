let
  images              = document.images,
  images_total_count  = images.length,
  images_loaded_count = 0,
  preloader           = document.getElementById('page-preloader'),
  perc_display        = document.getElementById('load_perc');

for( let i = 0; i < images_total_count; i++ ){
  image_clone         = new Image();
  image_clone.onload  = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src     = images[i].src;
}

function image_loaded() {
  images_loaded_count++;
  perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count ) << 0) + '%';

  if( images_loaded_count >= images_total_count ){
    setTimeout(function() {
      if( !preloader.classList.contains('done') ){
        preloader.classList.add('done');
      }
    }, 1000);
  }
}


TweenMax.to('#t', 0.3, { 'stroke-dashoffset':  -16, ease:Linear.easeNone, repeat: -1, yoyo: false, repeatDelay: 0 })
TweenMax.to('#g', 0.2, { 'stroke-dashoffset':  -16, ease:Linear.easeNone, repeat: -1, yoyo: false, repeatDelay: 0 })
TweenMax.to('#r', 0.4, { 'stroke-dashoffset':  -21, ease:Linear.easeNone, repeat: -1, yoyo: false, repeatDelay: 0 })
TweenMax.to('#l', 0.5, { 'stroke-dashoffset':  -18, ease:Linear.easeNone, repeat: -1, yoyo: false, repeatDelay: 0 })
TweenMax.to('#p', 0.2, { 'stroke-dashoffset':  -17, ease:Linear.easeNone, repeat: -1, yoyo: false, repeatDelay: 0 })
TweenMax.to('#x', 0.1, { 'stroke-dashoffset':  -18, ease:Linear.easeNone, repeat: -1, yoyo: false, repeatDelay: 0 })

VanillaTilt.init(document.querySelectorAll(".first-layer"), {
  max: 10,
  speed: 200,
  reverse: true
});


const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const menuBody = document.querySelector('.nav');
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}


const swiper = new Swiper(".swiper-container", {
  loop: true,
  direction: "vertical",
  
  spaceBetween: 30,
  centeredSlides: true,
  speed: 500,
  mousewheel: {
    invert: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
});



document.getElementById("hello").setAttribute("autoplay", "autoplay");




const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = document.getElementsByClassName("content");
const text2 = document.getElementsByClassName("content2");
//END SECTION
const section = document.querySelector("section");
const end = document.getElementsByClassName("content");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 7000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);



const textAnim = TweenMax.fromTo(text, 3, { y: 0 }, { y: -2000 });

let scene2 = new ScrollMagic.Scene({
  duration: 7000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

const textAnim2 = TweenMax.fromTo(text2, 0.5, { y: -2000 }, { y: 150 });

let scene3 = new ScrollMagic.Scene({
  duration: 7000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim2)
  .addTo(controller);

//Video Animation
let accelamount = 0.2;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;


  video.currentTime = delay;
}, 70);



AOS.init();
