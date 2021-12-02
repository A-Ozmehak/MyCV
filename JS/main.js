window.addEventListener('load', main);

/**
 * start of the page
 */
function main() {
    setDefault()
    if (localStorage.getItem('swe') === 'true') {
        startPageWithInformation(sweContent)
        addEventListeners(sweContent)
    } else if (localStorage.getItem('eng') === 'true') {
        startPageWithInformation(enContent)
        addEventListeners(enContent)
    }

}

/**
 * All the addEventListeners on the page
 */
function addEventListeners(content) {
    document.querySelector('button').addEventListener('click', colorTheme);
    document.querySelector('#work-experience').addEventListener('click', () => enterWorkExperiencePage(content));
    document.querySelector('#education').addEventListener('click', () => enterEducationPage(content));
    document.querySelector('#portfolio').addEventListener('click', () => enterPortfolioPage(content));
    document.querySelector('#uk').addEventListener('click', () => somethingLocalStorageSomething('eng'))
    document.querySelector('#swe').addEventListener('click', () => somethingLocalStorageSomething('swe'))
}
function setDefault(){
    if (localStorage.getItem('swe') === null || localStorage.getItem('eng') === null){
        localStorage.setItem('swe', 'true')
    }
}
function somethingLocalStorageSomething(lang) {

    if (lang === 'eng') {
        localStorage.setItem('eng', 'true')
        localStorage.setItem('swe', 'false')

    }
    else if (lang === 'swe') {
        localStorage.setItem('swe', 'true')
        localStorage.setItem('eng', 'false')

    }
    document.querySelector('#information').innerHTML = '';
    main()
}


function colorTheme() {
    localStorage.setItem('darkMode', 'true')
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
function startPageWithInformation(content) {

    createHTMLElement('#information', 'h2', content.myName);
    let imageOfMe = createHTMLElement('#information', 'img');
    imageOfMe.src = './img/jag.jpg';
    document.querySelector('#information').appendChild(imageOfMe);
    imageOfMe.classList.add('imageOfMe');

    createHTMLElement('#information', 'h3', content.aboutHeader);

    for (let i = 0; i < content.aboutMe.length; i++) {
        createHTMLElement('#information', 'p', content.aboutMe[i]);
    }
    let linkToMyLinkedAccount = createHTMLElement('#information', 'a', content.linkLinkedIn);
    linkToMyLinkedAccount.setAttribute('href', 'https://www.linkedin.com/in/anna-%C3%B6zmehak-789423226/');
    linkToMyLinkedAccount.setAttribute('target', '_blank')

    let skillsUl = createHTMLElement('#information', 'ul', content.skillHeader);
    skillsUl.id = 'listOfMySkills';
    for (let i = 0; i < content.listOfSkills.length; i++) {
        createHTMLElement('#listOfMySkills', 'li', content.listOfSkills[i]);
    }
    let myLanguages = createHTMLElement('#information', 'ul', content.langHeader);
    myLanguages.id = 'listOfMyLanguages';
    for (let i = 0; i < content.listOfLanguages.length; i++) {
        createHTMLElement('#listOfMyLanguages', 'li', content.listOfLanguages[i]);
    }
}

/**
 * Create element on the work experience page
 */
function enterWorkExperiencePage(content) {
    document.querySelector('main').innerHTML = '';

    createHTMLElement('main', 'h2', content.workExperienceHeadline);

    for (let i = 0; i < content.jobContent.length; i++) {
        createHTMLElement('main', 'p', content.jobContent[i]);
    }
}

/**
 * create element on the education page
 */
function enterEducationPage(content) {
    document.querySelector('main').innerHTML = '';

    createHTMLElement('main', 'h2', content.educationHeadline);

    for (let i = 0; i < content.myEducations.length; i++) {
        createHTMLElement('main', 'p', content.myEducations[i]);
    }
}

/**
 * Create element on the portfolio page
 */
function enterPortfolioPage(content) {
    document.querySelector('main').innerHTML = '';
    createHTMLElement('main', 'h2', content.portfolioHeadline);


    let linkToGitHub = createHTMLElement('main', 'a', content.portfolio);
    linkToGitHub.setAttribute('href', 'https://github.com/A-Ozmehak');
    linkToGitHub.setAttribute('target', '_blank')
}
