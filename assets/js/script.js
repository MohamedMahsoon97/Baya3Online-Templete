// Overlay Loader //
const loaderOverlay = document.querySelector('.loader__overlay');
window.onload = () => {
  setTimeout(() => {
    loaderOverlay.style.display = 'none';
  }, 500);
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
// const messageBox = document.querySelector(".message-box");
// const chatBox = document.querySelector(".chat-box");
// const messageContentInfo = document.querySelector(".message-content-info");

// messageContentInfo.addEventListener('click', () => {
//   chatBox.style.display = 'flex';
//   messageBox.style.display = 'none';
// })

// vertical tabs //
// function virticalTabs(name) {
//   return document.getElementsByClassName(name);
// }

// let tabPanes = virticalTabs("tab-header")[0].getElementsByTagName("div");
// console.log(tabPanes)

// for (let i = 0; i < tabPanes.length; i++) {
//   tabPanes[i].addEventListener("click", function () {
//     virticalTabs("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
//     tabPanes[i].classList.add("active");
//     virticalTabs("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
//     virticalTabs("tab-content")[0].querySelectorAll(".tab-content-details")[i].classList.add("active");
//   });
// }


// Accordion //
$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables 
    var links = this.el.find('.link');
    // Event
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
  }

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }

  var accordion = new Accordion($('#accordion'), false);
});

// Tabs Toggle //
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active-tabBtn");
        });
        e.target.classList.add("active-tabBtn");

        contents.forEach(content => {
            content.classList.remove("active-content");
        });
        const element = document.getElementById(id);
        element.classList.add("active-content");
    }
}