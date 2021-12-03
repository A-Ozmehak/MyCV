window.addEventListener('load', main);

/**
 * Runs when the page starts.
 * Sets default language on the page
 * Depending on what language is on the LS changes
 */
function main() {
    setDefault()
    if (localStorage.getItem('swe') === 'true') {
        startPageWithInformation(sweContent);
        addEventListeners(sweContent);

    } else if (localStorage.getItem('eng') === 'true') {
        startPageWithInformation(enContent);
        addEventListeners(enContent);
    }
    checkColorTheme();
}

/**
 * All eventListeners
 * @param content what content that is going to run english or swedish
 */
function addEventListeners(content) {
    document.querySelector('.darkButton').addEventListener('click', colorTheme);
    document.querySelector('#work-experience').addEventListener('click', () => enterWorkExperiencePage(content));
    document.querySelector('#education').addEventListener('click', () => enterEducationPage(content));
    document.querySelector('#portfolio').addEventListener('click', () => enterPortfolioPage(content));
    document.querySelector('#uk').addEventListener('click', () => changeBetweenLanguagesOnThePage('eng'));
    document.querySelector('#swe').addEventListener('click', () => changeBetweenLanguagesOnThePage('swe'));
}

/**
 * Sets default value of language and color theme on the page
 */
function setDefault() {
    if (localStorage.getItem('swe') === null || localStorage.getItem('eng') === null) {
        localStorage.setItem('swe', 'true');
    }
    if (localStorage.getItem('lightTheme') === null && localStorage.getItem('darkTheme') === null) {
         localStorage.setItem('lightTheme', 'true');
     }
}

/**
 * Changes the text language dependent on what language is saved in LS
 * @param lang what language that is true
 */
function changeBetweenLanguagesOnThePage(lang) {
    if (lang === 'eng') {
        localStorage.setItem('eng', 'true');
        localStorage.setItem('swe', 'false');

    } else if (lang === 'swe') {
        localStorage.setItem('swe', 'true');
        localStorage.setItem('eng', 'false');
    }
    document.querySelector('#information').innerHTML = '';
    main();
}

/**
 * Sets the color of the page
 */
function checkColorTheme() {
    if (localStorage.getItem('lightTheme') === 'true') {
        let rootOfThePage = document.documentElement;
        rootOfThePage.style.setProperty('--bgColor', 'white');
        rootOfThePage.style.setProperty('--txtColor', 'black');

    }if (localStorage.getItem('darkTheme') === 'true') {
        let rootOfThePage = document.documentElement;
        rootOfThePage.style.setProperty('--bgColor', 'black');
        rootOfThePage.style.setProperty('--txtColor', 'white');
    }
}

/**
 * Changes the color theme between dark or light
 */
function colorTheme() {
    if (localStorage.getItem('lightTheme') === 'true') {
        localStorage.setItem('lightTheme', 'false');
        localStorage.setItem('darkTheme', 'true');
        checkColorTheme();

    } else if (localStorage.getItem('darkTheme') === 'true') {
        localStorage.setItem('darkTheme', 'false');
        localStorage.setItem('lightTheme', 'true');
        checkColorTheme();
    }
}

/**
 * Function that creates an element and puts in on the right page and with a text content
 * @param whatPage What div to place the element
 * @param whatElement What element to create
 * @param whatContent What content the element should contain
 * @returns {HTMLElement}
 */
function createHTMLElement(whatPage, whatElement, whatContent) {
    let element = document.createElement(whatElement);
    element.innerHTML = whatContent;
    document.querySelector(whatPage).append(element);
    return element;
}

/**
 * Create element on the start page
 * @param content what innerText the element should have
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
    let linkToMyLinkedInAccount = createHTMLElement('#information', 'a', content.linkLinkedIn);
    linkToMyLinkedInAccount.setAttribute('href', 'https://www.linkedin.com/in/anna-%C3%B6zmehak-789423226/');
    linkToMyLinkedInAccount.setAttribute('target', '_blank');
    linkToMyLinkedInAccount.classList.add('linkedIn');

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
 * @param content what innerText the element should have
 */
function enterWorkExperiencePage(content) {
    document.querySelector('main').innerHTML = '';

    createHTMLElement('main', 'h3', content.workExperienceHeadline);

    for (let i = 0; i < content.jobContent.length; i++) {
        createHTMLElement('main', 'p', content.jobContent[i]);
    }
}

/**
 * Create element on the education page
 * @param content what innerText the element should have
 */
function enterEducationPage(content) {
    document.querySelector('main').innerHTML = '';

    createHTMLElement('main', 'h3', content.educationHeadline);

    for (let i = 0; i < content.myEducations.length; i++) {
        createHTMLElement('main', 'p', content.myEducations[i]);
    }
}

/**
 * Create element on the portfolio page
 * @param content what innerText the element should have
 */
function enterPortfolioPage(content) {
    document.querySelector('main').innerHTML = '';
    createHTMLElement('main', 'h3', content.portfolioHeadline);

    let linkToGitHub = createHTMLElement('main', 'a', content.portfolio);
    linkToGitHub.setAttribute('href', 'https://github.com/A-Ozmehak');
    linkToGitHub.setAttribute('target', '_blank');
    linkToGitHub.classList.add('gitHub');

    for (let i = 0; i < content.portfolioImages.length; i++) {
        let imgElement = createHTMLElement('main', 'img', content.portfolioImages[i]);
        imgElement.src = content.portfolioImages;
        document.querySelector('main').appendChild(imgElement);
        imgElement.classList.add('portfolioImages');
    }


}

