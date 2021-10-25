// Open product-edit
let storeCategorySections = document.getElementById("store-category-sections");
let productEditContainer = document.getElementById("product-edit-container");
let tabContentHeading = document.getElementById("tab-content-heading");
let addNewProduct = document.getElementById("add-new-product");
addNewProduct.addEventListener('click' , function() {
	storeCategorySections.style.display = "none";
	tabContentHeading.style.display = "none";
	productEditContainer.style.display = "flex";
});

// Open data contact edit
let dataContactContainer = document.getElementById("data-contact-container");
let dataContactEdit = document.getElementById("data-contact-edit");
let dataBtnEdit = document.getElementById("data-btn-edit");
dataBtnEdit.addEventListener('click' , function() {
	dataContactContainer.style.display = "none";
	dataContactEdit.style.display = "flex";
});


let wrapperStore = document.getElementById("contentWrapper");
let tabsInStore = document.getElementById("tabs-in-store");
let storeNameImg = document.getElementById("store-name-img");

storeNameImg.addEventListener("click" , function() {
	wrapperStore.style.display = "flex";
	tabsInStore.style.display = "none";
})