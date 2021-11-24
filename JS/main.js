window.addEventListener('load', main);

/**
 * Runs at the start of the program
 */
function main() {
    addEventListeners();
    renderTheme();
    loadColorTheme();
}

/**
 *
 */
function addEventListeners() {
    document.querySelector('.material-icons').addEventListener('click', displayOrHideHamburgerMenu);
    document.querySelector('button').addEventListener('click', changeColorTheme);
    document.querySelector('#workexperience').addEventListener('click', enterWorkexperiencePage);
    document.querySelector('#education').addEventListener('click', enterEducationPage);
    document.querySelector('#portfolio').addEventListener('click', enterPortfolioPage);
}



function renderTheme() {
    let darkMode = false;
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function loadColorTheme() {
    darkMode = JSON.parse(localStorage.darkMode || null);
}

/**
 *
 */
function changeColorTheme(darkMode) {
    darkMode = !darkMode;
    localStorage.darkMode = darkMode;
    renderTheme();
}

/**
 *
 */
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

/**
 * Creates an HTML in another function
 * @param element What element to create
 * @returns {HTMLElement} The element we create
 */
function createHTMLElement(element) {
   let whatElement = document.createElement(element);
    document.querySelector('main').append(whatElement);
    return whatElement;

}

function enterWorkexperiencePage() {
    document.querySelector('main').innerHTML = '';

    let headLineWorkExperience = createHTMLElement('h2');
    headLineWorkExperience.innerText = 'Workexperience';

    let nameOfLatestJob = createHTMLElement('h3');
    nameOfLatestJob.innerText = `Folktandvården Sannegården, Göteborg`

    let latestWork = createHTMLElement('p');
    latestWork.innerText = `2018-10-01 - Now (on leave right now)
    
    Assisted the dentists with all kinds of treatments. 
    A lot of operations have I assisted. 
    I do dental fillings and a lot of other treatments on my own. 
    I have very many administrative assignments and I'm also environment proxy, HLR instructor`;

    let headLinePreviouslyJob = createHTMLElement('h2');
    headLinePreviouslyJob.innerText = `Folktandvården Eslöv i Skåne`;

    let infoPreviouslyJob = createHTMLElement('p');
    infoPreviouslyJob.innerText = `2015-12-20 - 2018-09-30
    
    Assisted the dentists. Administrative assignments. 
    Answered the phone in the reception.`;

    let earliestJob = createHTMLElement('h2');
    earliestJob.innerText = 'Hourly employee at a retirement home'

    let infoEarliestJob = createHTMLElement('p');
    infoEarliestJob.innerText = `2013-05-01 - 2014-08-01
    
    Helped the elderly with daily needs.`;
}

function enterEducationPage() {
    document.querySelector('main').innerHTML = '';

    let latestEduction = createHTMLElement('h2');
    latestEduction.innerText = 'Front End Developer'

    let infoLatestEducation = createHTMLElement('p');
    infoLatestEducation.innerText = `Now - 2023-`

    let headLinePreviouslyEducation = createHTMLElement('h2');
    headLinePreviouslyEducation.innerText = 'Dentalassistent, Helsingborg Higher Vocational Education';
    let infoPreciouslyEducation = createHTMLElement('p');
    infoPreciouslyEducation.innerText = '2014-09-01 - 2015-12-18';

    let headLineEarliestEducation = createHTMLElement('h2');
    headLineEarliestEducation.innerText = 'College Preparatory, Eslöv';
    let infoEarliestEducation = createHTMLElement('p');
    infoEarliestEducation.innerText = '2009-08-01 - 2012-06-01';
}

function enterPortfolioPage() {
    document.querySelector('main').innerHTML = '';

}