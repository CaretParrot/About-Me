let currentPageId = "aboutMe";

function switchPage(pageId) {
    let allPages = document.getElementsByClassName("page");
    for (let i = 0; i < allPages.length; i++) {
        allPages[i].style.display = "none";
    }

    let allNavButtons = document.getElementsByClassName("navButtons");
    for (let i = 0; i < allNavButtons.length; i++) {
        allNavButtons[i].style.backgroundColor = "hsl(240, 20%, 20%)";
    }
    document.getElementById(pageId + "Button").style.backgroundColor = "hsl(240, 25%, 25%)";
    document.getElementById(pageId).style.display = "flex";
}