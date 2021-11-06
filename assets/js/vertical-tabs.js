// vertical tabs //
function virticalTabs(name) {
    return document.getElementsByClassName(name);
}
let tabPanes = virticalTabs("tab-header")[0].getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
    tabPanes[i].addEventListener("click", function () {
        virticalTabs("tab-header")[0]
            .getElementsByClassName("active")[0]
            .classList.remove("active");
        tabPanes[i].classList.add("active");
        virticalTabs("tab-content")[0]
            .getElementsByClassName("active")[0]
            .classList.remove("active");
        virticalTabs("tab-content")[0]
            .querySelectorAll(".tab-content-details")
            [i].classList.add("active");
    });
}
