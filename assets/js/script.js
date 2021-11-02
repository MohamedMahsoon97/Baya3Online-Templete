//*************** Overlay Loader ***************//
window.onload = () => {
	const loaderOverlay = document.querySelector(".loader__overlay");
	setTimeout(() => {
		loaderOverlay.style.display = "none";
	}, 500);
};

/*==================== SHOW SCROLL UP ====================*/
function scrollTop() {
	const scrollTop = document.getElementById('scroll-up');
	if (this.scrollY >= 560) {
		scrollTop.classList.add('show-scroll');
	}
	else scrollTop.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollTop);

//*************** Navbar Responsive ***************//
const bars = document.querySelector('.nav__bars');
const sideBar = document.querySelector('.side__bar');
const closeSideBar = document.querySelector('.close__sidebar');
showSidebar = () => sideBar.classList.add('nav__active');
hideSidebar = () => sideBar.classList.remove('nav__active');

bars.addEventListener('click', () => {
	showSidebar();
})
closeSideBar.addEventListener('click', () => {
	hideSidebar();
});

// *************** My Cart  ***************//
const openCartBtn = document.getElementById("open-cart");
const closeCartBtn = document.getElementById("close_cart");
const addToCart = document.querySelectorAll(".hold__item svg");
const cartContent = document.querySelector(".side__bar-cart");
const cartContainer = document.querySelector(".side__bar-cart-content");
const countProductAdded = document.querySelector(".count-product-added");
const countProductCart = document.querySelector(".count-product-cart");
const sweetAlert = document.querySelector(".sweet-alert");
const closeAlert = document.querySelector(".close-alert");


addToCart.forEach( itemCart => {
	itemCart.addEventListener("click" , (e) => {
		if (e.target.id === "basket") {
			let myImg = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.src;
			let productName = e.target.parentElement.parentElement.nextElementSibling.firstElementChild;
			let productPrice = e.target.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild;
			let Products = {
				id : e.target.id,
				myImg : myImg,
				myName : productName.innerHTML,
				myPrice : productPrice.innerHTML
			};
			cartContainer.innerHTML += `
				<div class="cart-content">
					<img src="${Products.myImg}">
					<div class="cart-desc">
						<h3>${Products.myName}</h3>
						<span>${Products.myPrice}</span>
					</div>
				</div>
			`
			countProductAdded.innerHTML = cartContainer.children.length;
			countProductCart.innerHTML = cartContainer.children.length;
		};
	});
});

openCartBtn.addEventListener("click" , () => {
	if (cartContainer.children.length  > 0) {
		cartContent.style.display = "flex";
	} else {
		sweetAlert.style.display = "flex";
		closeAlert.addEventListener("click" , () => {
			sweetAlert.style.display = "none";
		});
	};
});
closeCartBtn.addEventListener("click" , () => cartContent.style.display = "none");



//*************** Overlay Register  ***************//
var registerOverlay = document.querySelector(".overlay-register__container");
var registerOverlayClose = document.querySelector(".close_reg-form");
var registerOverlayOpen = document.querySelector(".dropdown__reg a");

registerOverlayClose.addEventListener( "click", () => (registerOverlay.style.display = "none"));
registerOverlayOpen.addEventListener( "click", () => (registerOverlay.style.display = "flex") );

//***************  Register new member   ***************//
var registerOverlay = document.querySelector(".overlay-register__container");
let registerNewBtn = document.getElementById("register__new");
let beforeReg = document.querySelector(".dropdown-before-reg");
let afterReg = document.querySelector(".dropdown-after-reg");
let myUser = document.getElementById("user");
let myUserName = document.getElementById("userName");
let profileName = document.getElementById("profile-name");

registerNewBtn.addEventListener("click", () => {
	registerOverlay.style.display = "none";
	beforeReg.style.display = "none";
	afterReg.style.display = "flex";
	if (myUser.value == "") {
		alert("UserName Invalid");
	} else {
	myUserName.innerHTML = `${myUser.value}`;
	profileName.innerHTML = `${myUser.value}`;
	}
});


//****************   Dropdown 1 ***************//
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
dropdownToggle.addEventListener("click", () => dropdownMenu.classList.toggle("display"));

//***************  Dropdown 2  ***************//
let accountOne = document.getElementById("dropdown-btn-one");
let accountTwo = document.getElementById("dropdown-btn-two");
let dropdownReg = document.getElementById("dropdown__reg");
let dropdownRegTwo = document.getElementById("dropdown__reg-2");

accountOne.addEventListener("click", () => dropdownReg.classList.toggle("display"));
accountTwo.addEventListener("click", () => dropdownRegTwo.classList.toggle("display"));

//*************** Accordion ***************//
$(function () {
	var Accordion = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables
		var links = this.el.find(".link");
		// Event
		links.on(
			"click",
			{ el: this.el, multiple: this.multiple },
			this.dropdown
		);
	};
	Accordion.prototype.dropdown = function (e) {
		var $el = e.data.el;
		($this = $(this)), ($next = $this.next());

		$next.slideToggle();
		$this.parent().toggleClass("open");

		if (!e.data.multiple) {
			$el.find(".submenu")
				.not($next)
				.slideUp()
				.parent()
				.removeClass("open");
		}
	};
	var accordion = new Accordion($("#accordion"), false);
});

//*************** Tabs Toggle ***************//
// let allTabs = document.getElementById("wrapper");
// let tabButton = document.querySelectorAll(".tab-button");
// let contents = document.querySelectorAll(".content");

// allTabs.onclick = function (e) {
// 	const id = e.target.dataset.id;
// 	if (id) {
// 		tabButton.forEach((btn) => {
// 			btn.classList.remove("active-tabBtn");
// 		});
// 		e.target.classList.add("active-tabBtn");
// 		contents.forEach((content) => {
// 			content.classList.remove("active-content");
// 		});
// 		const element = document.getElementById(id);
// 		element.classList.add("active-content");
// 	}
// };
