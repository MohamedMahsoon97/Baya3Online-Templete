// Overlay Loader //
const loaderOverlay = document.querySelector('.loader__overlay');
window.onload = () => {
  setTimeout(() => {
    loaderOverlay.style.display = 'none';
  }, 100);
}

// Overlay Register 
const registerOverlay = document.querySelector('.overlay-register__container');
const registerOverlayClose = document.querySelector('.close_reg-form');
const registerOverlayOpen = document.querySelector('.dropdown__reg a');

registerOverlayClose.addEventListener('click', () => {
  registerOverlay.style.display = 'none';
})
registerOverlayOpen.addEventListener('click', () => {
  registerOverlay.style.display = 'flex';
})


//  Dropdown 1 //
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('display');
});

//  Dropdown 2 //
const dropdownAccount = document.querySelector(".header__account");
const dropdownReg = document.querySelector(".dropdown__reg");

dropdownAccount.addEventListener('click', () => {
  dropdownReg.classList.toggle('display');
});

// ChatBox //
const messageBox = document.querySelector(".message-box");
const chatBox = document.querySelector(".chat-box");
const messageContentInfo = document.querySelector(".meesage-content-info");

messageContentInfo.addEventListener('click', () => {
  chatBox.style.display = 'flex';
  messageBox.style.display = 'none';
})

// Swiper
let swiper = new Swiper(".mySwiper", {
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
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    960: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
});
owlOne.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY > 0) {
    owlOne.trigger('next.owl');
  } else {
    owlOne.trigger('prev.owl');
  }
  e.preventDefault();
});

// carousel latestAds 
var owlTwo = $('.latestAds__carousel');
owlTwo.owlCarousel({
  loop: true,
  nav: true,
  margin: 35,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    960: {
      items: 5
    },
    1200: {
      items: 4
    }
  }
});
owlTwo.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY > 0) {
    owlTwo.trigger('next.owl');
  } else {
    owlTwo.trigger('prev.owl');
  }
  e.preventDefault();
});

// Brands carousel //
var owlThree = $('.brands__carousel');
owlThree.owlCarousel({
  loop: true,
  nav: false,
  margin: 10,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    960: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
});
owlThree.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY > 0) {
    owlThree.trigger('next.owl');
  } else {
    owlThree.trigger('prev.owl');
  }
  e.preventDefault();
});

