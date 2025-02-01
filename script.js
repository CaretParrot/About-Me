let currentPageId = "aboutMe";

function switchPage(pageId, display) {
    let allPages = document.getElementsByClassName("page");
    for (let i = 0; i < allPages.length; i++) {
        allPages[i].style.display = "none";
    }

    let allNavButtons = document.getElementsByClassName("navButtons");
    for (let i = 0; i < allNavButtons.length; i++) {
        allNavButtons[i].classList.remove("active");
    }

    document.getElementById(pageId + "Button").classList.add("active");
    document.getElementById("header").innerHTML = document.getElementById(pageId).dataset.header;

    document.getElementById(pageId).style.display = display;
}

