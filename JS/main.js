window.addEventListener('load', main);

/**
 * start of the page
 */
function main() {
    addEventListeners();
    if (localStorage.getItem('swe') !== null ){
    startPageWithInformation(sweContent)}
}

/**
 * All the addEventListeners on the page
 */
function addEventListeners() {
    document.querySelector('button').addEventListener('click', colorTheme);
    document.querySelector('#work-experience').addEventListener('click', enterWorkExperiencePage);
    document.querySelector('#education').addEventListener('click', enterEducationPage);
    document.querySelector('#portfolio').addEventListener('click', enterPortfolioPage);
    document.querySelector('#uk').addEventListener('click', () => somethingLocalStorageSomething('eng'))
    document.querySelector('#swe').addEventListener('click', () => somethingLocalStorageSomething('swe'))
}

function somethingLocalStorageSomething(lang) {
    localStorage.clear()
    localStorage.setItem(lang, 'true');

}



function colorTheme() {
    let rootOfThePage = document.documentElement;
    rootOfThePage.style.setProperty('--bgColor', 'black');
    rootOfThePage.style.setProperty('--txtColor', 'white');
}

/**
 * Function that creates an element into an specific div and with a text content
 * @param whatDiv What div to place the element
 * @param whatElement What element to create
 * @param whatContent What content the element should contain
 * @returns {HTMLElement}
 */
function createHTMLElement(whatDiv, whatElement, whatContent) {
    let element = document.createElement(whatElement);
    element.innerHTML = whatContent;
    document.querySelector(whatDiv).append(element)
    return element;
}

/**
 * Create element on the start page
 */
function startPageWithInformation(contento) {

     createHTMLElement('#information', 'h2', contento.myName);
    let imageOfMe = createHTMLElement('#information', 'img');
    imageOfMe.src = './img/jag.jpg';
    document.querySelector('#information').appendChild(imageOfMe);
    imageOfMe.classList.add('imageOfMe');

    createHTMLElement('#information', 'h3', 'About Me');

    for (let i = 0; i < enContent.aboutMe.length; i++) {
        createHTMLElement('#information', 'p', enContent.aboutMe[i]);
    }
    let linkToMyLinkedAccount = createHTMLElement('#information', 'a', enContent.linkLinkedIn);
    linkToMyLinkedAccount.setAttribute('href', 'https://www.linkedin.com/in/anna-%C3%B6zmehak-789423226/');
    linkToMyLinkedAccount.setAttribute('target', '_blank')

     let skillsUl = createHTMLElement('#information', 'ul', 'Skills');
     skillsUl.id = 'listOfMySkills';
     for (let i = 0; i < enContent.listOfSkills.length; i++) {
         createHTMLElement('#listOfMySkills', 'li', enContent.listOfSkills[i]);
     }
     let myLanguages = createHTMLElement('#information', 'ul', 'Languages');
     myLanguages.id = 'listOfMyLanguages';
     for (let i = 0; i < enContent.listOfLanguages.length; i++) {
         createHTMLElement('#listOfMyLanguages', 'li', enContent.listOfLanguages[i]);
     }
}

/**
 * Create element on the work experience page
 */
function enterWorkExperiencePage() {
    document.querySelector('main').innerHTML = '';

    createHTMLElement('main', 'h2', enContent.workExperienceHeadline);

    for (let i = 0; i < enContent.jobContent.length; i++) {
        createHTMLElement('main', 'p', enContent.jobContent[i]);
    }
}

/**
 * create element on the education page
 */
function enterEducationPage() {
    document.querySelector('main').innerHTML = '';

    createHTMLElement('main', 'h2', enContent.educationHeadline);

    for (let i = 0; i < enContent.myEducations.length; i++) {
        createHTMLElement('main', 'p', enContent.myEducations[i]);
    }
}

/**
 * Create element on the portfolio page
 */
function enterPortfolioPage() {
    document.querySelector('main').innerHTML = '';
    createHTMLElement('main', 'h2', enContent.portfolioHeadline);
    createHTMLElement('main', 'p', enContent.portfolio);

    let linkToGitHub = createHTMLElement('main', 'a', enContent.portfolio);
    linkToGitHub.setAttribute('href', 'https://github.com/A-Ozmehak');
    linkToGitHub.setAttribute('target', '_blank')
}
