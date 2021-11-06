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
const openFavBtn = document.getElementById("open-fav");
const closeCartBtn = document.getElementById("close_cart");
const addToCart = document.querySelectorAll(".hold__item svg");
const cartContent = document.querySelector(".side__bar-cart");
const favContent = document.querySelector(".side__bar-fav");
const cartContainer = document.querySelector(".side__bar-cart-content");
const favContainer = document.querySelector(".side__bar-fav-content");
const countProductAdded = document.querySelector(".count-product-added");
const countProductFav = document.querySelector(".count-product-fav");
const countProductCart = document.querySelector(".count-product-cart");
const sweetAlert = document.querySelector(".sweet-alert");
const closeAlert = document.querySelector(".close-alert");
const alertAdded = document.querySelector(".alert-added");

// Add to cart //
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
						<div>
							<span>${Products.myPrice} </span>
							<button class="remove__product">حذف </button>
						</div>
					</div>
				</div>
			`
			alertAdded.style.display = "block";
			alertAdded.innerHTML = `<span>تم إضافه المنتج</span>`
			setTimeout(() => {
				alertAdded.style.display = "none";
			}, 1000);
			countProductAdded.innerHTML = cartContainer.children.length;
			countProductCart.innerHTML = cartContainer.children.length;

			//*************** Remove form cart ***************//
			const removeProduct = document.querySelectorAll(".remove__product");
			console.log(removeProduct.length);
			removeProduct.forEach( itemRemoved => {
				itemRemoved.addEventListener("click" , (e) => {
					let productDeleted = e.target.parentElement.parentElement.parentElement;
					productDeleted.remove();
					countProductAdded.innerHTML = cartContainer.children.length;
					countProductCart.innerHTML = cartContainer.children.length;
					if (cartContainer.children.length == 0) {
						cartContainer.innerHTML += `
							<span class="product-notfound">لا يوجد منتجات</span>
						`
					};
				});
			});
			
		};
		if (e.target.id === "heart") {
			let myImg = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.src;
			let productName = e.target.parentElement.parentElement.nextElementSibling.firstElementChild;
			let productPrice = e.target.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild;
			let Products = {
				id : e.target.id,
				myImg : myImg,
				myName : productName.innerHTML,
				myPrice : productPrice.innerHTML
			};
			favContainer.innerHTML += `
				<div class="fav-content">
					<img src="${Products.myImg}">
					<div class="fav-desc">
						<h3>${Products.myName}</h3>
						<div>
							<span>${Products.myPrice} </span>
							<button class="remove__product">حذف </button>
						</div>
					</div>
				</div>
			`
			alertAdded.style.display = "block";
			alertAdded.innerHTML = `<span> تم إضافه المنتج الى المفضله</span>`
			setTimeout(() => {
				alertAdded.style.display = "none";
			}, 1000);
			countProductFav.innerHTML = favContainer.children.length;
			countProductCart.innerHTML = favContainer.children.length;

			//*************** Remove form cart ***************//
			const removeProduct = document.querySelectorAll(".remove__product");
			console.log(removeProduct.length);
			removeProduct.forEach( itemRemoved => {
				itemRemoved.addEventListener("click" , (e) => {
					let productDeleted = e.target.parentElement.parentElement.parentElement;
					productDeleted.remove();
					countProductAdded.innerHTML = favContainer.children.length;
					countProductCart.innerHTML = favContainer.children.length;
					if (favContainer.children.length == 0) {
						favContainer.innerHTML += `
							<span class="product-notfound">لا يوجد منتجات</span>
						`
					};
				});
			});
			
		};
	});
});

// Open cart //
openCartBtn.addEventListener("click" , () => {
	if (cartContainer.children.length  > 0) {
		cartContent.style.right = "0%";
	} else {
		sweetAlert.style.display = "flex";
		closeAlert.addEventListener("click" , () => {
			sweetAlert.style.display = "none";
		});
	};
});
closeCartBtn.addEventListener("click" , () => cartContent.style.right = "-100%");

// Open fav //
if (openFavBtn !== undefined &&  openFavBtn !== null) {
	openFavBtn.addEventListener("click" , () => {
	if (favContainer.children.length  > 0) {
		favContent.style.display = "flex";
	} else {
		sweetAlert.style.display = "flex";
		closeAlert.addEventListener("click" , () => {
			sweetAlert.style.display = "none";
		});
	};
	});
	closeCartBtn.addEventListener("click" , () => favContent.style.display = "none");
}



//*************** Overlay Register  ***************//
var registerOverlay = document.querySelector(".overlay-register__container");
var registerOverlayClose = document.querySelector(".close_reg-form");
var registerOverlayOpen = document.querySelector(".dropdown__reg a");

registerOverlayClose.addEventListener( "click", () => registerOverlay.style.display = "none");
registerOverlayOpen.addEventListener( "click", () => registerOverlay.style.display = "flex");

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
let accountOneRes = document.getElementById("dropdown-btn-one-res");
let accountTwo = document.getElementById("dropdown-btn-two");
let accountTwoRes = document.getElementById("dropdown-btn-two-res");
let dropdownReg = document.getElementById("dropdown__reg");
let dropdownRegRes = document.getElementById("dropdown__reg-res");
let dropdownRegTwo = document.getElementById("dropdown__reg-2");
let dropdownRegTwoRes = document.getElementById("dropdown__reg-2-res");

accountOne.addEventListener("click", () => dropdownReg.classList.toggle("display"));
accountOneRes.addEventListener("click", () => dropdownRegRes.classList.toggle("display"));
accountTwo.addEventListener("click", () => dropdownRegTwo.classList.toggle("display"));
accountTwoRes.addEventListener("click", () => dropdownRegTwoRes.classList.toggle("display"));

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
let allTabs = document.getElementById("wrapper");
let tabButton = document.querySelectorAll(".tab-button");
let contents = document.querySelectorAll(".content");

if (allTabs !== undefined && allTabs !== null) {
	allTabs.onclick = function (e) {
		const id = e.target.dataset.id;
		if (id) {
			tabButton.forEach((btn) => {
				btn.classList.remove("active-tabBtn");
			});
			e.target.classList.add("active-tabBtn");
			contents.forEach((content) => {
				content.classList.remove("active-content");
			});
			const element = document.getElementById(id);
			element.classList.add("active-content");
		}
	};
};

//*************** ChatBox ***************//
let messageContentInfo = document.querySelector(".message-content-info");
if (messageContentInfo !== undefined && messageContentInfo !== null) {
	messageContentInfo.addEventListener('click', openMessage);

	function openMessage() {
		let messageBox = document.querySelector(".message-box");
		let chatBox = document.querySelector(".chat-box");
		chatBox.style.display = 'flex';
		messageBox.style.display = 'none';
	};
};

//*************    open store    *************//
let myStoreEdit = document.querySelector(".my-store-edit");
let myStore = document.querySelector(".my-store");
let storeAdminBtn = document.getElementById("store-admin");
let addStoreBtn = document.getElementById("submit-btn-add");
if (addStoreBtn !== undefined && addStoreBtn !== null) {
	addStoreBtn.addEventListener('click' , function() {
		myStoreEdit.style.display = "none";
		myStore.style.display = "flex";
	});
}
if (storeAdminBtn !== undefined && storeAdminBtn !== null) {
	storeAdminBtn.addEventListener('click' , function() {
		myStoreEdit.style.display = "none";
		myStore.style.display = "flex";
	});
};

// Open product-edit
let storeCategorySections = document.getElementById("store-category-sections");
let productEditContainer = document.getElementById("product-edit-container");
let tabContentHeading = document.getElementById("tab-content-heading");
let addNewProduct = document.getElementById("add-new-product");
if (addNewProduct !== undefined && addNewProduct !== null) {
	addNewProduct.addEventListener('click' , function() {
		storeCategorySections.style.display = "none";
		tabContentHeading.style.display = "none";
		productEditContainer.style.display = "flex";
	});
};

// Open data contact edit
let dataContactContainer = document.getElementById("data-contact-container");
let dataContactEdit = document.getElementById("data-contact-edit");
let dataBtnEdit = document.getElementById("data-btn-edit");
if (dataBtnEdit !== undefined && dataBtnEdit !== null) {
	dataBtnEdit.addEventListener('click' , function() {
		dataContactContainer.style.display = "none";
		dataContactEdit.style.display = "flex";
	});
};