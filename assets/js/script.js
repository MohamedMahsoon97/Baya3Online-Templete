const loaderOverlay = document.querySelector('.loader__overlay');
window.onload = () => {
  setTimeout(() => {
    loaderOverlay.style.display = 'none';
  }, 2000);
}

//  Dropdown  //
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener('click' , () => {
  dropdownMenu.classList.toggle('display');
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// Carousel Category
var owlOne = $('.categoery__carousel');
owlOne.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});
owlOne.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owlOne.trigger('next.owl');
    } else {
      owlOne.trigger('prev.owl');
    }
    e.preventDefault();
});

// carousel latestAds 
var owlTwo = $('.latestAds__carousel');
owlTwo.owlCarousel({
    loop:true,
    nav:true,
    margin:35,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:4
        }
    }
});
owlTwo.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owlTwo.trigger('next.owl');
    } else {
      owlTwo.trigger('prev.owl');
    }
    e.preventDefault();
});

// Brands carousel //
var owlThree = $('.brands__carousel');
owlThree.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});
owlThree.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owlThree.trigger('next.owl');
    } else {
      owlThree.trigger('prev.owl');
    }
    e.preventDefault();
});


