//плавный скролл
$(function(){ 

  $('.menu, .footer__menu, a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
  });

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
});

});

//3-d меню 
$( window ).resize(function() {
  $window = $(window);
  if( $window .width() > 800){
  
    const burger_menu = document.querySelector(".burger__menu");
    const main = document.querySelector(".main__inner");
    burger_menu.addEventListener("click", () => {
        main.classList.toggle("active");
    });

    let bg = document.querySelector('.main__bg');
  window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
  });
  }
  
   });    
  
  


//параллакс эффект
if (!window.matchMedia('(pointer: coarse)').matches) {
  
}

//слайдер
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: false,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

//анимация для блоков
AOS.init({
  once: true,
  disable: 'mobile'
});