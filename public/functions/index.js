const navbarHamburger = document.getElementsByClassName("navbar-toggler")[0];
const pages = document.querySelectorAll(".content-container");
const collapseNavbar = document.getElementById("collapse-navbar");
const gatheringPage = document.getElementById("gathering-page")
let collapse = true;


console.log("gat", gatheringPage);



navbarHamburger.addEventListener("click", () => {

    if (collapse) {
        collapseNavbar.classList.add("show");
    } else {
        collapseNavbar.classList.remove("show");
    }

    collapse = !collapse;
});


const togglePages = (chosenPage) => {
    if (pages) {
        for (let page = 0; page < pages.length; page++) {
            if (!pages[page].classList.contains("d-none")) {
                pages[page].classList.add("d-none");
            }
        }   
        pages[chosenPage].classList.remove("d-none");
    }
}

const onClickNavButton = (page) => {
    console.log(pages);
    
    togglePages(page);
}