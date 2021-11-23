window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    document.querySelector('.material-icons').addEventListener('click', displayOrHideHamburgerMenu);
}

function displayOrHideHamburgerMenu() {
    const linkMenu = document.querySelector('#links');

    if (linkMenu.classList.contains('linksVisible')) {
        closeHamburgerMenu(linkMenu);
    } else {
       openHamburgerMenu(linkMenu);
    }

}

function closeHamburgerMenu(linkMenu) {
    linkMenu.classList.add('linksHidden');
}

function openHamburgerMenu(linkMenu) {
    linkMenu.classList.add('linksVisible');
}