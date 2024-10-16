let currentPageId = "aboutMe";

function switchPage(pageId) {
    let allPages = document.getElementsByClassName("page");
    for (let i = 0; i < allPages.length; i++) {
        allPages[i].style.display = "none";
    }

    let allNavButtons = document.getElementsByClassName("navButtons");
    for (let i = 0; i < allNavButtons.length; i++) {
        allNavButtons[i].classList.remove("active");
    }
    document.getElementById(pageId + "Button").classList.add("active");
    document.getElementById(pageId).style.display = "flex";
}